import { useRouter } from "next/router";

// chakra
import { Flex, Text, Icon } from "@chakra-ui/react";

// Icons
import { RiSendPlane2Line } from "react-icons/ri";

// context
import { useAppState } from "../context/AppProvider";

function OrderBanner() {
  const router = useRouter();
  const [state, dispatch] = useAppState();

  // total order price
  const totalPrice = state.cart.reduce(
    (acc, item) => acc + item.saleUnitPrice,
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
      position="fixed"
      bottom="0"
    >
      <Text fontWeight="bold">Order Now</Text>
      <Text fontSize="xs">{state?.cart?.length} Items</Text>
      <Text fontSize="xs">${totalPrice}</Text>
      <Icon
        onClick={() => router.push("/cart/success")}
        as={RiSendPlane2Line}
        w={4}
        h={4}
      />
    </Flex>
  );
}

export default OrderBanner;
