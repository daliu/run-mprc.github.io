import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/committee/header_bg_5.jpg";
import {officers} from "../../data";
import Officer from "../../components/Officer";
import "./committee.css";
import {COMMITTEE_INTRO, COMMITTEE_TITLE} from "../../text/Committee";

const Committee = () => {
  return (<>
      <Header image={HeaderImage} title={COMMITTEE_TITLE}>
        {COMMITTEE_INTRO}
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {officers.map(({id, image, name, job, socials}) => {
            return (<Officer
                key={id}
                image={image}
                name={name}
                job={job}
                /*socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] },
                ]}*/
              />);
          })}
        </div>
      </section>
    </>);
};

export default Committee;
