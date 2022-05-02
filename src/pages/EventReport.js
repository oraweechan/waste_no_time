import React, { useState } from "react";
import FormHeader from "../components/Forms/FormHeader";
import "./EventReport.css";
import { Grid, Typography, FormControlLabel, Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormField from "../components/Forms/FormField.js";
import "../components/Forms/ThirdStep.css";

export default function EventReport() {
  const [numberOfBagsCollected, setNumberOfBagsCollected] = useState(0);
  const [numberOfVolunteers, setNumberOfVolunteers] = useState(0);
  const [beforeImages, setBeforeImages] = useState([]);
  const [afterImages, setAfterImages] = useState([]);
  const [eventID, setEventID] = useState(0);

  let imagesPreview = [];

  const beforeImageSelectHandler = (image) => {
    for (let i = 0; i < image.target.files.length; i++) {
      beforeImages.push(image.target.files[i]);
      imagesPreview.push(URL.createObjectURL(image.target.files[i]));
    }
    console.log(beforeImages);
    console.log(imagesPreview);
  };

  const afterImageSelectHandler = (image) => {
    for (let i = 0; i < image.target.files.length; i++) {
      afterImages.push(image.target.files[i]);
      imagesPreview.push(URL.createObjectURL(image.target.files[i]));
    }
    console.log(afterImages);
    console.log(imagesPreview);
  };

  const handleBagChange = (e) => {
    setNumberOfBagsCollected(e.target.value);
  };

  const handleVolunteerChange = (e) => {
    setNumberOfVolunteers(e.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(e.target.numberOfBagsCollected.value);
    // console.log(e.target.picturesFromBefore.files);
    // console.log(e.target.picturesFromAfter.files);

    e.preventDefault();
    fetch("http://localhost:8080/eventsreport", {
      method: "POST",
      body: JSON.stringify({
        numberOfVolunteers: e.target.numberOfVolunteers.value,
        numberOfBagsCollected: e.target.numberOfBagsCollected.value,
        beforePictures: e.target.picturesFromBefore.files,
        afterPictures: e.target.picturesFromAfter.files,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setNumberOfBagsCollected(0);
        setNumberOfVolunteers(0);
        setBeforeImages([]);
        setAfterImages([]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="eventReportBody">
        <div className="eventReportForm">
          <h3 style={{ textAlign: "center" }}>Clean-Up Report</h3>
          <hr />
          <p>
            Share your accomplishments with us. Upload any photos from before, during, and after
            your clean up event.
          </p>
          <p style={{ color: "red" }}>( * ) indicates a required field.</p>
          <br />
          <div className="eventFormContent">
            <form onSubmit={handleSubmit}>
              <Grid container>
                <Grid item xs={6}>
                  <label htmlFor="numberOfBagsCollected">
                    <strong>
                      Number of Bags Collected <span style={{ color: "red" }}>*</span>
                    </strong>
                  </label>
                </Grid>
                <Grid item xs={6}>
                  <input
                    className="formInput"
                    type="number"
                    name="numberOfBagsCollected"
                    onChange={(e) => handleBagChange(e)}
                    value={numberOfBagsCollected}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="numberOfVolunteers">
                    <strong>
                      Number of Volunteers <span style={{ color: "red" }}>*</span>
                    </strong>
                  </label>
                </Grid>
                <Grid item xs={6}>
                  <input
                    className="formInput"
                    type="number"
                    name="numberOfVolunteers"
                    onChange={(e) => handleVolunteerChange(e)}
                    value={numberOfVolunteers}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="picturesFromBefore">
                    <strong>Pictures from before</strong>
                  </label>
                </Grid>
                <Grid item xs={6}>
                  <input
                    className="formInput"
                    multiple
                    type="file"
                    name="picturesFromBefore"
                    onChange={beforeImageSelectHandler}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="picturesFromAfter">
                    <strong>Pictures from after</strong>
                  </label>
                </Grid>
                <Grid item xs={6}>
                  <input
                    className="formInput"
                    multiple
                    type="file"
                    name="picturesFromAfter"
                    onChange={afterImageSelectHandler}
                  />
                </Grid>
                <input type="submit" value="Submit" />
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
