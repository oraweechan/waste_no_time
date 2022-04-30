import { Grid } from "@mui/material";
import "./FormField.css";

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
    <Grid container >
    <Grid item xs={6}>
      <label htmlFor={htmlFor}>
        <strong>{label}</strong>
      </label>
    </Grid>
    <Grid item xs={6}>
      <input
        className="formInput"
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
