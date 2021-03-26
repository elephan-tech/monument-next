import Image from "next/image";
import React from "react";
const Logo = ({ size }) => {
  const sizes = { big: { height: 100, width: 100 } }[size];
  return <Image src="/vercel.svg" alt="Monument Academy Logo" {...sizes} />;
};

export default Logo;
