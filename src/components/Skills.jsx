import React from "react";
import { HtmlIcon, CssIcon, JavascriptIcon } from "@mui/icons-material";
function Skills() {
  return (
    <>
      <section className="skills">
        <div className="card">
          <div className="content">
            {/* <FontAwesomeIcon icon="fa-brands fa-html5" /> */}
            <HtmlIcon />
            <CssIcon />
            <JavascriptIcon />
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
