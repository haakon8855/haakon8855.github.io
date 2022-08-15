import "../styles/Footer.css";
import React from "react";
import gitHubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.svg";
import mailLogo from "../assets/mail.svg";
import IconLink from "./IconLink";

const Footer = () => {
  return (
    <div className="footer">
      <div className="iconLinksContainer">
        <IconLink linkUrl="https://github.com/haakon8855" svgUrl={gitHubLogo} />
        <IconLink
          linkUrl="https://www.linkedin.com/in/h%C3%A5kon-anders-stromsodd/"
          svgUrl={linkedinLogo}
        />
        <IconLink linkUrl="mailto:haakon8855@gmail.com" svgUrl={mailLogo} />
      </div>
      <div className="footerTextBottom">© 2022 haakon8855</div>
    </div>
  );
};

export default Footer;
