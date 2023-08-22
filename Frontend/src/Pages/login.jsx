import React, { useContext, useState } from "react";
import "../Styles/login.css";
import loginImage from "../assets/images/Login.png";

import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../Context/authContext";
import { BASE_URL } from "../utils/config";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((previous) => ({
      ...previous,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
      }
      // console.log(result.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8" className="m-auto">
              <div className="login__container d-flex justify-content-between">
                <div className="login__img">
                  <img src={loginImage} alt="" />
                </div>

                <div className="login__form">
                  <div className="user">
                    <i
                      className="fa-solid fa-user"
                      style={{
                        width: "70%",
                        objectFit: "contain",
                        color: "var(--heading-color)",
                        fontSize: "8rem",
                      }}
                    ></i>
                  </div>

                  <h2>Login</h2>

                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input
                        type="email"
                        placeholder="Your E-mail"
                        required
                        id="email"
                        onChange={handleChange}
                      />
                    </FormGroup>

                    <FormGroup>
                      <input
                        type="password"
                        placeholder="Your Password"
                        required
                        id="password"
                        onChange={handleChange}
                      />
                    </FormGroup>

                    <Button
                      className="btn secondary__btn auth__btn"
                      type="submit"
                    >
                      Login
                    </Button>
                  </Form>

                  <p>
                    Don't have an account?
                    <Link to="/register">Create Account</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
