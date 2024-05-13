import { lazy } from "react";
const Header = lazy(() => import("../../components/common/header/Header"));
const Footer = lazy(() => import("../../components/common/footer/Footer"));
import { NavLink } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./service.css";
import { Avatar } from "@mui/material";
import { Android, BrandingWatermark, DesktopWindows, MobileFriendly, SettingsAccessibility, Web } from "@mui/icons-material";
const Service = () => {
  return (
    <>
      <Header />
      <div className="service_page">
        <div className="container">
          <div className="service_wrapper">
            <Row lg={3}>
              <Col>
                <div className="service_item_box">
                  <NavLink to={"/service_request"}>
                    <div className="service_item">
                      <span>
                        <Avatar><Web htmlColor="green" /></Avatar>
                      </span>
                      <h3 className="service_title">web development</h3>
                      <p>Lenexit offers full-stack web development services, delivering end-to-end solutions that encompass front-end and back-end expertise for seamless digital experiences.</p>
                    </div>
                  </NavLink>
                </div>
              </Col>
              <Col>
                <div className="service_item_box">
                  <NavLink to={"/service_request"}>
                    <div className="service_item">
                      <span>
                        <Avatar>
                          <Android htmlColor="green" />
                        </Avatar>
                      </span>
                      <h3 className="service_title">android & ios mobile app development</h3>
                      <p>Lenexit excels in Android and iOS mobile app development, delivering intuitive and engaging applications that captivate users and drive business growth.</p>
                    </div>
                  </NavLink>
                </div>
              </Col>
              <Col>
                <div className="service_item_box">
                  <NavLink to={"/service_request"}>
                    <div className="service_item">
                      <span>
                        <Avatar>
                          <DesktopWindows htmlColor="green" />
                        </Avatar>
                      </span>
                      <h3 className="service_title">Custom software development</h3>
                      <p>Custom ERP software development by Lenexit. Tailored solutions for your business needs, user-friendly & feature-rich. Streamline your operations with efficiency.</p>
                    </div>
                  </NavLink>
                </div>
              </Col>
              <Col>
                <div className="service_item_box">
                  <NavLink to={"/service_request"}>
                    <div className="service_item">
                      <span>
                        <Avatar>
                          <SettingsAccessibility htmlColor="green" />
                        </Avatar>
                      </span>
                      <h3 className="service_title">Custom Plugin Development</h3>
                      <p>Lenexit specializes in custom plugin development, creating tailored solutions that seamlessly integrate with your existing systems and enhance the functionality of your website or application.</p>
                    </div>
                  </NavLink>
                </div>
              </Col>
              <Col>
                <div className="service_item_box">
                  <NavLink to={"/service_request"}>
                    <div className="service_item">
                      <span>
                        <Avatar>
                          <MobileFriendly htmlColor="green" />
                        </Avatar>
                      </span>
                      <h3 className="service_title">Developing an on-demand application</h3>
                      <p>Efficient on-demand app development by Lenexit. Tailored solutions for your needs, user-friendly & feature-rich. Empower your business in the on-demand economy</p>
                    </div>
                  </NavLink>
                </div>
              </Col>
              <Col>
                <div className="service_item_box">
                  <NavLink to={"/service_request"}>
                    <div className="service_item">
                      <span>
                        <Avatar>
                          <BrandingWatermark htmlColor="green" />
                        </Avatar>
                      </span>
                      <h3 className="service_title">AI automation service for business</h3>
                      <p>AI automation service by Lenexit. Custom solutions for streamlined processes, enhanced efficiency, and smarter decision-making. Embrace the power of AI in your business.</p>
                    </div>
                  </NavLink>
                </div>
              </Col>
            </Row>

          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Service;
