import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { AiOutlineFileDone } from "react-icons/ai";
import {
  Heading,
  Text,
  Link,
  Box,
  Icon,
  Flex,
  Divider,
} from "@chakra-ui/react";

import Layout from "@/components/Layout";

import GoBack from "@/components/GoBack";

// context
import { useAppState } from "../../../context/AppProvider";

export default function Cart() {
  const [state, dispatch] = useAppState();
  let [cartData, setCartDat] = React.useState(state);

  return (
    <Layout hide>
      <Flex direction="column">
        <GoBack title="My Orders" cart />
        <Divider />

        <OrderSend />

        <Divider mb="12" />
      </Flex>
    </Layout>
  );
}

function OrderSend() {
  return (
    <Flex
      direction="column"
      px="4"
      align="center"
      mt="20"
      justify="space-around"
      minH="60vh"
    >
      <Icon color="green.500" as={AiOutlineFileDone} boxSize={16} />
      <Box textAlign="center">
        <Heading as="h4" fontSize="md" mb="3">
          Your Order has been Sent Successfully
        </Heading>
        <Text fontSize="sm">Please wait while the food is being prepared</Text>
      </Box>
      <NextLink href="/sp/100">
        <Link
          fontSize="md"
          border="1px"
          borderRadius="sm"
          color="brand.500"
          px="4"
          py="2"
        >
          Order aditional Food
        </Link>
      </NextLink>
    </Flex>
  );
}
