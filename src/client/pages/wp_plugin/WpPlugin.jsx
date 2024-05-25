import React, { lazy, useState } from 'react'
import "./wp_plugin.css"
import wp_plugin_banner from "../../../assets/img/wordpress-plugins.png"
const Header = lazy(() => import("../../components/common/header/Header"))
const Footer = lazy(() => import("../../components/common/footer/Footer"))
import { Accordion, Col, Container, Offcanvas, Row, } from 'react-bootstrap'
import { Button, FormControl, FormControlLabel, IconButton, Radio, RadioGroup } from '@mui/material'
import ProductCard from '../../components/product_card/ProductCard'
import { Download, Sort } from "@mui/icons-material"
const WpPlugin = () => {
    const [ShowFilterSidebar, setShowFilterSidebar] = useState(false);
    const handleCloseFilterSidebar = () => setShowFilterSidebar(false);
    const handleShowFilterSidebar = () => setShowFilterSidebar(true);
    return (
        <>
            <Header />
            <div className='wp_plugin_page'>
                <Container>
                    <div className="wp_plugin_page_wrapper">
                        {/* ADMIN TEMPLATE BANNER SECTION START */}
                        <section className="wp_plugin_page_banner">
                            <Row lg={2} sm={1} md={1}>
                                <Col sm={1} md={1}>
                                    <div className="wp_plugin_banner_left">
                                        <h1>
                                            Verity of <span>WordPress</span> Plugin
                                        </h1>
                                        <p>
                                            A collection of React, Vue, Angular, Svelte UI Admin templates,
                                            selected and curated by LenexIt team of maintainers to get your projects up and running today.
                                        </p>
                                        <div className="scroller">
                                            <div className="scroller_wrapper">
                                                <Button variant='contained' size='medium' fullWidth>browse Templates</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={1} md={1}>
                                    <div className="wp_plugin_banner_right">
                                        <img src={wp_plugin_banner} />
                                    </div>
                                </Col>
                            </Row>
                        </section>
                        {/* ADMIN TEMPLATE FILTER SECTION START */}
                        <section className="wp_plugin_page_filter">
                            <div><IconButton onClick={handleShowFilterSidebar} color='success'><Sort /></IconButton></div>
                        </section>
                        {/* ADMIN TEMPLATE PRODUCT SECTION START */}
                        <section className="wp_plugin_page_product">
                            <Row lg={4}>
                                {Array.from({ length: 28 }).map((item, index) => (
                                    <Col>
                                        <ProductCard
                                            thumb="https://codecanyon.img.customer.envatousercontent.com/files/380309684/inline_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=fdc143d90fe580e6dd9fd28b73729977"
                                            subtitle="Form Plugin"
                                            title="Foloating Action Contact Form"
                                            price={342}
                                            rating={4.5}
                                            btn_titleOne="Plugin Details"
                                            btnOneIcon={""}
                                            btn_titleTow="Download"
                                            btnTowIcon={<Download />}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </section>
                    </div>
                </Container>
                {/* TEMPLATE FILTER SIDEBAR START HERE */}
                <Offcanvas style={{ width: "250px" }} show={ShowFilterSidebar} onHide={handleCloseFilterSidebar}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Filter</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Frameworks</Accordion.Header>
                                <Accordion.Body>
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel value="ReactJS" control={<Radio />} label="ReactJS" />
                                            <FormControlLabel value="NextJS" control={<Radio />} label="NextJS" />
                                            <FormControlLabel value="Angular" control={<Radio />} label="Angular" />
                                            <FormControlLabel value="Vue" control={<Radio />} label="Vue" />
                                            <FormControlLabel value="VueX" control={<Radio />} label="VueX" />
                                            <FormControlLabel value="Svelte" control={<Radio />} label="Svelte" />
                                        </RadioGroup>
                                    </FormControl>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>UI Frameworks</Accordion.Header>
                                <Accordion.Body>
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel value="" control={<Radio />} label="Bootstrap CSS" />
                                            <FormControlLabel value="" control={<Radio />} label="MUI UI" />
                                            <FormControlLabel value="" control={<Radio />} label="JOy UI" />
                                            <FormControlLabel value="" control={<Radio />} label="Base UI" />
                                            <FormControlLabel value="" control={<Radio />} label="Quasar UI" />
                                            <FormControlLabel value="" control={<Radio />} label="Tailwind CSS" />
                                        </RadioGroup>
                                    </FormControl>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Use Cases</Accordion.Header>
                                <Accordion.Body>
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel value="" control={<Radio />} label="Dashboard" />
                                            <FormControlLabel value="" control={<Radio />} label="E-commerce" />
                                            <FormControlLabel value="" control={<Radio />} label="landing Page" />
                                            <FormControlLabel value="" control={<Radio />} label="Portfolio" />
                                            <FormControlLabel value="" control={<Radio />} label="Admin" />
                                            <FormControlLabel value="" control={<Radio />} label="Website" />
                                        </RadioGroup>
                                    </FormControl>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <Footer />
        </>
    )
}

export default WpPlugin