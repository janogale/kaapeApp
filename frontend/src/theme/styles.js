const styles = {
  global: {
    // styles for the `body`
    body: {
      bg: "brand.300",
      color: "gray.500",
    },
    // default button style
    button: {
      color: "brand.500",
      _focus: {
        boxShadow: "none !important", // remove shadow forcefully
      },
      _active: {
        boxShadow: "none",
      },
    },
    // styles for the `a`
  },
};

export default styles;
