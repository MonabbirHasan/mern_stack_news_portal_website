import React, { lazy, useState } from 'react'
import "./contact.css"
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Alert, Button, FormControl, Stack } from '@mui/material'
import { Apartment, Call, Send } from '@mui/icons-material'
import { toast } from 'react-toastify'
import ApiClient from '../../../utils/ApiClient/ApiClient'
import { Helmet } from 'react-helmet'
const Header = lazy(() => import("../../components/common/header/Header"))
const Footer = lazy(() => import("../../components/common/footer/Footer"))
const Contact = () => {
  const [UserName, setUserName] = useState("")
  const [UserEmail, setUserEmail] = useState("")
  const [UserSubject, setUserSubject] = useState("")
  const [UserMessage, setUserMessage] = useState("")
  const [error, setError] = useState({})
  /*****************************
   * INITIALIZE CLIENT API ROOT
   ****************************/
  const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI);
  /**********************
   * VALIDATE FIELD
   **********************/
  const validate = () => {
    let errors = {}
    if (!UserName) {
      errors.UserName = "Name Is required"
    }
    if (!UserEmail) {
      errors.UserEmail = "Mail Is required"
    }
    if (!UserSubject) {
      errors.UserSubject = "Subject Is required"
    }
    if (!UserMessage) {
      errors.UserMessage = "Message Is required"
    }
    setError(errors);
    return Object.keys(errors).length > 0
  }
  /**********************
   * SUBMIT CONTACT FORM
   **********************/
  const submit_contact = async (e) => {
    e.preventDefault()
    if (!validate()) {
      const data = {
        contact_name: UserName,
        contact_email: UserEmail,
        contact_subject: UserSubject,
        contact_message: UserMessage,
      }
      const response = await ClientApi.create(`api/contact`, data, import.meta.env.VITE_API_ACCESS_KEY)
      if (response.status === 201) {
        toast.success('We Got Your Query We Will Connect With You Soon via Mail')
        setUserName("")
        setUserEmail("")
        setUserSubject("")
        setUserMessage("")
      }
    } else {
      toast.error("form not validat")
    }
  }
  return (
    <>
      <Header />
      <Helmet>
        <title>LenexIT - Contact</title>
        <link rel="canonical" href={location.href} />
      </Helmet>
      <div className='contact_page'>
        <Container>
          <div className="contact_page_wrapper">
            <div className="contact_container">
              <Row>
                <Col lg={8}>
                  <div className="contact_left">
                    <h3>Contact Us</h3>
                    <FormControl fullWidth sx={{ py: 1 }}>
                      <Form.Label htmlFor='name'>Your Name*</Form.Label>
                      <Form.Control
                        onChange={(e) => setUserName(e.target.value)}
                        value={UserName}
                        type='name'
                        id="name"
                        name="name"
                        placeholder='Enter Your Name!'
                        required
                      />
                      {error.UserName && <Alert color='error'>{error.UserName}</Alert>}
                    </FormControl>
                    <FormControl fullWidth sx={{ py: 1 }}>
                      <Form.Label htmlFor='email'>Your Email*</Form.Label>
                      <Form.Control
                        onChange={(e) => setUserEmail(e.target.value)}
                        value={UserEmail}
                        type='email'
                        id='email'
                        name="email"
                        placeholder='Enter Your Email!'
                        required
                      />
                      {error.UserEmail && <Alert color='error'>{error.UserEmail}</Alert>}
                    </FormControl>
                    <FormControl fullWidth sx={{ py: 1 }}>
                      <Form.Label htmlFor='subject'>subject*</Form.Label>
                      <Form.Control
                        onChange={(e) => setUserSubject(e.target.value)}
                        value={UserSubject}
                        type='subject'
                        name="subject"
                        id="subject"
                        placeholder='Enter Your Subject!'
                        required
                      />
                      {error.UserSubject && <Alert color='error'>{error.UserSubject}</Alert>}
                    </FormControl>
                    <FormControl fullWidth sx={{ py: 1 }}>
                      <Form.Label htmlFor='email'>Your Message*</Form.Label>
                      <Form.Control
                        onChange={(e) => setUserMessage(e.target.value)}
                        value={UserMessage}
                        as="textarea"
                        rows={4}
                        placeholder='Enter Your Message!'
                      />
                      {error.UserMessage && <Alert color='error'>{error.UserMessage}</Alert>}
                    </FormControl>
                    <FormControl>
                      <Button
                        onClick={submit_contact}
                        type="submit"
                        endIcon={<Send />}
                        variant='contained'
                        size='small'
                        color='success'
                      >submit</Button>
                    </FormControl>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="contact_right">
                    <div className="contact_item">
                      <Stack direction={'row'} spacing={2}>
                        <span><Apartment fontSize='large' htmlColor='dodgerblue' /></span>
                        <span>
                          <p>Shaheb Bazar/Rajshahi</p>
                          <small>Boalia, GPO-6000</small>
                        </span>
                      </Stack>
                    </div>
                    <div className="contact_item">
                      <Stack direction={'row'} spacing={2}>
                        <span><Call fontSize='large' htmlColor='dodgerblue' /></span>
                        <span>
                          <p>(+880) 1743714489</p>
                          <small>Mon to Fri 9am to 9 pm</small>
                        </span>
                      </Stack>
                    </div>
                    <div className="contact_item">
                      <Stack direction={'row'} spacing={2}>
                        <span><Apartment fontSize='large' htmlColor='dodgerblue' /></span>
                        <span>
                          <p>contact@lenexit.com</p>
                          <small>Send us your query</small>
                        </span>
                      </Stack>
                    </div>
                    <div className="contact_item map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7268.962995758459!2d88.59440444027543!3d24.364547936376123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef959df5df87%3A0xfc4cc04b1eff3bab!2sSaheb%20Bazar%20Zero%20Point!5e0!3m2!1sen!2sbd!4v1716466792152!5m2!1sen!2sbd" width="100%" height="300px" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Contact



