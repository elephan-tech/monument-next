import { any, string } from "prop-types";
import React from "react";
import styled from "styled-components";
import Box from "./Box";

const SectionStyle = styled.div`
  margin-top: 16px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-content: center;
  padding: ${(props) => props.theme.unit(2)};
  background: ${(props) => props.theme.colors.light};
  background-image: ${(props) =>
    console.log({ props }) || props.backgroundImage};
  background-repeat: no-repeat;
  background-position: ${(props) => props.position};
  font-family: ${(props) => props.theme.font.family};
`;

const StyledRow = styled(Box)`
  width: -webkit-fill-available;
`;

const Section = (props) => {
  const { children, title } = props;
  return (
    <SectionStyle {...props}>
      <StyledRow direction="row" align="center">
        {children}
      </StyledRow>
    </SectionStyle>
  );
};

Section.propTypes = {
  children: any,
  title: string,
  backgroundImage: string,
  position: string,
};

export default Section;
