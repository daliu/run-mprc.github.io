import React from "react";
import "./Admin.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/contact/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { CONTACT_DESCRIPTION, CONTACT_TITLE } from "../../text/ContactUs";

const Admin = () => {
  return (
    <>
      <Header title={CONTACT_TITLE} image={HeaderImage}></Header>

      <section className="contact">
        <div className="container contact__container">
          {CONTACT_DESCRIPTION}
          <div className="contact__wrapper">
            <a
              href="mailto:runmprc@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
