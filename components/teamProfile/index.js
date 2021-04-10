import { Heading, Link } from "@components";
import Typography from "@material-ui/core/Typography";
import Banner from "components/Banner";
import Image from "next/image";
import React from "react";
import { joinClasses } from "utils/styleUtils";
import { monumentData, pages, socials } from "../../config";
import useStyles from "./styles";

export default function teamProfile() {
  const { footer, row, column, child, noPadding } = useStyles();

  return (
    <>
      <Image
        src="/images/team.png"
        alt="Monument Academy Logo"
        width={400}
        height={400}
        position="relative"
        style={{
          maxWidth: "300px",
          minWidth: "150px",
          position: "relative",
        }}
      />
    </>
  );
}
