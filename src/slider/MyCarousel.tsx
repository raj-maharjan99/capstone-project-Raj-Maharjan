import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Button from "../Buttun/Button";

function MyCarousel() {
  return (
    <>
      <div className=" container w-[1200px]    ">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className=" carousel-item active " data-bs-interval={1000}>
              <img
                src="https://www.apple.com/newsroom/images/2023/09/watchos-10-is-available-today/article/Apple-watchOS-10-watch-family_big.jpg.large.jpg"
                className=" d-block w-full"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <Button title="Apple Watch" />

                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg"
                className="d-block  w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <Button title={"MacBook Pro"} />
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>

            <div className="carousel-item ">
              <img
                src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.landing-big_2x.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default MyCarousel;
