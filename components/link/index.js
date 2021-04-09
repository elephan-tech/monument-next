import MuiLink from "@material-ui/core/Link";
import NextLink from "next/link";
import React from "react";
import useStyles from "./styles";

const Link = ({ children, decoration, href, variant, ...linkProps }) => {
  const classes = useStyles(linkProps);
  return (
    <>
      <NextLink href={href || "/"} passHref>
        <MuiLink
          underline={linkProps.underline || "none"}
          color={linkProps.color}
          target={linkProps.target}
          component={linkProps.component}
          className={`${
            linkProps.component !== "span" ? classes.linkBase : ""
          } ${classes[linkProps.component]}`}
          variant={variant || "inherit"}
        >
          {children}
        </MuiLink>
      </NextLink>
    </>
  );
};

export default Link;
