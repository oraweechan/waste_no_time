import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./Section1.css";

export default function Section1() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            className="top-page-images"
            src="HowardBeachCleanUp(3)_091920.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Zero Waste Academy</h1>
            <h2>April 30th - May 23rd</h2>
            <a href="https://www.dsnyremembers.org/" target="_blank">
              <Button className="action-button">learn more</Button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            className="top-page-images"
            src="PXL_20210922_141651292.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Follow Your Waste</h1>
            <h2>
              An interactive, educational game that follows the lifecycle of New York City's waste
            </h2>
            <a href="https://www.dsnyremembers.org/" target="_blank">
              <Button className="action-button">play the game!</Button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            className="top-page-images"
            src="PXL_20210410_153139706.MP.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>DSNY Remembers</h1>
            <h2>
              a tribute to the New York City Department of Sanitation's 911 rescue and recovery
              efforts
            </h2>
            <a href="https://www.dsnyremembers.org/" target="_blank">
              <Button className="action-button">learn more</Button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
