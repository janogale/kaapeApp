import React from "react";
import { useRouter } from "next/router";

// chakra
import { Flex, Text, Button } from "@chakra-ui/react";

// Icons
import { RiShoppingCartFill } from "react-icons/ri";

// context
import { useAppState } from "../context/AppProvider";

function OrderBanner() {
  const [state] = useAppState();

  const router = useRouter();

  // total order price
  const totalPrice = state.cart.reduce(
    (acc, item) => acc + item.saleUnitPrice * item.amount,
    0
  );

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
      flexShrink={1}
    >
      <Text>{state?.cart?.length} items</Text>
      <Text>Total ${totalPrice}</Text>
      <Button
        onClick={() => router.push("/cart")}
        variant="outline"
        fontWeight="bold"
        fontSize="md"
        rightIcon={<RiShoppingCartFill />}
        _hover={{
          color: "brand.400",
          bg: "gray.300",
        }}
      >
        View Cart
      </Button>
    </Flex>
  );
}

export default OrderBanner;
