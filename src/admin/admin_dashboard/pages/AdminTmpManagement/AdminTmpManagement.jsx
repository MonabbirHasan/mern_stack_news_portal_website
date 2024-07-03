import React from "react";
import "./admin_tmpmanagement.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import { FormControl } from "@mui/material";
import { Form } from "react-bootstrap";
const AdminTmpManagement = () => {
  return (
    <div className="admin_tmpmanagement">
      <PageTitle
        text="add new category"
        fontSize={23}
        textTransform="capitalize"
        padding={1}
        color="#444"
        fontWeight="normal"
        fontFamily="fantasy"
      />
      <FormControl fullWidth>
        <Form.Control type="text" name="title" placeholder="Enter Template Title" />
        <Form.Control type="text" name="title" placeholder="Enter Template Title"/>
      </FormControl>
    </div>
  );
};

export default AdminTmpManagement;
