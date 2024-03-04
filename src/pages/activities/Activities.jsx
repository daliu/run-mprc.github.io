import React, { useState } from 'react';
import './activities.css';
import { Link } from 'react-router-dom';
import HeaderImage from '../../images/activities/header_bg_1.jpg';
import Header from '../../components/Header';
import Subheader from '../../components/Subheader';
import Paragraph from '../../components/Paragraph';
import ImageCarousel from '../../components/ImageCarousel';

import Brunch1 from '../../images/activities/brunch1.jpeg';
import Brunch2 from '../../images/activities/brunch2.jpeg';
import Brunch3 from '../../images/activities/brunch3.jpeg';

import Activity1 from '../../images/activities/activity1.jpeg';
import Activity2 from '../../images/activities/social1.jpeg';

import Extra1 from '../../images/activities/extra1.jpg';
import Extra2 from '../../images/activities/extra2.jpeg';
import Extra3 from '../../images/activities/extra3.jpeg';
import FlexColumnContainer from '../../components/FlexColumnContainer';
import { WAIVER_TEXT } from '../../text/JoinUs';

const brunchImages = [Brunch1, Brunch2, Brunch3];
const activityImages = [Activity1, Activity2];
const extraImages = [Extra1, Extra2, Extra3];

function Activities() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Header title="Activities" image={HeaderImage} />
      <FlexColumnContainer>
        <div className="first:mt-8">
          <Subheader title="Saturday Morning Run" />
        </div>
        <Paragraph>
          Every Saturday morning, we run on the part of the Bay trail near
          downtown San Mateo. We welcome all paces and walkers as well.
          Non-members can run with us, but must agree to the waiver
          {' '}
          <Link className="hyperlink" onClick={toggleExpand}>
            here.
          </Link>
          {isExpanded && (
            <p className="waiver-text">{WAIVER_TEXT}</p>
          )}
        </Paragraph>
        <Subheader title="Brunch" />
        <Paragraph>
          &ldquo;Our informal motto is &ldquo;the eating club with a running problem&rdquo;.
          We love to eat just as much as we love to run (or more)!
          After most Saturday runs, we organize a group to try brunch at nearby places.&rdquo;
        </Paragraph>
        <ImageCarousel images={brunchImages} />
        <Subheader title="Run Club Social" />
        <Paragraph>
          Celebrate the end of each month with our Run Club Socials!
          On the last Saturday of each month, our club members bring food and drink to share.
          These gatherings are a fantastic way to connect with other members over
          homemade goodies, fruits, and refreshing beverages, provided by the club!
        </Paragraph>
        <ImageCarousel images={activityImages} />
        <h2 className="my-8">And sometimes, we just like to hang out…</h2>
        <Paragraph>
          We also host bi-annual club picnics for club members, volunteer at big races together,
          and have costumed runs on some holidays!
        </Paragraph>
        <ImageCarousel images={extraImages} />
      </FlexColumnContainer>
    </>
  );
}

export default Activities;
