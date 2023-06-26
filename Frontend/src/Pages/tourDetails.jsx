import React, { useRef, useState } from "react";
import "../Styles/tour-details.css";
import tourData from "../assets/data/tours";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Form, ListGroup } from "react-bootstrap";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../Component/Booking/booking";

export default function TourDetails() {
  const { id } = useParams();

  const reviewReference = useRef("");

  const [tourRating, setTourRating] = useState(null);

  // Static Data ,, Untill backend data

  const tour = tourData.find((tour) => {
    return tour.id === id;
  });

  // Destructure Properties from tour object
  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // Format Date
  const options = { day: "numeric", month: "long", year: "numeric" };

  // Submit Request to the Server

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewText = reviewReference.current.value;

    // alert(`${reviewText} , ${tourRating}`);
    // api call later
  };
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <div>
                  <img src={photo} alt="" />
                </div>

                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>{" "}
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not Rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>

                    <span>
                      <i class="fa-solid fa-location-dot"></i>
                      {address}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span>
                      <i class="fa-solid fa-city"></i>
                      {city}
                    </span>

                    <span>
                      <i class="fa-solid fa-dollar-sign"></i> ${price} /per
                      person
                    </span>

                    <span>
                      <i class="fa-solid fa-clock"></i> {distance} k/m
                    </span>

                    <span>
                      <i class="fa-solid fa-user-group"></i> {maxGroupSize}{" "}
                      People
                    </span>
                  </div>

                  <h5> Description </h5>
                  <p>{desc}</p>
                </div>

                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="rating__group d-flex align-items-center gap-3 mb-4 ">
                      <span
                        onClick={() => {
                          setTourRating(1);
                        }}
                      >
                        1 <i className="fa-solid fa-star"></i>
                      </span>

                      <span
                        onClick={() => {
                          setTourRating(2);
                        }}
                      >
                        2 <i className="fa-solid fa-star"></i>
                      </span>

                      <span
                        onClick={() => {
                          setTourRating(3);
                        }}
                      >
                        3 <i className="fa-solid fa-star"></i>
                      </span>

                      <span
                        onClick={() => {
                          setTourRating(4);
                        }}
                      >
                        4 <i className="fa-solid fa-star"></i>
                      </span>

                      <span
                        onClick={() => {
                          setTourRating(5);
                        }}
                      >
                        5 <i className="fa-solid fa-star"></i>
                      </span>
                    </div>

                    <div className="review__input">
                      <input
                        type="text"
                        placeholder="Share Your Reviews"
                        ref={reviewReference}
                        required
                      />
                      <button
                        className="btn primary__btn text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {reviews?.map((review) => {
                      return (
                        <div className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5> Aya </h5>
                                <p>
                                  {new Date("06-15-2023").toLocaleDateString(
                                    "en-US",
                                    options
                                  )}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                5{" "}
                                <i
                                  className="fa-solid fa-star"
                                  style={{
                                    fontSize: "1.2rem",
                                    color: " var(--secondary-color)",
                                  }}
                                ></i>
                              </span>
                            </div>

                            <h6>Amazing Tour</h6>
                          </div>
                        </div>
                      );
                    })}
                  </ListGroup>
                </div>
              </div>
            </Col>

            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
