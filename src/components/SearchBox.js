import React from "react";

const SearchBox = ({ searchChange }) => {
  // test if ErrorBoundry works
  // if (true) {
  //   throw new Error("Service unavailable.");
  // }

  return (
    <div className="pa2 mb3">
      <input
        className="blue pa3 ba b--washed-blue b shadow-2 br4 outline-transparent"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
