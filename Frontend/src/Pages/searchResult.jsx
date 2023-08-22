import React, { useState } from "react";
import CommonSection from "../Shared/commonSection";
import TourCard from "../Shared/tourCard";
import Newsletter from "../Shared/newsletter";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function SearchResult() {
  const location = useLocation();
  const [data] = useState(location.state);
  // console.log(data);
  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center"> No Tour Found</h4>
            ) : (
              data?.map((tour) => {
                return (
                  <Col lg="3" className="mb-4" key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                );
              })
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
}
