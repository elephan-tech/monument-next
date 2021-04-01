import MuiLink from "@material-ui/core/Link";
import NextLink from "next/link";
import React from "react";
import useStyles from "./styles";

const Link = ({ children, decoration, href, ...linkProps }) => {
  const classes = useStyles(linkProps);
  console.log(linkProps.component || "a");
  return (
    <>
      <NextLink href={href || "/"} passHref>
        <MuiLink
          underline={linkProps.underline || "none"}
          color={linkProps.color}
          target={linkProps.target}
          component={linkProps.component}
          bg={linkProps.bg || "none"}
        >
          <div
            className={`${linkProps.component !== "span" && classes.linkBase} ${
              classes[linkProps.component || "a"]
            }`}
          >
            {children}
          </div>
        </MuiLink>
      </NextLink>
    </>
  );
};

export default Link;
