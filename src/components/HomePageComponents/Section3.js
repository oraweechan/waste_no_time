import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "./Section3.css";

export default function Section3() {
  return (
    <>
      <div className="section3-div">
        <h2>Get Inovlved</h2>
        <div className="all-cards">
          <div className="card-1">
            <Card style={{ width: "22rem", boxShadow: "15px 10px 20px gray" }}>
              <Card.Img variant="top" src="HowardBeachCleanUp(5)_091920.jpg" height="235vh" />
              <Card.Body>
                <Card.Title>Corporate Volunteers</Card.Title>
                <Card.Text>
                  Engage your employees in a team-building volunteer project. We offer projects that
                  help advance the goal of zero waste to landfills. We now offer virtual workshops
                  tailored to your organization.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="google.com">
                  <Button>sign up</Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="card-2">
            <Card style={{ width: "22rem", boxShadow: "15px 10px 20px gray" }}>
              <Card.Img variant="top" src="PXL_20210710_161627136.MP.jpg" height="235vh" />
              <Card.Body>
                <Card.Title>Community Clean-Ups</Card.Title>
                <Card.Text>
                  Want to clean up your neighborhood? If you get a group together of two or more
                  people, we will provide you with everything you need to get started including
                  loaning tools and planning logistics.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="google.com">
                  <Button>organize today</Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="card-3">
            <Card style={{ width: "22rem", boxShadow: "15px 10px 20px gray" }}>
              <Card.Img variant="top" src="Copy of BL1_8280.jpg" height="235vh" />
              <Card.Body>
                <Card.Title>Individual Opportunities</Card.Title>
                <Card.Text>
                  If you have a unique skill and want to use it for good - we want to hear from you!
                  We need passionate individuals to pitch in. Let us know if you're interested and
                  we'll react out when the right project comes along.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="google.com">
                  <Button>get in touch</Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
