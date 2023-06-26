import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./booking.css";
import {
  Button,
  Form,
  FormGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

export default function Booking({ tour, avgRating }) {
  const { price, reviews } = tour;

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "aya@gmail.com",
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setCredentials((previous) => ({
      ...previous,
      [e.target.id]: e.target.value,
    }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  // send data to the server

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span> /per person </span>
        </h3>

        <span className="tour__rating d-flex align-items-center">
          <i
            className="fa-solid fa-star"
            style={{ color: "var(--secondary-color)" }}
          ></i>{" "}
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      <div className="booking__form">
        <h5>Information</h5>

        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              name=""
              id="fullName"
              placeholder="Enter Full Name"
              required
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              name=""
              id="phone"
              placeholder="Enter Mobile Phone"
              required
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              name=""
              id="bookAt"
              required
              onChange={handleChange}
            />

            <input
              type="number"
              name=""
              id="guestSize"
              placeholder="Enter Number of Guests"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0 d-flex align-items-center justify-content-between">
            <h5 className="d-flex align-items-center gap-1">
              ${price}
              <i class="fa-solid fa-xmark"></i>1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0 d-flex align-items-center justify-content-between">
            <h5>Service Charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0 total d-flex align-items-center justify-content-between">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
}
