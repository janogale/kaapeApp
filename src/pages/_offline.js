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
        <Text color="gray.300">Oops, something went wrong</Text>
        <Box>
          <img
            height="96"
            width="96"
            src="/images/error.png"
            alt="qr code scan"
          />
        </Box>
        <Text color="gray.300">Please try again.</Text>

        <Button
          onClick={() => {
            window.location.replace("/");
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
