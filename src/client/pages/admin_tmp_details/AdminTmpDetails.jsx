import React, { lazy } from 'react'
import "./admin_tmp_details.css"
import { Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { Stack } from '@mui/material'
import { ShoppingBag, Star } from '@mui/icons-material'
import { Helmet } from 'react-helmet'
const Header = lazy(() => import("../../components/common/header/Header"))
const Footer = lazy(() => import("../../components/common/footer/Footer"))
const AdminTmpDetails = () => {
    return (
        <>
            <Header />
            <Helmet>
                <title>LenexIT - Admin Template Details</title>
                <link rel="canonical" href={location.href} />
            </Helmet>
            <div className='admin_tmp_details_page'>
                <Container>
                    <div className="admin_tmp_details_page_wrapper">
                        <div className="admin_tmp_details">
                            <h3>
                                Devias Kit Pro - Client and Admin Dashboard
                            </h3>
                            <div className='adm_tmp_liv_thumb'>
                                <img src='https://mui-store.netlify.app/.netlify/images?w=800&url=https://store-wp.mui.com/wp-content/uploads/2024/02/materio-mui-nextjs-admin-template-mui.png' />
                                <div className='adm_tmp_live_link'>
                                    <Button>Live Preview</Button>
                                </div>
                            </div>
                            <div className="adm_tmp_details_content">
                                <Row>
                                    <Col lg={8} sm={12} md={12}>
                                        <Tabs
                                            defaultActiveKey="description"
                                            id="uncontrolled-tab-example"
                                            className="mb-3"
                                        >
                                            <Tab eventKey="description" title="Description">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, fugit iusto natus eum cupiditate esse ullam incidunt nisi ad distinctio, quasi laudantium veritatis vero tenetur rem. Quis magni doloremque accusamus quasi fuga reprehenderit, dignissimos labore? Quos nostrum voluptates perspiciatis, accusantium vero pariatur totam numquam inventore sequi dolorem asperiores recusandae animi quasi nemo vel expedita cumque rerum. Consequuntur voluptatem cupiditate perferendis pariatur nisi? Magnam saepe iure quam et possimus odio tenetur error quia facilis harum quos necessitatibus placeat praesentium voluptatibus soluta, hic ipsa aspernatur. Numquam, necessitatibus nihil. Nam, ratione? Vero impedit dolorem, vel deserunt id quasi nihil assumenda repudiandae sequi quae ratione in magni eaque accusamus, temporibus ex est molestias nostrum quis hic perferendis totam porro sit. Consequatur aut, explicabo aliquid culpa deserunt quibusdam molestias voluptatem praesentium dolor ducimus reiciendis? Expedita, numquam, perspiciatis tenetur aperiam dicta sit labore sequi totam, quae et maxime. Rerum, enim voluptatem! Ipsum quam quibusdam ad doloribus necessitatibus molestiae amet earum voluptates. Aspernatur rem aliquid minima cumque maiores! Nulla velit voluptatem, assumenda molestias quae molestiae, itaque illo aliquid facilis eos quibusdam. Facere ipsam libero, obcaecati distinctio dolores explicabo, laudantium quod ratione beatae sit veritatis veniam dolor! Quam provident fugiat architecto delectus debitis deleniti, voluptatibus voluptatem nesciunt aliquid?
                                            </Tab>
                                            <Tab eventKey="Reviews" title="Reviews">
                                                Tab content for Reviews
                                            </Tab>
                                            <Tab eventKey="Changelog" title="Changelog">
                                                Tab content for Changelog
                                            </Tab>
                                        </Tabs>
                                    </Col>
                                    <Col lg={4} sm={12} md={12}>
                                        <Stack direction={'row'} spacing={3}>
                                            <Button size='md'>Buy Now</Button>
                                            <Button size='md'>Live Preview</Button>
                                        </Stack>
                                        <Stack direction={'row'} alignItems={"centerq"} mt={3} justifyContent={'space-between'}>
                                            <span style={{ display: "flex" }}>
                                                <ShoppingBag htmlColor="green" fontSize='large' />
                                                <h5 style={{ marginTop: '7px' }}>8,441 Sales</h5>
                                            </span>
                                            <div>
                                                <p style={{ margin: '0' }}>
                                                    <Star htmlColor='orange' />
                                                    <Star htmlColor='orange' />
                                                    <Star htmlColor='orange' />
                                                    <Star htmlColor='orange' />
                                                    <Star htmlColor='orange' />
                                                </p>
                                                <small>4.76/5 (111 reviews)</small>
                                            </div>
                                        </Stack>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default AdminTmpDetails