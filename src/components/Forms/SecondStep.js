import { useForm } from "react-hook-form";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Second({ handleChange, step, setStep }) {
  // console.log(formData, handleInputData)
  console.log(setStep);
  console.log(step);
  let navigate = useNavigate();

  const handleNext = () => {
    if (step > 0) {
      setStep((currStep) => currStep + 1);
      navigate(`/form/${step}`);
    }
  };

  return (
    <div className="form-details2">
      <Box component="form">
        <Grid container>
          <Grid item xs={6}>
            <label htmlFor="organizationName">Organization Name</label>
          </Grid>
          <Grid item xs={6}>
            <input
              id="organizationName"
              type="text"
              onChange={handleChange("organizationName")}
            />
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="eventName">Event Name</label>
          </Grid>
          <Grid item xs={6}>
            <input
              id="eventName"
              type="text"
              onChange={handleChange("eventName")}
            />
          </Grid>

          <Grid item xs={6}>
            <label htmlFor="cleanupLocation">Cleanup Event Location</label>
          </Grid>
          <Grid item xs={6}>
            <input
              id="cleanupLocation"
              type="text"
              onChange={handleChange("cleanupLocation")}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Both contacts must be prepared to answer all questions for this
              cleanup event.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Primary Contact:</Typography>
          </Grid>

          <Grid item xs={6}>
            <label htmlFor="cleanupLocation">Cleanup Event Location</label>
          </Grid>

          <Grid item xs={6}>
            <input
              id="cleanupLocation"
              type="text"
              onChange={handleChange("cleanupLocation")}
            />
          </Grid>

          {/* <Grid item xs={12}>
            <button
              disabled={step === 2}
              onClick={() => {
                setStep((step) => step - 1);
              }}
            >
              Back
            </button>
            <button
              // onClick={() => {
              //   if (step === 4 - 1) {
              //     alert("FORM SUBMITTED");
              //     // console.log(formData);
              //   } else {
              //     setStep((currStep) => currStep + 1);
              //   }
              // }}
              onClick={handleNext}
            >
              {step === 4 - 1 ? "Submit" : "Next"}
            </button>
          </Grid> */}
        </Grid>
      </Box>
    </div>
  );
}
