import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "react-bootstrap";

export default function SearchBar() {
  const locationRef = useRef();
  const distanceRef = useRef(0);
  const groupSizeRef = useRef(0);

  const searchHandeler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const groupSize = groupSizeRef.current.value;

    if (location === "" || distance === "" || groupSize === "") {
      return alert("All Fields are Required!");
    }
  };
  return (
    <>
      <Col lg="12">
        <div className="search__bar">
          <Form className="d-flex align-items-center gap-4">
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
              <span>
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <div>
                <h6>Location</h6>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  ref={locationRef}
                />
              </div>
            </FormGroup>

            <FormGroup className="d-flex gap-3 form__group form__group-fast">
              <span>
                <i class="fa-solid fa-clock"></i>
              </span>
              <div>
                <h6>Distance</h6>
                <input
                  type="number"
                  placeholder="Distance k/m"
                  ref={distanceRef}
                />
              </div>
            </FormGroup>

            <FormGroup className="d-flex gap-3 form__group form__group-last">
              <span>
                <i class="fa-solid fa-user-group"></i>
              </span>
              <div>
                <h6>Max People</h6>
                <input type="number" placeholder="0" ref={groupSizeRef} />
              </div>
            </FormGroup>
            <span className="icon" type="submit" onClick={searchHandeler}>
              <i
                className="fa-solid fa-search"
                style={{
                  fontSize: "20px",
                  padding: "6px",
                  background: "#c50b0bcd",
                  color: "#fff",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
              ></i>
            </span>
          </Form>
        </div>
      </Col>
    </>
  );
}
