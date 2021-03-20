import { Flex, Heading } from "@chakra-ui/react";
import { DrawerLeft } from "./DrawerLeft";
import Link from "next/link";
export const Header = (props) => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth="48rem"
      py=".3rem"
      px="1rem"
      flexShrink={0}
      justify="space-around"
      align="center"
      bg="brand.500"
      color="white"
      {...props}
    >
      <DrawerLeft />
      <Heading as="h1" textAlign="center" fontSize="lg" flexGrow={2}>
        <Link href="/">
          <a>Digital Menu</a>
        </Link>
      </Heading>
    </Flex>
  );
};
