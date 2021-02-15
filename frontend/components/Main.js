import { Stack } from "@chakra-ui/react";

export const Main = (props) => (
  <Stack
    as="main"
    spacing="1.5rem"
    flexGrow={1}
    width="100%"
    maxWidth="48rem"
    height="100%"
    {...props}
  />
);
