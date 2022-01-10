import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt"
import { IconContext } from "@react-icons/all-files/lib"
import { graphql, useStaticQuery } from "gatsby"
import { SearchCard } from "../components/searchcard"

const query = graphql`
  {
    allContentfulInterviewTranscripts {
      nodes {
        id
        discussionQuestions {
          raw
        }
        englishFullTranscript {
          raw
        }
        englishTranscriptSummary {
          raw
        }
        transcriptTags
        transcriptTitle
        oneLineTeaser {
          childMarkdownRemark {
            html
          }
        }
        interviewee
        interviewer
      }
    }
  }
`
const BrowseArchives = () => {
  const data = useStaticQuery(query)
  const transcript = data.allContentfulInterviewTranscripts.nodes
  return (
    <Layout>
      <BrowseArchivesWrapper>
        <section className="l-browsearchives">
          <h1 className="c-browsearchives__heading">Search The Archives</h1>
          <form className="c-browsearchives__searchbar">
            <input
              type="text"
              className="c-browsearchives__searchinput"
              placeholder="Browse by keywords, topics themes or #tags"
            />
            <button className="c-browsearchives__searchbutton" type="submit">
              <IconContext.Provider
                value={{ className: "c-browsearchives__searchicon" }}
              >
                <BiSearchAlt />
              </IconContext.Provider>
            </button>
          </form>
          <div className="c-browsearchives__filtercontainer">
            <label
              htmlFor="c-browsearchives__filterbykeywords"
              className="c-browsearchives__keywordscheckbox"
            >
              <input type="checkbox" value="keywords" />
              Filter by keywords
            </label>
            <label
              htmlFor="c-browsearchives__filterbytags"
              className="c-browsearchives__tagscheckbox"
            >
              <input type="checkbox" value="tags" />
              Filter by tags
            </label>
          </div>
          <p className="c-browsearchives__content">
            Browse through our carefully curated oral archives. Working with
            on-the-ground experiences, we aim to provide a wholesome and
            comprehensive approach towards understanding the cold war from a
            grassroots perspective.
          </p>
        </section>
        <section className="l-browsearchivesmap bg--gray desktop">
          <h1 className="c-browsearchivesmap__heading">Archives Map</h1>
        </section>
        <section className="l-browsearchives__search">
          <h1 className="c-browsearchives__searchresults">Search Results</h1>
          <section className="c-browsearchives__searchcontainer">
            <SearchCard transcript={transcript} />
          </section>
        </section>
      </BrowseArchivesWrapper>
    </Layout>
  )
}

const BrowseArchivesWrapper = styled.main`
  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 4vh var(--padding-mobile) 6vh var(--padding-mobile);

    * {
      // apply text align center to all //
      text-align: center;
    }
  }

  .c-browsearchives__heading {
    text-align: center;
  }

  .c-browsearchives__searchbar {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 2vh 0vw 1vh 0vw;
    border: 3px solid var(--primary-clr-200);
    border-radius: calc(4rem + 3px);
    background-color: var(--primary-clr-50);
  }

  .c-browsearchives__searchinput {
    width: 100%;
    height: 6vh;
    border: none;
    border-radius: calc(4rem + 3px) 0 0 calc(4rem + 3px);
    background-color: var(--primary-clr-50);

    ::placeholder {
      font-size: 0.6rem;
      text-align: left;
      padding-left: 8vw;
      opacity: 40%;
    }
  }

  // disable input field border highlighting

  input[type='text']: focus {
    outline: none;
  }

  .c-browsearchives__searchbutton {
    background-color: var(--primary-clr-100);
    width: 25%;
    border: none;
    border-radius: 0 calc(4rem + 3px) calc(4rem + 3px) calc(4rem + 3px);
  }

  .c-browsearchives__searchicon {
    height: 1.7em;
    width: 1.7em;
  }

  .c-browsearchives__filtercontainer {
    margin: 1.5vh 0vw 4vh 0vw;
    display: flex;
    justify-content: center;
  }

  .c-browsearchives__filtercontainer > label {
    font-family: "Ubuntu", Serif;
    font-size: 0.725rem;
    display: flex;
    align-items: center;
  }

  .c-browsearchives__filtercontainer > * {
    margin: 0vh 2vw;
  }

  .c-browsearchives__keywordscheckbox > input {
    margin: 0vh 1.8vw;
  }

  .c-browsearchives__tagscheckbox > input {
    margin: 0vh 1.8vw;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;

    // custom styling
    font: inherit;
    width: 1.2rem;
    height: 1rem;
    border-radius: 0.5rem;
    border: 2px solid var(--primary-clr-200);
    background-color: var(--secondary-clr-250);
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.65rem;
    height: 0.6rem;
    border-radius: inherit;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1rem 1rem var(--primary-clr-100);
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  .desktop {
    display: none;
  }



  .c-browsearchives__searchresults {
    text-align: center;
  }

  .c-browsearchives__searchcontainer {
    background-color: var(--primary-clr-50);
    padding: 2vw 2vh;
    border-radius: calc(5vw + 4px);
  }

  ////////////////////////////
  ////////////////////////////
  ////////////////////////////
  ///////// Tablet ///////////
  ////////////////////////////
  ////////////////////////////

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    // Enable archives
    .desktop {
      display: grid;
    }

    section {
      padding: 4vh var(--padding-desktop) 6vh var(--padding-desktop);
    }

      .l-browsearchives__search > *  {
        margin: 2vh 0vw;
    }

    .c-browsearchives__searchbar {
      margin-left: 12vw;
      margin-right: 12vw;
    }

    .c-browsearchives__searchinput {
      height: 4vh;

      ::placeholder {
        text-align: center;
        font-size: 1rem;
        padding-left: 20%;
      }
    }

    .c-browsearchives__searchbutton {
      width: 20%;
    }
    .c-browsearchives__searchicon {
      height: 2.2rem;
      width: 2.2rem;
    }

    .c-browsearchives__filtercontainer {
      margin-right: 12vw;
      margin-top: 0;
      justify-content: end;
    }

    .c-browsearchives__filtercontainer > * {
      margin: 0vh 0.8vw;
    }

    .c-browsearchives__keywordscheckbox > input {
      margin: 0vh 0.5vw;
    }

    .c-browsearchives__tagscheckbox > input {
      margin: 0vh 0.5vw;
    }
    .c-browsearchives__filtercontainer > label {
      font-size: 0.825rem;
    }
  }

  ////////////////////////////
  ////////////////////////////
  ////////////////////////////
  //////// Desktop ///////////
  ////////////////////////////
  ////////////////////////////

  @media (min-width: 1280px) {
    section {
      padding: 10vh var(--padding-desktop);
    }

    .c-browsearchives__heading {
      font-size: 4rem; // 64px
    }

    .c-browsearchives__searchbar {
      margin-bottom: 3vh;
    }
    .c-browsearchives__searchinput {
      height: 8vh;

      ::placeholder {
        text-align: center;
        font-size: 1.125rem;
        padding-left: 20%;
      }
    }

    .c-browsearchives__searchbutton {
      width: 15%;
    }

    .c-browsearchives__searchicon {
      width: 2.5rem;
      height: 2.5rem;
    }
    .c-browsearchives__filtercontainer > label {
      font-size: 0.925rem;
    }

    .c-browsearchives__content {
      margin: 0vh 12vw;
    }
  }
`
export default BrowseArchives
