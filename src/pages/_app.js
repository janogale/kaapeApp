import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import AppProvider from "context/AppProvider";
import Head from "next/head";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../../src/authConfig";

// MSAL Instance
const msalInstance = new PublicClientApplication(msalConfig);

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
          <MsalProvider instance={msalInstance}>
            <AppProvider>
              <Component {...pageProps} />
            </AppProvider>
          </MsalProvider>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
