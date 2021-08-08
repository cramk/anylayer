import "../styles/globals.css";
import "../styles/index.scss";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
