import React from "react"
import parse from "html-react-parser"

export const SearchCard = ({ transcript = [] }) => {
  return (
    <div className="l-searchcard">
      {transcript.map(item => {
        const {
          id,
          transcriptTitle,
          transcriptTags,
          oneLineTeaser: {
            childMarkdownRemark: { html },
          },
        } = item
        return (
          <div className="l-searchcard" key={id}>
            <h3>{transcriptTitle}</h3>
            <span className="c-searchcard__summary">{parse(`${html}`)}</span>
            <span className="c-searchcard__tags">
              {transcriptTags.map((item, index) => {
                return (
                  <p className="c-searchcard__tag" key={index}>
                    {item}
                  </p>
                )
              })}
            </span>
          </div>
        )
      })}
    </div>
  )
}
