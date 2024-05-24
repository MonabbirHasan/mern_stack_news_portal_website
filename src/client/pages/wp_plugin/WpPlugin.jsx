import React, { lazy } from 'react'
import "./wp_plugin.css"
import { Container } from 'react-bootstrap'
const Header = lazy(() => import("../../components/common/header/Header"))
const Footer = lazy(() => import("../../components/common/footer/Footer"))
const WpPlugin = () => {
    return (
        <>
            <Header />
            <div className='wp_plugin_page'>
                <Container>
                    <h1 style={{ padding: '80px' }}>Comming Soon</h1>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default WpPlugin