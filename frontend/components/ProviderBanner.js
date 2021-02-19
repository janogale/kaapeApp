import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function ProviderBanner({ name, id, description, img }) {
  return (
    <Box
      pos="relative"
      bg="rgba(0,0,0,0.8)"
      _before={{
        bgImage: `url(${img})`,
        content: '""',
        bgSize: "cover",
        bgPosition: "center",
        bgRepeat: "no-repeat",
        pos: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0.2,
      }}
      textColor="white"
      key={id}
  
      borderWidth="1px"
      overflow="hidden"
      _hover={{
        cursor: "pointer",
      }}
    >
      <Heading m="5" mb="0" as="h4" size="lg">
        {name}
      </Heading>
      <Text m="5" textColor="gray.300">
        {description}
      </Text>
      <Text mx="5" mb="5" textColor="gray.300">
        063-33225533
      </Text>
    </Box>
  );
}
