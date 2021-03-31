import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        rel="stylesheet"
      />

      <link
        href="/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
      <meta name="theme-color" content="#FFFFFF" />

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
