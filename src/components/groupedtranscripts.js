import { Link } from "gatsby";
import React from "react";
import slugify from "slugify";

export const GroupedTranscripts = ({ transcript }) => {
  if (transcript.groupedTranscripts) {
    const { groupedTranscripts } = transcript;
    groupedTranscripts.sort(function (a, b) {
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

    return (
      <div className="c-transcriptsummary__groupedtranscriptcontainer">
        <p className="c-transcriptsummary__groupedtranscript">
          This transcript is part of a group of transcripts.
        </p>
        {groupedTranscripts.map((item, index) => {
          const { transcriptTitle } = item;
          const cleanString = transcriptTitle
            .replace(".", " ")
            .replace("(", " ")
            .replace(")", " ");
          // use slugify to return a string in a slug format
          const slug = slugify(cleanString, { lower: true });
          return (
            <div
              className="c-transcriptsummary__groupedtranscripttitle"
              key={index}
            >
              <Link to={`/browsearchives/${slug}`}>{transcriptTitle}</Link>
            </div>
          );
        })}{" "}
      </div>
    );
  } else {
    return null;
  }
};
