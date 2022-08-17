import { Grid } from "@mui/material";
import "../styles/Inventory.css";
import GridSquare from "./GridSquare";
import splunkIcon from "../assets/splunk.svg";

const Inventory = () => {
  return (
    <div className="inventory">
      <p className="gridHeader">Inventory</p>
      <Grid container spacing={2}>
        <GridSquare icon="react-original-wordmark" />
        <GridSquare svg={splunkIcon} />
        <GridSquare icon="tensorflow-original-wordmark" />
        <GridSquare icon="bash-plain" />
        <GridSquare icon="numpy-original-wordmark" />
        <GridSquare icon="androidstudio-plain-wordmark" />
        <GridSquare icon="figma-plain" />
        <GridSquare icon="git-plain-wordmark" />
        <GridSquare icon="vim-plain" />
        <GridSquare icon="" />
        <GridSquare icon="" />
        <GridSquare icon="" />
      </Grid>
    </div>
  );
};

export default Inventory;
