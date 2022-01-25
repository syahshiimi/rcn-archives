import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import DefaultButton from "../components/button";
import { graphql, Link } from "gatsby";
import { BgImage } from "gbimage-bridge";

import parse from "html-react-parser";

export const query = graphql`
  {
    contentfulAboutUsPage {
      theArchives {
        childMarkdownRemark {
          thearchives: html
        }
      }
      firstImage {
        gatsbyImageData(
          placeholder: TRACED_SVG
          layout: FULL_WIDTH
          breakpoints: 992
        )
      }
      id
      principalInvestigator
      projectMembers {
        childMarkdownRemark {
          projectmembers: html
        }
      }
      projectMembersList
      researchAssistant
      secondImage {
        gatsbyImageData(
          aspectRatio: 1.5
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
        )
      }
      whoWeAre {
        childMarkdownRemark {
          whoweare: html
        }
      }
      ourFocus {
        childMarkdownRemark {
          ourfocus: html
        }
      }
      ourFocusImage {
        gatsbyImageData(
          placeholder: TRACED_SVG
          layout: CONSTRAINED
          aspectRatio: 1.5
        )
      }
    }
  }
`;

const About = ({ data }) => {
  const aboutUs = data.contentfulAboutUsPage;
  console.log(aboutUs);

  const {
    firstImage,
    secondImage,
    ourFocusImage,
    principalInvestigator,
    projectMembersList,
    researchAssistant,
    ourFocus: {
      childMarkdownRemark: { ourfocus },
    },

    whoWeAre: {
      childMarkdownRemark: { whoweare },
    },
    theArchives: {
      childMarkdownRemark: { thearchives },
    },
    projectMembers: {
      childMarkdownRemark: { projectmembers },
    },
  } = aboutUs;

  // use getImage function to provide fallback class if NO iamge exists
  const pathToFirstImage = getImage(firstImage);
  const pathToFocusImage = getImage(ourFocusImage);
  const pathToSecondImage = getImage(secondImage);

  return (
    <Layout>
      <AboutWrapper>
        <FirstStyledBackgroundImage
          Tag="div"
          image={pathToFirstImage}
          className="c-whoweare__bgimage"
        >
          <section className="l-whoweare">
            <h1 className="c-whoweare__title">Who We Are</h1>
            <div className="c-whoweare__content">{parse(`${whoweare}`)}</div>
          </section>
        </FirstStyledBackgroundImage>

        <section className="l-ourfocus bg--light">
          <h1 className="c-ourfocus__title">Our Focus</h1>
          <GatsbyImage
            image={pathToFocusImage}
            alt="our_focus_image"
            className="c-ourfocus__image"
          ></GatsbyImage>
          <div className="c-ourfocus__content">{parse(`${ourfocus}`)}</div>
        </section>
        <SecondStyledBackgroundImage Tag="div" image={pathToSecondImage}>
          {" "}
          <section className="l-thearchives">
            <h1 className="c-thearchives__title">The Archives</h1>
            <div className="c-thearchives__content">
              {parse(`${thearchives}`)}
            </div>
            <DefaultButton url="/browsearchives" title="Browse Archives" />
          </section>
        </SecondStyledBackgroundImage>

        <section className="l-projectmembers">
          <h1 className="c-projectmembers__title">Project Members</h1>
          <div className="c-projectmembers__content">
            {parse(`${projectmembers}`)}
          </div>
          <article className="c-projectmembers__info">
            {" "}
            <div className="c-projectmembers__pi">
              <h4 className="c-projectmembers__pi">Principal Investigator</h4>
              <p className="c-projectmembers__piName">
                {principalInvestigator}
              </p>
            </div>
            <div className="c-projectmembers__RA">
              <h4 className="c-projetmembers__RATitle">Research Assistant</h4>
              <p className="c-projectmembers__RAName">{researchAssistant}</p>
            </div>
            <div className="c-projectmembers__researchers">
              <h4 className="c-projectmemebers__researchersTitle">
                Researchers
              </h4>
              {projectMembersList.map((item, index) => {
                return (
                  <p className="c-projectmembmers__researcherNames" key={index}>
                    {item}
                  </p>
                );
              })}
            </div>
          </article>
          <button className="c-projectmembers__contributebtn">
            <Link to="/contribute">Looking to contribute?</Link>
          </button>
        </section>
      </AboutWrapper>
    </Layout>
  );
};

const FirstStyledBackgroundImage = styled(BgImage)`
  ::after {
    filter: brightness(65%) blur(1px) !important;
  }
`;

const SecondStyledBackgroundImage = styled(BgImage)`
  ::after {
    filter: brightness(65%) blur(1px) !important;
  }

  @media (min-width: 992px) {
    ::after {
      filter: brightness(50%) !important;
    }
  }
`;
const AboutWrapper = styled.main`
  section {
    padding: 4vh var(--padding-mobile) 6vh var(--padding-mobile);
  }
  .c-whoweare__title {
    text-align: center;
    margin-bottom: 6vh;
    color: var(--primary-clr-50);
  }

  .c-whoweare__content {
    font-size: 0.875rem;
    text-align: center;
    p {
      color: var(--primary-clr-50);
    }
    margin: 9vh 0vw;
  }

  .c-ourfocus__title {
    text-align: center;
    margin-bottom: 6vh;
  }

  .c-ourfocus__image {
    border: var(--imagecard-border-clr);
    border-radius: var(--imagecard-border-radius);
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
    margin-bottom: 4vh;
  }

  .c-ourfocus__content {
    font-size: 0.875rem;
    text-align: center;
    margin: 4vh 0vw;
  }

  .c-thearchives__title {
    text-align: center;
    margin-bottom: 6vh;
    color: var(--primary-clr-100);
  }

  .c-thearchives__content {
    font-size: 0.875rem;
    text-align: center;
    margin: 9vh 0vw;
    p {
      color: var(--primary-clr-50);
    }
  }

  .l-projectmembers {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .c-projectmembers__title {
    text-align: center;
    margin-bottom: 6vh;
  }

  .c-projectmembers__content {
    font-size: 0.875rem;
    text-align: center;
  }

  .c-projectmembers__info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 4vh 0vw 0vh 0vw;

    * {
      text-align: center;
      margin: 1vh 0vw;
    }
  }
  .c-projectmembers__contributebtn {
    margin: 4vh 0vw;
    display: flex;
    align-items: center;
    font-family: "Lora", serif;
    font-style: normal;
    font-weight: bold;
    justify-content: center;
    background-color: transparent;
    border: none;

    a {
      text-align: center;
    }
  }

  /////////////////////////////////////////
  //////////// Tablet /////////////////////
  /////////////////////////////////////////

  @media (min-width: 992px) {
    .l-whoweare {
      padding: 10vh;
    }
    .c-whoweare__title {
    }
    .c-whoweare__content {
      font-size: 1.1rem;
      margin: 4vh 0vw;
    }

    .l-ourfocus {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .c-ourfocus__title {
      margin-bottom: 3vh;
    }

    .c-ourfocus__image {
      margin: 1vh 6vw;
      padding: 1vh 0vw;
    }

    .c-ourfocus__content {
      margin: 2vh 0vw;
      font-size: 1rem;

      p {
        margin: 1.2vh 0vw;
      }
    }

    .l-thearchives {
      padding: 10vh;
    }

    .c-thearchives__content {
      font-size: 1.1rem;
    }

    .c-projectmembers__content {
      font-size: 1rem;
    }
    .c-projectmembers__info {
      flex: 1 1 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "pi researchers"
        "ra researchers";
    }

    .c-projectmembers__pi {
      margin: 0vh 4vw;
      grid-area: pi;
      align-self: center;
    }

    .c-projectmembers__RA {
      margin: 0vh 4vw;
      grid-area: ra;
    }

    .c-projectmembers__researchers {
      margin: 0vh 4vw;
      grid-area: researchers;
    }

    .c-projectmembers__contributebtn {
      margin: 2vh 0vw 0vh 0vw;
    }
  }
`;

export default About;
