import React from "react";
import HeaderContent from "./HeaderContent"
import HeaderSearch from "./HeaderSearch"


function Header() {
  const headerStyle = {
    borderBottom: '2px solid gray',
    height: '10%',
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between'
  }

  return (
    <div style={headerStyle}>
      <HeaderContent/>
      <HeaderSearch/>
    </div>
  );
}

export default Header;
