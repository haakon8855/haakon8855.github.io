import { IQuest } from "../interfaces/IQuest.js";
import "../styles/QuestItem.css";

interface Props {
  questObject: IQuest;
  last: boolean;
  few: boolean;
  onClick: () => void;
}

const QuestItem = (props: Props) => {
  const { questObject, last, few, onClick } = props;
  return (
    <div
      className={`quest-item-container ${
        few ? "quest-item-container-few" : ""
      } ${last ? "quest-item-container-last" : ""}`}
      onClick={onClick}
    >
      <div className="quest-item-header">{questObject.title}</div>
      <div className="quest-item-description">
        {questObject.descriptionShort}
      </div>
    </div>
  );
};

export default QuestItem;
