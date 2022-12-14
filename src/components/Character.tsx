import { Grid } from "@mui/material";
import "../styles/Character.css";
import Abilities from "./Abilities";
import Inventory from "./Inventory";

const Character = () => {
  return (
    <div className="character">
      <Grid container spacing={2} className="outer-grid-container">
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <div>
            <Grid container alignItems="center" justifyContent="center">
              <div className="grid-container-div">
                <Abilities />
              </div>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <div>
            <Grid container alignItems="center" justifyContent="center">
              <div className="grid-container-div">
                <Inventory />
              </div>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Character;
