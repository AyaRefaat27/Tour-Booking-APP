import React from "react";
import { Col } from "react-bootstrap";
import TourCard from "../../Shared/tourCard";
import FetchData from "../../Hooks/fetchData.js";
import { BASE_URL } from "../../utils/config.js";

export default function ToursList() {
  const {
    data: featuredTours,
    loading,
    error,
  } = FetchData(`${BASE_URL}/tours/search/getFeaturedTours`);

  // console.log(featuredTours);
  return (
    <>
      {loading && <h4> Loading ..... </h4>}

      {error && <h4> {error} </h4>}
      {!loading &&
        !error &&
        featuredTours?.map((tour) => {
          return (
            <Col lg="3" className="mb-4" key={tour._id}>
              <TourCard tour={tour} />
            </Col>
          );
        })}
    </>
  );
}
