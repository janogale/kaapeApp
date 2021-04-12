import React from "react";
import NextLink from "next/link";

import { GiShoppingCart } from "react-icons/gi";
import {
  Heading,
  Text,
  Stack,
  Link,
  Box,
  Icon,
  Flex,
  Divider,
} from "@chakra-ui/react";

import Layout from "@/components/Layout";

import OrderHistoryCard from "@/components/OrderHistoryCard";
import GoBack from "@/components/GoBack";

// context
import { useAppState } from "../../../context/AppProvider";

export default function Cart() {
  const [state, dispatch] = useAppState();
  let [orderHistory, setOrderHistory] = React.useState(
    state.orderHistory || []
  );

  React.useEffect(
    function () {
      // sort array to preverse render order
      let sortedOrders = [...state.orderHistory].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setOrderHistory(sortedOrders);
    },
    [state]
  );

  return (
    <Layout hide>
      <Flex direction="column" minH="100vh">
        <GoBack title="My Order" cart />
        <Divider />

        {state?.orderHistory.length === 0 ? (
          <OrderHistoryEmpty />
        ) : (
          <>
            <Box flexGrow={2} pb="12">
              {orderHistory.map((menu) => {
                return (
                  <Box key={menu.name} mt="6" px="4">
                    <OrderHistoryCard {...menu} />
                  </Box>
                );
              })}
              {/* Order Now Banner */}
            </Box>
          </>
        )}
      </Flex>
    </Layout>
  );
}

function OrderHistoryEmpty() {
  return (
    <Stack spacing={4} align="center" mt="20" textAlign="center">
      <Icon color="brand.500" as={GiShoppingCart} w={150} h={150} />

      <Stack spacing={12}>
        <Heading as="h4" fontSize="lg">
          Your Order history is empty
        </Heading>
        <Text fontSize="md">let's fill it now</Text>
      </Stack>
      <NextLink href="/sp/RCR">
        <Link bg="brand.500" fontSize="lg" borderRadius="sm" px="2" py="1">
          Start Ordering Now
        </Link>
      </NextLink>
    </Stack>
  );
}
