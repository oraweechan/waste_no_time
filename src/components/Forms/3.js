import { Box, Grid, Typography, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormField from "./FormField";

export default function ThirdStep({ formData, handleChange, step, setStep }) {
console.log(formData)
  const handleNext = () => {
      setStep((currStep) => currStep + 1);
  };

  const handlePrev = () => {
    setStep((currStep) => currStep - 1);
  };

  return (
    <div className="form-details3">

        <FormField
        value={formData["mainStreetCleaning1.mainStreet"]}
          handleChange={handleChange}
          htmlFor="mainStreetCleaning1.mainStreet"
          label=" Main Street to be Cleaned"
          id="mainStreetCleaning1.mainStreet"
          handleChangeInput="mainStreetCleaning1.mainStreet"
        />
        <FormField
          value={formData["mainStreetCleaning1.crossStreet1"]}

          handleChange={handleChange}
          htmlFor="mainStreetCleaning1.crossStreet1"
          label=" Cross Street(s)"
          id="mainStreetCleaning1.crossStreet1"
          handleChangeInput="mainStreetCleaning1.crossStreet1"
        />
        <FormField
        value={formData["mainStreetCleaning1.crossStreet2"]}
          handleChange={handleChange}
          htmlFor="mainStreetCleaning1.crossStreet2"
          label=""
          id="mainStreetCleaning1.crossStreet2"
          handleChangeInput="mainStreetCleaning1.crossStreet2"
        />
        <FormField
        value={formData["mainStreetCleaning2.mainStreet"]}
          handleChange={handleChange}
          htmlFor="mainStreetCleaning2.mainStreet"
          label=" Main Street to be Cleaned (optional)"
          id="mainStreetCleaning2.mainStreet"
          handleChangeInput="mainStreetCleaning2.mainStreet"
        />
        <FormField
        value={formData["mainStreetCleaning2.crossStreet1"]}
          handleChange={handleChange}
          htmlFor="mainStreetCleaning2.crossStreet1"
          label=" Cross Street(s) (optional)"
          id="mainStreetCleaning2.crossStreet1"
          handleChangeInput="mainStreetCleaning2.crossStreet1"
        />
        <FormField
        value={formData["mainStreetCleaning2.crossStreet2"]}
          handleChange={handleChange}
          htmlFor="mainStreetCleaning2.crossStreet2"
          label=""
          id="mainStreetCleaning2.crossStreet2"
          handleChangeInput="mainStreetCleaning2.crossStreet2"
        />
        <FormField
        value={formData["mainStreetCleaning3.mainStreet"]}
          handleChange={handleChange}
          htmlFor="mainStreetCleaning3.mainStreet"
          label=" Main Street to be Cleaned (optional)"
          id="mainStreetCleaning3.mainStreet"
          handleChangeInput="mainStreetCleaning3.mainStreet"
        />
        <FormField
        value={formData["mainStreetCleaning3.crossStreet1"]}
          handleChange={handleChange}
          htmlFor="mainStreetCleaning3.crossStreet1"
          label=" Cross Street(s) (optional)"
          id="mainStreetCleaning3.crossStreet1"
          handleChangeInput="mainStreetCleaning3.crossStreet1"
        />
        <FormField
        value={formData["mainStreetCleaning3.crossStreet2"]}
          handleChange={handleChange}
          htmlFor="mainStreetCleaning3.crossStreet2"
          label=""
          id="mainStreetCleaning3.crossStreet2"
          handleChangeInput="mainStreetCleaning3.crossStreet2"
        />
        <Typography>
          Enter the location(s) where garbage will be placed for your
          collection. <br></br> The Trash is expected to be on location at the
          end of your cleanup.{" "}
        </Typography>
        <FormField
        value={formData["bagPickupLocation1.bagPickupLocation"]}
          handleChange={handleChange}
          htmlFor="bagPickupLocation1.bagPickupLocation"
          label="Bag Pickup Location"
          id="bagPickupLocation1.bagPickupLocation"
          handleChangeInput="bagPickupLocation1.bagPickupLocation"
        />
        Check One:
        <Grid item xs={6}>
          <FormControlLabel
            label="At the Intersection"
            value="true"
            control={
              <Checkbox
                onChange={handleChange("bagPickupLocation1.atIntersection")}
                defaultValue={false}
                required
              />
            }
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            label="In Front of a Designated Address"
            value="true"
            control={
              <Checkbox
                onChange={handleChange("bagPickupLocation1.inFront")}
                defaultValue={false}
                required
              />
            }
          />
        </Grid>
        <FormField
        value={formData["bagPickupLocation2.bagPickupLocation"]}
          handleChange={handleChange}
          htmlFor="bagPickupLocation2.bagPickupLocation"
          label="Bag Pickup Location (optional)"
          id="bagPickupLocation2.bagPickupLocation"
          handleChangeInput="bagPickupLocation2.bagPickupLocation"
        />
        Check One:
        <Grid item xs={6}>
          <FormControlLabel
            label="At the Intersection"
            value="true"
            control={
              <Checkbox
                onChange={handleChange("bagPickupLocation2.atIntersection")}
                defaultValue={false}
                required
              />
            }
          />
        </Grid>
        <Grid item xs={6}>
          {" "}
          <FormControlLabel
            label="In Front of a Designated Address"
            value="true"
            control={
              <Checkbox
                onChange={handleChange("bagPickupLocation2.inFront")}
                defaultValue={false}
                required
              />
            }
          />
        </Grid>
        <FormField
        value={formData["bagPickupLocation3.bagPickupLocation"]}
          handleChange={handleChange}
          htmlFor="bagPickupLocation3.bagPickupLocation"
          label="Bag Pickup Location (optional)"
          id="bagPickupLocation3.bagPickupLocation"
          handleChangeInput="bagPickupLocation3.bagPickupLocation"
        />
        Check One:
        <Grid item xs={6}>
          <FormControlLabel
            label="At the Intersection"
            value="true"
            control={
              <Checkbox
                onChange={handleChange("bagPickupLocation3.atIntersection")}
                defaultValue={false}
                required
              />
            }
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            label="In Front of a Designated Address"
            value="true"
            control={
              <Checkbox
                onChange={handleChange("bagPickupLocation3.inFront")}
                defaultValue={false}
                required
              />
            }
          />
        </Grid>
        <Typography>What are you collecting?</Typography>
        <Typography>Check One:</Typography>
        <Grid item xs={6}>
          <FormControlLabel
            label="Litter (wrappers, cups, etc.)"
            value="true"
            control={
              <Checkbox
                onChange={handleChange("litter")}
                defaultValue={false}
                required
              />
            }
          />
        </Grid>
        <Grid item xs={6}>
          {" "}
          <FormControlLabel
            label="Larger items (tires,wood,etc.)"
            value="true"
            control={
              <Checkbox
                onChange={handleChange("largerItems")}
                defaultValue={false}
                required
              />
            }
          />
        </Grid>
        <button onClick={handlePrev}>Back</button>
        <button onClick={handleNext}>{step === 4 ? "Submit" : "Next"}</button>

    </div>
  );
}
