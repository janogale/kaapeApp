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

import CartMenu from "@/components/CartMenu";
import OrderBanner from "@/components/OrderBanner";
import GoBack from "@/components/GoBack";

// context
import { useAppState } from "../../../context/AppProvider";

export default function Cart() {
  const [state, dispatch] = useAppState();
  let [cartData, setCartDat] = React.useState(state.cart);

  React.useEffect(
    function () {
      // sort array to preverse render order
      let sortedCart = [...state.cart].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setCartDat(sortedCart);
    },
    [state]
  );

  return (
    <Layout hide>
      <Flex direction="column" minH="100vh">
        <GoBack title="My Order" cart />
        <Divider />

        {state?.cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <Box flexGrow={2} pb="16">
              {cartData.map((menu) => {
                return (
                  <Box key={menu.name} mt="3" px="4">
                    <CartMenu {...menu} />
                  </Box>
                );
              })}
              {/* Order Now Banner */}
            </Box>

            <OrderBanner />
          </>
        )}
      </Flex>
    </Layout>
  );
}

function EmptyCart() {
  return (
    <Stack spacing={8} align="center" mt="20" textAlign="center">
      <Icon color="brand.500" as={GiShoppingCart} w={150} h={150} />

      <Stack spacing={4}>
        <Heading as="h4" fontSize="lg">
          Your Cart is empty
        </Heading>
        <Text fontSize="md">let's fill it now</Text>
      </Stack>
      <NextLink href="/">
        <Link
          bg="brand.100"
          borderRadius="2xl"
          color="brand.700"
          fontSize="lg"
          borderRadius="sm"
          px="3"
          py="2"
        >
          Scan QR-code & Place Your Order
        </Link>
      </NextLink>
    </Stack>
  );
}
