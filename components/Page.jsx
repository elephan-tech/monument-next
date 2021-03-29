import React from "react";
import styled from "styled-components";
import pages from "../config/pages";
import Box from "./Box";
import Fab from "./Fab";
import Meta from "./Meta";
import Navbar from "./navbar";

const Page = ({ children, title, description = "" }) => {
  const TransluscentFab = styled(Fab)`
    border-radius: 50%;
    opacity: 0.5;
    &:hover {
      background-color: ${(props) => props.theme.colors.medium};
    }
  `;
  return (
    <>
      <Navbar pages={pages} title={title}></Navbar>
      <Meta title={title} description={description} />

      <Box fullWidth height="80vh" justify="center" align="center">
        {children}
        <Fab
          color="secondary"
          icon="calendar"
          type="tab"
          icon="far fa-calendar"
        ></Fab>
        <TransluscentFab
          color="medium"
          icon="arrow-up"
          type="fav"
          position="left"
          icon="fas fa-chevron-up"
        ></TransluscentFab>
      </Box>
    </>
  );
};

export default Page;
