import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// Global style overrides
import styles from "./styles.js";

// Component style overrides
//import Button from "./components/button";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  config: {
    initialColorMode: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
  },
  styles,
  fonts,
  colors: {
    black: "#16161D",
    brand: {
      50: "#ffe4e6",
      100: "#fcb8bd",
      200: "#f48b92",
      300: "#ee5d68",
      400: "#e8303d",
      500: "#cf1724",
      600: "#a2101b",
      700: "#740913",
      800: "#480409",
      900: "#1f0000",
    },
  },
  breakpoints,
});

export default theme;
