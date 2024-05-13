import React, { useEffect, useState } from 'react'
import { Alert, Avatar, Button, FormControl, IconButton, Pagination } from '@mui/material'
import ApiClient from "../../../../utils/ApiClient/ApiClient"
import PageTitle from '../../components/PageTitle/PageTitle'
import { Container, Form, Table } from 'react-bootstrap'
import { Delete, Edit } from '@mui/icons-material'
import { toast } from 'react-toastify'
import "./user_management.css"
const UserManagement = () => {
  const [UserName, setUserName] = useState("")
  const [UserEmail, setUserEmail] = useState("")
  const [UserPassword, setUserPassword] = useState("")
  const [UserType, setUserType] = useState(0)
  const [AllUsers, setAllUsers] = useState([])

  const [EditId, setEditId] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState({})
  /******************************
   * INITIALIZE CLIENT API ROOT
   *****************************/
  const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI)
  /******************
  * FORM VALIDATION
  *******************/
  const validate = () => {
    let errors = {}
    if (!UserName) {
      errors.UserName = "name is required!"
    }
    if (!UserEmail) {
      errors.UserEmail = "email is required"
    }
    if (!UserPassword) {
      errors.UserPassword = "password is required"
    }
    setError(errors)
    return Object.keys(errors).length > 0;
  }
  const reset_form = () => {
    setUserName("")
    setUserEmail("")
    setUserPassword("")
  }
  /******************************
  * INSERT USER INFO
  ******************************/
  const insert_user = async (e) => {
    e.preventDefault();
    if (!validate()) {
      const data = {
        user_name: UserName,
        user_email: UserEmail,
        user_password: UserPassword,
        user_type: UserType
      }
      try {
        const response = await ClientApi.create(`api/users`, data, import.meta.env.VITE_API_ACCESS_KEY);
        if (response.status === 201) {
          reset_form()
          toast.success("user save success")
          fetch_all();
        }
      } catch (error) {
        if (error.response.status === 409) {
          toast.error("user already exist!")
        }
      }
    }
  }
  /*****************
  * EDIT ALL USERS
  ******************/
  const edit_user = async (id) => {
    setEditId(id)
    setIsEdit(true)
    const response = await ClientApi.read(`api/users/${id}`, import.meta.env.VITE_API_ACCESS_KEY)
    if (response.status === 200) {
      setUserName(response.data.user_name)
      setUserEmail(response.data.user_email)
      setUserPassword(response.data.user_password)
      setUserType(response.data.user_type)
    }
  }
  /*****************
  * UPDATE ALL USERS
  ******************/
  const update_user = async (e) => {
    e.preventDefault();
    if (!validate()) {
      const data = {
        user_name: UserName,
        user_email: UserEmail,
        user_password: UserPassword,
        user_type: UserType
      }
      try {
        const response = await ClientApi.update(`api/users/${EditId}`, data, import.meta.env.VITE_API_ACCESS_KEY);
        if (response.status === 200) {
          toast.success("user update success")
          setIsEdit(false)
          reset_form()
          fetch_all();
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  /*****************
  * DELETE ALL USERS
  ******************/
  const delete_all = async (id) => {
    if (confirm("are you sure you want to delete this record?")) {
      const response = await ClientApi.delete(`api/users/${id}`, import.meta.env.VITE_API_ACCESS_KEY);
      if (response.status === 200) {
        fetch_all()
        toast.success("user record delete success!")
      }
    }
  }
  /*****************
  * FETCH ALL USERS
  ******************/
  const fetch_all = async () => {
    setLoader(true)
    const response = await ClientApi.read(`api/users`, import.meta.env.VITE_API_ACCESS_KEY);
    if (response.status === 200) {
      console.log(response)
      setAllUsers(response.data)
      setLoader(false)
    }
  }
  useEffect(() => {
    fetch_all()
  }, [])
  return (
    <div className='user_management'>
      <Container>
        <div className="user_management_wrapper">
          {/* USERS FORM SECTION START HERE */}
          <div className="user_management_form">
            <PageTitle
              text="add new user"
              fontSize={23}
              textTransform="capitalize"
              padding={1}
              color="#444"
              fontWeight="normal"
              fontFamily="fantasy"
            />
            <FormControl fullWidth sx={{ py: 1 }}>
              <Form.Label htmlFor='name'>User Name</Form.Label>
              <Form.Control onChange={(e) => setUserName(e.target.value)} value={UserName} type='text' name='name' required />
              {error.UserName && <Alert variant='standard' color='error'>{error.UserName}</Alert>}
            </FormControl>
            <FormControl fullWidth sx={{ py: 1 }}>
              <Form.Label htmlFor='email'>User Email</Form.Label>
              <Form.Control onChange={(e) => setUserEmail(e.target.value)} value={UserEmail} type='email' name='email' required />
              {error.UserEmail && <Alert variant='standard' color='error'>{error.UserEmail}</Alert>}
            </FormControl>
            <FormControl fullWidth sx={{ py: 1 }}>
              <Form.Label htmlFor='password'>User password</Form.Label>
              <Form.Control onChange={(e) => setUserPassword(e.target.value)} value={UserPassword} type='password' name='password' required />
              {error.UserPassword && <Alert variant='standard' color='error'>{error.UserPassword}</Alert>}
            </FormControl>
            <FormControl fullWidth sx={{ py: 1 }}>
              <Form.Label htmlFor='password'>User password</Form.Label>
              <Form.Select onChange={(e) => setUserType(e.target.value)} value={UserType}>
                <option value="">select permission</option>
                <option value={1}>Admin</option>
                <option value={0}>Normal</option>
              </Form.Select>
            </FormControl>
            <FormControl>
              {
                isEdit ? (<Button type="submit" onClick={update_user} color='success' variant='outlined' size="small">update</Button>)
                  : (<Button type="submit" onClick={insert_user} variant='outlined' size="small">Save</Button>)
              }
            </FormControl>
          </div>
          {/* USERS TABLE SECTION START HERE */}
          <div className="user_management_table">
            <PageTitle
              text="user table"
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
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>User Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  AllUsers.map((items, index) => (
                    <tr key={index}>
                      <td align='center' style={{ textTransform: 'uppercase' }}>
                        <Avatar sx={{ background: 'green' }}>{items.user_name[0]}</Avatar>
                      </td>
                      <td align='center'>{items.user_name}</td>
                      <td align='center'>{items.user_email}</td>
                      <td align='center'>{items.user_type == 1 ? "Admin" : "Normal"}</td>
                      <td align='center'>
                        <IconButton color='success' onClick={() => edit_user(items.user_id)}><Edit /></IconButton>
                        <IconButton color="error" onClick={() => delete_all(items.user_id)}><Delete /></IconButton>
                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </Table>
            <Pagination count={AllUsers.length} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default UserManagement