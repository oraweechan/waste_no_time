import { Typography } from "@mui/material";

export default function EventDocField({ value, label }) {
  return (
    <div>
      {" "}
      <Typography color={"green"} fontWeight={"bold"}>
        {label}
      </Typography>
      <Typography>{value}</Typography>
    </div>
  );
}
