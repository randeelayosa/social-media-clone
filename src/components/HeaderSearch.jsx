import React from "react";

function HeaderSearch(){
  const headerSearchStyle = {
    display: 'flex',
    flexDirection: "row",
    width: '40%',
    justifyContent: 'space-around',
    alignItems: 'center'
  };
  const SearchTabStyle = {
    border: '4px solid lightblue',
    borderRadius: '25px',
    width: '50%',
    padding: '3%'
  };
  const TweetTabStyle = {
    border: '4px solid lightblue',
    borderRadius: '25px',
    width: '25%',
    textAlign: 'center',
    padding: '3%',
    color: 'black',
    textDecoration: 'none'
  }

  return (
    <div style={headerSearchStyle}>
      <p style={SearchTabStyle}>Search</p>
      <a href="#" style={TweetTabStyle}>Tweeter</a>
    </div>
  );
}

export default HeaderSearch;
