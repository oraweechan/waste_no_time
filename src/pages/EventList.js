import "./EventList.css";
import { Link } from "react-router-dom";
import React from "react";
import FormHeader from "../components/Forms/FormHeader";
import { Typography, Container } from "@mui/material";

export default function EventList({ eventData, handleEventClick }) {
  // console.log(eventData);

  const eventList = eventData?.map((item, index) => {
    // console.log(item._id)
    return (
      <React.Fragment key={item._id}>
        <Container>
        <Link to={"/event/" + item._id}>
          <div
            className="button-37"
            onClick={() => {
              handleEventClick(item._id);
            }}
          >
            <Typography> Organization Name: {item.organizationName}</Typography>
            <Typography> Clean Up Date: {item.dateCleanup.date}</Typography>
            <Typography> Event Name: {item.eventName}</Typography>
          </div>
        </Link>
        </Container>
        
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="eventListContainer">
        <FormHeader text={"Event List"} />
        <div className="eventList">{eventList}</div>
      </div>
    </>
  );
}
