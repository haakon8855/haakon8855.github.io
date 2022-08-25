import { useEffect, useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface Props {
  contentStyle?: object;
  contentArrowStyle?: object;
  iconClassName?: string;
  date?: string;
  children?: any;
}

const CustomVerticalTimelineElement = (props: Props) => {
  const { contentStyle, contentArrowStyle, iconClassName, date, children } =
    props;

  const baseIconStyle = {
    background: "#3e746f",
    boxShadow: "#00000033 0px 0px 3px 2px, 0 0 0 4px #b9b7a6",
  };
  const bigIconStyle = {
    ...baseIconStyle,
    width: "40px",
    height: "40px",
    left: "50%",
    marginLeft: "-20px",
    marginTop: "10px",
  };
  const smallIconStyle = {
    ...baseIconStyle,
    width: "20px",
    height: "20px",
    marginLeft: "10px",
    marginTop: "10px",
  };
  const defaultIconStyle =
    window.innerWidth >= 1170 ? bigIconStyle : smallIconStyle;
  const [finalIconStyle, setFinalIconStyle] =
    useState<object>(defaultIconStyle);

  const updateIconStyle = () => {
    let style: object = defaultIconStyle;

    if (window.innerWidth >= 1170) {
      setFinalIconStyle(bigIconStyle);
    } else {
      setFinalIconStyle(smallIconStyle);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateIconStyle);
    return () => window.removeEventListener("resize", updateIconStyle);
  });

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#b9b7a6",
        padding: "10px",
        paddingBottom: "14px",
        color: "#1c1c1c",
        boxShadow: "none",
        textAlign: "left",
      }}
      contentArrowStyle={{ borderRight: "7px solid #b9b7a6" }}
      iconStyle={finalIconStyle}
      dateClassName="custom-timeline-element-date"
      date={date ?? ""}
    >
      {children}
    </VerticalTimelineElement>
  );
};

export default CustomVerticalTimelineElement;
