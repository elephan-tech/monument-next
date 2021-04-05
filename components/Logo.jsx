import Image from "next/image";
import Link from "./Link";

const Logo = (props) => {
  const { ...boxProps } = props;
  return (
    <div {...boxProps}>
      <Link url="/" component="div">
        <Image
          src="/monument_logo.png"
          alt="Monument Academy Logo"
          width="100%"
          height="auto"
          style={{
            maxWidth: '300px',
            minWidth: '150px',
            position: 'relative',
          }}
        />
      </Link>
    </div>
  );
};

export default Logo;
