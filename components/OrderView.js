import React from "react";
import { useRouter } from "next/router";

// chakra
import { Flex, chakra, Button } from "@chakra-ui/react";

// Icons
import { RiShoppingCartFill } from "react-icons/ri";

// utils
import { formatCurrency } from "../utils";

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
      py="2"
      justify="space-around"
      align="center"
      width="100%"
      flexShrink={1}
    >
      <Button
        onClick={() => router.push("/cart")}
        variant="solid"
        colorScheme="brand"
        width="80%"
        fontSize="md"
        _hover={{
          color: "brand.400",
          bg: "gray.300",
        }}
      >
        View Cart
        <chakra.small ml="3" fontWeight="thin" fontSize=".6rem" mb="-2">
          {state.currencySign}
        </chakra.small>
        <chakra.small ml="1">{formatCurrency(totalPrice)}</chakra.small>
      </Button>
    </Flex>
  );
}

export default OrderBanner;
