import NextLink from "next/link";
import styled from "styled-components";
import Box from "./Box";
import Button from "./Button";

const Link = ({ variant, children, href, color, button, size, selected }) => {
  const Deco = styled.img`
    visibility: ${selected ? "visible" : "hidden"};
  `;

  const StyledBox = styled(Box)`
    &:hover ${Deco} {
      visibility: visible;
    }
  `;

  return (
    <StyledBox direction="column" justify="center" align="center">
      <NextLink href={href || "/"}>
        {button ? (
          <Button size={size} variant={variant} color={color}>
            {children}
          </Button>
        ) : (
          children
        )}
      </NextLink>
      {variant === "text" && (
        <Deco src="/brush2.png" height="auto" width="70px" />
      )}
    </StyledBox>
  );
};

export default Link;
