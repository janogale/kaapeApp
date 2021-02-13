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
      <Link href={`/${spData.guid}`}>
        <a m="5">
          <Heading m="5" mb="0" as="h4" size="md">
            {spData.name}
          </Heading>
          <Text m="5" mt="0">
            {spData.description}
          </Text>
        </a>
      </Link>
    </Box>
  );

  return (
    <Layout>
      <Box mt="8">{serviceProviders}</Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { spId: "100" } },
      { params: { spId: "101" } },
      { params: { spId: "102" } },
      { params: { spId: "103" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  let result = await fetch(
    `http://localhost:3000/api/providers/${context.params.spId}`
  );
  let spData = await result.json();

  return {
    props: { spData },
  };
}
