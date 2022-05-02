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
  helperText = "",
}) {
  return (
    <Grid container>
      <Grid item xs={7}>
        <label htmlFor={htmlFor}>
          <strong>{label}</strong>
        </label>
      </Grid>
      <Grid item xs={5}  mb={2}>
        <input
          className="formInput"
          value={value}
          placeholder={placeholder}
          id={id}
          type="text"
          onChange={handleChange(`${handleChangeInput}`)}
        />
        <span className="help-block">{helperText}</span>
      </Grid>
    </Grid>
  );
}
