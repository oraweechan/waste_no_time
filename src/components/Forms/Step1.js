import { useForm } from "react-hook-form";
import { Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Step1() {
  const { handleSubmit, control } = useForm();
  const [expandAccordian, setExpandAccordian] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    if (expandAccordian) {
      setExpandAccordian(false);
    } else setExpandAccordian(true);
  };

  const handleCheckSelection = () => {
    if (checked) {
      setChecked(false);
    } else setChecked(true);
  };

  return (
    <div>
      <form>
        <Grid justifyContent="center" container>
          <Grid item xs={12}>
            <Typography>
              REVIEW THE GUIDELINES BELOW PRIOR TO SUBMISSION
            </Typography>
          </Grid>

          <Grid item>
            <Accordion expanded={expandAccordian === true}>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography align="left">
                  The Department of Sanitation (DSNY) provides volunteers and
                  community groups with tools (shovels, rakes and brooms),
                  disposable supplies (bags and gloves), and trash collection.
                  It is not necessary to borrow tools from DSNY to receive trash
                  collection for your cleanup.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography align="left" style={{ marginBottom: "1rem" }}>
                  Volunteer Cleanups are intended to clean public streets and
                  sidewalks, excluding parks and beaches. Tools may not be used
                  to clean private property, such as vacant lots, yards,
                  abandoned or occupied houses.
                </Typography>
                <Typography align="left" style={{ marginBottom: "1rem" }}>
                  Trash is to be bagged and placed at an intersection or address
                  on your cleanup route. The local offices will be notified of
                  your event and bag placement. If the pickup location changes,
                  you must notify us by email immediately.
                </Typography>
                <Typography align="left" style={{ marginBottom: "1rem" }}>
                  It is your responsibility to pick up and return the tools
                  borrowed from DSNY. DSNY loans one tool per volunteer. You
                  will receive a tool loan confirmation email with the location
                  and contact information.
                </Typography>
                <Typography align="left" style={{ marginBottom: "1rem" }}>
                  Any damaged or missing equipment must be replaced by your
                  group. Return replacement items along with the tools borrowed
                  on your scheduled tool return date. Bags and gloves do not
                  need to be returned.
                </Typography>
                <Typography align="left" style={{ marginBottom: "1rem" }}>
                  DSNY requires two weeks' notice to schedule a Volunteer
                  Cleanup. If there is a change to how many tools you need or
                  where and when you want us to pick up the trash, 3-day notice
                  is required. We also need to know about cancellations or
                  changes to date, time and location as soon as possible.
                </Typography>
                <Typography align="left">
                  DSNY reserves the right to list and promote your cleanup on
                  its agency website and social media platforms. If you do not
                  want your event listed, please check the box below.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid container justifyContent="center" onClick={handleChange}>
            {!expandAccordian ? "click to expand" : "click to collapse"}
            {!expandAccordian ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </Grid>
          <FormGroup align="center">
            <FormControlLabel
              control={
                <Checkbox value={checked} onClick={handleCheckSelection} />
              }
              label="I AGREE TO THESE TERMS AND CONDITIONS"
            />
          </FormGroup>
        </Grid>
      </form>
    </div>
  );
}
