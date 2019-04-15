import React from "react";

function Bio() {
  const bioStyle = {
    border: '2px solid blue',
    backgroundColor: '#a9a9a9',
    gridColumn: '1 / 2',
    gridRow: '3 / 7'
  }
  return (
    <div style={bioStyle}>
      <h1>Bio</h1>
    </div>
  );
}

export default Bio;
