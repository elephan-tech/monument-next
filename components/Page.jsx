import { Footer, Header, Meta } from "@components";
import { pages } from "config";
import React from "react";

const Page = ({ children, title, description = "" }) => {
  return (
    <>
      <Meta title={title} description={description} />
      <Header pages={pages} />
      {children}
      <Footer />
    </>
  );
};

export default Page;
