import Image from "next/image";
import { Box } from "rebass";
import Link from "./link";

const Logo = (props) => {
  const { ...boxProps } = props;
  return (
    <Link url="/">
      <Image
        src="/monument_logo.png"
        alt="Monument Academy Logo"
        width="auto"
        height="100px"
      />
    </Link>
  );
};

export default Logo;
