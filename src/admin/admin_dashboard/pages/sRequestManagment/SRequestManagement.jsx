import React, { useEffect, useState } from 'react'
import "./s_request_managment.css"
import { Container, Table } from 'react-bootstrap'
import ApiClient from '../../../../utils/ApiClient/ApiClient'
import { toast } from 'react-toastify'
import { IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'
const SRequestManagement = () => {
    const [AllRequest, setAllRequest] = useState([])
    // INITIALIZE CLIENT API ROOT
    const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI)
    //FETCH SERVICE REQUEST
    const fetch_service_request = async () => {
        const response = await ClientApi.read(`api/service_request`, import.meta.env.VITE_API_ACCESS_KEY)
        if (response.status === 200) {
            setAllRequest(response.data)
        }
    }
    useEffect(() => {
        fetch_service_request()
    }, [])
    //DELETE CONTACT LIST
    const delete_service_request = async (id) => {
        if (confirm("are you sure you want to delete this record?")) {
            const response = await ClientApi.delete(`api/service_request/${id}`, import.meta.env.VITE_API_ACCESS_KEY)
            if (response.status === 200) {
                toast.success("record delete success")
                fetch_service_request()
            }
        }
    }
    return (
        <div className='s_request_managment'>
            <Container>
                <div className="service_request_table">
                    <h3>Service Request List</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Service Name</th>
                                <th>User Query</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllRequest.map((items) => (
                                    <tr>
                                        <td>{items.s_user_name}</td>
                                        <td>{items.s_user_email}</td>
                                        <td>{items.s_user_phone}</td>
                                        <td>{items.s_service_name}</td>
                                        <td>{items.s_user_message}</td>
                                        <td>
                                            <IconButton onClick={() => delete_service_request(items.s_request_id)}>
                                                <Delete />
                                            </IconButton>
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

export default SRequestManagement