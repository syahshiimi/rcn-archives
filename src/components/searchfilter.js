import { IconContext } from "@react-icons/all-files/lib"
import React from "react"
import styled from "styled-components"
import { TiArrowDown } from "@react-icons/all-files/Ti/TiArrowDown"

import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"

export const query = graphql`
  {
    allContentfulInterviewerList {
      nodes {
        contentful_id
        interviewerList
      }
    }
  }
`

//////////////////////////////
/////// Sub Filters //////////
/////////////////////////////

function InterviewerFilter(props) {
  const data = useStaticQuery(query)
  const interviewers = data.allContentfulInterviewerList.nodes
  const [item] = interviewers
  const { interviewerList } = item
  console.log(interviewerList)

  return (
    <InterviewerFilterWrapper className="c-interviewerlist">
      <h5 className="c-interviewerlist__title">Interviewer</h5>
      <div className="c-interviewerlist__header">
        <p className="c-interviwerlist__selected">None</p>
      <IconContext.Provider value={{ className: "c-interviwerlist__icon" }}>
        <TiArrowDown />
      </IconContext.Provider>
        </div>

      <div className="c-interviewerlist__list">
        {interviewerList.map((item, index) => {
          return (
            <p className="c-subfilter__${item}" key={index}>
              {item}
            </p>
          )
        })}
      </div>
    </InterviewerFilterWrapper>
  )
}

//////////////////////////////
/// Main Filter Component ///
//////////////////////////////
export const SearchFilter = () => {
  return (
    <SearchFilterWrapper>
      <button className="c-searchfilter___header">
        <h5 className="c-searchfilter__title">Search Filter</h5>
        <IconContext.Provider value={{ className: "c-searchfilter__icon" }}>
          <TiArrowDown />
        </IconContext.Provider>
      </button>
      <div className="c-searchfilter__bodycontainer">
        <InterviewerFilter />
      </div>
    </SearchFilterWrapper>
  )
}

const SearchFilterWrapper = styled.div`
  @media (min-width: 1280px) {
    margin: 4vh 8vw !important;

    .c-searchfilter___header {
      display: flex;
      flex-direction: row-reverse;
      padding: 1.5vh 4vw;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      flex: 1 1 auto;

      /* styling */
      background-color: var(--primary-clr-200);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transition: all 0.5s ease-in-out 0.2s;
    }

    .c-searchfilter__title {
      color: var(--primary-clr-100);
    }

    .c-searchfilter__icon {
      color: var(--primary-clr-100);
      width: 3rem;
      height: 3rem;
    }

    .c-searchfilter__bodycontainer {
      padding: 2vh 4vw;
      background-color: var(--primary-clr-50);
      border-radius: 0 0 calc(2rem + 2px) calc(2rem + 2px);
    }
  }
`

const InterviewerFilterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 0 !important;
  @media (min-width: 1280px) {
    .c-interviewerlist__title {
      text-decoration: underline;
    }

    .c-interviewerlist__header {
      background-color: var(--secondary-clr-250);
      display: flex;
      flex-direction: row;
    }
    .c-interviewerlist__list {
      background-color: var(--primary-clr-100);
    }
  }
`
