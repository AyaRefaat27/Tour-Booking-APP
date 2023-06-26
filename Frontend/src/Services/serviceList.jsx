import React from "react";
import ServiceCard from "./serviceCard";
import { Col } from "react-bootstrap";

const serviceData = [
  {
    imgUrl: "./assets/images/weather.png",
    title: "Calculate Weatrer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imgUrl: "./assets/images/guide.png",
    title: "Best Tour Gide",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imgUrl: "./assets/images/customization.png",
    title: "Customization",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
export default function ServiceList() {
  return (
    <>
      {serviceData.map((item, index) => {
        return (
          <Col lg="3" key={index}>
            <ServiceCard item={item} />
          </Col>
        );
      })}
    </>
  );
}
