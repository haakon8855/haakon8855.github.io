import "../styles/Quests.css";
import QuestItem from "./QuestItem";
import { Stack } from "@mui/material";
import _quests from "../data/quests.json";
import { IQuest } from "../interfaces/iquest";

const Quests = () => {
  const quests = _quests as IQuest[];
  const getQuests = () => {
    return quests.map((quest: IQuest, index: number) => {
      return <QuestItem key={"questItem" + index} questObject={quest} />;
    });
  };
  return (
    <div className="quests">
      <p className="normal-page-header">Completed Quests</p>
      <Stack spacing={1} alignItems="center" justifyContent="center">
        {getQuests()}
      </Stack>
    </div>
  );
};

export default Quests;
