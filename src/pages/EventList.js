import "./EventList.css";
import { Link } from "react-router-dom";
import FormHeader from "../components/Forms/FormHeader";
import { Typography, Container } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function EventList({ setSelectedEvent }) {
  const [eventData, setEventData] = useState();

  const MakeAPICall = async () => {
    const res = await fetch("https://waste-no-time.herokuapp.com/events");
    const data = await res.json();
    setEventData(data);
  };

  useEffect(() => {
    MakeAPICall();
  }, []);

  const handleEventClick = (data) => {
    setSelectedEvent(data);
  };

  const eventList = eventData?.map((item, index) => {
    // console.log(item._id)
    return (
      <React.Fragment key={item._id}>
        <Container>
          <Link to={"/event/" + item._id} style={{ textDecoration: 'none' }}>
            <div
              className="eventItem"
              onClick={() => {
                handleEventClick(item._id);
              }}
            >
              <Typography>
                {" "}
                Organization Name: {item.organizationName}
              </Typography>
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
