import styled from "styled-components";
import Headroom from "react-headroom";
import { Flex } from "rebass/styled-components";

export const NavContainer = styled(Headroom)`
  * {
    transition: background-color 0.1s ease;
  }

  .headroom--pinned {
    background-color: ${({ theme }) => theme.colors.light};
    box-shadow: ${({ theme }) => theme.shadow(1)};
  }
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: ${({ theme }) => theme.shadow(1)};
  width: 100%;
`;
