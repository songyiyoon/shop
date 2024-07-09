import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Login({ setAuthenticate }) {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <Form onSubmit={loginUser} className="login_form">
      <FormGroup>
        <Label for="exampleAddress">Email Address</Label>
        <Input id="exampleAddress" name="address" placeholder="Enter email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplepassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password"
          type="password"
        />
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
