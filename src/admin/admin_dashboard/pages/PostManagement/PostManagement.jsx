import React, { useEffect, useState } from 'react'
import "./post_management.css"
import { Alert, Avatar, Button, FormControl, IconButton, Pagination } from '@mui/material'
import { Badge, Container, Form, Table } from 'react-bootstrap'
import ApiClient from '../../../../utils/ApiClient/ApiClient'
import PageTitle from '../../components/PageTitle/PageTitle'
import { Delete, Edit } from '@mui/icons-material'
import { toast } from 'react-toastify'
import ReactQuill from 'react-quill';
const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
      [{ align: [] }], // Include text alignment options
      [{ color: [] }], // Include text color options
      [{ background: [] }], // Include background color options
      ['code-block'], // Include code block option
      [{ script: 'sub' }, { script: 'super' }], // Include subscript and superscript options
      ['formula'], // Include formula option
      ['customButton'], // Custom button added to the toolbar
    ],
  },
};
const PostManagement = () => {
  const [post_title, setPostTitle] = useState()
  const [post_tags, setPostTags] = useState()
  const [post_published, setPostPublished] = useState()
  const [post_author, setPostAuthor] = useState()
  const [post_thumbnail, setPostThumbnail] = useState(null)
  const [post_category, setPostCategory] = useState()
  const [post_description, setPostDescription] = useState()
  const [AllCategory, setAllCategory] = useState([])
  const [error, setError] = useState({})
  const [file_progreess, setFileProgress] = useState(0)
  const [AllPost, setAllPost] = useState([])
  const [isEdit, setIsEdit] = useState(false);
  const [EditId, setEditId] = useState("")
  /******************************
   * INITIALIZE CLIENT API ROOT
  *****************************/
  const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI)
  const upload_file = (e) => {
    const file = e.target.files[0];
    setPostThumbnail(file)
    const reader = new FileReader()
    reader.onload = (event) => {
      const p = event.loaded / event.total * 100
      setFileProgress(p)
    }
  }
  /**********************
 * VALIDATE POST FORM
 ***********************/
  const validate = () => {
    let errors = {}
    if (!post_title) {
      errors.post_title = "title is required"
    }
    if (!post_tags) {
      errors.post_tags = "tags is required"
    }
    if (!post_published) {
      errors.post_published = "publish date is required"
    }
    if (!post_author) {
      errors.post_author = "post author is required"
    }
    if (!post_thumbnail) {
      errors.post_thumbnail = "post thumbnail is required"
    }
    if (!post_category) {
      errors.post_category = "post category is required"
    }
    if (!post_description) {
      errors.post_description = "post description is required"
    }
    setError(errors);
    return Object.keys(errors).length > 0
  }
  const reset_form = () => {
    setPostTitle("")
    setPostTags("")
    setPostPublished("")
    setPostAuthor("")
    setPostThumbnail("")
    setPostCategory("")
    setPostDescription("")
  }
  /****************
   * DELETE POST
   ****************/
  const delete_post = async (id) => {
    if (confirm("are you sure you want to delete this record?")) {
      const response = await ClientApi.delete(`api/posts/${id}`, import.meta.env.VITE_API_ACCESS_KEY)
      if (response.status === 200) {
        fetch_posts()
        toast.success("post delete success")
      }
    }
  }
  /****************
   * INSERT POSTS
   ****************/
  const insert_post = async () => {
    if (!validate()) {
      const formdata = new FormData()
      formdata.append("post_title", post_title)
      formdata.append("post_tags", post_tags)
      formdata.append("post_published", post_published)
      formdata.append("post_author", post_author)
      formdata.append("post_thumbnail", post_thumbnail)
      formdata.append("post_category", post_category)
      formdata.append("post_description", post_description)
      const response = await ClientApi.create(`api/posts`, formdata, import.meta.env.VITE_API_ACCESS_KEY)
      if (response.status === 201) {
        toast.success("post save success")
        reset_form()
        fetch_posts()
      }
    }
  }
  /****************
  * EDIT POSTS
  ****************/
  const edit_post = async (id) => {
    setIsEdit(true);
    setEditId(id);
    const response = await ClientApi.read(`api/posts/${id}`, import.meta.env.VITE_API_ACCESS_KEY);
    if (response.status === 200) {
      const data = response.data;
      setPostTitle(data.post_title)
      setPostTags(data.post_tags)
      setPostPublished(data.post_published)
      setPostAuthor(data.post_author)
      setPostThumbnail(data.post_thumbnail)
      setPostCategory(data.post_category)
      setPostDescription(data.post_description)
    }
  }
  /***************
   * UPDATE POSTS
   ***************/
  const update_post = async () => {
    if (!validate()) {
      const formdata = new FormData()
      formdata.append("post_title", post_title)
      formdata.append("post_tags", post_tags)
      formdata.append("post_published", post_published)
      formdata.append("post_author", post_author)
      formdata.append("post_thumbnail", post_thumbnail)
      formdata.append("post_category", post_category)
      formdata.append("post_description", post_description)
      const response = await ClientApi.update(`api/posts/${EditId}`, formdata, import.meta.env.VITE_API_ACCESS_KEY)
      if (response.status === 200) {
        toast.success("post update success")
        reset_form()
        fetch_posts()
        setIsEdit(false)
      }
    }
  }
  /***************
   * FETCH POSTS
   ***************/
  const fetch_posts = async () => {
    const response = await ClientApi.read(`api/posts`, import.meta.env.VITE_API_ACCESS_KEY)
    if (response.status === 200) {
      setAllPost(response.data)
    }
  }
  useEffect(() => {
    fetch_posts()
  }, [])
  /*********************
   * FETCH CATEGORY
   *********************/
  const fetch_category = async () => {
    const response = await ClientApi.read(`api/category`, import.meta.env.VITE_API_ACCESS_KEY)
    if (response.status === 200) {
      setAllCategory(response.data)
    }
  }
  useEffect(() => {
    fetch_category()
  }, [])
  return (
    <div className='post_management'>
      <Container>
        <div className="post_management_wrapper">
          {/* POST FORM SECTION START HERE */}
          <div className="post_management_form">
            <PageTitle
              text="add new post"
              fontSize={23}
              textTransform="capitalize"
              padding={1}
              color="#444"
              fontWeight="normal"
              fontFamily="fantasy"
            />
            <FormControl fullWidth sx={{ py: 1 }}>
              <Form.Label htmlFor='Title'>Post Title</Form.Label>
              <Form.Control onChange={(e) => setPostTitle(e.target.value)} value={post_title} type='text' name='Title' required />
              {error.post_title && <Alert color='error'>{error.post_title}</Alert>}
            </FormControl>
            <FormControl fullWidth sx={{ py: 1 }}>
              <Form.Label htmlFor='Tags'>Post Tags</Form.Label>
              <Form.Control onChange={(e) => setPostTags(e.target.value)} value={post_tags} type='text' name='Tags' required />
              {error.post_tags && <Alert color='error'>{error.post_tags}</Alert>}
            </FormControl>
            <FormControl fullWidth sx={{ py: 1 }}>
              <Form.Label htmlFor='Author'>Post Published</Form.Label>
              <Form.Control onChange={(e) => setPostPublished(e.target.value)} value={post_published} type='date' name='Published' required />
              {error.post_published && <Alert color='error'>{error.post_published}</Alert>}
            </FormControl>
            <FormControl fullWidth sx={{ py: 1 }}>
              <Form.Label htmlFor='author'>Post Author</Form.Label>
              <Form.Control onChange={(e) => setPostAuthor(e.target.value)} value={post_author} type='text' name='Author' required />
            </FormControl>
            <FormControl fullWidth sx={{ py: 1 }}>
              <Form.Label htmlFor='thumbnail'>Post thumbnail</Form.Label>
              <Form.Control onChange={upload_file} type='file' name='thumbnail' required />
              {/* {post_thumbnail} */}
              {error.post_thumbnail && <Alert color='error'>{error.post_thumbnail}</Alert>}
            </FormControl>
            <FormControl fullWidth sx={{ py: 1 }}>
              <Form.Label htmlFor='Category'>Post Category</Form.Label>
              <Form.Select onChange={(e) => setPostCategory(e.target.value)} value={post_category}>
                <option value="">select Category</option>
                {
                  AllCategory.map(items => (
                    <option key={items.category_id} value={items.category_id}>{items.category_name}</option>
                  ))
                }
              </Form.Select>
              {error.post_category && <Alert color='error'>{error.post_category}</Alert>}
            </FormControl>
            <FormControl fullWidth sx={{ py: 1 }}>
              <Form.Label htmlFor='description'>Post description</Form.Label>
              {/* <div dangerouslySetInnerHTML={{ __html: post_description }} /> */}
              <ReactQuill theme="snow" value={post_description} onChange={(e) => setPostDescription(e)} modules={modules} />
              {error.post_description && <Alert color='error'>{error.post_description}</Alert>}
            </FormControl>
            <FormControl>
              {
                isEdit ? <Button onClick={update_post} type="submit" variant='outlined' color='success' size="small">update</Button> :
                  <Button onClick={insert_post} type="submit" variant='outlined' color='primary' size="small">Save</Button>
              }

            </FormControl>
          </div>
          {/* POST TABLE SECTION START HERE */}
          <div className="post_management_table">
            <PageTitle
              text="post table"
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
                  <th>thumbnail</th>
                  <th>title</th>
                  <th>tags</th>
                  <th>published</th>
                  <th>author</th>
                  <th>category</th>
                  <th>description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  AllPost.map((items, index) => (
                    <tr key={index}>
                      <td align='center' style={{ textTransform: 'uppercase' }}>
                        <Avatar src={`http://localhost:5173/server/public/uploads/blog_img/${items.post_thumbnail}`} />
                      </td>
                      <td align='center'>{items.post_title.slice(0, 5)}</td>
                      <td align='center'>{
                        items.post_tags.split(",").map((i) => (<Badge>{i}</Badge>))
                      }</td>
                      <td align='center'>{items.post_published.split("T")[0]}</td>
                      <td align='center'>{items.post_author}</td>
                      <td align='center'>{
                        AllCategory.filter((ct) => ct.category_id == items.post_category).map((ctn) => ctn.category_name)
                      }</td>
                      {/* <div dangerouslySetInnerHTML={{ __html: post_description }} /> */}
                      <td align='center'>
                        <div dangerouslySetInnerHTML={{ __html: items.post_description.slice(0, 20) }} />
                      </td>
                      <td align='center'>
                        <IconButton color='success' onClick={() => edit_post(items.post_id)}><Edit /></IconButton>
                        <IconButton color="error" onClick={() => delete_post(items.post_id)}><Delete /></IconButton>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            <Pagination count={3} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PostManagement