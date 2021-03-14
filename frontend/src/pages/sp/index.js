import Link from "next/link";
import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "@/components/Layout";

export default function ServiceProviderPage({ spData }) {
  let serviceProviders = spData.providers.map((sp) => {
    return (
      <Box
        key={sp.guid}
        maxW="sm"
        my="4"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        _hover={{
          background: "gray.400",
        }}
      >
        <Link href={`/sp/${sp.guid}`}>
          <a m="5">
            <Heading m="5" mb="0" as="h4" size="md">
              {sp.code}
            </Heading>
            <Text m="5" mt="0">
              {sp.code}
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

let SERVER = process.env.SERVER;

if (process.env.VERCEL_URL) {
  SERVER = "https://" + process.env.VERCEL_URL;
}

const headers = {
  headers: {
    "User-Agent": "*",
  },
};

export async function getStaticProps(context) {
  const result = await fetch(`${SERVER}/api/providers`, headers);
  const spData = await result.json();

  return {
    props: { spData },
  };
}
