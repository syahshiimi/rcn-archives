import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import DefaultButton from "../components/button";
import { graphql } from "gatsby";
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
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
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
    }
  }
`;

const About = ({ data }) => {
  const aboutUs = data.contentfulAboutUsPage;
  console.log(aboutUs);

  const {
    firstImage,
    secondImage,
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
  const pathToSecondImage = getImage(secondImage);

  return (
    <Layout>
      <AboutWrapper>
        <BgImage image={pathToFirstImage} style={{}}>
          <section className="l-whoweare">
            <h1 className="c-whoweare__title">Who We Are</h1>
            <div className="c-whoweare__content">{parse(`${whoweare}`)}</div>
          </section>
        </BgImage>

        <section className="l-ourfocus bg--light">
          <h1 className="c-ourfocus__title">Our Focus</h1>
          <div className="c-ourfocus__content">{parse(`${ourfocus}`)}</div>
        </section>
        <BgImage image={pathToSecondImage}>
          {" "}
          <section className="l-thearchives">
            <h1 className="c-thearchives__title">The Archives</h1>
            <div className="c-thearchives__content">
              {parse(`${thearchives}`)}
            </div>
            <DefaultButton url="/browsearchives" title="Browse Archives" />
          </section>
        </BgImage>

        <section className="l-projectmembers">
          <h1 className="c-projectmembers__title">Project Members</h1>
          <div className="c-ourfocus__content">
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
                  <p className="c-projectmembmers__researcherNames">{item}</p>
                );
              })}
            </div>
          </article>
        </section>
      </AboutWrapper>
    </Layout>
  );
};

const AboutWrapper = styled.main`
  ////////////////////
  ////// Mobile //////
  ////////////////////
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
    padding-bottom: 8vh;
    p {
      color: var(--primary-clr-50);
    }
  }

  .c-ourfocus__title {
    text-align: center;
    margin-bottom: 6vh;
  }

  .c-ourfocus__content {
    font-size: 0.875rem;
    text-align: center;
  }

  .c-thearchives__title {
    text-align: center;
    margin-bottom: 6vh;
    color: var(--primary-clr-100);
  }

  .c-thearchives__content {
    font-size: 0.875rem;
    text-align: center;
    margin: 6vh 0vw;
    p {
      color: var(--primary-clr-50);
    }
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
`;

export default About;
