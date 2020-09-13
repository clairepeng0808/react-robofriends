import React from "react"; // for JSX format

const Card = ({ name, email, id }) => {
  //   const { name, email, id } = props;
  return (
    <div className="bg-washed-red dib br3 pa3 ma2 shadow-5 tc grow">
      <img src={`https://robohash.org/${id}?200x200`} alt="Jane Done" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
