import React from "react"
import styled from "styled-components"

// Imports
import { FaUniversity } from "@react-icons/all-files/fa/FaUniversity"
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook"

const designer = "Designed and deployed by Syahrul Anuar"
const supportDetails = "Supported by NUS FASS"
const masudaWebsite = "http://masudahajimu.com/"

const Footer = () => {
  return (
    <FooterStyle>
      <section className="footer__support">
        {supportDetails}
        <div className="footer__NUS">
          <FaUniversity />
        </div>
      </section>
      <section className="footer__details">
        <div className="footer__copyright">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a href="http://masudahajimu.com/">Masuda Hajimu</a> and the
            National University of Singapore
          </p>
        </div>
        <div className="footer__designer">{designer}</div>
        <div className="footer_socialmedia">
          <SiFacebook />
        </div>
      </section>
    </FooterStyle>
  )
}

// Content Styling

const FooterStyle = styled.footer`
  background-color: var(--primary-clr-150);
  padding: 4vh var(--padding-mobile);

  display: flex;
  grid-area: footer;

  /* Fonts */
  font-family: "Ubuntu", serif;
  font-size: normal;
  font-weight: normal;
  font-size: 0.75rem;
  color: var(--primary-clr-100);

  .footer__support {
    display: flex;
    align-self: end;
    flex: 1;
  }

  .footer__NUS {
    margin-left: 0.5rem;
  }

  .footer__details {
    display: flex;
    width: 50%;
    align-self: center;
    margin-left: auto;
    flex-direction: column;
    text-align: right;
  }

  .footer__copyright {
    margin-bottom: 1rem;
    color: var(--primary-clr-100);
    margin-left: auto;
  }

  .footer__copyright > p{
    color: var(--primary-clr-100);
  }

  .footer__copyright > p > a {
    color: var(--primary-clr-100) !important;
  }

  .footer__designer {
    margin-bottom: 1rem;
    margin-left: auto;
  }

  .footer_socialmedia {
    margin-left: auto;
  }

  @media (min-width: 992px) {
    height: 10vh;
    padding: 4vh var(--padding-desktop);
    font-size: 0.75rem;

    .footer__support {
      align-self: center;
    }
  }

  @media (min-width: 2560px) {
    font-size: 1rem;
  }
`

export default Footer
