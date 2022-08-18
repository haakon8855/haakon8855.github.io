import { IQuest } from "../interfaces/IQuest.js";
import "../styles/QuestItem.css";

interface Props {
  questObject: IQuest;
}

const QuestItem = (props: Props) => {
  const { questObject } = props;
  return (
    <div className="quest-item-container">
      <div className="quest-item-header">{questObject.title}</div>
      <div className="quest-item-description">{questObject.description}</div>
    </div>
  );
};

export default QuestItem;
