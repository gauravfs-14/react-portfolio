import React from "react";

function Works(props) {
  return (
    <>
      <div className="container">
        <img src={props.links} alt="" className="image"></img>
        <div className="overlay">
          <div className="text">{props.text}</div>
        </div>
      </div>
    </>
  );
}

export default Works;
