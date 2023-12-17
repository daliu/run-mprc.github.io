import React from "react";
import "./activities.css";
import HeaderImage from "../../images/activities/header_bg_1.jpg";
import Header from "../../components/Header";

const Activities = () => {
  return (<>
      <Header title="Activities" image={HeaderImage}>
      </Header>
      <section className="contact">
        <div className="container contact__container">
          
          <div className="contact__wrapper">
          
          </div>
        </div>
      </section>
    </>
    /*<div id="activities">
      <h1>Activities</h1>
      <p>Saturday morning Bay Trail runs of up to 6 miles or up to one hour.</p>
      <p>
        Social Gathering takes place the last Saturday of every month after the
        run. Coffee, tea, hot chocolate, pastries, etc. served All are welcome.
      </p>
      <p>
        Social events throughout the year: picnics, hikes, fun activities for
        MPRC members only.
      </p>
    </div>*/
    
  );
};

export default Activities;
