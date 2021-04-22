const styles = {
  global: {
    // styles for the `body`
    body: {
      userSelect: "none",
      WebkitTapHighlightColor: "transparent",
      minHeight: "100vh",
      minHeight: "-webkit-fill-available",
    },
    "::-webkit-scrollbar": {
      width: 0,
      height: "1px" /* Remove scrollbar space */,
      background: "transparent" /* Optional: just make scrollbar invisible */,
    },
    "::-webkit-scrollbar-thumb": {
      background: "#cf1724",
    },
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    "::placeholder": {
      fontSize: "0.6em",
    },
    // default button style
    button: {
      _focus: {
        boxShadow: "none !important", // remove shadow forcefully
      },
      _active: {
        boxShadow: "none",
      },
    },
    // styles for the `a`
    a: {
      _hover: {
        textDecoration: "none !important",
      },
    },
  },
};

export default styles;
