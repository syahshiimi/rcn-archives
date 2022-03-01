import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Head } from "../components/head";
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

// We check to see if window is available
const isSearch = typeof window !== "undefined";

const BrowseArchives = () => {
  const data = useStaticQuery(query);
  const transcript = data.allContentfulInterviewTranscripts.nodes;
  const flexFind = data.localSearchArchives;
  const { index, store } = flexFind;

  /////////////////////////////////
  //////// Search Function ////////
  ////////////////////////////////

  // We check to see if window is defined before we build it
  let FindSearch = false;
  if (isSearch) {
    window.location.search === "true";
  }
  const searchQuery = new URLSearchParams({ FindSearch }).get("s");
  const [queryState, setSearchQuery] = useState(searchQuery || "");

  // useStaet hooks to control search input via tags
  // 1. If queryState == default value, we use the default value that is 'searchQuery'
  // 2. We use the onClick as an event handler, to return the value based on which tag pill was clicked. This value will be the tag pill variable
  // 3. If the tag pill rreturns a value, we have setSearchQuery modify the  by using the tag pill value
  // 4. if the queryState IS NOT == default, we also expose the setSearchQuery function to use the tag pill value

  const onClick = (value = []) => {
    const { item } = value; // destructure value to get the variable
    if (queryState === searchQuery) {
      setSearchQuery("");
    } else {
      setSearchQuery(item);
      scrollTo(".c-browsearchives__searchresults");
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

  // set defaults where we return the entire transcript or else return the fitlered transcript
  const FilteredTranscript = queryState
    ? unFlattenResults(results)
    : transcript;

  /////////////////////////////
  //////// Render Comp. ///////
  /////////////////////////////

  return (
    <Layout>
      <Head title="Browse Archives" />
      <BrowseArchivesWrapper>
        <section className="l-browsearchives">
          <h1 className="c-browsearchives__heading">Search The Archives</h1>
          <SearchBar queryState={queryState} setSearchQuery={setSearchQuery} />
          <p className="c-browsearchives__content">
            Browse through our carefully curated oral archives. Working with
            on-the-ground experiences, we aim to provide a wholesome and
            comprehensive approach towards understanding the cold war from a
            grassroots perspective.
          </p>
        </section>
        <section className="l-browsearchives__search">
          <h1 className="c-browsearchives__searchresults">Search Results</h1>
          <div className="c-browsearchives__searchcontainer">
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
          </div>
        </section>
        <BackToSearchBtn />
      </BrowseArchivesWrapper>
    </Layout>
  );
};

const BrowseArchivesWrapper = styled.main`
  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2vh var(--padding-mobile) 6vh var(--padding-mobile);

    * {
      // apply text align center to all //
      text-align: center;
    }
  }

  .c-browsearchives__heading {
    text-align: center;
  }

  .c-browsearchives__content {
    margin: 4vh 0vw;
    padding: 0vh 6vw;
    line-height: 1.255rem;
  }

  .c-browsearchives__searchresults {
    text-align: center;
    margin-bottom: 4vh;
  }

  .c-browsearchives__searchcontainer {
    background-color: var(--primary-clr-50);
    padding: 1vh 2vw;
    flex-direction: column;
    border-radius: var(--border-rad-mobile);
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
    padding-bottom: 2vh;

    // Enable archives
    .desktop {
      display: grid;
    }

    section {
      padding: 4vh var(--padding-desktop) 2vh var(--padding-desktop);
    }

    .c-browsearchives__content {
      margin: 2vh 2vw;
    }

    .l-browsearchives__search {
      padding-top: 0;
      display: flex;
    }

    .c-browsearchives__searchresults {
      margin: 3vh 0vw;
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

    .l-browsearchives {
      padding: 0vh var(--padding-desktop) 0vh var(--padding-desktop);
      height: 84vh;
    }
    .c-browsearchives__heading {
      font-size: 3rem; // 64px
    }

    .c-browsearchives__content {
      margin: 4vh 12vw;
    }

    .l-browsearchives__search {
      padding: 0vh var(--padding-desktop) 5vh var(--padding-desktop);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .c-browsearchives__searchresults {
      margin-bottom: 8vh;
      width: 100%;
    }

    .c-browsearchives__searchcontainer {
      display: flex;
      justify-content: center;
      border-radius: var(--border-rad-desktop);
      padding: 2vh 1vw;
    }
  }
  ////////////////////////////
  ////////////////////////////
  ////////////////////////////
  ///// 4k Desktop ///////////
  ////////////////////////////
  ////////////////////////////

  @media (min-width: 2560px) {
    .l-browsearchives {
      height: 90vh;
    }
    .c-browsearchives__heading {
      font-size: 4.5rem;
    }

    .c-browsearchives__content {
      margin: 4vh 13vw;
      font-size: 1.25rem;
    }

    .l-browsearchives__search {
      padding: 0vh 24vw 10vh 24vw;
    }

    .c-browsearchives__searchresults {
      font-size: 4.5rem;
    }

    .c-browsearchives__searchcontainer {
    }
  }
`;
export default BrowseArchives;
