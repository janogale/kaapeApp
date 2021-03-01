import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import AppProvider from "context/AppProvider";
import Head from "next/head";

import theme from "../theme/";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
        />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider options={theme.config.initialColorMode}>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
