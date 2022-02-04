import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import GlossaryCard from "../components/glossarycard";

import { Head } from "../components/head";
import Layout from "../components/Layout";

const query = graphql`
  {
    allContentfulGlossaryPage {
      nodes {
        alphabetA {
          childMarkdownRemark {
            html
          }
        }
        alphabetB {
          childMarkdownRemark {
            html
          }
        }
        alphabetC {
          childMarkdownRemark {
            html
          }
        }
        alphabetD {
          childMarkdownRemark {
            html
          }
        }
        alphabetE {
          childMarkdownRemark {
            html
          }
        }
        alphabetF {
          childMarkdownRemark {
            html
          }
        }
        alphabetG {
          childMarkdownRemark {
            html
          }
        }
        alphabetH {
          childMarkdownRemark {
            html
          }
        }
        alphabetI {
          childMarkdownRemark {
            html
          }
        }
        alphabetJ {
          childMarkdownRemark {
            html
          }
        }
        alphabetK {
          childMarkdownRemark {
            html
          }
        }
        alphabetL {
          childMarkdownRemark {
            html
          }
        }
        alphabetM {
          childMarkdownRemark {
            html
          }
        }
        alphabetN {
          childMarkdownRemark {
            html
          }
        }
        alphabetO {
          childMarkdownRemark {
            html
          }
        }
        alphabetP {
          childMarkdownRemark {
            html
          }
        }
        alphabetQ {
          childMarkdownRemark {
            html
          }
        }
        alphabetS {
          childMarkdownRemark {
            html
          }
        }
        alphabetT {
          childMarkdownRemark {
            html
          }
        }
        alphabetU {
          childMarkdownRemark {
            html
          }
        }
        alphabetV {
          childMarkdownRemark {
            html
          }
        }
        alphabetW {
          childMarkdownRemark {
            html
          }
        }
        alphabetX {
          childMarkdownRemark {
            html
          }
        }
        alphabetY {
          childMarkdownRemark {
            html
          }
        }
        alphabetZ {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

const Glossary = () => {
  const data = useStaticQuery(query);
  const glossary = data.allContentfulGlossaryPage.nodes;
  // First we destructure the glossary array we queried
  // to get an obj
  let glossaryObj = glossary[0];

  // Next, we create an array from the Obj which has sub-ojb such as
  // alphabetA, alphabetB objs.
  // This will return the obj as arrays.
  // We use the returned array later on to map over
  // and return the react components
  const glossaryArr = Object.entries(glossaryObj);

  return (
    <Layout>
      <Head title="Glossary" />
      <GlossaryWrapper>
        <article className="l-glossary">
          <section className="c-glossary__main">
            {" "}
            <h1 className="c-glossary__title">Glossary</h1>
            <div className="c-glossary__linkscontainer">
              {glossaryArr.map((element, index) => {
                const lastAlphabet = element[0].charAt(element[0].length - 1);
                return (
                  <a
                    href="#"
                    className={"c-glossary__links" + " " + lastAlphabet}
                    key={index}
                  >
                    {lastAlphabet}
                  </a>
                );
              })}
            </div>
          </section>
          <section className="c-glossary__cardcontainer">
            <GlossaryCard glossary={glossaryArr} />
          </section>
        </article>
      </GlossaryWrapper>
    </Layout>
  );
};

const GlossaryWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .l-glossary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0vh var(--padding-mobile) 6vh var(--padding-mobile);
  }
  .c-glossary__main {
    justify-content: center;
    display: flex;
    height: 75vh;
    flex-direction: column;
  }

  .c-glossary__title {
    text-align: center;
  }
  .c-glossary__container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .c-glossary__linkscontainer {
    display: flex;
    row-gap: 3.5vh;
    flex-wrap: wrap;
    margin: 5vh 0vw;
  }
  .c-glossary__linkscontainer > a {
    font-size: 2.25rem;
    flex: 1 0 25%;
    font-family: "Lora";
    font-style: normal;
    font-weight: bold;
    text-align: center;
    text-decoration: none !important;
  }

  @media (min-width: 992px) {
    justify-items: center;
    .c-glossary__title {
      text-align: center;
    }
  }
  @media (min-width: 1280px) {
    .l-glossary {
      padding: 10vh var(--padding-desktop);
    }
    .c-glossary__container {
      margin: 0vh 10vw;
    }
  }

  @media (min-width: 2560px) {
    .l-glossary {
      padding: 10vh 20vw;
    }
  }
`;

export default Glossary;
