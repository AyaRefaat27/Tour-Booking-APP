import React from "react";
import "./footer.css";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const quick_links1 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const quick_links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/hotels",
    display: "Hotels",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <span>T R A V E L.</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="social__links d-flex align-items-center gap-3">
              <span>
                <Link to="#">
                  <i class="fa-brands fa-youtube"></i>
                </Link>
              </span>

              <span>
                <Link to="#">
                  <i class="fa-brands fa-github"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="fa-brands fa-facebook"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="fa-brands fa-instagram"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </span>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>

            <ListGroup className="footer__quick-links">
              {quick_links1.map((item, index) => {
                return (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className="footer__quick-links">
              {quick_links2.map((item, index) => {
                return (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title"> Contact </h5>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0"> Cairo, Egypt</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  E-mail:
                </h6>
                <p className="mb-0"> ayarefaat200@gmail.com </p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  Phone:
                </h6>
                <p className="mb-0"> +201003365821</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="fa-brands fa-telegram"></i>
                  </span>
                  Telegram:
                </h6>
                <p className="mb-0">
                  <Link to="#">Message Me</Link>
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              CopyRight{" "}
              <span
                style={{ color: "var(--primary-color)", fontWeight: "500" }}
              >
                {year}
              </span>{" "}
              , Designed & Developed by{" "}
              <span
                style={{ color: "var(--primary-color)", fontWeight: "500" }}
              >
                Aya Refaat
              </span>
              . All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
