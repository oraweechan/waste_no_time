import React, { useState } from "react";
import FormField from "../components/Forms/FormField";
import { useNavigate, useParams } from "react-router-dom";
import { Paper, Grid, Box, Typography, Container } from "@mui/material";
import "./EventReport.css";

export default function EventReport() {
  const [reportData, setReportData] = useState({
    "cleanUpReport.numOfVolunteers": "",
    "cleanUpReport.numOfBags": "",
    "cleanUpReport.imgBefore": "",
    "cleanUpReport.imgAfter": "",
    'reportSubmitted': "true"
  });
  let navigate = useNavigate();

  const { eventId } = useParams();

  const handleChange = (name) => (e) => {
    e.preventDefault();
    setReportData({ ...reportData, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://waste-no-time.herokuapp.com/events/${eventId}`
       ,
        {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(reportData),
        }
      );
    } catch (error) {
      console.log("error", error.message);
    }
    navigate(`/form-submitted`);
  };

  return (
    <>
      <Box p={5}>
        <Typography fontSize={32}>Community Cleanup Report</Typography>

        <Typography>
          We at DSNY appreciate the hard work and effort you and your team has
          put in to keep our communities clean and litter free.{" "}
        </Typography>
      </Box>
      <div className="eventReportBody">
        <Container>
          <Box p={5}>
            <Paper>
              <Box p={4}>
                <Typography>Share your accomplishments with us.</Typography>
                <Typography color={"red"} mb={4}>
                  (*) indicates a required field.
                </Typography>

                <FormField
                  value={reportData["cleanUpReport.numOfBags"]}
                  handleChange={handleChange}
                  htmlFor="cleanUpReport.numOfBags"
                  label=" Number of Bags Collected*"
                  id="cleanUpReport.numOfBags"
                  handleChangeInput="cleanUpReport.numOfBags"
                />
                <FormField
                  value={reportData["cleanUpReport.numOfVolunteers"]}
                  handleChange={handleChange}
                  htmlFor="cleanUpReport.numOfVolunteers"
                  label="  Number of Volunteers*"
                  id="cleanUpReport.numOfVolunteers"
                  handleChangeInput="cleanUpReport.numOfVolunteers"
                />
                <FormField
                  value={reportData["cleanUpReport.imgBefore"]}
                  handleChange={handleChange}
                  htmlFor="cleanUpReport.imgBefore"
                  label=" Pictures from before (url)"
                  id="cleanUpReport.imgBefore"
                  handleChangeInput="cleanUpReport.imgBefore"
                />
                <FormField
                  value={reportData["cleanUpReport.imgAfter"]}
                  handleChange={handleChange}
                  htmlFor="cleanUpReport.imgAfter"
                  label="  Pictures from after (url)"
                  id="cleanUpReport.imgAfter"
                  handleChangeInput="cleanUpReport.imgAfter"
                />
              </Box>
              <Grid justifyContent={"center"} display="flex" p={2}>
                <button onClick={handleSubmit}>Submit</button>
              </Grid>
            </Paper>
          </Box>
        </Container>
      </div>
    </>
  );
}
