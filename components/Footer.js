import { useRouter } from "next/router";
import { Flex, Text, Icon } from "@chakra-ui/react";
import { ImQrcode, ImShare2, ImFolderOpen } from "react-icons/im";

export const Footer = (props) => (
  <Flex
    as="footer"
    w="100%"
    maxWidth="48rem"
    py=".5rem"
    flexShrink={0}
    justify="space-around"
    bg="brand.500"
    color="white"
    {...props}
  >
    <BottomMenu text="Scan" icon={ImQrcode} />
    <BottomMenu text="Browse" icon={ImFolderOpen} />
    <BottomMenu text="Share" icon={ImShare2} />
  </Flex>
);

function BottomMenu({ text = "", icon }) {
  const router = useRouter();
  return (
    <Flex
      direction="column"
      align="center"
      onClick={() => router.push("/sp/RCR?tn=123")}
      _hover={{
        cursor: "pointer",
      }}
    >
      <Icon as={icon} w={4} h={4} />
      <Text fontSize="xs">{text}</Text>
    </Flex>
  );
}
