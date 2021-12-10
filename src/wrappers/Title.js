import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <div className="title">
      <h2 className="title-center"> {props.title} </h2>{" "}
      <div className="underline"> </div>{" "}
    </div>
  );
};

export default Title;
