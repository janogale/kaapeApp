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
      justify="space-around"
      align="center"
      width="100%"
      position="fixed"
      overflow="overlay"
      bottom="0"
      zIndex="1000"
      flexShrink={1}
    >
      <Button
        onClick={() => router.push("/cart")}
        variant="solid"
        borderRadius="none"
        colorScheme="brand"
        width="100%"
        fontSize="md"
        _hover={{
          color: "brand.400",
          bg: "gray.200",
        }}
      >
        View Cart
        <chakra.small ml="3" fontSize=".6rem" mb="-1">
          {state.currencySign}
        </chakra.small>
        <chakra.small ml="1" fontWeight="bold" fontSize="1rem">
          {formatCurrency(totalPrice)}
        </chakra.small>
      </Button>
    </Flex>
  );
}

export default OrderBanner;
