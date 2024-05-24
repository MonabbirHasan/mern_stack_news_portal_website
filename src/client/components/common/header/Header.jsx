import React, { useEffect, useState } from 'react'
import "./header.css"
import { Facebook, Google, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import ApiClient from '../../../../utils/ApiClient/ApiClient';
import Logo from "../../../../assets/img/logo.png"
const Header = () => {
  const [DateTime, setDateTime] = useState("")
  const [AllCategory, setAllCategory] = useState([])
  const navigate = useNavigate()
  /*****************************
     * INITIALIZE CLIENT API ROOT
     ****************************/
  const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI);
  setInterval(() => {
    const date_time = new Date().toLocaleTimeString();
    setDateTime(date_time)
  }, 1000);
  /*********************
   * FETCH CATEGORY
   *********************/
  const fetch_category = async () => {
    const response = await ClientApi.read(`api/category`, import.meta.env.VITE_API_ACCESS_KEY)
    if (response.status === 200) {
      setAllCategory(response.data)
    }
  }
  useEffect(() => {
    fetch_category()
  }, [])
  return (
    <div className='front_header'>
      <header>
        <div className="nav_bottom shadow-sm p-1">
          <Navbar expand="lg" className="">
            <Container>
              <Navbar.Brand>
                <h4 className='front_header_logo'>
                  <NavLink to="/"><img src={Logo} alt="" /></NavLink>
                </h4>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                  <Nav.Link>
                    <NavLink to="/">Home</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/about">About</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/service">Service</NavLink>
                  </Nav.Link>
                  <NavDropdown title="Product" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <NavLink to="/website_template">Website templates</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink to="/admin_template">Admin templates</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink to="/wp_theme">Wp Theme</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink to="/wp_plugin">Wp Plugin</NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>
                    <NavLink to="/contact">Contact</NavLink>
                  </Nav.Link>
                </Nav>
                <Navbar.Text>
                  <div className="nav_top p-2">
                    <div className="nav_social">
                      <ul>
                        <li><a href="https://www.facebook.com/itlenex"><Facebook fontSize='small' /></a></li>
                        <li><a href="https://twitter.com/itLenex"><Twitter fontSize='small' /></a></li>
                        <li><a href="https://www.linkedin.com/company/lenexit"><LinkedIn fontSize='small' /></a></li>
                        <li><a href="https://www.instagram.com/lenex.it"><Instagram fontSize='small' /></a></li>
                      </ul>
                    </div>
                  </div>
                  {/* <Button size='small' sx={{ textTransform: "capitalize" }} variant='contained' color='success'>signup/login</Button> */}
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="small_category">
            {
              AllCategory.map((items, index) => (
                <span>
                  <small onClick={() => {
                    navigate(`/category/${items.category_name}`, { state: { c_id: items.category_id } })
                  }}>{items.category_sub !== 0 ? "-" : ""}{items.category_name}</small>
                </span>

              ))
            }
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header