import React from "react";
import Page from "../components/Page";
import Section from '../components/section';

const brushStrokeProps  = { 
  word: 'A Home',
  fill: '#fed02f'
}

const about = () => {
  return (
    <Page title="About" description="">
      <Section topMargin> hello </Section>
    </Page>
  );
};

export default about;
