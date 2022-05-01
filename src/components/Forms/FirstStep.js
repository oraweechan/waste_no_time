import { Grid, Typography, Box } from "@mui/material";
import FormField from "./FormField";

export default function FirstStep({
  handleChange,
  formData,
  handleNext,
  handlePrev,
}) {
  return (
    <div className="form-details1">
      <Typography>
        Please tell us a little bit about your volunteer group.
      </Typography>
      <Typography color={"red"} mb={5}>
        (*) indicates a required field.
      </Typography>
      <FormField
        value={formData.organizationName}
        handleChangeInput="organizationName"
        handleChange={handleChange}
        htmlFor="organizationName"
        id="organizationName"
        label="Organization Name*"
      />
      <FormField
        value={formData.eventName}
        handleChangeInput="eventName"
        handleChange={handleChange}
        htmlFor="eventName"
        id="eventName"
        label="Event Name (optional)"
        helperText="Nickname For Your Event"
      />
      <FormField
        value={formData.cleanupLocation}
        handleChangeInput="cleanupLocation"
        handleChange={handleChange}
        htmlFor="cleanupLocation"
        id="cleanupLocation"
        label="Cleanup Event Location*"
        helperText="Where Will Your Team Be Gathering"
      />

      <Grid item xs={12} mb={4} mt={3}>
        <Typography>
          Both contacts must be prepared to answer all questions for this
          cleanup event.
        </Typography>
      </Grid>
      <Grid item mb={2} xs={12}>
        <Typography
          sx={{ textDecoration: "underline", fontWeight: "bold" }}
          display="inline"
        >
          Primary Contact:
        </Typography>
      </Grid>

      <Grid item mb={1} xs={12}>
        <Typography sx={{ fontWeight: "bold" }}>Name:*</Typography>
      </Grid>

      <Grid container ml={-15}>
        <Grid item xs={6}>
          {" "}
          <FormField
            value={formData["primaryContact.firstName"]}
            handleChangeInput="primaryContact.firstName"
            handleChange={handleChange}
            htmlFor="primaryContact.firstName"
            id="primaryContact.firstName"

            placeholder="First Name"
          />
        </Grid>
        <Grid item xs={6}>
          <FormField
             value={formData["primaryContact.lastName"]}
             handleChangeInput="primaryContact.lastName"
             handleChange={handleChange}
             htmlFor="primaryContact.lastName"
             id="primaryContact.lastName"
             label=""
             placeholder="Last Name"
          />
        </Grid>
      </Grid>

      <FormField
        value={formData["primaryContact.address"]}
        handleChangeInput="primaryContact.address"
        handleChange={handleChange}
        htmlFor="primaryContact.address"
        id="primaryContact.address"
        label="Address*"
      />
      <FormField
        value={formData["primaryContact.mobilePhone"]}
        handleChangeInput="primaryContact.mobilePhone"
        handleChange={handleChange}
        htmlFor="primaryContact.mobilePhone"
        id="primaryContact.mobilePhone"
        label="Mobile Phone*"
      />
      <FormField
        value={formData["primaryContact.email"]}
        handleChangeInput="primaryContact.email"
        handleChange={handleChange}
        htmlFor="primaryContact.email"
        id="primaryContact.email"
        label="Email*"
      />
      <Grid item mt={4} mb={2} xs={12}>
        <Typography
          sx={{ textDecoration: "underline", fontWeight: "bold" }}
          display="inline"
        >
          Secondary Contact:
        </Typography>
      </Grid>
      <Grid item mb={1} xs={12}>
        <Typography sx={{ fontWeight: "bold" }}>Name:*</Typography>
      </Grid>

      <Grid container ml={-15}>
        <Grid item xs={6}>
          {" "}
          <FormField
            value={formData["secondaryContact.firstName"]}
            handleChangeInput="secondaryContact.firstName"
            handleChange={handleChange}
            htmlFor="secondaryContact.firstName"
            id="secondaryContact.firstName"
            placeholder="First Name"
          />
        </Grid>
        <Grid item xs={6}>
          <FormField
            value={formData["secondaryContact.lastName"]}
            handleChangeInput="secondaryContact.lastName"
            handleChange={handleChange}
            htmlFor="secondaryContact.lastName"
            id="secondaryContact.lastName"
            placeholder="Last Name"
          />
        </Grid>
      </Grid>

      <FormField
        value={formData["secondaryContact.address"]}
        handleChangeInput="secondaryContact.address"
        handleChange={handleChange}
        htmlFor="secondaryContact.address"
        id="secondaryContact.address"
        label="Address*"
      />
      <FormField
        value={formData["secondaryContact.mobilePhone"]}
        handleChangeInput="secondaryContact.mobilePhone"
        handleChange={handleChange}
        htmlFor="secondaryContact.mobilePhone"
        id="secondaryContact.mobilePhone"
        label="Mobile Phone*"
      />
      <FormField
        value={formData["secondaryContact.email"]}
        handleChangeInput="secondaryContact.email"
        handleChange={handleChange}
        htmlFor="secondaryContact.email"
        id="secondaryContact.email"
        label="Email*"
      />
      <FormField
        value={formData["dateCleanup.date"]}
        handleChangeInput="dateCleanup.date"
        handleChange={handleChange}
        htmlFor="dateCleanup.date"
        id="dateCleanup.date"
        label="Date of Cleanup*"
      />

      <Grid container ml={-15}>
        <Grid item xs={6}>
          {" "}
          <FormField
            value={formData["dateCleanup.startTime"]}
            handleChangeInput="dateCleanup.startTime"
            handleChange={handleChange}
            htmlFor="dateCleanup.startTime"
            id="dateCleanup.startTime"
            placeholder="Start Time"
          />{" "}
        </Grid>
        <Grid item xs={6}>
          {" "}
          <FormField
            value={formData["dateCleanup.endTime"]}
            handleChangeInput="dateCleanup.endTime"
            handleChange={handleChange}
            htmlFor="dateCleanup.endTime"
            id="dateCleanup.endTime"
            placeholder="End Time"
          />
        </Grid>
      </Grid>

      <FormField
        value={formData["rainDate.date"]}
        handleChangeInput="rainDate.date"
        handleChange={handleChange}
        htmlFor="rainDate.date"
        id="rainDate.date"
        label="Rain Date*"
      />
      <Grid container ml={-15}>
        <Grid item xs={6}>
          {" "}
          <FormField
            value={formData["rainDate.startTime"]}
            handleChangeInput="rainDate.startTime"
            handleChange={handleChange}
            htmlFor="rainDate.startTime"
            id="rainDate.startTime"
            placeholder="Start Time"
          />{" "}
        </Grid>
        <Grid item xs={6}>
          {" "}
          <FormField
            value={formData["rainDate.endTime"]}
            handleChangeInput="rainDate.endTime"
            handleChange={handleChange}
            htmlFor="rainDate.endTime"
            id="rainDate.endTime"
            placeholder="End Time"
          />
        </Grid>
      </Grid>

      <Box display="flex" p={3} justifyContent="space-between">
        <button onClick={handlePrev}>Back</button>
        <button onClick={handleNext}>Next</button>
      </Box>
    </div>
  );
}
