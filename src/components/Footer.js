import React from "react";
import styled from "styled-components";
import Icon from "../../src/assets/icon.svg";

// Imports
import { FaUniversity } from "@react-icons/all-files/fa/FaUniversity";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";

const designer = "Designed and deployed by Syahrul Anuar";
const supportDetails = "Supported by NUS FASS";
const masudaWebsite = "http://masudahajimu.com/";
const title = "Reconceptualizing the Cold War";
const subtitle = "On-theground Experiences in Asia";

const Footer = () => {
  return (
    <FooterStyle>
      <section className="l-footersupport">
        {/* {supportDetails} */}
        <Icon className="c-footer__icon" />
        <hr className="c-footer__split"></hr>
        <div className="c-footer__titleandsub">
          {" "}
          <h3 className="c-footer__title">{title}</h3>
          <h5 className="c-footer__subtitle">{subtitle}</h5>
        </div>
      </section>
      <hr className="c-footer__sectionsplit"></hr>
      <section className="l-footerdetails">
        <div className="c-footer__copyright">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a href={masudaWebsite}>Masuda Hajimu</a> All Rights Reserved.{" "}
          </p>
        </div>
        <div className="c-footer__designer">{designer}</div>
        <div className="c-footer_socialmedia">
          <SiFacebook />
        </div>
      </section>
    </FooterStyle>
  );
};

// Content Styling

const FooterStyle = styled.footer`
  background-color: var(--primary-clr-150);
  padding: 4vh var(--padding-mobile);
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-area: footer;

  .l-footersupport {
    display: flex;
    flex-direction: row;
    row-gap: 1vw;
    align-items: center;
    justify-content: center;
  }

  .c-footer__icon {
    scale: 0.5;
  }

  .c-footer__titleandsub {
    display: flex;
    flex-direction: column;
    row-gap: 0.85vh;
  }

  .c-footer__title {
    font-size: 0.85rem;
    color: var(--primary-clr-100);
  }
  .c-footer__subtitle {
    font-size: 0.55rem;
    color: var(--primary-clr-100);
  }

  .l-footerdetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1vh;
  }
  .c-footer__copyright > p,
  a {
    color: var(--primary-clr-0);
    font-size: 0.75rem;
  }
  .c-footer__sectionsplit {
    color: var(--primary-clr-50);
    border: 0.5px solid;
    margin: 0vh 15vw;
    /* display: none; */
  }

  .c-footer__copyright {
    margin-top: 1vh;
  }
  .c-footer__designer {
    font-family: "Lora", Serif;
    color: var(--primary-clr-0);
    font-size: 0.5rem;
  }
`;

export default Footer;
