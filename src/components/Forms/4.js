import { Box, Grid, Typography, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormField from "./FormField";

export default function ThirdStep({
  formData,
  handleSubmit,
  handleChange,
  step,
  setStep,
}) {
  let navigate = useNavigate();

  const handlePrev = () => {
    setStep((currStep) => currStep - 1);
  };
  console.log(formData);
  return (
    <div className="form-details4">
      <Typography>
        How many tools do you need? We only provide one tool and one pair of
        gloves per volunteer.
      </Typography>
      <Typography>
        Please note - Bags and gloves are supplied depending on availability
      </Typography>
      <FormControlLabel
        label="Check if you do not require any supplies"
        value="true"
        control={
          <Checkbox
            onChange={handleChange("requiredSupplies")}
            value={false}
            required
          />
        }
      />
      <FormField
        value={formData.brooms}
        handleChange={handleChange}
        htmlFor="brooms"
        handleChangeInput="brooms"
        id="brooms"
        label="brooms"
      />

      <FormField
        value={formData.shovels}
        handleChange={handleChange}
        htmlFor="shovels"
        handleChangeInput="shovels"
        id="shovels"
        label="shovels"
      />
      <FormField
        value={formData.rakes}
        handleChange={handleChange}
        htmlFor="rakes"
        handleChangeInput="rakes"
        id="rakes"
        label="rakes"
      />
      <FormField
        value={formData.litterPickers}
        handleChange={handleChange}
        htmlFor="litterPickers"
        handleChangeInput="litterPickers"
        id="litterPickers"
        label="litterPickers"
      />
      <FormField
        value={formData.gloves}
        handleChange={handleChange}
        htmlFor="gloves"
        handleChangeInput="gloves"
        id="gloves"
        label="gloves"
      />
      <FormField
        value={formData.volunteerCount}
        handleChange={handleChange}
        htmlFor="volunteerCount"
        handleChangeInput="volunteerCount"
        id="volunteerCount"
        label="volunteerCount"
      />
      <Typography>
        The Department of Sanitation will post your event publicly online for
        other volunteers to view and join. Do you consent to have your event
        shared publicly?
      </Typography>
      <Typography>Please select one option below</Typography>
      <Grid item xs={6}>
        {" "}
        <FormControlLabel
          label="Yes, DSNY can share my event publicly online."
          value="true"
          control={
            <Checkbox
              onChange={handleChange("consentToPublic")}
              defaultValue={false}
              required
            />
          }
        />
      </Grid>
      <Grid item xs={6}>
        {" "}
        <FormControlLabel
          label="No, I do not consent to DSNY sharing my event publicly online."
          value="false"
          control={
            <Checkbox
              onChange={handleChange("consentToPublic")}
              defaultValue={false}
              required
            />
          }
        />
      </Grid>
      <button onClick={handlePrev}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
