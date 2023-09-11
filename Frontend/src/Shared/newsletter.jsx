import React from "react";
import "./newsletter.css";
import Tourist from "../assets/images/picture4.png";
import { Col, Container, Row } from "react-bootstrap";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe Now to Get Useful Travelling Information.</h2>

              <div className="newsletter__input">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Your E-mail"
                />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit eveniet repellendus maiores voluptatum qui
                officia.
              </p>
            </div>
          </Col>

          <Col lg="6">
            <div className="newsletter__img">
              <img src={Tourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
