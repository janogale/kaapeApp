import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import AppProvider from "context/AppProvider";

import theme from "../theme/";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider options={theme.config.initialColorMode}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
