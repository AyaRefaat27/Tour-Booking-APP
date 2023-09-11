import React from "react";
import SubTitle from "../Shared/subTitle";
import SearchBar from "../Shared/searchBar";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/home.css";

import ServiceList from "../Services/serviceList";
import ToursList from "../Component/FeaturesTours/toursList";
import ImagesGallery from "../Component/ImageGallery/imagesGallery";
import Testimonials from "../Component/Testimonial/testimonials";
import Newsletter from "../Shared/newsletter";
import { Link } from "react-router-dom";

import VideoOne from "../assets/images/video1.mp4";
export default function Home() {
  return (
    <>
      <section className="home">
        <video
          className="video_slide"
          src={VideoOne}
          autoPlay
          muted
          loop
        ></video>
        <div className="content">
          <h1>
            Wonderful. <br></br>
            <span>Island</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            fuga nostrum debitis asperiores commodi itaque .
          </p>
          <Link to="/tours"> Explore</Link>
          <SearchBar />
        </div>

        <div className="media_icons">
          <span>
            <Link to="#">
              <i className="fa-brands fa-facebook"></i>
            </Link>
          </span>
          <span>
            <Link to="#">
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </span>
          <span>
            <Link to="#">
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </span>
        </div>
      </section>

      {/* <section className="hero__section">
        <Container>
          <Row>
            <Col lg="12">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <SubTitle subtitle={"Know Before You Go"} />
                </div>
                <h1>
                  Travelling opens the door to creating
                  <span className="highlight"> Memories</span>
                </h1>
                <Button className=" btn primary__btn" variant="danger">
                  <Link to="/tours"> Explore</Link>
                </Button>
              </div>
            </Col>

            
            <SearchBar></SearchBar>
          </Row>
        </Container>
      </section> */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What We Serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" classname="mb-5">
              <SubTitle subtitle={"Explore"}></SubTitle>
              <h2 className="featured__tour-title"> Our Features Tours</h2>
            </Col>
            <ToursList></ToursList>
          </Row>
        </Container>
      </section>

      <section
        style={{
          backgroundImage: 'url("./assets/images/picture9.jpg")',
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className="experience__content">
                <SubTitle subtitle={"Experience"}> </SubTitle>
                <h2>
                  With our all experience <br></br> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  <br></br>
                  Repellendus maiores quas aspernatur ipsa ratione at debitis!
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <div className="counter__wrapper d-flex align-items-center gap-2 mt-5 justify-content-center">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>

                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>

                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SubTitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit Our Custumers Tour Gallery
              </h2>
            </Col>

            <Col lg="12">
              <ImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SubTitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">
                What Our Fans Say about Us..?!
              </h2>
            </Col>

            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
}
