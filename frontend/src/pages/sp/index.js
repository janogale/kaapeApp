import Link from "next/link";
import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import { getServiceProviderList } from "../../service/kaabe";

export default function ServiceProviderPage({ spData }) {
  let serviceProviders = spData.map((sp) => {
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
        <Link href={`/sp/${sp.code}`}>
          <a m="5">
            <Heading m="5" mb="0" as="h4" size="md">
              {sp.code}
            </Heading>
            <Text m="5" mt="0">
              {sp.guid}
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

export async function getStaticProps(context) {
  var resp = await getServiceProviderList();
  const spData = resp.providersList;

  console.log("process.env.protosDir");
  console.log(process.env.protosDir);

  return {
    props: { spData },
  };
}
