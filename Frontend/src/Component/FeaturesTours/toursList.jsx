import React from "react";
import TourCard from "../../Shared/tourCard";
import Tours from "../../assets/data/tours";

import { Col } from "react-bootstrap";

export default function ToursList() {
  return (
    <>
      {Tours?.map((tour) => {
        return (
          <Col lg="3" className="mb-4" key={tour.id}>
            <TourCard tour={tour} />
          </Col>
        );
      })}
    </>
  );
}
