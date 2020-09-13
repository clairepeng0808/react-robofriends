import React from "react";

const Loading = () => {
  return (
    <div className="mw5 center bg-white br3 pa3 pa4-ns mv6 ba b--black-10 ">
      <div className="tc">
        <img
          src={require("../assets/loadingcat.jpg")}
          className="br-100 h4 w4 dib ba b--black-05 pa2"
          alt="Loading"
        />
        <h1 className="f3 mb2">Loading...</h1>
        <h2 className="f5 fw4 gray mt0">Sorry for keeping you waiting...</h2>
      </div>
    </div>
  );
};

export default Loading;
