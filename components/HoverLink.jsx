import * as React from "react";

const HoverLink = (props) => (
  <div className="hover-link">
    <a  href={props.link}>{props.word}</a>
    <img className="underline-stroke" src='./underline-stroke.svg' alt="logo"/>
  </div>


);

export default HoverLink;