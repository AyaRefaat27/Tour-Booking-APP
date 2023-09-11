import React, { useContext, useState } from "react";
import "../Styles/login.css";
import registerImage from "../assets/images/register.png";

import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../Context/authContext";
import { BASE_URL } from "../utils/config";
import CommonSection from "../Shared/commonSection";

export default function Register() {
  const [credentials, setCredentials] = useState({
    username: undefined,
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

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
      }

      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <CommonSection title={"Register"} />

      <section>
        <Container>
          <Row>
            <Col lg="8" className="m-auto">
              <div className="login__container d-flex justify-content-between">
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

                  <h2>Register</h2>

                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        id="username"
                        onChange={handleChange}
                      />
                    </FormGroup>

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
                      Register
                    </Button>
                  </Form>

                  <p>
                    Already have an account?
                    <Link to="/login">Login</Link>
                  </p>
                </div>

                <div className="login__img">
                  <img src={registerImage} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
