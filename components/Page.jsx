import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/CalendarTodayOutlined";
import React from "react";
import pages from "../config/pages";
import Meta from "./Meta";
import Navbar from "./navbar";

const Page = ({ children, title, description = "" }) => {
  return (
    <>
      <Meta title={title} description={description} />
      <Navbar pages={pages} title={title}></Navbar>

      <Container maxWidth="xl" disableGutters>
        <Fab color="secondary" aria-label="calendar" size="large">
          <EditIcon />
        </Fab>
        {children}
      </Container>
    </>
  );
};

export default Page;
