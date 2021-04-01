import React from "react";
import Link from "next/link";
import { Text, Flex, Button, Box, Image } from "@chakra-ui/react";
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
        <Text color="gray.500">Scan QR-code & Place Your Order</Text>
        <Box mt={["-2rem", "-1rem", null]} position="relative">
          <Link href="/scan">
            <a>
              <Image
                borderRadius="full"
                boxSize="200px"
                src="/qrcodescan.jpg"
                alt="qr code scan"
              />
            </a>
          </Link>
        </Box>

        <Link href="/scan">
          <a style={{ display: "block", width: "50%" }}>
            <Button
              variant="outline"
              width="100%"
              border="1px"
              borderColor="brand.200"
            >
              Scan QR-code
            </Button>
          </a>
        </Link>
      </Flex>
    </Layout>
  );
};

export default Index;
