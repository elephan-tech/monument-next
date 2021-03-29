import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Box from "./Box";
import Typography from "./Typography";

const Menu = ({ items, title }) => {
  const StyledMenu = styled(Box)`
    flex-direction: column;
    border-radius: 30px; ;
  `;

  const StyledLink = styled(Link)`
    border-bottom: 1px solid ${(props) => props.theme.colors.dark};
  `;

  return (
    <StyledMenu>
      <Box color="primary">{title}</Box>
      <Box color="secondary">
        {items.map((item) => {
          <StyledLink href={item.url || "/"}>
            <Typography variant="subtitle" color="secondary" shade="dark">
              {item.name}
            </Typography>
          </StyledLink>;
        })}
      </Box>
    </StyledMenu>
  );
};

export default Menu;
