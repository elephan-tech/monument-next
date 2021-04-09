import { CssBaseline, ThemeProvider } from "@material-ui/core";
import App from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import theme from "../styles/theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <CssBaseline />
          <Component {...pageProps} />
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
