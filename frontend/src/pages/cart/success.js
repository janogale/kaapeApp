import React from "react";
import NextLink from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdCheckCircle } from "react-icons/md";
import useSWR from "swr";
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
import LoadingSpinner from "@/components/shared/Spinner";
import ErrorPage from "@/components/shared/ErrorPage";

import GoBack from "@/components/GoBack";

// context
import { useAppState } from "../../../context/AppProvider";

// fetcher function for swr library
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function SuccessPage() {
  //const baseUrl = window.location.origin;

  const [state, dispatch] = useAppState();
  const router = useRouter();
  const [orderId, setOrderId] = React.useState(state.orderId);

  const { data, error } = useSWR(`/api/orders/${orderId}`, fetcher, {
    refreshInterval: 1000,
  });

  const status = data?.status || 0;

  React.useEffect(() => {
    const id = window.location.search.split("=")[1];
    setOrderId(id);
    console.log(data);
    // clear state
    dispatch({ type: "clearCart" });
  }, []);

  // wait data to load

  return (
    <Layout hide>
      <Flex direction="column">
        <GoBack title="Order Status" cart />
        <Divider />

        {/*  if */}

        {error ? (
          <ErrorPage />
        ) : !data ? (
          <LoadingSpinner />
        ) : (
          <OrderStatus status={status} />
        )}

        <Divider mb="12" />
      </Flex>
    </Layout>
  );
}

function OrderStatus({ status = 0 }) {
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
            active={status >= 1}
          />
          <TimeLine
            title="Order Accepted"
            description="Started Cooking your food"
            active={status >= 2}
          />
          <TimeLine
            title="Order Ready"
            description="Your Order is ready to be delivered"
            active={status === 3}
          />
        </List>
      </Box>
      <NextLink href="/sp/RCR">
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
