import React, { useState } from "react";

// Import Componenets
import { CheckVernacularLang } from "./langtoggle";

export const TranscriptContent = ({
  englishTranscript,
  vernacularTranscript,
  lang,
}) => {
  // We can use useState to dynamically control type of transcript content
  const [langType, setLang] = useState(englishTranscript);
  const [buttonType, setButton] = useState(`${lang}`);
  const onClick = () => {
    if (buttonType != "English") {
      setLang(vernacularTranscript);
      setButton("English");
    } else {
      setLang(englishTranscript);
      setButton(`${lang}`);
    }
  };
  console.log(englishTranscript);

  if (englishTranscript == null) {
    return null;
  } else {
    return (
      <div className="c-transcript__content">
        <CheckVernacularLang
          onClick={onClick}
          type={buttonType}
          transcript={vernacularTranscript}
        />
        {langType}
      </div>
    );
  }
};
