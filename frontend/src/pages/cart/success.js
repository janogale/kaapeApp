import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdCheckCircle } from "react-icons/md";
import {
  Heading,
  Text,
  Link,
  Box,
  Icon,
  Flex,
  Divider,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import Layout from "@/components/Layout";

import GoBack from "@/components/GoBack";

// context
import { useAppState } from "../../../context/AppProvider";
import Head from "next/head";

export default function Cart() {
  const [state, dispatch] = useAppState();
  let [cartData, setCartDat] = React.useState(state);

  return (
    <Layout hide>
      <Flex direction="column">
        <GoBack title="Order Status" cart />
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
      mt="10"
      justify="space-around"
      minH="75vh"
    >
      <Icon color="green.500" as={AiOutlineFileDone} boxSize={16} />
      <Box my="4">
        <List spacing={3}>
          <TimeLine
            title="Order Received"
            description="Your order is waiting to be accepted"
            active={true}
          />
          <TimeLine
            title="Order Accepted"
            description="Started Cooking your food"
            active={true}
          />
          <TimeLine
            title="Order Ready"
            description="Your Order is ready to be delivered"
          />
          <TimeLine
            title="Order Delivered"
            description="Enjoy Your Meal and have great time"
            last
          />
        </List>
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

function TimeLine({ title, description, active = false, last = false }) {
  let bgColor = active ? "green.500" : "gray.400";

  return (
    <ListItem display="flex" position="relative" py="2">
      {!last && (
        <Divider
          variant="dashed"
          borderColor={bgColor}
          position="absolute"
          orientation="vertical"
          borderLeftWidth=".1rem"
          left={3}
          top={8}
        />
      )}
      <Box>
        <ListIcon fontSize="2xl" as={MdCheckCircle} color={bgColor} />
      </Box>
      <Flex direction="column" ml="4">
        <Heading as="h5" fontSize="lg">
          {title}
        </Heading>
        <Text color="gray.400">{description}</Text>
      </Flex>
    </ListItem>
  );
}
