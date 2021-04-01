import { any, string } from "prop-types";
import React from "react";
import { SectionContainer } from "./styles";

const Section = ({ children, ...props }) => {
  return (
    <SectionContainer
      {...props}
      stlye={{ marginTop: 100 }}
      backgroundRepeat="no-repeat"
    >
      {props.children}
    </SectionContainer>
  );
};

Section.propTypes = {
  children: any,
  title: string,
  backgroundImage: string,
  position: string,
};

export default Section;
