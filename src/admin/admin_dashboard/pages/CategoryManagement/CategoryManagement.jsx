import React, { useEffect, useState } from 'react'
import "./category_management.css"
import { Alert, Button, FormControl, IconButton, Pagination } from '@mui/material'
import ApiClient from "../../../../utils/ApiClient/ApiClient"
import PageTitle from '../../components/PageTitle/PageTitle'
import { Container, Form, Table } from 'react-bootstrap'
import { Delete, Edit } from '@mui/icons-material'
import { toast } from 'react-toastify'
const CategoryManagement = () => {
  const [AllCategory, setAllCategory] = useState([])
  const [CategoryName, setCategoryName] = useState("")
  const [subCategory, setSubCategory] = useState('')
  const [status, setStatus] = useState(1)
  const [error, setError] = useState({})
  const [isEdit, setIsEdit] = useState(false);
  const [EditId, setEditId] = useState("")
  /*******************************
   * INITALIZE CLIENT API ROOT
   *******************************/
  const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI);
  /*********************
   * VALIDATE FORM
   *********************/
  const validate = () => {
    let errors = {}
    if (!CategoryName) {
      errors.CategoryName = "category name is required"
    }
    if (!subCategory) {
      errors.subCategory = "sub category is required"
    }
    setError(errors)
    return Object.keys(errors).length > 0
  }
  /*********************
   * RESET FORM VALUE
   *********************/
  const reset_form = () => {
    setCategoryName('')
    setSubCategory("")
    setStatus('')
  }
  /*********************
   * FETCH CATEGORY
   *********************/
  const fetch_category = async () => {
    const response = await ClientApi.read(`api/category`, import.meta.env.VITE_API_ACCESS_KEY)
    if (response.status === 200) {
      setAllCategory(response.data)
      console.log(response.data)
    }
  }
  useEffect(() => {
    fetch_category()
  }, [])
  /*********************
   * DELETE CATEGORY
   *********************/
  const delete_category = async (id) => {
    if (confirm("are you sure you want to delete this record?")) {
      const response = await ClientApi.delete(`api/category/${id}`, import.meta.env.VITE_API_ACCESS_KEY)
      if (response.status === 200) {
        toast.success("category delete success")
        fetch_category()
      }
    }
  }
  /*********************
   * INSERT CATEGORY
   *********************/
  const insert_category = async () => {
    if (!validate()) {
      const data = {
        category_name: CategoryName,
        category_sub: subCategory
      }
      const response = await ClientApi.create(`api/category`, data, import.meta.env.VITE_API_ACCESS_KEY);
      if (response.status === 201) {
        toast.success("category save success")
        reset_form()
        fetch_category()
      }
    }
  }
  /*********************
   * EDIT CATEGORY
   *********************/
  const edit_category = async (id) => {
    setEditId(id);
    setIsEdit(true)
    const response = await ClientApi.read(`api/category/${id}`, import.meta.env.VITE_API_ACCESS_KEY)
    if (response.status === 200) {
      setCategoryName(response.data.category_name)
      setSubCategory(response.data.category_sub);
      setStatus(response.data.in_active)
    }
  }
  /*********************
   * UPDATE CATEGORY
   *********************/
  const update_category = async () => {
    if (!validate()) {
      const data = {
        category_name: CategoryName,
        category_sub: subCategory,
      }
      const response = await ClientApi.update(`api/category/${EditId}`, data, import.meta.env.VITE_API_ACCESS_KEY);
      if (response.status === 200) {
        toast.success("category update success")
        reset_form()
        setIsEdit(false)
        fetch_category()
      }
    }
  }
  return (
    <div className='category_management'>
      <Container>
        <div className="category_management_wrapper">
          {/* CATEGORY FORM SECTION START HERE */}
          <div className="category_management_form">
            <PageTitle
              text="add new category"
              fontSize={23}
              textTransform="capitalize"
              padding={1}
              color="#444"
              fontWeight="normal"
              fontFamily="fantasy"
            />
            <FormControl fullWidth sx={{ py: 1 }}>
              <Form.Label htmlFor='category'>Category Name</Form.Label>
              <Form.Control onChange={(e) => setCategoryName(e.target.value)} value={CategoryName} type='text' name='category' required />
              {error.CategoryName && <Alert color='error'>{error.CategoryName}</Alert>}
            </FormControl>
            <FormControl fullWidth sx={{ py: 1 }}>
              <Form.Label htmlFor='sub'>Sub Category</Form.Label>
              <Form.Select onChange={(e) => setSubCategory(e.target.value)} value={subCategory}>
                <option value="">select category</option>
                <option value={0}>parent category</option>
                {
                  AllCategory.filter((i) => i.category_sub === 0).map(items => (
                    <option key={items.category_id} value={items.category_id}>{items.category_name}</option>
                  ))
                }
              </Form.Select>
              {error.subCategory && <Alert color='error'>{error.subCategory}</Alert>}
            </FormControl>
            <FormControl fullWidth sx={{ py: 1 }}>
              <Form.Label htmlFor='Status'>Status</Form.Label>
              <Form.Select onChange={(e) => setStatus(e.target.value)} value={status}>
                <option value="">status</option>
                <option value={1}>Active</option>
                <option value={0}>InActive</option>
              </Form.Select>
            </FormControl>
            <FormControl>
              {isEdit ?
                <Button onClick={update_category} type="submit" color="success" variant='outlined' size="small">update</Button>
                :
                <Button onClick={insert_category} type="submit" variant='outlined' size="small">Save</Button>
              }

            </FormControl>
          </div>
          {/* CATEGORY TABLE SECTION START HERE */}
          <div className="category_management_table">
            <PageTitle
              text="Category table"
              fontSize={23}
              textTransform="capitalize"
              padding={1}
              color="#444"
              fontWeight="normal"
              fontFamily="fantasy"
            />
            <Table>
              <thead>
                <tr align='center'>
                  <th>Category Name</th>
                  <th>Sub Category</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  AllCategory.map((item) => {
                    const parentCategory = AllCategory.find(category => category.category_id === item.category_sub);
                    const parentCategoryName = parentCategory ? parentCategory.category_name : '';
                    return (
                      <tr key={item.category_id}>
                        <td align='center'>{item.category_name}</td>
                        <td align='center'>{parentCategoryName}</td>
                        <td align='center'>{item.is_active}</td>
                        <td align='center'>
                          <IconButton color='success' onClick={(e) => edit_category(item.category_id)}><Edit /></IconButton>
                          <IconButton color="error" onClick={() => delete_category(item.category_id)}><Delete /></IconButton>
                        </td>
                      </tr>
                    );
                  })
                }

              </tbody>
            </Table>
            <Pagination count={7} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryManagement