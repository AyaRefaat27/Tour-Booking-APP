import React, { useEffect, useState } from "react";
import "../Styles/tour.css";
import { Col, Container, Row } from "react-bootstrap";

import CommonSection from "../Shared/commonSection";
import SearchBar from "../Shared/searchBar";
import TourCard from "../Shared/tourCard";
import Newsletter from "../Shared/newsletter";

import { BASE_URL } from "../utils/config.js";
import FetchData from "../Hooks/fetchData.js";

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
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {tours?.map((tour) => {
                return (
                  <Col lg="3" className="mb-4" key={tour._id}>
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
