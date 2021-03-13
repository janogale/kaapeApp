import React from "react";
import { useRouter } from "next/router";

// chakra
import { Flex, Text, Icon, Button } from "@chakra-ui/react";

// Icons
import { RiSendPlane2Line } from "react-icons/ri";

// context
import { useAppState } from "../context/AppProvider";

function OrderBanner() {
  const router = useRouter();
  const [state, dispatch] = useAppState();
  const [order, setOrders] = React.useState(null);

  // post data

  const handleSubmit = async function () {
    const stringMenuItems = JSON.stringify(state.cart);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        spId: "a4337c7a-68b2-45f8-827d-8e4389d5eb51",
        tableNumber: "t1",
        additionalInfo: "kApp",
        orderRows: stringMenuItems,
        status: 1, // In-queue.
      }),
    };

    const result = await fetch(
      "http://localhost:3000/api/orders",
      requestOptions
    );

    const data = await result.json();

    console.log(data);

    //  order is success
    if (data) router.push("/cart/success");

    setOrders(data);
  };

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
      <Text>{state?.cart?.length} Items</Text>
      <Text>Total ${totalPrice}</Text>
      <Button
        onClick={handleSubmit}
        variant="outline"
        fontWeight="bold"
        fontSize="xl"
        rightIcon={<RiSendPlane2Line />}
        _hover={{
          color: "brand.400",
          bg: "gray.300",
        }}
      >
        Order Now
      </Button>
    </Flex>
  );
}

export default OrderBanner;
