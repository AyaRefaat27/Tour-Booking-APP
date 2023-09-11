import React, { useEffect, useState } from "react";
import "../Styles/tour.css";
import "../Styles/home.css";
import { Col, Container, Row } from "react-bootstrap";

import SearchBar from "../Shared/searchBar";
import TourCard from "../Shared/tourCard";
import Newsletter from "../Shared/newsletter";

import { BASE_URL } from "../utils/config.js";
import FetchData from "../Hooks/fetchData.js";
import VideoOne from "../assets/images/video1.mp4";
import { Link } from "react-router-dom";

export default function Tours() {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    loading,
    error,
  } = FetchData(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = FetchData(
    `${BASE_URL}/tours/search/getTourCount`
  );

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);
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
          <h1>All Tours</h1>

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

      {/* <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section> */}

      <section className="pt-5 mt-5">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {tours?.map((tour) => {
                return (
                  <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                );
              })}

              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => {
                    return (
                      <span
                        key={number}
                        onClick={() => setPage(number)}
                        className={page === number ? "active__page" : ""}
                      >
                        {number + 1}
                      </span>
                    );
                  })}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
}
