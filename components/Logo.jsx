import { Link } from "@components";
import Image from "next/image";

const Logo = (props) => {
  const { ...boxProps } = props;
  return (
    <div {...boxProps}>
      <Link url="/">
        <Image
          src="/images/monument_logo.png"
          alt="Monument Academy Logo"
          width={220}
          height={80}
          loading="lazy"
          style={{
            maxWidth: "300px",
            minWidth: "150px",
            position: "relative",
          }}
        />
      </Link>
    </div>
  );
};

export default Logo;
