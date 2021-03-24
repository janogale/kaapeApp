const styles = {
  global: {
    // styles for the `body`
    body: {
      userSelect: "none",
      WebkitTapHighlightColor: "transparent",
    },
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    "::placeholder": {
      color: "red",
      opacity: "0.3",
      fontSize: "1rem",
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
