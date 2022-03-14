import React from "react";

export const CheckVernacularLang = ({ onClick, type, transcript }) => {
  if (transcript == null || transcript.length == 1) {
    return null;
  } else if (transcript != null) {
    return (
      <button onClick={onClick} className="c-langtoggle">
        Read in {type}
      </button>
    );
  }
};
