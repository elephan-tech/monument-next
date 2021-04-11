import MuiLink from "@material-ui/core/Link";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { forwardRef } from "react";
import NextLink from "./NextLink";

const Link = forwardRef((props, ref) => {
  const {
    activeClassName = "active",
    as: linkAs,
    className: classNameProps,
    href = "/",
    role,
    ...other
  } = props;

  const router = useRouter();
  const pathname = href || "/";
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  const isExternal =
    typeof href === "string" &&
    (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);

  return isExternal ? (
    <MuiLink className={className} href={href} ref={ref} {...other} />
  ) : (
    <MuiLink
      component={NextLink}
      className={className}
      ref={ref}
      to={href}
      {...other}
    />
  );
});

export default Link;
