import React from "react";
import pages from "../config/pages";
import Meta from "./Meta";
import Navbar from "./navbar";

const Page = ({ children, title, description = "" }) => {
  return (
    <>
      <Meta title={title} description={description} />
      <Navbar pages={pages} title={title}></Navbar>

      {children}
    </>
  );
};

export default Page;
