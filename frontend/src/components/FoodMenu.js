import React from "react";
import { Flex, Heading, Box, Text, Image } from "@chakra-ui/react";

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
          boxSize="100px"
          objectFit="cover"
          src={picture}
          alt={description}
        />
      </Box>
      <Box>
        <Heading>{name}</Heading>
        <Text>{description}</Text>
      </Box>
    </Flex>
  );
}
