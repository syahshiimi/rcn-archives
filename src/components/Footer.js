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
        <div className="c-footer__socialmedia">
          <SiFacebook style={{ color: "#f5cb5c" }} />
        </div>
      </section>
    </FooterStyle>
  );
};

// Content Styling

const FooterStyle = styled.footer`
  background-color: var(--primary-clr-150);
  padding: 6vh var(--padding-mobile);
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-area: footer;
  row-gap: 3vh;

  .l-footersupport {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 3vw;
  }

  .c-footer__icon {
    width: 40px;
    display: flex;
    height: 40px;
  }

  .c-footer__split {
    display: flex;
    border: 0.8px solid var(--primary-clr-100);
    height: 80%;
  }

  .c-footer__titleandsub {
    display: flex;
    flex-direction: column;
    row-gap: 0.85vh;
  }

  .c-footer__title {
    font-size: 0.85rem;
    color: var(--primary-clr-50);
    font-family: "Lora", Serif;
  }
  .c-footer__subtitle {
    font-family: "Lora", Serif;
    font-size: 0.55rem;
    color: var(--primary-clr-50);
    font-weight: 400;
    opacity: 0.8;
  }

  .l-footerdetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 0.7vh;
  }

  .c-footer__sectionsplit {
    color: var(--primary-clr-50);
    border: 0.5px solid;
    margin: 0vh 13vw;
  }

  .c-footer__copyright > p,
  a {
    color: var(--primary-clr-100);
    font-size: 0.65rem;
  }
  .c-footer__designer {
    font-family: "Lora", Serif;
    margin: 1vh 0vw;
    color: var(--primary-clr-0);
    font-size: 0.5rem;
    display: none;
    visbility: none;
  }

  /////////////////////////
  ///////// Tablet ////////
  /////////////////////////

  @media (min-width: 992px) {
    padding: 4vh 5vw;
    flex-direction: row;
    justify-content: space-between;

    .l-footersupport {
      column-gap: 1.5vw;
    }
    .c-footer__split {
      height: 70%;
    }

    .c-footer__titleandsub {
      row-gap: 0.1vh;
    }

    .c-footer__subtitle {
      color: var(--primary-clr-50);
      font-family: "Lora", Serif;
      font-weight: 200;
    }

    .c-footer__sectionsplit {
      /* we hide the divider line in tablet size onwards */
      display: none;
      visbility: none;
    }

    .l-footerdetails {
      row-gap: 0.8vh;
    }
    .c-footer__designer {
      text-align: right;
      width: 100%;
      margin: 0;
    }
    .c-footer__socialmedia {
      display: none;
      visbility: none;
    }
  }

  /////////////////////////////
  ////////// Desktop //////////
  /////////////////////////////
  @media (min-width: 1280px) {
    padding: 6vh 4.5vw;
    .l-footersupport {
      column-gap: 0.8vw;
    }
    .c-footer__titleandsub {
      row-gap: 0.5vh;
    }
    .c-footer__icon {
      height: 52px;
      width: 52px;
    }

    .c-footer__title {
      font-size: 1.125rem;
    }

    .c-footer__subtitle {
      font-size: 0.925rem;
    }

    .c-footer__copyright {
      a,
      p {
        font-size: 0.85rem;
      }
    }
    .c-footer__designer {
      font-size: 0.6rem;
    }
  }

  //////////////////////////////
  ////////// 4k Disp ///////////
  //////////////////////////////

  @media (min-width: 2560px) {
    padding: 4vh 21vw;

    .l-footersupport {
      column-gap: 0.4vw;
    }
    .c-footer__icon {
      height: 72px;
      width: 72px;
    }
    .c-footer__title {
      font-size: 1.25rem;
    }
    .c-footer__subtitle {
      font-size: 1rem;
    }
    .c-footer__copyright {
      a,
      p {
        font-size: 1rem;
      }
    }
    .c-footer__designer {
      font-size: 0.75rem;
    }
  }
`;

export default Footer;
