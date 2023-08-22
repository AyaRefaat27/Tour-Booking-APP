import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../Shared/tour-card.css";
import calculateAvgRating from "../utils/avgRating";

export default function TourCard({ tour }) {
  const { _id, title, city, photo, price, featured, reviews } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="Tour Image" />
          {featured && <span>Featured</span>}
        </div>

        <div style={{ padding: "0.5rem" }}>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="fa-solid fa-location-dot"></i> {city}
            </span>

            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="fa-solid fa-star"></i>{" "}
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not Rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>

          <h5 className="tour__title">
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price} <span> /per person</span>
            </h5>

            <button className="btn booking__btn">
              <Link to={`/tours/${_id}`}>Book Now</Link>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
