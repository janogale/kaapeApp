import Link from "next/link";
import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import serviceProvidersSample from "../../samples/providers";

export default function ServiceProviderPage({ spData }) {
  let serviceProviders = spData.map((sp) => {
    return (
      <Box
        key={sp.id}
        maxW="sm"
        my="4"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        _hover={{
          background: "gray.100",
        }}
      >
        <Link href={`/sp/a4337c7a-68b2-45f8-827d-8e4389d5eb51`}>
          <a m="5">
            <Heading m="5" mb="0" as="h4" size="md">
              {sp.name}
            </Heading>
            <Text m="5" mt="0">
              {sp.description}
            </Text>
          </a>
        </Link>
      </Box>
    );
  });

  return (
    <Layout>
      <Box mt="8">{serviceProviders}</Box>
    </Layout>
  );
}

const apiURL = process.env.SERVER;

export async function getStaticProps() {
  return {
    props: { spData: serviceProvidersSample, apiURL },
  };
}
