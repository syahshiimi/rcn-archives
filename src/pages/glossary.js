import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import GlossaryCard from "../components/glossarycard";
import scrollTo from "gatsby-plugin-smoothscroll";

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

  // Onclick handler for jump linking
  // Create a event handler named onClick
  // We use the scrollTo feature in a gatsby plugin called 'scrollTo'

  const onClick = (e) => {
    e.preventDefault();
    // We store the last char value and we will concatenate into the component name for jump linking
    const lastChar = e.target.className.charAt(e.target.className.length - 1);
    // We create new var to store actual glossary card className
    const jumpLink = `.c-glossarycard_${lastChar}`;
    scrollTo(jumpLink);
  };
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
                    className={"c-glossary__links" + lastAlphabet}
                    key={index}
                    onClick={onClick}
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
  .c-glossary__cardcontainer {
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
    flex: 1 1 25%;
    font-family: "Lora";
    font-style: normal;
    font-weight: bold;
    text-align: center;
    text-decoration: none !important;
  }

  @media (min-width: 992px) {
    justify-items: center;
    .l-glossary {
      padding: 4vh var(--padding-desktop) 6vh var(--padding-desktop);
    }

    .c-glossary__main {
      align-items: center;
      flex-direction: column;
      height: 100%;
    }
    .c-glossary__title {
      text-align: center;
    }
    .c-glossary__linkscontainer > a {
      font-size: 2.5rem;
      flex-basis: 20%;
    }
  }
  @media (min-width: 1280px) {
    .l-glossary {
      /* padding: 10vh var(--padding-desktop); */
      padding: 0;
    }
    .c-glossary__main {
      height: 85vh;
      background-color: var(--primary-clr-50);
    }

    .c-glossary__cardcontainer {
      margin: 10vh var(--padding-desktop);
      padding: 0vh 8vw;
    }

    .c-glossary__linkscontainer {
      row-gap: 8vh;
    }
    .c-glossary__linkscontainer > a {
      font-size: 3rem;
      flex-basis: 7.69%;
    }
  }

  @media (min-width: 2500px) {
    .l-glossary {
      padding: 0;
    }

    .c-glossary__main {
      height: 90vh;
    }

    .c-glossary__cardcontainer {
      padding: 0vh 20vw;
    }

    .c-glossary__linkscontainer > a {
      font-size: 3.5rem;
    }
  }
`;

export default Glossary;
