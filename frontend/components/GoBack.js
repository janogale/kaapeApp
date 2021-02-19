import { useRouter } from "next/router";
import Link from "next/link";
import { Flex, Text, Icon, Box } from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";

export default function Goback({ title = "", icon = "" }) {
  const router = useRouter();

  return (
    <Flex justify="space-between" align="center" py="2" px="6">
      <Link href="/" onClick={() => router.back()}>
        <a>
          <Icon borderRadius="100%" as={IoMdArrowBack} w={5} h={5} />
        </a>
      </Link>
      <Box>
        <Text>{title}</Text>
      </Box>
      <Box>{icon}</Box>
    </Flex>
  );
}
