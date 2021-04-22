import React from "react";

import { Text, Flex, Button, Box } from "@chakra-ui/react";
import Layout from "../../components/Layout";

const Offline = () => {
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
        <Text color="gray.300">Oops, you are offline! </Text>
        <Box>
          {/* <Image
            width={96}
            height={96}
            objectFit="cover"
            src="/images/noconnection.png"
            alt="qr code scan"
          /> */}
          <img
            height="96"
            width="96"
            src="/images/noconnection.png"
            alt="qr code scan"
          />
        </Box>
        <Text color="gray.300">Please connect to Internet to use App </Text>

        <Button
          onClick={() => {
            window.location.reload();
          }}
          variant="outline"
          border="1px"
          px="4"
          borderColor="brand.200"
        >
          Try again
        </Button>
      </Flex>
    </Layout>
  );
};

export default Offline;
