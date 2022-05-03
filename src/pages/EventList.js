import "./EventList.css";
import { Link } from "react-router-dom";
import FormHeader from "../components/Forms/FormHeader";
import { Typography, Container, Paper, Box } from "@mui/material";
import React, { useContext } from "react";
import UserContext from "../context/userContext";
import SignIn from "./SignIn";

export default function EventList({ eventData, handleEventClick }) {
  const { userData } = useContext(UserContext);

  const eventList = eventData?.map((item, index) => {
    return (
      <React.Fragment key={item._id}>
        <Container>
          <Link to={"/events/" + item._id} style={{ textDecoration: "none" }}>
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
                <Paper
                  style={{ padding: 30, height: 700, textAlign: "center" }}
                >
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
      </div>

    </>
  );
}
