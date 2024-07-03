import React, { lazy, useState } from 'react'
import "./website_template.css"
import responsive_web_banner from "../../../assets/img/responsive-web-design.webp"
const Header = lazy(() => import("../../components/common/header/Header"))
const Footer = lazy(() => import("../../components/common/footer/Footer"))
import { Accordion, Col, Container, Offcanvas, Row, } from 'react-bootstrap'
import { Sort } from '@mui/icons-material'
import { Button, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, Tab, Tabs } from '@mui/material'
import ProductCard from '../../components/product_card/ProductCard'
import { Helmet } from 'react-helmet'
const WebsiteTemplate = () => {
    const [ShowFilterSidebar, setShowFilterSidebar] = useState(false);
    const [TabsValue, setTabsValue] = useState(1);
    const handleTabChange = (event, newValue) => {
        setTabsValue(newValue);
    };
    const handleCloseFilterSidebar = () => setShowFilterSidebar(false);
    const handleShowFilterSidebar = () => setShowFilterSidebar(true);
    return (
        <>
            <Header />
            <Helmet>
                <title>LenexIT - Website Template</title>
                <link rel="canonical" href={location.href} />
            </Helmet>
            <div className='website_template_page'>
                <Container>
                    <div className="website_template_page_wrapper">
                        {/* ADMIN TEMPLATE BANNER SECTION START */}
                        <section className="website_template_page_banner">
                            <Row lg={2} sm={1} md={1}>
                                <Col sm={1} md={1}>
                                    <div className="website_tmp_banner_left">
                                        <h1>
                                            <span>Fully custom code</span> responsive <span>(SPA)</span> website templates
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
                                    <div className="admin_tmp_banner_right">
                                        <img src={responsive_web_banner} />
                                    </div>
                                </Col>
                            </Row>
                        </section>
                        {/* ADMIN TEMPLATE FILTER SECTION START */}
                        <section className="admin_template_filter">
                            <div><IconButton onClick={handleShowFilterSidebar} color='success'><Sort /></IconButton></div>
                            <Tabs
                                value={TabsValue}
                                onChange={handleTabChange}
                                aria-label="wrapped label tabs example"
                                allowScrollButtonsMobile
                                centered
                            >
                                <Tab value={1} label={
                                    <>
                                        <img width="24" height="24" src="https://img.icons8.com/office/48/react.png" alt="react" />
                                        <span>react</span>
                                    </>
                                } wrapped />
                                <Tab value={2} label={
                                    <>
                                        <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png" alt="external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo" />
                                        vue
                                    </>
                                } wrapped />
                                <Tab value={3} label={
                                    <>
                                        <img width="24" height="24" src="https://img.icons8.com/color/48/angularjs.png" alt="angularjs" />
                                        angular
                                    </>
                                } wrapped />
                                <Tab value={4} label={
                                    <>
                                        <img width="24" height="24" src="https://img.icons8.com/doodle/48/svetle.png" alt="svetle" />
                                        svelte
                                    </>
                                }
                                    wrapped />
                                <Tab value={5} label={
                                    <>
                                        <img width="24" height="24" src="https://img.icons8.com/fluency/48/laravel.png" alt="laravel" />
                                        laravel
                                    </>
                                } wrapped />
                                <Tab value={6} label={
                                    <>
                                        <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo.png" alt="external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo" />
                                        Django
                                    </>
                                } wrapped />
                                <Tab value={8} label={
                                    <>
                                        <img width="24" height="24" src="https://img.icons8.com/fluency/48/ruby-programming-language.png" alt="ruby-programming-language" />
                                        rails
                                    </>
                                } wrapped />
                            </Tabs>
                        </section>
                        {/* ADMIN TEMPLATE PRODUCT SECTION START */}
                        <section className="admin_template_product">
                            <Row lg={4}>
                                {Array.from({ length: 28 }).map((item, index) => (
                                    <Col>
                                        <ProductCard
                                            thumb="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/328203629/original/81168f30a460dcbbfaa6d6a5451fa7e42aca1b2f/do-a-website-for-your-business-with-an-application.png"
                                            subtitle="Real State Website"
                                            title="responsive ecommerce Website (spa)"
                                            price={342}
                                            rating={4.5}
                                            btn_titleOne="Template Details"
                                            btnOneIcon={""}
                                            btn_titleTow="Live Preview"
                                            btnTowIcon={""}
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

export default WebsiteTemplate