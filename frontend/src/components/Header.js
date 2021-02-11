import { Flex, Heading } from "@chakra-ui/react";
import { DrawerLeft } from "./DrawerLeft";
export const Header = (props) => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth="48rem"
      py=".8rem"
      px="1rem"
      flexShrink={0}
      justify="space-around"
      align="center"
      bg="gray.200"
      {...props}
    >
      <DrawerLeft />
      <Heading as="h1" textAlign="center" fontSize="2xl" flexGrow={2}>
        Kaape Menu
      </Heading>
    </Flex>
  );
};
