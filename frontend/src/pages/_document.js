import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

// theme object
import theme from "../theme/";
export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8"></meta>
          <meta name="application-name" content="Kaabe" />
          <meta name="description" content="Kaabe Digital Menu" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#e8303d" />
          <meta name="apple-mobile-web-app-status-bar-style" content="white" />
          {/* Splash Screen for iOS*/}
          <link
            href="kaape-icon.png"
            media="(device-width: 414px) and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="kaape-icon.png"
            media="(device-width: 375px) and (device-height: 812px) 
    and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="kaape-icon.png"
            media="(device-width: 414px) and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="kaape-icon.png"
            media="(device-width: 414px) and (device-height: 896px) 
    and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="kaape-icon.png"
            media="(device-width: 375px) and (device-height: 812px) 
    and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="kaape-icon.png"
            media="(device-width: 414px) and (device-height: 896px) 
    and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          {/* end Splash screen */}
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/icons/favicon-16x16.png" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:url"
            content="https://kaape.janagale.vercel.app/"
          />
          <meta name="twitter:title" content="Kaabe" />
          <meta name="twitter:description" content="Best Kaabe in the world" />
          <meta
            name="twitter:image"
            content="https://yourdomain.com/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@mmjanagale" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Kaabe" />
          <meta property="og:description" content="Kaabe Digital Menu" />
          <meta property="og:site_name" content="Kaabe" />
          <meta
            property="og:url"
            content="https://kaape.janagale.vercel.app/"
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
