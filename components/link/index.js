import React from "react";
import NextLink from "next/link";
import styles from "./styles";

const Link = ({ children, href, ...linkProps }) => {
  const { linkContainer, link } = styles;
  return (
    <NextLink href={href || "/"} passHref>
      <a style={link} {...linkProps}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
