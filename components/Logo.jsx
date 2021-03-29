import Image from "next/image";
import Link from "next/link";
import React from "react";
import Box from "./Box";

const Logo = ({ size }) => {
  const sizes = { big: { height: 100, width: "auto" } }[size];
  return (
    <Box grow={1}>
      <Link href="/">
        <Image
          src="/monument_logo.png"
          alt="Monument Academy Logo"
          {...sizes}
        />
      </Link>
    </Box>
  );
};

export default Logo;
