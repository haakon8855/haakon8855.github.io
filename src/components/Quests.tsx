import "../styles/Quests.css";
import QuestItem from "./QuestItem";
import { Grid } from "@mui/material";
import _quests from "../data/quests.json";
import { IQuest } from "../interfaces/IQuest.js";
import { useState } from "react";
import QuestItemDetailed from "./QuestItemDetailed";

const Quests = () => {
  const quests = _quests as IQuest[];
  const [expandedQuest, setExpandedQuest] = useState(0);

  const getQuests = () => {
    return quests.map((quest: IQuest, index: number) => {
      return (
        <QuestItem
          onClick={() => {
            setExpandedQuest(index);
          }}
          key={index}
          questObject={quest}
          last={index == quests.length - 1}
          few={quests.length <= 6}
        />
      );
    });
  };

  return (
    <div className="quests">
      <p className="normal-page-header">Completed Quests</p>
      <div className="quest-grid-outer-container">
        <div className="quest-grid-inner-container">
          <Grid container spacing={0}>
            <Grid item md={4}>
              <div className="quest-stack">{getQuests()}</div>
            </Grid>
            <Grid item md={8} className="quest-detailed">
              <QuestItemDetailed questObject={quests[expandedQuest]} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Quests;
