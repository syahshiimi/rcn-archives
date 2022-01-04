import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt"

const BrowseArchives = () => {
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
              <BiSearchAlt />
            </button>
          </form>
          <div className="c-browsearchives__filtercontainer">
            <label
              for="c-browsearchives__filterbykeywords"
              className="c-browsearchives__keywordscheckbox"
            >
              <input type="checkbox" value="keywords" />
              Filter by keywords
            </label>
            <label
              for="c-browsearchives__filterbytags"
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
      </BrowseArchivesWrapper>
    </Layout>
  )
}

const BrowseArchivesWrapper = styled.main`
  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 4vh var(--padding-mobile) 16vh var(--padding-mobile);

    * {
      // apply text align center to all //
      text-align: center;
    }
  }

  .c-browsearchives__heading {
    text-align: center;
    font-size: 1.5rem;
  }

  .c-browsearchives__searchbar {
    justify-content: center;
    text-align: center;
    display: flex;
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
      font-size: 0.625rem;
      text-align: left;
      padding-left: 8vw;
      opacity: 50%;
      align-self: center;
    }
  }

  .c-browsearchives__searchbutton {
    background-color: var(--primary-clr-100);
    width: 20%;
    border: none;
    border-radius: 0 calc(4rem + 3px) calc(4rem + 3px) calc(4rem + 3px);
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
    margin: 0vh 1vw;
  }

  .c-browsearchives__tagscheckbox > input {
    margin: 0vh 1vw;
  }_

`
export default BrowseArchives
