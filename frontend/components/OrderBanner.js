import React from "react";
import { useRouter } from "next/router";

// chakra
import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  FormControl,
  Textarea,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

// Icons
import { RiSendPlane2Line } from "react-icons/ri";

// context
import { useAppState } from "../context/AppProvider";

function OrderBanner() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useAppState();

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
        onClick={onOpen}
        variant="outline"
        fontWeight="bold"
        fontSize="xl"
        rightIcon={<RiSendPlane2Line />}
        _hover={{
          color: "brand.400",
          bg: "gray.300",
        }}
      >
        Submit
      </Button>
      <ConfirmOrder isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Flex>
  );
}

function ConfirmOrder({ isOpen, onOpen, onClose }) {
  const [state, dispatch] = useAppState();
  const [additionalInfo, setAdditionalInfo] = React.useState("");
  const router = useRouter();

  // handle order submit
  const handleSubmit = async function () {
    const stringMenuItems = JSON.stringify(state.cart);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        spId: "5a1f2a0d-81b2-4808-a554-02b2ec91b333",
        tableNumber: router.query.tn || "",
        additionalInfo: additionalInfo,
        orderRows: stringMenuItems,
        status: 1, // In-queue.
      }),
    };

    const result = await fetch(
      "http://localhost:3000/api/orders",
      requestOptions
    );

    const data = await result.json();

    //  order is success
    if (data) router.push("/cart/success");

    // clear state
    dispatch({ type: "clearCart" });
  };

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={3}>
            <FormControl>
              <FormLabel fontSize="sm">Add additional Information</FormLabel>
              <Textarea
                borderColor="brand.100"
                size="sm"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                placeholder="Add additional Information"
                variant="outline"
                colorScheme="gray"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} colorScheme="red" size="md" mr={3}>
              Order Now
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default OrderBanner;
