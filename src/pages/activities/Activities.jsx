import React from "react";
import "./activities.css";
import HeaderImage from "../../images/activities/header_bg_1.jpg";
import Header from "../../components/Header";
import Subheader from "../../components/Subheader";
import Paragraph from "../../components/Paragraph";
import ImageCarousel from "../../components/ImageCarousel";
import MetaText from "../../components/MetaText";

import Brunch1 from "../../images/activities/brunch1.jpeg";
import Brunch2 from "../../images/activities/brunch2.jpeg";
import Brunch3 from "../../images/activities/brunch3.jpeg";

const Activities = () => {
  const brunchImages = [Brunch1, Brunch2, Brunch3];
  return (
    <>
      <Header title="Activities" image={HeaderImage} />
      <div class="container mx-auto md flex flex-col items-center">
        <div className="first:mt-8">
          <Subheader title="Saturday Morning Run" />
        </div>
        <Paragraph text="Every Saturday morning, we run on the part of the Bay trail near downtown San Mateo. We meet in Seal Point Park near the green marker on the map listed below - 9AM come rain or shine. We welcome all paces and walkers as well. " />
        <MetaText text="Saturday Morning route" />
        <iframe
          class="lg"
          src="https://www.google.com/maps/d/u/0/embed?mid=1cwNJH9lAaZARx46mSYcWRkM_NQpA56U&ehbc=2E312F"
          width="540"
          height="360"
        ></iframe>
        <Subheader title="Brunch" />
        <Paragraph text="We love to eat just as much as we love to run (or more). After most Saturday runs, we organize a group of folks that would like to hang out in a restaurant in the community." />
        <ImageCarousel images={brunchImages} />
        <Subheader title="Run Club Social" />
        <Paragraph text="Celebrate the end of each month with our Run Club Socials! These gatherings are a fantastic way to connect with other members over homemade goodies, fruits, and refreshing beverages, provided by the club." />
      </div>
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
