import React from "react";

const Film = props => {

  if (!props) {
    return <div className="loading">Loading...</div>;
  } else {
    return <p>
    {props.title}
    </p>;
  }
};

export default Film;
