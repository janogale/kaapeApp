import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Flex, Text, Icon, Box } from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import {
  RiShoppingCartFill,
  RiShoppingCartLine,
  RiHome2Fill,
  RiHome2Line,
} from "react-icons/ri";

// context
import { useAppState } from "../context/AppProvider";

export default function Goback({ title = "", icon = "", cart }) {
  const [state] = useAppState();
  const router = useRouter();

  return (
    <Box mb="12" position="relative" zIndex="sticky">
      <Flex
        justify="space-between"
        align="center"
        py="2"
        px="6"
        color="brand.500"
        bg="gray.200"
        borderBottom="1px"
        borderColor="brand.100"
        position="fixed"
        top={0}
        width="100%"
        maxWidth="48rem"
      >
        <Box
          onClick={() => router.back()}
          _hover={{
            cursor: "pointer",
          }}
        >
          <Icon borderRadius="100%" as={IoMdArrowBack} w={5} h={5} />
        </Box>
        <Box>
          <Text>{title}</Text>
        </Box>

        <Flex justify="space-between" width="60px">
          <Box
            _hover={{
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            <Icon as={RiHome2Line} />
          </Box>
          <Link href="/cart">
            <a>
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
                  as={
                    state.cart.length ? RiShoppingCartFill : RiShoppingCartLine
                  }
                />
              </Box>
            </a>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
