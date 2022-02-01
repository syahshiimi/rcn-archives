import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../components/Layout";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { SearchCard } from "../components/searchcard";
import { SearchBar } from "../components/search";
import { useFlexSearch } from "react-use-flexsearch";
import { BackToSearchBtn } from "../components/button";
import scrollTo from "gatsby-plugin-smoothscroll";

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
          oneLineTeaser
          childMarkdownRemark {
            html
          }
        }
        interviewee
        interviewer
      }
    }
    localSearchArchives {
      index
      store
    }
  }
`;

const BrowseArchives = () => {
  const data = useStaticQuery(query);
  const transcript = data.allContentfulInterviewTranscripts.nodes;
  const find = data.localSearchArchives;
  const { index, store } = find;

  /////////////////////////////////
  //////// Search Function ////////
  /////////////////////////////////

  const { search } = window.location;
  const searchQuery = new URLSearchParams(search).get("s");

  const [queryState, setSearchQuery] = useState(searchQuery || "");

  // useStaet hooks to control input
  // The idea here is to control the input type  based on existing values
  // 1. If queryState == default value, we have setSearchQuery modify the query to have it set as an empty string
  // 2. We use the onClick as an event handler, which then return the value based on which tag pill was clicked
  // 3. If the tag pill rreturns a value, we have setSearchQuery modify the queryStaet by using the tag pill value
  // 4. if the queryState IS NOT == default, we also expose the setSearchQuery function to use the tag pill value
  const onClick = (value = []) => {
    const { item } = value;
    console.log(item);
    if (queryState === searchQuery) {
      setSearchQuery("");
    } else {
      scrollTo(".c-browsearchives__searchresults");
      setSearchQuery(item);
    }
  };

  const results = useFlexSearch(queryState, index, store);

  // Unflatten  Results
  const unFlattenResults = (results) =>
    results.map((item) => {
      const {
        oneLiner, // this is for search
        id,
        interviewer,
        interviewee,
        transcriptTitle,
        transcriptTags,
        oneLineTeaser: {
          childMarkdownRemark: { html },
        },
      } = item;
      return {
        oneLiner, // this is for search
        id,
        interviewer,
        interviewee,
        transcriptTitle,
        transcriptTags,
        oneLineTeaser: {
          childMarkdownRemark: { html }, // this is for parsing in the searchcard during render
        },
      };
    });

  // set defaults where we return the entire transcript
  const FilteredTranscript = queryState
    ? unFlattenResults(results)
    : transcript;

  /////////////////////////////
  //////// Render Comp. ///////
  /////////////////////////////

  return (
    <Router>
      {" "}
      <Layout>
        <BrowseArchivesWrapper>
          <BackToSearchBtn />
          <section className="l-browsearchives">
            <h1 className="c-browsearchives__heading">Search The Archives</h1>
            <SearchBar
              queryState={queryState}
              setSearchQuery={setSearchQuery}
            />
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
          <section className="l-browsearchives__search">
            <h1 className="c-browsearchives__searchresults">Search Results</h1>
            <section className="c-browsearchives__searchcontainer">
              {FilteredTranscript.map((item) => {
                const {
                  id,
                  transcriptTitle,
                  transcriptTags,
                  oneLineTeaser: {
                    childMarkdownRemark: { html },
                  },
                } = item;
                return (
                  <SearchCard
                    transcriptTitle={transcriptTitle}
                    transcriptTags={transcriptTags}
                    html={html}
                    key={id}
                    func={onClick}
                  />
                );
              })}
            </section>
          </section>
        </BrowseArchivesWrapper>
      </Layout>
    </Router>
  );
};

const BrowseArchivesWrapper = styled.main`
  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0vh var(--padding-mobile) 6vh var(--padding-mobile);

    * {
      // apply text align center to all //
      text-align: center;
    }
  }

  .c-browsearchives__heading {
    text-align: center;
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

  .c-browsearchives__searchresults {
    text-align: center;
    margin-bottom: 4vh;
  }

  .c-browsearchives__searchcontainer {
    background-color: var(--primary-clr-50);
    padding: 2vh 2vw;
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
    flex: 1 1 auto;
    
    // Enable archives
    .desktop {
      display: grid;
    }

    section {
      padding: 4vh var(--padding-desktop) 6vh var(--padding-desktop);
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
    
    .c-browsearchives__content {
      margin: 0vh 2vw;
    }

    .l-browsearchives__search {
      padding-top: 0;
      display: flex;
      justify-content: stretch;
      flex: 1 1 auto;
      max-width: 100%;
    }

    .c-browsearchives__searchresults {
      margin: 3vh 0vw;
    }

    .c-browsearchives__searchcontainer {
      width: 75vw;

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
      font-size: 3rem; // 64px
    }

    
    .c-browsearchives__filtercontainer > label {
      font-size: 0.925rem;
    }

    .c-browsearchives__content {
      margin: 0vh 12vw;
    }
    
    .l-browsearchives__search {
      max-width: 100%;
    }

    .c-browsearchives__searchresults {
      margin-bottom: 8vh;
  }
    
    .c-browsearchives__searchcontainer {
    }
`;
export default BrowseArchives;
