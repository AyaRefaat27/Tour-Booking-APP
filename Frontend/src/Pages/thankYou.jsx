import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/thank-you.css";
import Newsletter from "../Shared/newsletter";

export default function ThankYou() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="pt-5 text-center">
              <div className="thank__you">
                <span>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      fontSize: "4rem",
                      color: "green",
                      marginBottom: "1rem",
                    }}
                  ></i>
                </span>

                <h1 className="mb-3 fw-semibold">Thank You</h1>
                <h3 className="mb-4"> Your Tour is Succeffuly Booked ^o^ .</h3>

                <Button className="btn primary__btn w-25">
                  <Link to="/home">Back To Home</Link>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
}
