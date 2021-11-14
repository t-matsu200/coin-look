import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { GoogleAnalytics, usePageView } from '../lib/gtag';
import '../styles/globals.scss';


function MyApp({ Component, pageProps }) {
  usePageView();

  const router = useRouter();

  useEffect(() => {
    const current = location.pathname;
    if (current.includes('/exchange-jp/coincheck')) {
      router.push('/exchange-jp/[slug]', '/exchange-jp/coincheck');
    } else if (current.includes('/exchange-jp/bitFlyer')) {
      router.push('/exchange-jp/[slug]', '/exchange-jp/bitFlyer');
    } else if (current.includes('/exchange-jp/gmocoin')) {
      router.push('/exchange-jp/[slug]', '/exchange-jp/gmocoin');
    } else if (current.includes('/exchange-jp/bitpoint')) {        
      router.push('/exchange-jp/[slug]', '/exchange-jp/bitpoint');
    }
  }, [])

  return <>
          <GoogleAnalytics />
          <Component {...pageProps} />
        </>
}

export default MyApp
