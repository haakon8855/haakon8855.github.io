import { Grid } from "@mui/material";
import "../styles/GridSquare.css";

interface Props {
  icon?: string;
  colored?: boolean;
  svg?: string;
}

const GridSquare = (props: Props) => {
  const { icon = "", colored = false, svg } = props;
  return (
    <Grid item xs={6} sm={3}>
      <div className="grid-square">
        {icon != "" && (
          <i
            className={`devicon-${icon} ${colored ? "colored" : ""} grid-icon`}
          ></i>
        )}
        {icon == "" && svg != "" && <img src={svg} className="svg-icon"></img>}
      </div>
    </Grid>
  );
};

export default GridSquare;
