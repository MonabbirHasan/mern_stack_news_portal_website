import React from 'react'
import "./footer.css"
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Button, Chip, IconButton } from '@mui/material'
import { Facebook, Google, Instagram, Twitter } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='front_footer'>
      <footer>
        <Container fluid>
          <Row lg={4}>
            <Col>
              <div className="footer_logo">
                <h3>blogs</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis natus vero laudantium ut esse reiciendis, voluptas eius, facere dignissimos excepturi cumque ratione, reprehenderit explicabo dolore adipisci tenetur fugit maxime.
                </p>
              </div>
              <div className="footer_social">
                <span><IconButton><Facebook htmlColor='white' /></IconButton></span>
                <span><IconButton><Twitter htmlColor='white' /></IconButton></span>
                <span><IconButton><Google htmlColor='white' /></IconButton></span>
                <span><IconButton><Instagram htmlColor='white' /></IconButton></span>
              </div>
            </Col>
            <Col>
              <div className="footer_nav">
                <h3>Quick Menu</h3>
                <ul>
                  <li>
                    <NavLink>Service</NavLink>
                  </li>
                  <li>
                    <NavLink>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink>Tools</NavLink>
                  </li>
                  <li>
                    <NavLink>Theme</NavLink>
                  </li>
                  <li>
                    <NavLink>Plugin</NavLink>
                  </li>
                  <li>
                    <NavLink>Contact Us</NavLink>
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
                <p>AI</p>
                <p>Support</p>
              </div>
            </Col>
            <Col>
              <div className="footer_news_letter">
                <h3>newletter</h3>
                <p>subscribe to join our newsletter teams</p>
                <Form.Control placeholder='Enter Your Email!' />
                <Button variant='outlined' color='error' sx={{ mt: 1 }}>subscribe</Button>
              </div>
            </Col>
          </Row>
          <div className="footer_iland">
            <Row>
              <Col lg={6}>
                <p style={{ textTransform: "capitalize", color: 'white', fontSize: "14px" }}>
                  copyright 2023-2024 <a style={{ color: "#898888", }} href='https://lenexit.com'>Lenexit</a> all rights reserved
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