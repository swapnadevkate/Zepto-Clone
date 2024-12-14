import React from "react";

function Text({ text, textFont, color }) {
  return <p style={{ fontWeight: textFont, color: color }}>{text}</p>;
}

export default Text;
