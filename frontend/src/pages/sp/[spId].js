import Link from "next/link";
import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "../../components/Layout";

export default function ServiceProviderPage({ spData }) {
  return (
    <Box
      key={spData.id}
      maxW="sm"
      my="4"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{
        background: "gray.100",
      }}
    >
      <Link href={`/sp`}>
        <Box
          as="a"
          m="5"
          display="block"
          bg="gray.300"
          textAlign="center"
          _hover={{ cursor: "pointer" }}
        >
          Go Back
        </Box>
      </Link>
      <Heading m="5" mb="0" as="h4" size="md">
        {spData.name}
      </Heading>
      <Text m="5" mt="0">
        {spData.description}
      </Text>
    </Box>
  );

  return (
    <Layout>
      <Box mt="8">{serviceProviders}</Box>
    </Layout>
  );
}
const apiURL = process.env.SERVER;
let options = {
  method: "GET",
  headers: {
    // update with your user-agent
    "User-Agent": "*",
    Accept: "application/json; charset=UTF-8",
  },
};

export async function getStaticPaths() {
  let result = await fetch(`${apiURL}/api/providers`, options);
  let spData = await result.json();

  // get paths.

  let paths = spData.map((sp) => {
    return {
      params: { spId: sp.id + "" },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let result = await fetch(
    `${apiURL}/api/providers/${context.params.spId}`,
    options
  );
  let spData = await result.json();

  return {
    props: { spData },
  };
}
