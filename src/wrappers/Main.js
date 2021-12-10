import React from "react";
import "./Main.css";

const Main = (props) => {
  return <section className="main-center">{props.children}</section>;
};

export default Main;
