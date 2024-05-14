import React, { useEffect, useState } from 'react'
import "./contact_management.css"
import { Container, Table } from 'react-bootstrap'
import ApiClient from "../../../../utils/ApiClient/ApiClient"
import { IconButton, Stack } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import { toast } from 'react-toastify'
const ContactManagement = () => {
    const [AllContact, setAllContact] = useState([])
    // INITIALIZE CLIENT API ROOT
    const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI)
    const fetch_contact = async () => {
        const response = await ClientApi.read(`api/contact`, import.meta.env.VITE_API_ACCESS_KEY)
        if (response.status === 200) {
            setAllContact(response.data)
        }
    }
    useEffect(() => {
        fetch_contact()
    }, [])
    //DELETE CONTACT LIST
    const delete_contact = async (id) => {
        if (confirm("are you sure you want to delete this record?")) {
            const response = await ClientApi.delete(`api/contact/${id}`, import.meta.env.VITE_API_ACCESS_KEY)
            if (response.status === 200) {
                toast.success("record delete success")
                fetch_contact()
            }
        }
    }
    return (
        <div className='contact_management'>
            <Container>
                <div className="contact_list">
                    <h3>Contact List</h3>
                    <Table hover striped>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllContact.map((items, index) => (
                                    <tr key={index}>
                                        <td>{items.contact_name}</td>
                                        <td>{items.contact_email}</td>
                                        <td>{items.contact_subject}</td>
                                        <td>{items.contact_message}</td>
                                        <td>
                                            <IconButton onClick={() => delete_contact(items.contact_id)} color='error'><Delete /></IconButton>
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

export default ContactManagement