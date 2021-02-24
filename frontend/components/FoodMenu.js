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
  const [state, dispatch] = useAppState();

  const menuItem = {
    name,
    id,
    description,
    saleUnitPrice,
    picture,
  };

  return (
    <Flex>
      <Box>
        <Image
          width={100}
          height={100}
          objectFit="cover"
          src={picture}
          alt={description}
        />
      </Box>
      <Box ml="4" flexGrow={2}>
        <Heading as="h3" fontSize="md">
          {name}
        </Heading>
        <Text>{description}</Text>
        <Heading as="h3" fontSize="sm" color="gray.500">
          {saleUnitPrice}
        </Heading>
        <Flex mt="3" justify="flex-end">
          <AddRemoveButton menuItem={menuItem} />
        </Flex>
      </Box>
    </Flex>
  );
}

function AddRemoveButton({ isAdded = true, menuItem = {} }) {
  const [state, dispatch] = useAppState();
  if (!isAdded) {
    return (
      <Button
        _hover={{
          bg: "gray.100",
          color: "green.500",
        }}
        onClick={() => dispatch({ type: "add", payload: menuItem })}
        size="sm"
        width="100px"
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
      size="sm"
      isAttached
      border="1px"
      borderColor="green.500"
      borderRadius="3px"
    >
      <IconButton
        onClick={() => dispatch({ type: "remove", payload: menuItem })}
        icon={<MdRemove />}
      />
      <Button>3</Button>
      <IconButton
        onClick={() => dispatch({ type: "add", payload: menuItem })}
        icon={<MdAdd />}
      />
    </ButtonGroup>
  );
}
