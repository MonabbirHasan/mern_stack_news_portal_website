import React, { useState, lazy } from "react";
const Header = lazy(() => import("../../components/common/header/Header"));
const Footer = lazy(() => import("../../components/common/footer/Footer"));
import ApiClient from "../../../utils/ApiClient/ApiClient";
import { Container, Form } from "react-bootstrap";
import { Send } from "@mui/icons-material";
import { toast } from "react-toastify";
import "./service_request.css";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet";
const ServiceReques = () => {
  const handleChangeSelectService = (event) => {
    setSname(event.target.value);
  };
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Sname, setSname] = useState("Help_&_Support");
  const [phone, setPhone] = useState("");
  const [Description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  /*********************************
   * INITIALIZE CLIENT API ROOT
   *********************************/
  const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI);
  /******************************
   * FORM VALIDATION START HERE
   ******************************/
  const validateForm = () => {
    let errors = {};
    if (!UserName) {
      errors.UserName = "username is required";
    }
    if (!Email) {
      errors.Email = "Email Is required";
    }
    if (!Sname) {
      errors.Sname = "service name is required";
    }
    if (!Description) {
      errors.Description = "description is required";
    }
    setErrors(errors);
    return Object.keys(errors).length > 0;
  };
  /*********************
   * RESET FORM FEILD
   *********************/
  const resetForm = () => {
    setUserName("");
    setEmail("");
    setSname(1);
    setPhone("");
    setDescription("");
  };
  /*******************************
   * CREATE NEW SERVICE REQUEST
   *******************************/
  const create_request = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      const data = {
        s_user_name: UserName,
        s_user_email: Email,
        s_user_phone: phone,
        s_service_name: Sname,
        s_user_message: Description,
      };
      const response = await ClientApi.create(
        `api/service_request`,
        data,
        import.meta.env.VITE_API_ACCESS_KEY
      );
      if (response.status === 201) {
        toast.success("We Will Connect With You Soon🚀🌟");
        resetForm();
      }
    } else {
      toast.error("Please enter Request Info");
    }
  };
  return (
    <>
      <Header />
      <Helmet>
        <title>LenexIT - Service Request</title>
        <link rel="canonical" href={location.href} />
      </Helmet>
      <div className="service_request">
        <Container>
          <div className="service_request_wrapper">
            <Box>
              <Typography
                sx={{
                  pb: 2,
                  textTransform: "capitalize",
                  color: "#919191",
                  fontFamily: "fantasy!important",
                  letterSpacing: "2px",
                  fontSize: "2rem",
                }}
              >
                Send Your query
              </Typography>
            </Box>
            <FormControl fullWidth>
              <Form.Label>Enter Your Name*</Form.Label>
              <Form.Control
                size="sm"
                name="name"
                required
                onChange={(e) => setUserName(e.target.value)}
                value={UserName}
              />
              {errors.UserName && (
                <Alert color="error">{errors.UserName}</Alert>
              )}
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }}>
              <Form.Label>Enter Your Phone (optional)</Form.Label>
              <Form.Control
                size="sm"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }}>
              <Form.Label>Enter Your Email*</Form.Label>
              <Form.Control
                size="sm"
                name="email"
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
              />
              {errors.Email && <Alert color="error">{errors.Email}</Alert>}
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }}>
              <Form.Label>Select Your Service (optional)</Form.Label>
              <Form.Select
                size="sm"
                onChange={handleChangeSelectService}
                value={Sname}
              >
                <option value="Applications">Applications</option>
                <option value="Website">Website</option>
                <option value="Telegram">Telegram</option>
                <option value="Twitter">Twitter</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Youtube">Youtube</option>
                <option value="Help_&_Support">Help & Support</option>
              </Form.Select>
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }}>
              <Form.Label>Write Your Message*</Form.Label>
              <Form.Control
                size="sm"
                onChange={(e) => setDescription(e.target.value)}
                value={Description}
                type="text"
                as="textarea"
              />
              {errors.Description && (
                <Alert color="error">{errors.Description}</Alert>
              )}
            </FormControl>
            <FormControl sx={{ my: 2 }}>
              <Button
                onClick={create_request}
                variant="outlined"
                color="success"
                type="button"
                endIcon={<Send />}
              >
                send
              </Button>
            </FormControl>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ServiceReques;
