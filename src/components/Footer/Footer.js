import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-div">
        {/* <img src="SFBackground.jpg" width="100%" />
        <p>
          The Sanitation Foundation, formerly known as the Foundation for New York's Strongest, is
          the official nonprofit partner of the New York City Department of Sanitation.
        </p>
        <p>
          The Sanitation Foundation a not-for-profit organization, and is tax exempt under Section
          501(c)(3) of the Internal Revenue Code. Federal EIN (tax ID) number 81-3523248.
        </p>
        <div>
          <p>124 Worth Street, 7th Floor, Room 722</p>
          <p>New York, NY 10013</p>
          <p>646-885-4928</p>
        </div> */}

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="SFBackground.jpg" alt="First slide" />
            <Carousel.Caption>
              <img
                src="https://images.squarespace-cdn.com/content/5d2f88d791aaac000135499a/1601741910897-3USUJ8D1KVMG1OMOKNJX/sanitation-foundation-logo.png?content-type=image%2Fpng"
                width="170vw"
                height="70vh"
                className="d-inline-block align-top"
                className="footer-logo"
                alt="React Bootstrap logo"
              />
              <div className="footer-text">
                <p>
                  The Sanitation Foundation, formerly known as the Foundation for New York's
                  Strongest, is the official nonprofit partner of the New York City Department of
                  Sanitation.
                </p>
                <p>
                  The Sanitation Foundation a not-for-profit organization, and is tax exempt under
                  Section 501(c)(3) of the Internal Revenue Code. Federal EIN (tax ID) number
                  81-3523248.
                </p>
                <div className="address">
                  <p>124 Worth Street, 7th Floor, Room 722</p>
                  <p>New York, NY 10013</p>
                  <p>646-885-4928</p>
                  <p style={{ color: "orange" }}>info@sanitationfoundation.org</p>
                </div>
                <p>©️2020 sanitation foundation, Inc. All rights reserved.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
