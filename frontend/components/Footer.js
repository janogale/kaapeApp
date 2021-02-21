import { Flex, Text, Icon } from "@chakra-ui/react";
import { ImQrcode, ImShare2 } from "react-icons/im";

export const Footer = (props) => (
  <Flex
    as="footer"
    w="100%"
    maxWidth="48rem"
    py=".8rem"
    flexShrink={0}
    justify="space-around"
    bg="brand.600"
    color="brand.100"
    {...props}
  >
    <BottomMenu text="scan" icon={ImQrcode} />
    <BottomMenu text="Browse" icon={ImQrcode} />
    <BottomMenu text="Share" icon={ImShare2} />
  </Flex>
);

function BottomMenu({ text = "", icon }) {
  return (
    <Flex direction="column" align="center">
      <Icon as={icon} w={4} h={4} />
      <Text fontSize="sm">{text}</Text>
    </Flex>
  );
}
