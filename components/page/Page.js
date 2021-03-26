import React from "react";
import Meta from "../Meta";
import Navbar from "../navbar";
import pages from "./pages";

const Page = ({ children, title, description = "" }) => {
  return (
    <>
      <Navbar pages={pages}></Navbar>
      <Meta title={title} description={description} />
      {children}
    </>
  );
};

export default Page;
