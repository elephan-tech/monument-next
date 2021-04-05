import React from "react";
import pages from "../config/pages";
import Meta from "./Meta";
import Navbar from "./Navigation";
import Footer from "./Footer";

const Page = ({ children, title, description = "" }) => {
  return (
    <>
      <Meta title={title} description={description} />
      <Navbar pages={pages} title={title}></Navbar>

      {children}
      <Footer/>
    </>
  );
};

export default Page;
