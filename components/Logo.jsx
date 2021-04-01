import Image from "next/image";
import Link from "./link";

const Logo = (props) => {
  const { ...boxProps } = props;
  return (
    <div {...boxProps}>
      <Link url="/" component="div">
        <Image
          src="/monument_logo.png"
          alt="Monument Academy Logo"
          width="auto"
          height="100px"
        />
      </Link>
    </div>
  );
};

export default Logo;
