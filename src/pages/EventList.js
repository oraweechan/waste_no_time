import "./EventList.css";
import { Link } from "react-router-dom";
import FormHeader from "../components/Forms/FormHeader";
import { Typography, Container, Paper, Box } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import UserContext from "../context/userContext";
import SignIn from "./SignIn";

export default function EventList({ setSelectedEvent }) {
  const [eventData, setEventData] = useState();
  const { userData } = useContext(UserContext);

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
    return (
      <React.Fragment key={item._id}>
        <Container>
          <Link to={"/event/" + item._id} style={{ textDecoration: "none" }}>
            <div
              className="eventItem"
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
    // <EventReport event={item} />;
  });

  return (
    <>
      <div className="loginMessage">
        {userData.user ? (
          <div className="eventListContainer">
            <FormHeader text={"Event List"} />
            <div className="eventList">{eventList}</div>
          </div>
        ) : (
          <>
            <div className="invitationToLogin">
              <Box>
                <Paper style={{ padding: 30, height: 700, textAlign: "center" }}>
                  <Box mb={-7}>
                    <Typography fontSize={24}>Authorization Needed</Typography>
                    {/* <Typography>Sign in to view page</Typography> */}
                  </Box>

                  <SignIn />
                </Paper>
              </Box>
            </div>
          </>
        )}
        {/* {feedData ? {posts} : "" } */}
      </div>

      {/* <div className="eventListContainer">
        <FormHeader text={"Event List"} />
        <div className="eventList">{eventList}</div>
      </div> */}
    </>
  );
}
