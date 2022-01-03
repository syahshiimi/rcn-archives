import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

// Import Wrapper Components
import Layout from "../components/Layout"

// Import Global Components
import DefaultButton from "../components/button"

// Variables
const contributeHead = "Contribute to the project!"
const ContributeSub =
  "We are always looking for contributors to the archives.\n Fill in the form below and we will get back to you."

const Contribute = () => {
  return (
    <Layout>
      <ContributeWrapper>
        <section className="l-contribute">
          <h1 className="c-contribute__header">Contribute</h1>
          <h2 className="c-contribute__heading">{contributeHead}</h2>
          <StaticImage
            src="../assets/img/rcw_workshops/rcw_2nd_workshop.jpg"
            alt="RCN Workshop"
            layout="constrained"
            className="c-contribute__image"
            objectFit="cover"
          />
          <p className="c-contribute__subheading">{ContributeSub}</p>
          <div className="c-contribute__form">
            <input type="text" className="name" placeholder="Name" />
            <input type="text" className="email" placeholder="Email" />
            <input
              type="text"
              className="addinfo"
              placeholder="Additional Info"
            />
          </div>
          <div className="c-contribute__btn">
            <DefaultButton title="Submit" />
          </div>
        </section>
      </ContributeWrapper>
    </Layout>
  )
}

const ContributeWrapper = styled.article`
  .l-contribute {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0vh var(--padding-mobile) 6vh var(--padding-mobile);
  }
  .c-contribute__title {
    flex: 1;
    text-align: center;
  }

  .c-contribute__heading {
    margin: 2vh 0vw;
  }

  .c-contribute__subheading {
    margin: 4vh 0vw;
  }

  .c-contribute__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1 1 0;
  }
  .c-contribute__form > input {
    padding: 1rem;
    background: rgba(232, 237, 223, 0.5);
    border: none;
    outline: none;

    ::placeholder {
      opacity: 50%;
    }
  }

  .c-contribute__form > p,
  input {
    margin: 0vh 0rem 2vh 0rem;
  }

  .c-contribute__form > .addinfo {
    height: 8.5vh;
    align-items: start;
  }

  // image styling
  .c-contribute__image {
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
    .l-contribute {
      padding: 6vh var(--padding-desktop);
      display: grid;
      grid-column-gap: 4vw;
      grid-template-columns: 1fr 1fr;
      grid-grid-template-rows: auto auto auto auto auto;
      grid-template-areas:
        "header header"
        "heading heading"
        "image subheading"
        "image form"
        ". button";
    }

    .c-contribute__header {
      text-align: center;
      grid-area: header;
    }
    .c-contribute__heading {
      margin: 2vh 0vw;
      text-align: center;
      grid-area: heading;
    }
    .c-contribute__image {
      grid-area: image;
    }
    .c-contribute__subheading {
      margin: 2vh 0vw;
      grid-area: subheading;
    }
    .c-contribute__form {
      grid-area: form;

      input {
        margin: 0.5vh 0vw;
      }
    }

    .c-contribute__btn {
      grid-area: button;
      justify-self: end;
    }
  }

  ///////////////////
  ///////////////////
  // Desktop Layout /
  ///////////////////
  ///////////////////

  @media (min-width: 1280px) {
    .l-contribute {
      padding: 10vh var(--padding-desktop);
      grid-row-gap: 4vh;
    }

    .c-contribute__header {
      margin: 0;
    }

    .c-contribute__form {
      input {
        margin: 1vh 0vw;
        padding: 4vh 2vw;
      }
    }

    .c-contribute__subheading {
      font-size: 1.125rem;
      align-self: end;
    }
  }

  //////////////////////
  //////////////////////
  /////// Hi res ///////

  @media (min-width: 2560px) {
  .c-contribute__subheading {
      font-size: 2rem;
      align-self: end;
    }

  .c-contribute__form {
    font-size: 1.8rem;

  }


  }
`

export default Contribute
