import React from "react";
import "../styles/IconLink.css";

interface Props {
  linkUrl: string;
  svgUrl: any;
}

const IconLink = (props: Props) => {
  const { linkUrl, svgUrl } = props;
  return (
    <span className="iconLink">
      <a href={linkUrl}>
        <img src={svgUrl}></img>
      </a>
    </span>
  );
};

export default IconLink;
