import React from "react";
import Slider from "react-slick";

import avatar01 from "../../assets/images/ava-1.jpg";
import avatar02 from "../../assets/images/ava-2.jpg";
import avatar03 from "../../assets/images/ava-3.jpg";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3"> John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
        <p className="mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          ratione porro quisquam, esse, possimus impedit quis excepturi
          assumenda, qui error delectus iste debitis ullam voluptates inventore
          sapiente laboriosam consequuntur eveniet!
        </p>
      </div>

      <div className="testimonial py-4 px-3">
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3"> Lia Frankline</h6>
            <p>Customer</p>
          </div>
        </div>
        <p className="mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          ratione porro quisquam, esse, possimus impedit quis excepturi
          assumenda, qui error delectus iste debitis ullam voluptates inventore
          sapiente laboriosam consequuntur eveniet!
        </p>
      </div>

      <div className="testimonial py-4 px-3">
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar03} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3"> Mark Thomas</h6>
            <p>Customer</p>
          </div>
        </div>
        <p className="mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          ratione porro quisquam, esse, possimus impedit quis excepturi
          assumenda, qui error delectus iste debitis ullam voluptates inventore
          sapiente laboriosam consequuntur eveniet!
        </p>
      </div>

      <div className="testimonial py-4 px-3">
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3"> Lia Frankline</h6>
            <p>Customer</p>
          </div>
        </div>
        <p className="mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          ratione porro quisquam, esse, possimus impedit quis excepturi
          assumenda, qui error delectus iste debitis ullam voluptates inventore
          sapiente laboriosam consequuntur eveniet!
        </p>
      </div>
    </Slider>
  );
}
