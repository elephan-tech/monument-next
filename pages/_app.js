import App from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import '../components/components.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  return { ...appProps };
};

export default MyApp;
