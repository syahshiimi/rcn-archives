import React, { useState } from "react";

export const CheckVernacularLang = ({ onClick, type, transcript }) => {
  if (transcript == null) {
    return null;
  } else if (transcript != null) {
    return (
      <button onClick={onClick} className="c-langtoggle">
        Read In The {type} Language
      </button>
    );
  }
};
