import "../styles/Backstory.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CustomVerticalTimelineElement from "./CustomVerticalTimelineElement";
import _backstoryElements from "../data/backstoryElements.json";
import { IBackstoryElem } from "../interfaces/IBackstoryElem";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Backstory = () => {
  document.documentElement.dataset.boids = "false";
  const backstoryElems = _backstoryElements as IBackstoryElem[];

  return (
    <div>
      <Navbar />
      <div className="backstory">
        <p className="normal-page-header">Character Backstory</p>
        <VerticalTimeline
          animate={false}
          lineColor="#b9b7a6"
          className="timeline"
        >
          {backstoryElems.map((elem: IBackstoryElem, index: number) => {
            return (
              <CustomVerticalTimelineElement date={elem.date}>
                <h3 className="vertical-timeline-element-title">
                  {elem.title}
                </h3>
                <h4 className="vertical-timeline-element-text">
                  {elem.description}
                </h4>
              </CustomVerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
      <Footer />
    </div>
  );
};

export default Backstory;
