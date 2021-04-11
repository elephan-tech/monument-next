import { CssBaseline, ThemeProvider } from "@material-ui/core";
import App from "next/app";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import theme from "../styles/theme";

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout || React.Fragment;

  return (
    <>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ParallaxProvider>
      </ThemeProvider>
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  return { ...appProps };
};

export default MyApp;
