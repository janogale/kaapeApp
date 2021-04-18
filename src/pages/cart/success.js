import React from "react";
import NextLink from "next/link";
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
  Button,
  List,
  ListItem,
  ListIcon,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid,
} from "@chakra-ui/react";

// gRPC functions
import { getOrder } from "../../service/kaabe";

import Layout from "@/components/Layout";
import LoadingSpinner from "@/components/shared/Spinner";
import ErrorPage from "@/components/shared/ErrorPage";

import GoBack from "@/components/GoBack";

// context
import { useAppState } from "../../../context/AppProvider";


function getTimeDifferenceInMinutes(time1, time2) {
  return (time1 - time2) / 60000;
}

export default function SuccessPage() {
  //const baseUrl = window.location.origin;

  const [state, dispatch] = useAppState();
  const router = useRouter();
  const [orderId, setOrderId] = React.useState(state.orderId);
  const [error, setError] = React.useState(null);
  const [orderData, setOrderData] = React.useState(null);

  // const { data, error } = useSWR(
  //   [`/api/orders/${orderId}`, state.accessToken],
  //   fetcher,
  //   {
  //     refreshInterval: 30000,
  //   }
  // );

  // call api function
  async function getAsyncOrder(orderId, accessToken) {
    try {
      if(orderData && orderData.createdAt) {
        // Do something.
        const timeDelta = getTimeDifferenceInMinutes(new Date(), new Date(orderData.createdAt));
        console.log(orderData.status, timeDelta);
        if(orderData.status === 3 || timeDelta > 20) {
          console.warn('This order is completed or too old, not auto refreshing.');
          return;
        }
      }
      const response = await getOrder(orderId, "Bearer " + accessToken);
      console.log(response);
      setOrderData(response);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }

  React.useEffect(function () {
    // parse URL to get OrderId
    const url = new URL(window.location);
    const orderId = url.searchParams.get("orderId");

    const accessToken =
      state.accessToken ||
      JSON.parse(window.localStorage.getItem("appState"))?.accessToken;
    getAsyncOrder(orderId, accessToken);
  }, []);

  React.useEffect(() => {
    let intervalId;

    const url = new URL(window.location);
    const orderId = url.searchParams.get("orderId");

    const accessToken =
      state.accessToken ||
      JSON.parse(window.localStorage.getItem("appState"))?.accessToken;
    getAsyncOrder(orderId, accessToken);

    intervalId = setInterval(function () {
      getAsyncOrder(orderId, accessToken);
    }, 30000);  // I think 30s is OK :).

    return () => clearInterval(intervalId);
  }, []);

  const status = orderData?.status || 0;

  React.useEffect(() => {
    let audio = new Audio("/sounds/bell.mp3");
    const play = () => {
      audio.play();
    };
    if (status > 0) {
      play();
    }
  }, [status]);

  return (
    <Layout hide>
      <Flex direction="column">
        <GoBack title="Order Status" cart />
        <Divider />

        {/*  if */}

        {error ? (
          <ErrorPage />
        ) : !orderData ? (
          <LoadingSpinner />
        ) : (
          <OrderStatus
            status={status}
            orderNumber={orderData?.orderNumber}
            totalPrice={orderData?.totalPrice}
          />
        )}

        <Divider mb="12" />
      </Flex>
    </Layout>
  );
}

function OrderStatus({ status = 0, orderNumber, totalPrice }) {
  const [providerData, setProviderData] = React.useState(null);

  // get provider data from localstorage

  React.useEffect(() => {
    const stateFromLocalStorage = JSON.parse(
      window.localStorage.getItem("appState")
    );
    const provider = JSON.parse(stateFromLocalStorage?.provider?.configuration);

    setProviderData(provider);
  }, []);

  return (
    <Flex
      direction="column"
      px="4"
      align="center"
      mt="4"
      justify="space-around"
      minH="85vh"
    >
      <Icon color="green.500" as={AiOutlineFileDone} boxSize={16} />
      <Box boxShadow="lg" width="70%">
        <Stat p="3" m="0" textAlign="center">
          <StatLabel>Order Number</StatLabel>
          <StatNumber>{orderNumber}</StatNumber>
        </Stat>
      </Box>

      <Box my="1">
        <List spacing={1}>
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

      {providerData && (
        <Flex mt="6" direction="column" flexGrow={2}>
          <Heading
            fontSize="xl"
            mb="3"
            textAlign="center"
            color="green.400"
            fontWeight="bold"
          >
            Pay with
          </Heading>
          <Flex justify="space-around" flexWrap="wrap">
            {/* Payment Methods */}
            {Object.entries(providerData).map((service) => {
              if (service[1] !== true) return null;

              switch (service[0]) {
                case "Zaad": {
                  return (
                    <PayWith
                      service="Zaad"
                      number={providerData.ZaadNumber}
                      code={`*223*${providerData.ZaadNumber}*${totalPrice}#`}
                    />
                  );
                }
                case "Edahab": {
                  return (
                    <PayWith
                      service="Edahab"
                      number={providerData.EdahabNumber}
                      code={`*773*${providerData.EdahabNumber}*${totalPrice}#`}
                    />
                  );
                }
                case "EvcPlus": {
                  return (
                    <PayWith
                      service="EvcPlus"
                      number={providerData.EvcPlusNumber}
                      code={`*712*${providerData.EvcPlusNumber}*${totalPrice}#`}
                    />
                  );
                }
              }
            })}
          </Flex>
        </Flex>
      )}

      <NextLink href="/">
        <Link
          fontSize="md"
          border="1px"
          borderRadius="sm"
          color="brand.500"
          px="4"
          py="2"
        >
          Place another order
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

function PayWith({ service, icon, number, code = number }) {
  return (
    <Button
      mx="3"
      mb="2"
      size="sm"
      height="3rem"
      variant="outline"
      colorScheme="brand"
      px="3"
      py="3"
    >
      <Link href={`tel:${code}`}>
        {service} <br />
        {number}
      </Link>
    </Button>
  );
}
