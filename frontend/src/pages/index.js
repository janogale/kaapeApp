import React from "react";
import Link from "next/link";
import { AiOutlineQrcode } from "react-icons/ai";
import { Heading, Flex, Button, IconButton, Box } from "@chakra-ui/react";
import Layout from "../../components/Layout";

const Index = () => {
  return (
    <Layout>
      <Flex
        mx="4"
        mt="8"
        direction="column"
        justify="center"
        align="center"
        flexGrow={2}
      >
        <Heading fontSize="lg">Welcome To Kaape</Heading>
        <Box bg="red.300" my={8}>
          <IconButton
            w={24}
            h={24}
            fontSize="8.5rem"
            icon={<AiOutlineQrcode />}
          />
        </Box>

        <Button colorScheme="teal" variant="outline" width="100%">
          <Link href="/scan">
            <a>Scan Menu</a>
          </Link>
        </Button>
      </Flex>
    </Layout>
  );
};

export default Index;
