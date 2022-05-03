import React, { useEffect, useState } from "react";
import EventDocField from "../components/EventDocField";
import { Paper, Grid, Typography, Container, Box } from "@mui/material";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";

export default function EventPage({ eventId }) {
  const [eventDoc, setEventDoc] = useState({});
  let navigate = useNavigate();

  const requestReport = () => {
    navigate(`/events/report/${eventId}`);
  };

  const makeAPICall = () => {
    fetch(`https://waste-no-time.herokuapp.com/events/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        setEventDoc(data);
      });
  };

  useEffect(() => {
    makeAPICall();
  }, [eventId]);

  const handleClick = () => {
    navigate(`/events`);
  };


  let reportJSX = "";
  if (eventDoc.reportSubmitted) {
    reportJSX = (
      <div className="eventReport">
        <Box mb={4}>
          <EventDocField
            value={eventDoc.cleanUpReport.numOfVolunteers}
            label="Volunteers Attended:"
          />
          <EventDocField
            value={eventDoc.cleanUpReport.numOfBags}
            label="Number of Bags Collected:"
          />
          <EventDocField
            value={eventDoc.cleanUpReport.numOfBags}
            label="Pictures from Before:"
          />
          {eventDoc.cleanUpReport.imgBefore === "" ? (
            "None"
          ) : (
            <img src={eventDoc.cleanUpReport.imgBefore} alt="" />
          )}

          <EventDocField
            picURL={eventDoc.cleanUpReport.imgAfter}
            label="Pictures from After:"
          />
        </Box>
      </div>
    );
  }

  let eventJSX = "";
  if (eventDoc.organizationName) {
    eventJSX = (
      <div className="singleEvent">
        <Grid container>
          <Grid xs={12}>
            <Typography mb={2} fontWeight={"bold"} fontSize={24}>
              Volunteer Group Signup Form
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Grid item xs={12}>
              <Typography
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
                display="inline"
              >
                Organization and Event
              </Typography>
            </Grid>
            <EventDocField
              value={eventDoc.organizationName}
              label="Organization Name:"
            />
            <EventDocField
              value={eventDoc.eventName}
              id="eventName"
              label="Event Name (optional):"
            />
            <EventDocField
              value={eventDoc.cleanupLocation}
              id="cleanupLocation"
              label="Cleanup Event Location:"
            />
            <Grid item mt={3} xs={12}>
              <Typography
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
                display="inline"
              >
                Primary Contact
              </Typography>
            </Grid>
            <EventDocField
              value={eventDoc.primaryContact.firstName}
              label="First Name:"
            />
            <EventDocField
              value={eventDoc.primaryContact.lastName}
              label="Last Name:"
            />
            <EventDocField
              value={eventDoc.primaryContact.address}
              label="Address:"
            />
            <EventDocField
              value={eventDoc.primaryContact.mobilePhone}
              label="Mobile Phone:"
            />
            <EventDocField
              value={eventDoc.primaryContact.email}
              label="Email:"
            />
            <Grid item mt={4} xs={12}>
              <Typography
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
                display="inline"
              >
                Secondary Contact
              </Typography>
            </Grid>
            <EventDocField
              value={eventDoc.secondaryContact.firstName}
              label="First Name:"
            />
            <EventDocField
              value={eventDoc.secondaryContact.lastName}
              label="Last Name:"
            />
            <EventDocField
              value={eventDoc.secondaryContact.address}
              label="Address:"
            />
            <EventDocField
              value={eventDoc.secondaryContact.mobilePhone}
              label="Mobile Phone:"
            />
            <EventDocField
              value={eventDoc.secondaryContact.email}
              label="Email:"
            />
            <Grid item mt={4} xs={12}>
              <Typography
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
                display="inline"
              >
                Date Cleanup and Time
              </Typography>
            </Grid>
            <EventDocField
              value={eventDoc.dateCleanup.date}
              label="Date of Cleanup:"
            />
            <EventDocField
              value={eventDoc.dateCleanup.startTime}
              label="Start Time:"
            />
            <EventDocField
              value={eventDoc.dateCleanup.endTime}
              label="End Time:"
            />
            <EventDocField value={eventDoc.rainDate.date} label="Rain Date:" />
            <EventDocField
              value={eventDoc.rainDate.startTime}
              label="Rain Date - Start Time:"
            />{" "}
            <EventDocField
              value={eventDoc.rainDate.endTime}
              label="Rain Date- End Time:"
            />
            <Grid item mt={3} xs={12}>
              <Typography
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
                display="inline"
              >
                Street Cleaning
              </Typography>
            </Grid>
            <EventDocField
              value={eventDoc.mainStreetCleaning1.mainStreet}
              label=" Main Street to be Cleaned:"
            />
            <EventDocField
              value={eventDoc.mainStreetCleaning1.crossStreet1}
              label=" Cross Street(s):"
            />
            <EventDocField
              value={eventDoc.mainStreetCleaning1.crossStreet2}
              htmlFor="mainStreetCleaning1.crossStreet2"
              label="Cross Street(s):"
            />
            <EventDocField
              value={eventDoc.mainStreetCleaning2.mainStreet}
              label=" Main Street to be Cleaned (optional):"
            />
            <EventDocField
              value={eventDoc.mainStreetCleaning2.crossStreet1}
              label=" Cross Street(s) (optional):"
            />
            <EventDocField
              value={eventDoc.mainStreetCleaning2.crossStreet2}
              label="Cross Street(s) (optional):"
            />
            <EventDocField
              value={eventDoc.mainStreetCleaning3.mainStreet}
              label=" Main Street to be Cleaned (optional):"
            />
            <EventDocField
              value={eventDoc.mainStreetCleaning3.crossStreet1}
              label=" Cross Street(s) (optional):"
            />
            <EventDocField
              value={eventDoc.mainStreetCleaning3.crossStreet2}
              label="Cross Street(s) (optional):"
            />
          </Grid>

          <Grid item xs={6}>
            {/* step 2 */}

            <Grid item xs={12}>
              <Typography
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
                display="inline"
              >
                Bag Pickup Details
              </Typography>
            </Grid>
            <EventDocField
              value={eventDoc.bagPickupLocation1.bagPickupLocation}
              label="Bag Pickup Location:"
            />
            <EventDocField
              value={
                eventDoc.bagPickupLocation1.atIntersection === "true"
                  ? "Yes"
                  : "No"
              }
              label="At the Intersection:"
            />
            <EventDocField
              value={
                eventDoc.bagPickupLocation1.inFront === "true" ? "Yes" : "No"
              }
              label="In Front of a Designated Address:"
            />
            <Grid item mt={3} xs={12}>
              <Typography
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
                display="inline"
              >
                Bag Pickup Details (optional)
              </Typography>
            </Grid>
            <EventDocField
              value={eventDoc.bagPickupLocation2.bagPickupLocation}
              label="Bag Pickup Location (optional):"
            />
            <EventDocField
              value={
                eventDoc.bagPickupLocation2.atIntersection === "true"
                  ? "Yes"
                  : "No"
              }
              label="At the Intersection:"
            />
            <EventDocField
              value={
                eventDoc.bagPickupLocation2.inFront === "true" ? "Yes" : "No"
              }
              label="In Front of a Designated Address:"
            />
            <Grid item mt={3} xs={12}>
              <Typography
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
                display="inline"
              >
                Bag Pickup Details (optional)
              </Typography>
            </Grid>
            <EventDocField
              value={eventDoc.bagPickupLocation3.bagPickupLocation}
              label="Bag Pickup Location (optional):"
            />
            <EventDocField
              value={
                eventDoc.bagPickupLocation3.atIntersection === "true"
                  ? "Yes"
                  : "No"
              }
              label="At the Intersection:"
            />
            <EventDocField
              value={
                eventDoc.bagPickupLocation3.inFront === "true" ? "Yes" : "No"
              }
              label="In Front of a Designated Address:"
            />
            <Grid item mt={3} xs={12}>
              <Typography
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
                display="inline"
              >
                Item Collection
              </Typography>
            </Grid>
            <EventDocField
              value={eventDoc.litter === "true" ? "Yes" : "No"}
              label="Litter (wrappers, cups, etc.):"
            />
            <EventDocField
              value={eventDoc.largerItems === "true" ? "Yes" : "No"}
              label="Larger items (tires,wood,etc.):"
            />
            {/* step 3 */}
            <Grid item mt={3} xs={12}>
              <Typography
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
                display="inline"
              >
                Supplies Needed
              </Typography>
            </Grid>
            <EventDocField
              value={eventDoc.requireSupplies === "true" ? "Yes" : "No"}
              label="Are supplies required?:"
            />
            <EventDocField
              value={eventDoc.brooms}
              id="brooms"
              label="Brooms:"
            />
            <EventDocField
              value={eventDoc.shovels}
              id="shovels"
              label="Shovels:"
            />
            <EventDocField value={eventDoc.rakes} id="rakes" label="Rakes:" />
            <EventDocField
              value={eventDoc.litterPickers}
              label="Litter Pickers:"
            />
            <EventDocField value={eventDoc.gloves} label="Gloves:" />
            <Grid item mt={3} xs={12}>
              <Typography
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
                display="inline"
              >
                Volunteers
              </Typography>
            </Grid>
            <EventDocField
              value={eventDoc.volunteerCount}
              label="How many volunteers do you expect?:"
            />
            <EventDocField
              value={eventDoc.consentToPublic === "true" ? "Yes" : "No"}
              label="Consent to Public?:"
            />
            <Box mt={5}>
              <Button onClick={handleClick}>Back to events</Button>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }

  return (
    <>
      <div className="singleEventContainer">
        <Container>
          <Box p={5}>
            <Paper>
              <Box p={3}>
                <Typography mb={2} fontWeight={"bold"} fontSize={24}>
                  Cleanup Report
                </Typography>
                <Typography mb={2}>
                  If no cleanup report present, click below to request
                  form:
                </Typography>
                {reportJSX}
                <Button onClick={requestReport}>Cleanup Report Form</Button>
              </Box>

              <Box p={3} mt={-2}>
                {eventJSX}
              </Box>
            </Paper>
          </Box>
        </Container>
      </div>
    </>
  );
}