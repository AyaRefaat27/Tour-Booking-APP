import React from "react";
import "./common-section.css";
import { Col, Container, Row } from "react-bootstrap";

export default function CommonSection({ title }) {
  return (
    <section className="common__section">
      <Container>
        <Row>
          <Col lg="12">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
