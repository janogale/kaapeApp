import NextLink from "next/link";
import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";
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

import FoodMenu from "@/components/FoodMenu";
import GoBack from "@/components/GoBack";

// context
import { useAppState } from "../../../context/AppProvider";

export default function Cart() {
  const [state, dispatch] = useAppState();

  console.log(state.cart);

  return (
    <Layout hide>
      <Flex direction="column">
        <GoBack title="My Orders" cart />
        <Divider />
        {state?.cart.length === 0 ? (
          <EmptyCart />
        ) : (
          state.cart.map((menu) => {
            return (
              <Box key={menu.name} p={4} mt="3">
                <FoodMenu {...menu} />
              </Box>
            );
          })
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
