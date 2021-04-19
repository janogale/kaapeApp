import React from "react";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

export default function ProviderBanner({
  name,
  id,
  description,
  phoneNumber,
  picture = "/menu/menu.jpg",
}) {
  return (
    <Box
      height={165}
      pos="relative"
      bg="rgba(0,0,0,0.8)"
      _before={{
        bgImage: `url(${picture})`,
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
    >
      <Heading mx="5" my="3" mb="0" as="h4" size="lg">
        {name}
      </Heading>
      <Text mx="5" my="3" textColor="gray.300">
        {description}
      </Text>
      {phoneNumber && (
        <Text
          mx="5"
          mb="5"
          textColor="gray.300"
          position="relative"
          zIndex="200"
        >
          <PhoneIcon />
          <Link ml="2" href={`tel:${phoneNumber}`}>
            {phoneNumber}
          </Link>
        </Text>
      )}
    </Box>
  );
}
