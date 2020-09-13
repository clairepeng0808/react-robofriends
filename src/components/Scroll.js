import React from "react";

// Children
const Scroll = (props) => {
  return (
    <div style={{ overflow: "scroll", height: "1000px" }}>{props.children}</div>
  );
};

export default Scroll;
