import React from "react";
import Link from "next/link";
import { Text, Flex, Button, Box } from "@chakra-ui/react";
import Layout from "../../components/Layout";

const Index = () => {
  return (
    <Layout>
      <Flex
        mx="4"
        mt="8"
        direction="column"
        align="center"
        justify="space-around"
        flexGrow={2}
      >
        <Text color="gray.300">KaabeApp Digital Menu</Text>
        <Box
          mt={["-2rem", "-1rem", null]}
          position="relative"
          w="70%"
          overflow="hidden"
        >
          <Link href="/scan">
            <a>
              <img
                width={960}
                height={538}
                objectFit="cover"
                src="/images/notfound.webp"
                alt="qr code scan"
              />
            </a>
          </Link>
        </Box>

        <Link href="/">
          <a style={{ display: "block", width: "50%" }}>
            <Button
              variant="outline"
              width="100%"
              border="1px"
              borderColor="brand.200"
            >
              Go Home
            </Button>
          </a>
        </Link>
      </Flex>
    </Layout>
  );
};

export default Index;
