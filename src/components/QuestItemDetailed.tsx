import { Grid } from "@mui/material";
import { IQuest } from "../interfaces/IQuest.js";
import "../styles/QuestItemDetailed.css";

interface Props {
  questObject: IQuest;
}

const QuestItemDetailed = (props: Props) => {
  const { questObject } = props;
  return (
    <div className="quest-item-detailed-container">
      <div className="quest-item-detailed-header">{questObject.title}</div>
      <div className="quest-item-text-and-image">
        <div className="quest-item-detailed-image-container">
          <img
            className="quest-item-detailed-image"
            src={"../../" + questObject.imagePath}
          />
        </div>
        <div className="quest-item-detailed-description">
          {questObject.description}
        </div>
      </div>
      <div className="quest-item-stats-container">
        <Grid container>
          <Grid item md={6}>
            <div>
              <div className="quest-item-extra-header">Rewards</div>
              <ul className="quest-reward-list">
                {questObject.reward.map((reward: string, index: number) => {
                  return <li key={index}>{reward}</li>;
                })}
                <li key={"exp"}>{questObject.expReward} xp</li>
              </ul>
            </div>
          </Grid>
          <Grid item md={6}>
            <div>
              <div className="quest-item-extra-header">Location</div>
              <ul>
                <li>
                  <a
                    className="quest-link"
                    target="_blank"
                    href={questObject.link}
                  >
                    {questObject.linkText}
                  </a>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default QuestItemDetailed;
