import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Flex, Text, Icon, Box } from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";

// context
import { useAppState } from "../context/AppProvider";

export default function Goback({ title = "", icon = "", cart }) {
  const [state, dispatch] = useAppState();

  const router = useRouter();

  return (
    <Flex
      justify="space-between"
      align="center"
      py="2"
      px="6"
      color="brand.500"
    >
      <Link href="/" onClick={() => router.back()}>
        <a>
          <Icon borderRadius="100%" as={IoMdArrowBack} w={5} h={5} />
        </a>
      </Link>
      <Box>
        <Text>{title}</Text>
      </Box>
      <Box
        position="relative"
        _hover={{
          cursor: "pointer",
        }}
      >
        <Flex
          display={state.cart.length ? "flex" : "none"}
          position="absolute"
          zIndex="10"
          justify="center"
          align="center"
          right="-2"
          fontSize=".5rem"
          fontWeight="bold"
          color="gray.100"
          bg="green.500"
          borderRadius="100%"
          width="14px"
          height="14px"
        >
          {state.cart.length}
        </Flex>
        <Icon
          as={state.cart.length ? RiShoppingCartFill : RiShoppingCartLine}
        />
      </Box>
    </Flex>
  );
}

