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
} from "@chakra-ui/react";

import { MdAdd, MdRemove } from "react-icons/md";

// utils
import { formatCurrency } from "../utils";

// context
import { useAppState } from "../context/AppProvider";

export default function CartMenu({
  name,
  id,
  description,
  saleUnitPrice,
  picture,
  amount = 0,
}) {
  const [state] = useAppState();

  // combine menu items
  const menuItem = {
    name,
    id,
    description,
    saleUnitPrice,
    picture,
    amount,
  };
  const menuPhoto = picture || "/menu/menuplaceholder.jpg";

  return (
    <Flex border="1px" borderColor="#d5546045" rounded="md" p="2">
      <Box>
        <img
          height="60px"
          width="80px"
          style={{ minHeight: "60px", minWidth: "80px" }}
          src={menuPhoto}
          alt={description}
        />
      </Box>
      <Box ml="4" flexGrow={2}>
        <Heading as="h3" fontSize="md">
          {name}
        </Heading>
        <Text>{description}</Text>
        <Heading as="h3" fontSize="sm" color="gray.500">
          <chakra.small fontSize=".6rem">{state?.currencySign}</chakra.small>{" "}
          {formatCurrency(saleUnitPrice)}
        </Heading>
        <Flex justify="flex-end">
          <AddRemoveButton menuItem={menuItem} />
        </Flex>
      </Box>
      {/* Order Banner */}
    </Flex>
  );
}

// Add Item and Remove Item Button
function AddRemoveButton({ menuItem = {} }) {
  const [, dispatch] = useAppState();
  const [count, setCount] = React.useState(menuItem.amount || 0);

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
        }}
        size="xs"
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
      size="xs"
      isAttached
      border="1px"
      borderColor="green.500"
      borderRadius="3px"
    >
      <IconButton
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
      <Button>{count}</Button>
      <IconButton
        onClick={() => {
          setCount(count + 1);
          dispatch({ type: "add", payload: menuItem });
        }}
        icon={<MdAdd />}
      />
    </ButtonGroup>
  );
}
