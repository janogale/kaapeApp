const styles = {
  global: {
    // styles for the `body`
    body: {
      color: "gray.500",
      userSelect: "none",
      WebkitTapHighlightColor: "transparent",
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
