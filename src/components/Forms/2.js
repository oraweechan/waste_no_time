import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormField from "./FormField";

export default function Second({ handleChange, step, setStep, formData }) {
  const handleNext = () => {
    if (step > 0) {
      setStep((currStep) => currStep + 1);
    }
  };

  return (
    <div className="form-details2">
      <FormField
        value={formData.organizationName}
        handleChangeInput="organizationName"
        handleChange={handleChange}
        htmlFor="organizationName"
        id="organizationName"
        label="Organization Name"
      />
      <FormField
        value={formData.eventName}
        handleChangeInput="eventName"
        handleChange={handleChange}
        htmlFor="eventName"
        id="eventName"
        label="Event Name"
      />
      <FormField
        value={formData.cleanupLocation}
        handleChangeInput="cleanupLocation"
        handleChange={handleChange}
        htmlFor="cleanupLocation"
        id="cleanupLocation"
        label="Cleanup Event Location"
      />

      <Grid item xs={12}>
        <Typography>
          Both contacts must be prepared to answer all questions for this
          cleanup event.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Primary Contact:</Typography>
      </Grid>

      <FormField
        value={formData["primaryContact.firstName"]}
        handleChangeInput="primaryContact.firstName"
        handleChange={handleChange}
        htmlFor="primaryContact.firstName"
        id="primaryContact.firstName"
        label="Name"
        placeholder="First Name"
      />
      <FormField
        value={formData["primaryContact.lastName"]}
        handleChangeInput="primaryContact.lastName"
        handleChange={handleChange}
        htmlFor="primaryContact.lastName"
        id="primaryContact.lastName"
        label=""
        placeholder="Last Name"
      />
      <FormField
        value={formData["primaryContact.address"]}
        handleChangeInput="primaryContact.address"
        handleChange={handleChange}
        htmlFor="primaryContact.address"
        id="primaryContact.address"
        label="Address"
      />
      <FormField
        value={formData["primaryContact.mobilePhone"]}
        handleChangeInput="primaryContact.mobilePhone"
        handleChange={handleChange}
        htmlFor="primaryContact.mobilePhone"
        id="primaryContact.mobilePhone"
        label="Mobile Phone"
      />
      <FormField
        value={formData["primaryContact.email"]}
        handleChangeInput="primaryContact.email"
        handleChange={handleChange}
        htmlFor="primaryContact.email"
        id="primaryContact.email"
        label="Email"
      />

      <Grid item xs={12}>
        <Typography>Secondary Contact:</Typography>
      </Grid>

      <FormField
        value={formData["secondaryContact.firstName"]}
        handleChangeInput="secondaryContact.firstName"
        handleChange={handleChange}
        htmlFor="secondaryContact.firstName"
        id="secondaryContact.firstName"
        label="Name"
        placeholder="First Name"
      />
      <FormField
        value={formData["secondaryContact.lastName"]}
        handleChangeInput="secondaryContact.lastName"
        handleChange={handleChange}
        htmlFor="secondaryContact.lastName"
        id="secondaryContact.lastName"
        placeholder="Last Name"
      />
      <FormField
        value={formData["secondaryContact.address"]}
        handleChangeInput="secondaryContact.address"
        handleChange={handleChange}
        htmlFor="secondaryContact.address"
        id="secondaryContact.address"
        label="Address"
      />
      <FormField
        value={formData["secondaryContact.mobilePhone"]}
        handleChangeInput="secondaryContact.mobilePhone"
        handleChange={handleChange}
        htmlFor="secondaryContact.mobilePhone"
        id="secondaryContact.mobilePhone"
        label="Mobile Phone"
      />
      <FormField
        value={formData["secondaryContact.email"]}
        handleChangeInput="secondaryContact.email"
        handleChange={handleChange}
        htmlFor="secondaryContact.email"
        id="secondaryContact.email"
        label="Email"
      />
      <FormField
        value={formData["dateCleanup.date"]}
        handleChangeInput="dateCleanup.date"
        handleChange={handleChange}
        htmlFor="dateCleanup.date"
        id="dateCleanup.date"
        label="Date of Cleanup"
      />
      <FormField
        value={formData["dateCleanup.startTime"]}
        handleChangeInput="dateCleanup.startTime"
        handleChange={handleChange}
        htmlFor="dateCleanup.startTime"
        id="dateCleanup.startTime"
        label="Start Time"
      />
      <FormField
        value={formData["dateCleanup.endTime"]}
        handleChangeInput="dateCleanup.endTime"
        handleChange={handleChange}
        htmlFor="dateCleanup.endTime"
        id="dateCleanup.endTime"
        label="End Time"
      />
      <FormField
        value={formData["rainDate.date"]}
        handleChangeInput="rainDate.date"
        handleChange={handleChange}
        htmlFor="rainDate.date"
        id="rainDate.date"
        label="Rain Date"
      />
      <FormField
        value={formData["rainDate.startTime"]}
        handleChangeInput="rainDate.startTime"
        handleChange={handleChange}
        htmlFor="rainDate.startTime"
        id="rainDate.startTime"
        placeholder="Start Time"
      />
      <FormField
        value={formData["rainDate.endTime"]}
        handleChangeInput="rainDate.endTime"
        handleChange={handleChange}
        htmlFor="rainDate.endTime"
        id="rainDate.endTime"
        placeholder="End Time"
      />

      <Grid item xs={12}>
        <button disabled={step === 1} onClick={handleNext}>
          Back
        </button>
        <button onClick={handleNext}>
          {step === 4 - 1 ? "Submit" : "Next"}
        </button>
      </Grid>
    </div>
  );
}
