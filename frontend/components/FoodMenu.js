import React from "react";
import Image from "next/image";
import {
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

// context
import { useAppState } from "../context/AppProvider";

export default function FoodMenu({
  name,
  id,
  description,
  saleUnitPrice,
  picture,
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

  return (
    <Flex border="1px" borderColor="#d5546045" rounded="md" p="2">
      <Box
        _hover={{
          cursor: "pointer",
        }}
        onClick={onOpen}
      >
        <Image
          width={80}
          height={60}
          objectFit="cover"
          src={picture}
          alt={description}
        />
      </Box>
      <Box ml="4" flexGrow={2}>
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
          <Heading as="h3" fontSize="sm" color="gray.500">
            {saleUnitPrice}
          </Heading>
        </Box>
        <Flex justify="flex-end">
          <AddRemoveButton menuItem={menuItem} />
        </Flex>
      </Box>
      <MenuItemDetailModal
        menuItem={menuItem}
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
  const [count, setCount] = React.useState(0);

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
            position: "bottom",
          });
        }}
        size="xs"
        width={width}
        border="1px"
        bg="green.500"
        color="gray.100"
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

function MenuItemDetailModal({ isOpen, onOpen, onClose, menuItem }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent width="90%" p={0}>
          <ModalHeader mt={8}>
            <Image
              width={240}
              height={180}
              objectFit="cover"
              src={menuItem.picture}
              alt={menuItem.description}
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={3}></ModalBody>
          <Box ml="4" flexGrow={2}>
            <Heading as="h3" fontSize="md">
              {menuItem.name}
            </Heading>
            <Text>{menuItem.description}</Text>
            <Heading as="h3" fontSize="sm" color="gray.500">
              {menuItem.saleUnitPrice}
            </Heading>
          </Box>
          <ModalFooter justifyContent="center">
            <AddRemoveButton width="80%" menuItem={menuItem} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
