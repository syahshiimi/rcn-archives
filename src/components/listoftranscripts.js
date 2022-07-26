import React, { useState } from "react";
import { useFlexSearch } from "react-use-flexsearch";
import { graphql, Link, useStaticQuery } from "gatsby";
import slugify from "slugify";

const transcriptQuery = graphql`
  {
    allContentfulInterviewTranscripts {
      nodes {
        transcriptTitle
        transcriptTags
      }
    }
    localSearchArchives {
      index
      store
    }
  }
`;

// Conditional Transcript Rendering within the Modal

export const ListofTranscripts = (value) => {
    let { searchValue } = value; // obtained from geo.properties, which would be the name of a country

    if (searchValue == "Korea") {
        searchValue = "South Korea";
    } else if (searchValue == "Dem. Rep. Korea") {
        searchValue = "North Korea";
    }

    const data = useStaticQuery(transcriptQuery);
    const flexTranscripts = data.localSearchArchives;
    const { index, store } = flexTranscripts;
    const results = useFlexSearch(searchValue, index, store);

    const filtered = results.filter((item) =>
        item.transcriptTags.includes(searchValue)
    );

    // We sort the results
    filtered.sort(function(a, b) {
        const nameA = a.transcriptTitle.toUpperCase();
        const nameB = b.transcriptTitle.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });

    if (filtered.length > 0) {
        return filtered.map((item, index) => {
            const { transcriptTitle } = item;

            const cleanString = transcriptTitle
                .replace(".", " ")
                .replace("(", " ")
                .replace(")", " ");
            const slug = slugify(cleanString, { lower: true });

            return (
                <div className="c-browsemap__transcript" key={index}>
                    <Link to={`../browsearchives/${slug}`}>{transcriptTitle}</Link>
                </div>
            );
        });
    } else {
        return (
            <div className="c-browsemap__noresults">
                There are currently no documents for {searchValue}
            </div>
        );
    }
};
