import { GoogleAnalytics, usePageView } from '../lib/gtag';
import '../styles/globals.scss';


function MyApp({ Component, pageProps }) {
  usePageView();

  return <>
          <GoogleAnalytics />
          <Component {...pageProps} />
        </>
}

export default MyApp
