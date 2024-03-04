import React from 'react';
import { Link } from 'react-router-dom';
import './joinUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMeetup } from '@fortawesome/free-brands-svg-icons';
import MetaText from '../../components/MetaText';
import {
  ARM,
  GOOGLE_FORM,
  MEMBER_BENEFITS,
  JOIN_US_DESCRIPTION_1,
  JOIN_US_DESCRIPTION_2,
  JOIN_US_DESCRIPTION_3,
  JOIN_US_DESCRIPTION_4,
  JOIN_US_DESCRIPTION_5,
  LI_ACCESS_TO_STRAVA_FACEBOOK,
  LI_AFFORDABLE_MEMBERSHIP_FEES,
  LI_CLUB_GATHERINGS,
  LI_CLUB_LOGO_MERCHANDISE,
  LI_CLUB_SUPPORT_NETWORKING,
  LI_DISCOUNT_ON_SHOES,
  LI_EASY_ANNUAL_RENEWAL_PROCESS,
  LI_MONTHLY_NEWSLETTERS,
  LI_RACE_DISCOUNT_CODES,
  LI_SATURDAY_CLUB_RUNS,
  LI_SOCIAL_RACE_ACTIVITIES,
  MEETUP_GROUP,
  JOIN_US_BUTTON_1,
  JOIN_US_BUTTON_2, WAYS_TO_RUN, JOIN_US_HEADING_DESC, BECOME_A_MEMBER,
} from '../../text/JoinUs';
import Card from '../../UI/Card';
import {
  ARM_URI,
  GOOGLE_FORM_LINK,
  MEETUP_URI,
} from '../../text/externalLinks';
import Route from './Route';
import Paragraph from '../../components/Paragraph';

const sectionHeading = () => (
  <>
    <div className="head_desc">
      <h2 className="h2_joinus">{WAYS_TO_RUN}</h2>
      <Paragraph>{JOIN_US_HEADING_DESC}</Paragraph>
    </div>
    <div className="route-map">
      <MetaText>Saturday Morning Route</MetaText>
      <Route />
    </div>
  </>
);

const sectionRunWithUs = () => (
  <Card className="joinus__card">
    <h2 className="h2_joinus">
      {JOIN_US_DESCRIPTION_1}
      <a className="hyperlink" href={MEETUP_URI} target="_blank" rel="noreferrer noopener">
        {MEETUP_GROUP}
        {' '}
        <FontAwesomeIcon icon={faMeetup} />
      </a>
    </h2>
    <ul className="ul_joinus">
      <li className="li_joinus">{JOIN_US_DESCRIPTION_2}</li>
      <li className="li_joinus">{JOIN_US_DESCRIPTION_3}</li>
    </ul>
    <Link
      to={MEETUP_URI}
      className="btn lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      {JOIN_US_BUTTON_1}
    </Link>
  </Card>
);

const sectionBecomeMember = () => (
  <Card className="joinus__card">
    <h2 className="h2_joinus">{BECOME_A_MEMBER}</h2>
    <ul className="ul_joinus">
      <li className="li_joinus">
        {JOIN_US_DESCRIPTION_4}
        <a className="hyperlink" href={GOOGLE_FORM_LINK} target="_blank" rel="noreferrer noopener">
          {GOOGLE_FORM}
          {' '}
          <FontAwesomeIcon icon={faGoogle} />
          .
          {' '}
        </a>
      </li>
      <li className="li_joinus">{JOIN_US_DESCRIPTION_5}</li>
      <li className="li_joinus">
        {MEMBER_BENEFITS}
        <ul className="ul_joinus">
          <li className="li_joinus">{LI_SATURDAY_CLUB_RUNS}</li>
          <li className="li_joinus">{LI_CLUB_SUPPORT_NETWORKING}</li>
          <li className="li_joinus">{LI_CLUB_GATHERINGS}</li>
          <li className="li_joinus">{LI_MONTHLY_NEWSLETTERS}</li>
          <li className="li_joinus">{LI_CLUB_LOGO_MERCHANDISE}</li>
          <li className="li_joinus">{LI_SOCIAL_RACE_ACTIVITIES}</li>
          <li className="li_joinus">{LI_RACE_DISCOUNT_CODES}</li>
          <li className="li_joinus">
            {LI_DISCOUNT_ON_SHOES}
            <a className="hyperlink" href={ARM_URI} target="_blank" rel="noreferrer noopener">
              {ARM}
            </a>
          </li>
          <li className="li_joinus">{LI_ACCESS_TO_STRAVA_FACEBOOK}</li>
          <li className="li_joinus">{LI_AFFORDABLE_MEMBERSHIP_FEES}</li>
          <li className="li_joinus">{LI_EASY_ANNUAL_RENEWAL_PROCESS}</li>
        </ul>
      </li>
    </ul>
    <Link
      to={GOOGLE_FORM_LINK}
      className="btn lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      {JOIN_US_BUTTON_2}
    </Link>
  </Card>
);

function JoinUs() {
  return (
    <section className="joinus">
      <div className="container joinus__container">
        <div className="joinus__wrapper">
          {sectionHeading()}
          &nbsp;&nbsp;
          {sectionRunWithUs()}
          &nbsp;&nbsp;
          {sectionBecomeMember()}
          &nbsp;&nbsp;
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
