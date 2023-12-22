import React from "react";
import "./about.css";
import {
  ABOUT_MISSION_CONTENT, ABOUT_MISSION_TITLE, ABOUT_STORY_CONTENT, ABOUT_STORY_TITLE, IMG_SECTION_TITLE, JOINBUTTON
} from "../../text/Home";
import {Link} from "react-router-dom";

const About = () => {
  return (<>
    <section className="about__story">
      <div className="container about__story-container">
        {/*<div className="about__section-image">
						<img src={StoryImage} alt="OurStoryImage" />
					</div>*/}
        <div className="about__section-content">
          <h2>{ABOUT_STORY_TITLE}</h2>
          {ABOUT_STORY_CONTENT.map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
        </div>
      </div>
    </section>
    <section className="about__mission">
      <div className="container about__mission-container">
        {/*<div className="about__section-image">
						<img src={MissionImage} alt="VisionImage" />
					</div>*/}
        <div className="about__section-content">
          <h2>{ABOUT_MISSION_TITLE}</h2>
          {ABOUT_MISSION_CONTENT.map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
        </div>
      </div>
    </section>
    
    <section className="join_btn_section">
      <Link
        to="/joinus"
        className="btn lg"
      >
        {JOINBUTTON}
      </Link>
    </section>
  </>);
};

export default About;
