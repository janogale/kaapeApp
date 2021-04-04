import React from "react";
import Link from "next/link";
import { chakra, HStack, Stack, Flex, Text, Img, Tag } from "@chakra-ui/react";

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

  const thumbnail = (picture || "/menu/f1.jpg").replace(
    "/images/",
    "/thumbnails/"
  );

  return (
    <Stack
      border="1px"
      borderColor="#d5546045"
      rounded="md"
      px="4"
      py="2"
      boxShadow="lg"
    >
      <Flex justify="space-between">
        <chakra.small>
          Order No:
          <chakra.span fontWeight="semibold"> 4321</chakra.span>
        </chakra.small>
        <Link href="orders/4321">
          <a>View Details</a>
        </Link>
      </Flex>
      <HStack justify="space-between">
        <Flex align="center">
          <Img
            borderRadius="full"
            boxSize="40px"
            src="/menu/f1.jpg"
            alt="Food Menu"
          />
          <Flex direction="column" align="flex-start" ml="3">
            <chakra.small fontWeight="bold">Capital Lounge</chakra.small>
            <chakra.small>3 Items</chakra.small>
          </Flex>
        </Flex>
        <Text fontWeight="bold">$35.5</Text>
      </HStack>
      <HStack justify="space-between">
        <chakra.small>20 min ago</chakra.small>
        <Tag size="sm" colorScheme="green">
          Accepted
        </Tag>
      </HStack>
    </Stack>
  );
}
