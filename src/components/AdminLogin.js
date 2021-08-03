import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ErrorMessage from "./ErrorMessage";
import { useMediaQuery } from "@material-ui/core";
import axios from "axios";
// import AdminPortal from "./AdminPortal";
import { Link, Route, Switch, Router } from "react-router-dom";
import { useHistory } from "react-router-dom";
const AdminLogin = () => {
  const intialValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();
  const rey = useMediaQuery("(max-width:500px)");

  const handleDoSubmit = (e) => {
    e.preventDefault();

    setformErrors(validate(formValues));
    axios
      .post("http://localhost:8080/adminlogin/add", formValues)
      .then((res) => res.data)
      .then((data) => {
        alert("User Onboarded successfully");
        console.log("=============Submitted");
        console.log(data);
      })
      .catch((err) => {
        console.log("err");
      });
    // setSubmitted(true);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const validate = (values) => {
    let errors = {};
    console.log(values);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    }

    console.log("keys", Object.keys(errors).length);

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      history.push("/adminportal");
    }
    // }
    else {
      console.warn("Invalid Credentials!..");
    }

    return errors;
  };

  //   useEffect(() => {
  //     if (submitted) {
  //       history.push("/adminportal");
  //     }
  //   }, [submitted]);

  return (
    <div>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Admin Login
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form onSubmit={handleDoSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formValues.email}
                  onChange={handleOnChange}
                />
                <ErrorMessage message={formErrors.email} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="password"
                  value={formValues.password}
                  onChange={handleOnChange}
                />
                <ErrorMessage message={formErrors.password} />
              </Form.Group>

              <Button variant="success btn-block" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
        <h6 className="mt-5 p-5 text-center text-secondary ">
          Copyright © 2021 Subeesh Raja. All Rights Reserved.
        </h6>
      </Container>
      {rey && (
        <div style={{ backgroundColor: "grey", textAlign: "center" }}>
          Screen Switched to mobile version
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
