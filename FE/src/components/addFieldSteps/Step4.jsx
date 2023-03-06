import { TextField, Grid } from "@mui/material";

const Step4 = (textFieldStyle) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignContent="center"
    >
      <TextField
        variant="standard"
        id="xaxis"
        name="xaxis"
        label="ציר X"
        sx={textFieldStyle}
      />
      <TextField
        variant="standard"
        id="yaxis"
        name="yaxis"
        label="ציר Y"
        sx={textFieldStyle}
      />
      <TextField
        variant="standard"
        id="fieldNumber"
        name="fieldNumber"
        label="מספר חלקה"
        sx={textFieldStyle}
      />
    </Grid>
  );
};

export default Step4;
