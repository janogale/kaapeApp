import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineQrcode } from "react-icons/ai";
import { Text, Flex, Button, IconButton, Box } from "@chakra-ui/react";
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
        <Text color="gray.300">Scan Menu to order Food</Text>
        <Box
          mt={["-2rem", "-1rem", null]}
          position="relative"
          w="50%"
          borderRadius="100%"
          overflow="hidden"
        >
          <Link href="/scan">
            <a>
              <Image
                style={{ borderRadius: "100%" }}
                width={626}
                height={626}
                objectFit="cover"
                src="/qrcodescan.jpg"
                alt="qr code scan"
              />
            </a>
          </Link>
        </Box>

        <Link href="/scan">
          <a style={{ display: "block", width: "50%" }}>
            <Button variant="outline" width="100%">
              Scan Menu
            </Button>
          </a>
        </Link>
      </Flex>
    </Layout>
  );
};

export default Index;
