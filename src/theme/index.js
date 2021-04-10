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
  icons: {
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: "0 0 3000 3163",
    },
  },
});

export default theme;
