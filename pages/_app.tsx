import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script"

export default function App({ Component, pageProps}: AppProps) {

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TX28B5XLLG"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TX28B5XLLG');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
