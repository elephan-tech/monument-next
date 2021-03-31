import React from "react";
import pages from "../config/pages";
import Meta from "./Meta";
import Navbar from "./navbar";

const Page = ({ children, title, description = "" }) => {
  return (
    <>
      <Navbar pages={pages} title={title}></Navbar>
      <Meta title={title} description={description} />
      {children}
    </>
  );
};

export default Page;
