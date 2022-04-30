import { Grid } from "@mui/material";

export default function FormField({
  handleChange,
  handleChangeInput = "name",
  htmlFor = "htmlFor",
  id = "",
  label = "",
  placeholder = "",
  value = "",
}) {
  return (
    <Grid container>
      <Grid item xs={4}>
        <label htmlFor={htmlFor}>{label}</label>
      </Grid>
      <Grid item xs={6}>
        <input
          value={value}
          placeholder={placeholder}
          id={id}
          type="text"
          onChange={handleChange(`${handleChangeInput}`)}
        />
      </Grid>
    </Grid>
  );
}
