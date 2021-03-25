import React from "react";
import { useRouter } from "next/router";
import { Heading, Text, VStack, Button, Flex } from "@chakra-ui/react";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <Flex
      mt="8"
      direction="column"
      flexGrow={2}
      justify="center"
      align="center"
      minH="60vh"
    >
      <VStack px="8" textAlign="center" spacing="4">
        <Heading as="h1" fontSize="2xl">
          oops..
        </Heading>
        <Heading as="h2" fontSize="xl">
          something went wrong.
        </Heading>
        <Text>Please refresh app or go back to home</Text>
        <Button onClick={() => router.reload()}>Try again</Button>
      </VStack>
    </Flex>
  );
}
