import React, { lazy } from 'react'
import { Container } from 'react-bootstrap'
const Header = lazy(() => import("../../components/common/header/Header"))
const Footer = lazy(() => import("../../components/common/footer/Footer"))
import "./wp_theme.css"
const WpTheme = () => {
    return (
        <>
            <Header />
            <div className='wp_theme_pages'>
                <Container>
                    <h1 style={{ padding: '80px' }}>Comming Soon</h1>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default WpTheme