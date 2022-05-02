import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <div className="footer-div">
        <img
          src="https://images.squarespace-cdn.com/content/5d2f88d791aaac000135499a/1601741910897-3USUJ8D1KVMG1OMOKNJX/sanitation-foundation-logo.png?content-type=image%2Fpng"
          width="170vw"
          height="70vh"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <div className="footer-text">
          <Typography fontSize={13} color={"white"}>
            The Sanitation Foundation, formerly known as the Foundation for New York's Strongest, is
            the official nonprofit partner of the New York City Department of Sanitation.
          </Typography>
          <Typography fontSize={13} color={"white"}>
            The Sanitation Foundation a not-for-profit organization, and is tax exempt under Section
            501(c)(3) of the Internal Revenue Code. Federal EIN (tax ID) number 81-3523248.
          </Typography>
          <div className="address">
            <Typography fontSize={13} color={"white"}>
              124 Worth Street, 7th Floor, Room 722
            </Typography>
            <Typography fontSize={13} color={"white"}>
              New York, NY 10013
            </Typography>
            <Typography fontSize={13} color={"white"}>
              646-885-4928
            </Typography>
            <Typography fontSize={13} style={{ color: "orange" }}>
              info@sanitationfoundation.org
            </Typography>
            <Typography fontSize={13} color={"white"}>
              ©️2020 sanitation foundation, Inc. All rights reserved.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
