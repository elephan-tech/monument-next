import React from "react";
import { Flex } from "rebass/styled-components";

const Bar = (props) => {
  const { children, ...flexProps } = props;
  return (
    <Flex
      px={3}
      {...flexProps}
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
    >
      {children}
    </Flex>
  );
};

export default Bar;
