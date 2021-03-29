import React from "react";
import Page from "../components/Page";
import BrushStroke from '../components/BrushStroke.jsx';
import HoverLink from '../components/HoverLink.jsx';

const brushStrokeProps  = { 
  word: 'A Home',
  fill: '#fed02f'
}

const about = () => {
  return (
    <Page title="About" description="">
      <div> <div style={{color: "#042f54", fontWeight:"bold", fontSize:"4em"}}> More Than Just A School..</div> < BrushStroke word={brushStrokeProps.word} fill={brushStrokeProps.fill}/></div>
      <br/>
      < HoverLink word='This is a clickable link' link='/'/>
    </Page>
  );
};

export default about;
