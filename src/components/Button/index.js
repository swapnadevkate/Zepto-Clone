import React from "react";

import "./button.css";

export default function Button({ clickHandler, text }) {
  return (
    <button className="button" onClick={clickHandler}>
      {text}
    </button>
  );
}
