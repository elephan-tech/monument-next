import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title} key={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "",
  description: "",
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Meta;
