import React from "react";
import Image from "next/image";
import { Flex, Heading, Box, Text, Button } from "@chakra-ui/react";

export default function FoodMenu({
  name,
  id,
  description,
  saleUnitPrice,
  picture,
}) {
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
        <Box mt="3">
          <Button
            _hover={{
              bg: "gray.100",
              color: "green.500",
            }}
            display="block"
            ml="auto"
            size="sm"
            width="100px"
            border="1px"
            bg="green.500"
            color="gray.100"
          >
            Add
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
