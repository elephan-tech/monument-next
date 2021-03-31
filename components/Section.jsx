import React from "react";
import { any, string } from "prop-types";
import { Flex } from "rebass";

const Section = (props) => {
  return (
    <Flex
      bg={props.bg}
      alignItems="center"
      flexDirection="row"
      flexGrow={1}
      mt="16px"
      width="100%"
      height="80vh"
      sx={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundPosition: props.backgroundPosition,
        backgroundRepeat: "no-repeat",
        backgroundSize: props.bgSize,
      }}
    >
      {props.children}
    </Flex>
  );
};

Section.propTypes = {
  children: any,
  title: string,
  backgroundImage: string,
  position: string,
};

export default Section;
