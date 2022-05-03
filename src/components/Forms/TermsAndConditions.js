import { FormControlLabel, Grid, Typography, Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import "./TermsAndConditions.css";

export default function TermsAndConditions({ handleChange, handleNext }) {
  const [expand, setExpand] = useState(false);

  const handleAccordion = () => {
    if (expand) {
      setExpand(false);
    } else setExpand(true);
  };

  return (
    <form className="formDetails1">
      <Grid justifyContent="center" container>
        <Grid item xs={12} justifyContent="center" container>
          <Box sx={{ fontWeight: "bold", m: 1, fontSize: 18 }}>
            REVIEW THE GUIDELINES BELOW PRIOR TO SUBMISSION
          </Box>
        </Grid>

        <Grid item>
          <Accordion expanded={expand === true}>
            <AccordionSummary
              onClick={handleAccordion}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography align="left">
                The Department of Sanitation (DSNY) provides volunteers and
                community groups with tools (shovels, rakes and brooms),
                disposable supplies (bags and gloves), and trash collection. It
                is not necessary to borrow tools from DSNY to receive trash
                collection for your cleanup.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography align="left" style={{ marginBottom: "1rem" }}>
                Volunteer Cleanups are intended to clean public streets and
                sidewalks, excluding parks and beaches. Tools may not be used to
                clean private property, such as vacant lots, yards, abandoned or
                occupied houses.
              </Typography>
              <Typography align="left" style={{ marginBottom: "1rem" }}>
                Trash is to be bagged and placed at an intersection or address
                on your cleanup route. The local offices will be notified of
                your event and bag placement. If the pickup location changes,
                you must notify us by email immediately.
              </Typography>
              <Typography align="left" style={{ marginBottom: "1rem" }}>
                It is your responsibility to pick up and return the tools
                borrowed from DSNY. DSNY loans one tool per volunteer. You will
                receive a tool loan confirmation email with the location and
                contact information.
              </Typography>
              <Typography align="left" style={{ marginBottom: "1rem" }}>
                Any damaged or missing equipment must be replaced by your group.
                Return replacement items along with the tools borrowed on your
                scheduled tool return date. Bags and gloves do not need to be
                returned.
              </Typography>
              <Typography align="left" style={{ marginBottom: "1rem" }}>
                DSNY requires two weeks' notice to schedule a Volunteer Cleanup.
                If there is a change to how many tools you need or where and
                when you want us to pick up the trash, 3-day notice is required.
                We also need to know about cancellations or changes to date,
                time and location as soon as possible.
              </Typography>
              <Typography align="left">
                DSNY reserves the right to list and promote your cleanup on its
                agency website and social media platforms. If you do not want
                your event listed, please check the box below.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid
          container
          justifyContent="center"
          onClick={handleAccordion}
          mt={3}
        >
          {!expand ? (
            <Typography>CLICK TO EXPAND</Typography>
          ) : (
            <Typography>CLICK TO COLLAPSE</Typography>
          )}
          {!expand ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </Grid>
        <FormControlLabel
          required
          label="I AGREE TO THESE TERMS AND CONDITIONS"
          control={
            <Checkbox
              onChange={handleChange("termsAndConditions")}
              defaultValue={false}
              required
            />
          }
        />
      </Grid>
      <div className="buttonBegin">
        <button
        onClick={handleNext}
          // onClick={handleNext("termsAndConditions")}
          type="submit"
          variant="contained"
        >
          Begin Application
        </button>
      </div>
    </form>
  );
}
