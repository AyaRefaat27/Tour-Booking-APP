import React, { useEffect, useRef, useState, useContext } from "react";
import "../Styles/tour-details.css";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Form, ListGroup } from "react-bootstrap";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../Component/Booking/booking";

import { BASE_URL } from "../utils/config.js";
import FetchData from "../Hooks/fetchData.js";
import { AuthContext } from "../Context/authContext";
import CommonSection from "../Shared/commonSection";

export default function TourDetails() {
  const { id } = useParams();
  const reviewReference = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  // Fetch data
  const { data: tour, loading, error } = FetchData(`${BASE_URL}/tours/${id}`);

  // Destructure Properties from tour object
  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // Format Date
  const options = { day: "numeric", month: "long", year: "numeric" };

  // Submit Request to the Server

  const submitHandler = async (e) => {
    e.preventDefault();

    const reviewText = reviewReference.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please Sign In!");
      }

      const reviewObject = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObject),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }

      alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);
  return (
    <>
      <CommonSection title={" Tour Details"} />
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content mt-5">
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
                          className="btn text-light"
                          style={{
                            backgroundColor: "rgba(40, 110, 223, 0.788)",
                            borderRadius: "50px",
                          }}
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
                                  <h5> {review.username} </h5>
                                  <p>
                                    {new Date(
                                      review.createdAt
                                    ).toLocaleDateString("en-US", options)}
                                  </p>
                                </div>
                                <span className="d-flex align-items-center">
                                  {review.rating}
                                  <i
                                    className="fa-solid fa-star"
                                    style={{
                                      fontSize: "1.2rem",
                                      color: " var(--secondary-color)",
                                    }}
                                  ></i>
                                </span>
                              </div>

                              <h6>{review.reviewText}</h6>
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
          )}
        </Container>
      </section>
    </>
  );
}
