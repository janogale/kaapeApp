import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { RiShoppingCartLine, RiSendPlane2Line } from "react-icons/ri";
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
import GoBack from "@/components/GoBack";

// context
import { useAppState } from "../../../context/AppProvider";
import { useRouter } from "next/router";

export default function Cart() {
  const [state, dispatch] = useAppState();
  let [cartData, setCartDat] = React.useState(state);

  return (
    <Layout hide>
      <Flex direction="column">
        <GoBack title="My Orders" cart />
        <Divider />
        {state?.cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            {cartData.cart.map((menu) => {
              return (
                <Box key={menu.name} p={4} mt="3">
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
      <NextLink href="/sp/100">
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

function OrderBanner() {
  const router = useRouter();
  return (
    <Flex
      bg="brand.500"
      color="gray.100"
      border="1px"
      borderColor="brand.100"
      py="2"
      justify="space-around"
      align="center"
      width="100%"
      position="fixed"
      bottom="0"
    >
      <Text fontWeight="bold">Order Now</Text>
      <Text fontSize="xs">4 Items</Text>
      <Text fontSize="xs">$35.5</Text>
      <Icon
        onClick={() => router.push("/cart/success")}
        as={RiSendPlane2Line}
        w={4}
        h={4}
      />
    </Flex>
  );
}
