import '../styles/globals.css'
import Layout from '../components/Layout'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useEffect } from "react";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>

  )
}

export default MyApp
