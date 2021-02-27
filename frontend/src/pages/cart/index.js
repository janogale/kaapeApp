import Link from "next/link";
import Image from "next/image";
import {
  Heading,
  Text,
  Stack,
  Button,
  Box,
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
              <Box key={menu.id} mt="3">
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
      <Image
        width={300}
        height={300}
        objectFit="cover"
        src="/images/emptycart.png"
        alt="Cart is empty"
      />
      <Box>
        <Heading as="h4" fontSize="lg">
          Your Cart is Empty
        </Heading>
        <Text fontSize="md">let's fill it now</Text>
      </Box>
      <Link href="/sp/100">
        <a>
          <Button colorScheme="teal" variant="outline">
            Start Ordering Now
          </Button>
        </a>
      </Link>
    </Stack>
  );
}
