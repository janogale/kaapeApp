import React from "react";
import {
  chakra,
  Flex,
  Heading,
  Box,
  Text,
  Button,
  ButtonGroup,
  IconButton,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

import { MdAdd, MdRemove } from "react-icons/md";

// utils
// utils
import { getCurrencySign, formatCurrency } from "../utils";

// context
import { useAppState } from "../context/AppProvider";

export default function FoodMenu({
  name,
  id,
  description,
  saleUnitPrice,
  picture,
  provider,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // combine menu to one object
  const menuItem = {
    name,
    id,
    description,
    saleUnitPrice,
    picture,
  };

  const [state, dispatch] = useAppState();

  // extract provider data
  const { currency } = provider;

  const currencySign = getCurrencySign(currency);

  React.useEffect(() => {
    dispatch({
      type: "setCurrency",
      payload: {
        currencySign,
      },
    });
  }, []);

  const menuPhoto = picture || "/menu/menuplaceholder.jpg";

  return (
    <Flex border="1px" borderColor="#d5546045" rounded="md" p="2">
      <Box
        _hover={{
          cursor: "pointer",
        }}
        onClick={onOpen}
      >
        {/* <Image height={80} width={80} src={menuPhoto} alt={description} /> */}
        <img height="60" width="80" src={menuPhoto} alt={description} />
      </Box>
      <Box ml="3" flexGrow={2}>
        <Box
          onClick={onOpen}
          _hover={{
            cursor: "pointer",
          }}
        >
          <Heading as="h3" fontSize="md">
            {name}
          </Heading>
          <Text>{description}</Text>
        </Box>
        <Flex mt="2" justify="space-around" align="center">
          <Heading as="h3" fontSize="sm" color="gray.500">
            <chakra.small fontSize=".6rem">{currencySign}</chakra.small>{" "}
            {formatCurrency(saleUnitPrice)}
          </Heading>
          <AddRemoveButton menuItem={menuItem} />
        </Flex>
      </Box>
      <MenuItemDetailModal
        menuItem={menuItem}
        currencySign={currencySign}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </Flex>
  );
}

// Add Item and Remove Item Button
function AddRemoveButton({ menuItem = {}, width = "100px" }) {
  const toast = useToast();
  const [state, dispatch] = useAppState();
  const [count, setCount] = React.useState(() => {
    let currentItem = state.cart.filter((item) => item.id === menuItem.id);
    return currentItem[0]?.amount || 0;
  });

  if (!count) {
    return (
      <Button
        _hover={{
          bg: "gray.100",
          color: "green.500",
        }}
        onClick={() => {
          setCount(count + 1);
          dispatch({ type: "add", payload: menuItem });

          // show toast message
          toast({
            description: `Added ${menuItem?.name} to the Cart`,
            status: "success",
            duration: 1000,
            position: "top",
          });
        }}
        size="xs"
        width={width}
        border="1px"
        bg="green.500"
        border="none"
      >
        Add
      </Button>
    );
  }

  return (
    <ButtonGroup
      size="xs"
      isAttached
      border="1px"
      width={width}
      borderColor="green.500"
      borderRadius="3px"
    >
      <IconButton
        flexGrow={2}
        onClick={() => {
          dispatch({ type: "remove", payload: menuItem });
          if (count === 1) {
            setCount(count - 1);
            return;
          }
          setCount(count - 1);
        }}
        icon={<MdRemove />}
      />
      <Button flexGrow={2}>{count}</Button>
      <IconButton
        flexGrow={2}
        onClick={() => {
          setCount(count + 1);
          dispatch({ type: "add", payload: menuItem });
        }}
        icon={<MdAdd />}
      />
    </ButtonGroup>
  );
}

function MenuItemDetailModal({
  isOpen,
  onOpen,
  onClose,
  menuItem,
  currencySign,
}) {
  const menuPhoto = menuItem.picture || "/menu/menuplaceholder.jpg";
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent width="90%" p={0}>
          <ModalHeader mt={8}>
            <img src={menuPhoto} alt={menuItem.description} />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={3}>
            <Box ml="4" flexGrow={2}>
              <Heading as="h3" fontSize="md">
                {menuItem.name}
              </Heading>
              <Text>{menuItem.description}</Text>
              <Heading as="h3" fontSize="sm">
                <chakra.small fontSize=".6rem">{currencySign}</chakra.small>{" "}
                {formatCurrency(menuItem.saleUnitPrice)}
              </Heading>
            </Box>
          </ModalBody>
          <ModalFooter justifyContent="center"></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
