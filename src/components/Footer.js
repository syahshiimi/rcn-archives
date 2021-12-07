import React from "react"
import styled from "styled-components"

// Imports
import { FaUniversity } from "@react-icons/all-files/fa/FaUniversity"
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook"

const copyright =
  "All copyright is owned by Professor Masuda Hajimu and fellow collaborators."
const designer = "Designed and deployed by Syahrul Anuar"
const supportDetails = "Supported by NUS FASS"

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
        <div className="footer__copyright">{copyright}</div>
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
  background-color: #333533;
  padding: 1rem 3rem 1rem 3rem;
  height: 20vh;

  display: flex;
  grid-area: footer;

  /* Fonts */
  font-family: "Ubuntu", serif;
  font-size: normal;
  font-weight: normal;
  font-size: 1rem;
  color: #f5cb5c;

  .footer__support {
    display: flex;
    align-self: center;
    width: 50%;
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
  }

  .footer__copyright {
    margin-bottom: 0.5rem;
    margin-left: auto;
  }

  .footer__designer {
    margin-bottom: 0.5rem;
    margin-left: auto;
  }

  .footer_socialmedia {
    margin-left: auto;
  }
`

export default Footer
