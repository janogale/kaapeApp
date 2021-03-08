import React from "react";
import NextLink from "next/link";
import Image from "next/image";

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
import { useRouter } from "next/router";

export default function Cart() {
  const [state, dispatch] = useAppState();
  let [cartData, setCartDat] = React.useState(state);

  return (
    <Layout hide>
      <Flex direction="column" h="100vh">
        <GoBack title="My Orders" cart />
        <Divider />

        {state?.cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            {cartData.cart.map((menu) => {
              return (
                <Box key={menu.name} p={4} mt="3" flexGrow={2}>
                  <CartMenu {...menu} />
                </Box>
              );
            })}
            {/* Order Now Banner */}
            <Divider mb="12" />
            <OrderBanner />
          </>
        )}
      </Flex>
    </Layout>
  );
}

function EmptyCart() {
  return (
    <Stack spacing={4} align="center" mt="20">
      <Icon color="brand.500" as={GiShoppingCart} w={250} h={250} />

      <Box>
        <Heading as="h4" fontSize="lg">
          Your Cart is Empty
        </Heading>
        <Text fontSize="md">let's fill it now</Text>
      </Box>
      <NextLink href="/sp/a4337c7a-68b2-45f8-827d-8e4389d5eb51">
        <Link
          bg="brand.500"
          fontSize="lg"
          border="none"
          borderRadius="sm"
          color="brand.100"
          px="4"
          py="2"
        >
          Start Ordering Now
        </Link>
      </NextLink>
    </Stack>
  );
}
