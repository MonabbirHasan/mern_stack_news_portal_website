import React from 'react'
import "./footer.css"
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Button, IconButton } from '@mui/material'
import { Facebook, Instagram, LinkedIn, Mail, Twitter } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  const opne_social_window = (url) => {
    window.open(url)
  }
  const opne_mail_window = (mail) => { }
  return (
    <div className='front_footer'>
      <footer>
        <Container fluid>
          <Row lg={4}>
            <Col>
              <div className="footer_logo">
                <h3>blogs</h3>
                <p>
                  We offer innovative services like web and mobile app development, SEO, UI/UX design, and penetration testing. Our exceptional support ensures ongoing assistance and guidance, building lasting client relationships for continued success.
                </p>
              </div>
              <div className="footer_social">
                <span><IconButton onClick={() => opne_social_window(`https://www.facebook.com/itlenex`)}><Facebook htmlColor='white' /></IconButton></span>
                <span><IconButton onClick={() => opne_social_window(`https://twitter.com/itLenex`)}><Twitter htmlColor='white' /></IconButton></span>
                <span><IconButton onClick={() => opne_mail_window(`itlenex@gmail.com`)}>
                  <a href='mailto:itlenex@gmail.com' style={{ marginBottom: '6px', display: "inline-block" }}>
                    <Mail htmlColor='white' />
                  </a>
                </IconButton></span>
                <span><IconButton onClick={() => opne_social_window(`https://www.instagram.com/lenex.it`)}><Instagram htmlColor='white' /></IconButton></span>
                <span><IconButton onClick={() => opne_social_window(`https://www.linkedin.com/company/lenexit`)}><LinkedIn htmlColor='white' /></IconButton></span>
              </div>
            </Col>
            <Col>
              <div className="footer_nav">
                <h3>Quick Menu</h3>
                <ul>
                  <li>
                    <NavLink to="/service">Service</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin_template">Tools</NavLink>
                  </li>
                  <li>
                    <NavLink to="/wp_theme">Theme</NavLink>
                  </li>
                  <li>
                    <NavLink to="/wp_plugin">Plugin</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="footer_tags">
                <h3>Services</h3>
                <p>Website</p>
                <p>Mobile App</p>
                <p>Desktop App</p>
                <p>Automation</p>
                <p>Marketing</p>
                <p>SEO</p>
                <p>Wordpress</p>
                <p>template</p>
                <p>AI</p>
                <p>Theme</p>
                <p>plugin</p>
                <p>Support</p>
              </div>
            </Col>
            <Col>
              <div className="footer_news_letter">
                <h3>newsletter</h3>
                <p>subscribe to join our newsletter teams</p>
                <Form.Control placeholder='Enter Your Email!' />
                <Button variant='outlined' color='error' sx={{ mt: 1 }}>subscribe</Button>
              </div>
            </Col>
          </Row>
          <div className="footer_iland">
            <Row>
              <Col lg={6}>
                <p style={{ textTransform: "capitalize", color: 'white', fontSize: "14px", marginTop: "20px" }}>
                  @copyright 2023-2024 <a style={{ color: "#898888", }} href='https://lenexit.com'>Lenexit</a> all rights reserved
                </p>
              </Col>
              <Col lg={6}>
                <div className="footer_iland_nav">
                  <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink>Advertise</NavLink></li>
                    <li><NavLink to="/help_support">Help & Support</NavLink></li>
                    <li><NavLink to="/faq">Faq</NavLink></li>
                    <li><NavLink to="/privacy_policy">Privacy & Terms</NavLink></li>
                    <li><NavLink to='/cookie_policy'>Cookie Privacy</NavLink></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </div>
  )
}

export default Footer