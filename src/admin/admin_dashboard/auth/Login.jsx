import React, { useEffect, useState } from 'react'
import { Container, Form, InputGroup } from 'react-bootstrap'
import "./login.css"
import { Alert, Avatar, Button, FormControl, IconButton, Typography } from '@mui/material'
import ApiClient from '../../../utils/ApiClient/ApiClient'
import Logo from "../../../assets/img/favicon1.png"
import { Hourglass } from 'react-loader-spinner'
import { Visibility } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-toastify'
const Login = () => {
    const navigate = useNavigate()
    const { isAuthenticated } = useAuth()
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [passwordType, setPasswordType] = useState("password")
    const [error, setError] = useState({})
    const [loader, setLoader] = useState(false)

    const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI)
    const validate = () => {
        let errors = {}
        if (!Email) {
            errors.Email = "Enter Your Email"
        }
        if (!Password) {
            errors.Password = "Enter Your Password"
        }
        setError(errors);
        return Object.keys(errors).length > 0
    }
    useEffect(() => {
        if (localStorage.getItem('npl')) {
            return navigate("/admin/dashboard")
        }
    }, [isAuthenticated])
    //login
    const LoginHandler = async (e) => {
        e.preventDefault()
        try {
            setLoader(true)
            if (!validate()) {
                const data = {
                    user_email: Email,
                    user_password: Password
                }
                try {
                    const response = await ClientApi.create(`api/users/login`, data, import.meta.env.VITE_API_ACCESS_KEY)
                    if (response.status === 200) {
                        const decoded = jwtDecode(response.data.token);
                        localStorage.setItem("npl", JSON.stringify(decoded))
                        toast.success("Your Are Logged In")
                        if (decoded) {
                            setTimeout(() => {
                                navigate("/admin/dashboard")
                                setLoader(false)
                            }, 2000);
                        }
                        setPassword("")
                        setEmail("")
                    }
                } catch (error) {
                    setLoader(false)
                    if (error.response.status === 409) {
                        toast.error("UnAutorized || Email Or Password")
                    }
                }

            } else {
                toast.error("Form Not Valid")
                setLoader(false)
            }
        } catch (error) {
            setLoader(false)
        }
    }
    if (loader) {
        return <Hourglass />
    }
    return (
        <div className='login_page'>
            <Container>
                <div className="login_form_wrapper">
                    <div className="login_form">
                        <div style={{ textAlign: "center" }}>
                            <Avatar src={Logo} sx={{ margin: 'auto' }} />
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111', verticalAlign: 'middle' }}>Login</p>
                        </div>
                        <FormControl fullWidth sx={{ py: 1 }}>
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control onChange={(e) => setEmail(e.target.value)} value={Email} type='email' required />
                            {error.Email && <Alert color='error'>{error.Email}</Alert>}
                        </FormControl>
                        <FormControl fullWidth sx={{ py: 1 }}>
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <Form.Control onChange={(e) => setPassword(e.target.value)} value={Password} type={passwordType} required />
                                <InputGroup.Text>
                                    <IconButton onClick={() => {
                                        passwordType === "password" ? setPasswordType('text') : setPasswordType('password')
                                    }} size='small'><Visibility fontSize='small' /></IconButton>
                                </InputGroup.Text>
                            </InputGroup>
                            {error.Password && <Alert color='error'>{error.Password}</Alert>}
                        </FormControl>
                        <Button disabled={loader} type='submit' onClick={LoginHandler} sx={{ mt: 1 }} variant='contained' size='small'>Login</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Login