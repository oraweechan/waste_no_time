import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "./Section4.css";

export default function Section4() {
  const coolLinePattern = ">───────⇌• :♻️: •⇋───────<";

  // These will be updated once we start getting data back from forms/backend database
  const [activeVolunteerGroups, setActiveVolunteerGroups] = useState(32);
  const [bagsCollected, setBagsCollected] = useState(15000);

  return (
    <>
      <div className="section4-div">
        <h2>Making An Impact</h2>
        <h4>{coolLinePattern}</h4>
        <div className="all-cards-section4">
          <div className="card-1">
            <Card
              style={{ width: "22rem", borderRadius: "1rem", boxShadow: "15px 10px 20px gray" }}
            >
              <Card.Body>
                <Card.Title className="card1-title">{activeVolunteerGroups}</Card.Title>
                <hr></hr>
                <Card.Text className="card1-text">Active Volunteer Groups</Card.Text>
                <Card.Img variant="top" src="corporate-volunteers.jpg" />
              </Card.Body>
            </Card>
          </div>
          <div className="card-2">
            <Card
              style={{ width: "22rem", borderRadius: "1rem", boxShadow: "15px 10px 20px gray" }}
            >
              <Card.Body>
                <Card.Title className="card2-title">{bagsCollected}</Card.Title>
                <hr></hr>
                <Card.Text className="card2-text">Trash Bags Collected</Card.Text>
                <Card.Img variant="top" src="PXL_20210710_172634112.jpg" height="212vh" />
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
