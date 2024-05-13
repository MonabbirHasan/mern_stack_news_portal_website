import React, { useEffect, useState } from 'react'
import "./header.css"
import { Facebook, Google, Instagram, Twitter } from '@mui/icons-material'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Button, Divider } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom';
import ApiClient from '../../../../utils/ApiClient/ApiClient';
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
                  <NavLink to="/">Bl<span style={{ color: "orange" }}>ogs</span></NavLink>
                </h4>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                  <Nav.Link>
                    <NavLink to="/">HOME</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/about">About</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/service">Service</NavLink>
                  </Nav.Link>
                  {/* <NavDropdown title="Category" id="basic-nav-dropdown">
                    {
                      AllCategory.map((items, index) => (
                        <NavDropdown.Item key={index}>
                          <NavLink to="/fashion">{items.category_sub !== 0 ? "-" : ""}{items.category_name}</NavLink>
                        </NavDropdown.Item>
                      ))
                    }
                    // https://www.pinterest.com/pin/create/button/?url=https://www.bangladeshichefs.com/2024/05/verity-of-cuisine-in-bangla.html&media=https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_verSeWMwUvVBc_Ui-ToyBFti2URNjSxnh1kx7MKP-0K7xRL6ZwpBHnJrkiwjEXMIqzoTck5XEdoijPlbfZxI0LfQ2cFKRYwZS3GVIZE8ScuQIq7giHYIs84IXjIr0kezLH9F0CZ3ymx3ZlIw-0kOSO5hu5uKn1uBqKoG4m&description=%E0%A6%95%E0%A7%81%E0%A6%87%E0%A6%9C%E0%A6%BF%E0%A6%A8%20%E0%A6%95%E0%A6%BF%20|%20%E0%A6%AC%E0%A6%BF%E0%A6%AD%E0%A6%BF%E0%A6%A8%E0%A7%8D%E0%A6%A8%20%E0%A6%95%E0%A7%81%E0%A6%87%E0%A6%9C%E0%A6%BF%E0%A6%A8%E0%A7%87%E0%A6%B0%20%E0%A6%AE%E0%A6%B6%E0%A6%B2%E0%A6%BE%20%E0%A6%AC%E0%A6%BE%20%E0%A6%B8%E0%A7%8D%E0%A6%AA%E0%A6%BE%E0%A6%87%E0%A6%B8%20%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%9A%E0%A6%BF%E0%A6%A4%E0%A6%BF%20|%20Verity%20%20of%20Cuisine%20IN%20Bangla
                  </NavDropdown> */}
                  <Nav.Link>
                    <NavLink to="/contact">Contact</NavLink>
                  </Nav.Link>
                </Nav>
                <Navbar.Text>
                  <div className="nav_top p-2">
                    <div className="nav_social">
                      <ul>
                        <li><a href="#"><Facebook fontSize='small' /></a></li>
                        <li><a href="#"><Twitter fontSize='small' /></a></li>
                        <li><a href="#"><Google fontSize='small' /></a></li>
                        <li><a href="#"><Instagram fontSize='small' /></a></li>
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
                    navigate(`/category/${items.category_name}`,{state:{c_id:items.category_id}})
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