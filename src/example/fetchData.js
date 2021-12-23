import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        complexData {
          age
          name
        }
        description
        simpleData
        title
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      siteMetadata: { description, title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>{description}</h1>
    </div>
  )
}

export default FetchData
