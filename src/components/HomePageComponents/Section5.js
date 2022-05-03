import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "./Section5.css";

export default function Section5({eventData}) {

  return (
    <>
      <div className="section5-div">
        <h2>Attend an Upcoming Volunteer Event</h2>
        <div className="all-section5-cards">
          <div className="card-1">
            <Card
              style={{ width: "22rem", borderRadius: "1rem", boxShadow: "15px 10px 20px gray" }}
            >
              <Card.Body>
                <Card.Text>📆 date</Card.Text>
                <Card.Text>📍 location</Card.Text>
                <Card.Text>⏰ time of event</Card.Text>
                <hr />
                <Card.Title>volunteer group name</Card.Title>
                <Card.Text>
                  brief description of the event, organizer, what the goal is, etc.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="google.com">
                  <Button>EVENT DETAILS</Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="card-2">
            <Card
              style={{ width: "22rem", borderRadius: "1rem", boxShadow: "15px 10px 20px gray" }}
            >
              <Card.Body>
                <Card.Text>📆 date</Card.Text>
                <Card.Text>📍 location</Card.Text>
                <Card.Text>⏰ time of event</Card.Text>
                <hr />
                <Card.Title>volunteer group name</Card.Title>
                <Card.Text>
                  brief description of the event, organizer, what the goal is, etc.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="google.com">
                  <Button>EVENT DETAILS</Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="card-3">
            <Card
              style={{ width: "22rem", borderRadius: "1rem", boxShadow: "15px 10px 20px gray" }}
            >
              <Card.Body>
                <Card.Text>📆 date</Card.Text>
                <Card.Text>📍 location</Card.Text>
                <Card.Text>⏰ time of event</Card.Text>
                <hr />
                <Card.Title>volunteer group name</Card.Title>
                <Card.Text>
                  brief description of the event, organizer, what the goal is, etc.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="google.com">
                  <Button>EVENT DETAILS</Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <Button className="all-events-button">See All Events</Button>
      </div>
    </>
  );
}
