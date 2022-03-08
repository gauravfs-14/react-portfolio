import React from "react";

function Works(props) {
  return (
    <>
      <div className="container">
        <img src={props.links} alt="" className="image"></img>
        <div className="overlay">
          <div className="text">
            {props.text} <br />
            <center>
              <a
                href={props.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "underline",
                  color: "white",
                  fontWeight: "900",
                }}
              >
                View on Github
              </a>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
