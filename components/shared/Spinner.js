import React from "react";
import { Spinner, Flex } from "@chakra-ui/react";

export default function ProgressIndicator() {
  return (
    <Flex
      direction="column"
      flexGrow={2}
      justify="center"
      align="center"
      minH="60vh"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.100"
        color="brand.500"
        size="xl"
      />
    </Flex>
  );
}
