import React from "react";
import { Head } from "../components/head";
import styled from "styled-components";

// Import Wrapper Components
import Layout from "../components/Layout";

// Import Global Components
import { DefaultButton } from "../components/button";

// Variables
const ContributeSub =
  "Kindly contact us if you wish to contribute or enquire more about our project";

const ContactUs = () => {
  return (
    <Layout>
      <Head title="Contact Us" />
      <ContributeWrapper>
        <section className="l-contactus">
          <h1 className="c-contactus__header">Contact Us</h1>
          <p className="c-contactus__subheading">{ContributeSub}</p>
        </section>
      </ContributeWrapper>
    </Layout>
  );
};

const ContributeWrapper = styled.article`
  .l-contactus {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0vh var(--padding-mobile) 6vh var(--padding-mobile);
  }
  .c-contactus__title {
    flex: 1;
    text-align: center;
  }

  .c-contactus__subheading {
    margin: 4vh 0vw;
  }

  .c-contactus__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1 1 0;
  }
  .c-contactus__form > input {
    padding: 1rem;
    background: rgba(232, 237, 223, 0.5);
    border: none;
    outline: none;

    ::placeholder {
      opacity: 50%;
    }
  }

  .c-contactus__form > p,
  input {
    margin: 0vh 0rem 2vh 0rem;
  }

  .c-contactus__form > .addinfo {
    height: 8.5vh;
    align-items: start;
  }

  // image styling
  .c-contactus__image {
    border: var(--imagecard-border-clr);
    border-radius: var(--imagecard-border-radius);

    /* drop shadow */
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  }

  ///////////////////
  ///////////////////
  // Tablet Layout //
  ///////////////////
  ///////////////////

  @media (min-width: 992px) {
    .l-contactus {
      padding: 6vh var(--padding-desktop);
      display: grid;
      grid-column-gap: 4vw;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto auto auto;
      grid-template-areas:
        "header header"
        "subheading subheading"
        "form form"
        "button button";
    }

    .c-contactus__header {
      text-align: center;
      grid-area: header;
    }
    .c-contactus__image {
      grid-area: image;
    }
    .c-contactus__subheading {
      margin: 2vh 0vw;
      grid-area: subheading;
      text-align: center;
    }
    .c-contactus__form {
      grid-area: form;

      input {
        margin: 0.5vh 0vw;
      }
    }

    .c-contactus__btn {
      grid-area: button;
      justify-self: center;
    }
  }

  ///////////////////
  ///////////////////
  // Desktop Layout /
  ///////////////////
  ///////////////////

  @media (min-width: 1280px) {
    .l-contactus {
      padding: 10vh 25vw;
      grid-row-gap: 4vh;
    }

    .c-contactus__header {
      margin: 0;
    }

    .c-contactus__form {
      input {
        margin: 1vh 0vw;
        padding: 4vh 2vw;
      }
    }

    .c-contactus__subheading {
      font-size: 1.125rem;
      align-self: end;
    }
  }

  //////////////////////
  //////////////////////
  /////// Hi res ///////

  @media (min-width: 2560px) {
    .l-contactus {
      padding: 10vh 30vw;
    }
    .c-contactus__header {
      font-size: 4.5rem;
    }
    .c-contactus__subheading {
      font-size: 1.25rem;
      align-self: end;
    }

    .c-contactus__form {
      font-size: 1.8rem;
    }

    .c-contactus__form > input {
      padding: 2vh 2vw;
      ::placeholder {
        font-size: 1.25rem;
      }
    }
  }
`;

export default ContactUs;
