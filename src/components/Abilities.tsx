import { Grid } from "@mui/material";
import "../styles/Abilities.css";
import GridSquare from "./GridSquare";

const Abilities = () => {
  return (
    <div className="abilities">
      <p className="grid-header">Abilities</p>
      <Grid container spacing={2}>
        <GridSquare icon="python-plain-wordmark" />
        <GridSquare icon="java-plain-wordmark" />
        <GridSquare icon="javascript-plain" />
        <GridSquare icon="typescript-plain" />
        <GridSquare icon="c-plain" />
        <GridSquare icon="cplusplus-plain" />
        <GridSquare icon="dot-net-plain-wordmark" />
        <GridSquare icon="julia-plain-wordmark" />
        <GridSquare />
        <GridSquare />
        <GridSquare />
        <GridSquare />
      </Grid>
    </div>
  );
};

export default Abilities;
