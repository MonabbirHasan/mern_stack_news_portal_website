import React, { lazy } from 'react'
import "./website_template.css"
import { Container } from 'react-bootstrap'
const Header = lazy(() => import("../../components/common/header/Header"))
const Footer = lazy(() => import("../../components/common/footer/Footer"))
const WebsiteTemplate = () => {
    return (
        <>
            <Header />
            <div className='website_template_page'>
                <Container>
                    <h1 style={{padding:'80px'}}>Comming Soon</h1>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default WebsiteTemplate