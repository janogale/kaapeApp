import React from "react";
import Link from "next/link";
import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import { getServiceProviderList } from "../../service/kaabe";
import LoadingSpinner from "@/components/shared/Spinner";

export default function ServiceProviderPage() {
  const [serviceProvider, setServiceProvider] = React.useState(null);

  React.useEffect(() => {
    console.log("rendered");
    getData();

    async function getData() {
      let spData = await getServiceProviderList();
      for (let p of spData.providersList) {
      }
      setServiceProvider(spData.providersList);
    }
  }, []);

  // show loading spinner if data is not fetched yet.
  if (!serviceProvider) return <LoadingSpinner />;

  let serviceProviders = serviceProvider.map((sp) => {
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

// export async function getStaticProps(context) {
//   var resp = await getServiceProviderList();
//   const spData = resp.providersList;

//    return {
//     props: { spData },
//   };
// }
