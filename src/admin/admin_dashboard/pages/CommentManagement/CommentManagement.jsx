import React, { useEffect, useState } from 'react'
import "./comment_management.css"
import { Container, Table } from 'react-bootstrap'
import ApiClient from '../../../../utils/ApiClient/ApiClient'
import { IconButton } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import { toast } from 'react-toastify'
const CommentManagement = () => {
  const [Allcomment, setAllcomment] = useState([])
  // INITIALIZE CLIENT API ROOT
  const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI)
  const fetch_comment = async () => {
    const response = await ClientApi.read(`api/comments`, import.meta.env.VITE_API_ACCESS_KEY)
    if (response.status === 200) {
      setAllcomment(response.data)
    }
  }
  useEffect(() => {
    fetch_comment()
  }, [])
  const delete_comment = async (id) => {
    if (confirm("are you sure you want to delete this record?")) {
      const response = await ClientApi.delete(`api/comments/${id}`, import.meta.env.VITE_API_ACCESS_KEY)
      if (response.status === 200) {
        toast.success("comment delete success")
        fetch_comment()
      }
    }
  }
  return (
    <div className='comment_management'>
      <Container>
        <div className="comment_management_table">
          <h3>comment list</h3>
          <Table>
            <thead>
              <tr>
                <th>comment</th>
                <th>comment reply</th>
                <th>comment post</th>
                <th>comment author</th>
                <th>status</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {
                Allcomment.map((items) => (
                  <tr>
                    <td>{items.comment_content}</td>
                    <td>{items.comment_reply}</td>
                    <td>{items.comment_post}</td>
                    <td>{items.comment_author}</td>
                    <td>{items.is_active}</td>
                    <td>
                      <IconButton onClick={() => delete_comment(items.comment_id)} color='error'><Delete /></IconButton>
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  )
}

export default CommentManagement