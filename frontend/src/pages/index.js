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
        <Heading color="gray.400" fontSize="md" mt="4">
          Digital Menu
        </Heading>
        <Box bg="red.300" my={8}>
          <IconButton
            w={24}
            h={24}
            fontSize="8.5rem"
            icon={<AiOutlineQrcode />}
          />
        </Box>

        <Link href="/scan">
          <a style={{ display: "block", width: "100%" }}>
            <Button colorScheme="teal" variant="outline" width="100%">
              Scan Menu
            </Button>
          </a>
        </Link>
      </Flex>
    </Layout>
  );
};

export default Index;
