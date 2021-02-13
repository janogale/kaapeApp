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
  let spData = [
    {
      id: 100,
      guid: 100,
      currency: "usd",
      businessType: "cafeteria",
      serviceLevel: 2,
      name: "Nomad Cafe",
      description: "Drink with joy",
      phoneNumber: "0631235422",
      website: "www.cafe.com",
      configuration: null,
      city: "Hargeisa",
      location: "downtown",
      picture: "./images/cafe.png",
    },
    {
      id: 101,
      guid: 101,
      currency: "usd",
      businessType: "cafeteria",
      serviceLevel: 2,
      name: "Mudakar Coffee",
      description: "Drink with joy",
      phoneNumber: "0631235422",
      website: "www.cafe.com",
      configuration: null,
      city: "Hargeisa",
      location: "downtown",
      picture: "./images/cafe.png",
    },
    {
      id: 102,
      guid: 102,
      currency: "usd",
      businessType: "cafeteria",
      serviceLevel: 2,
      name: "Cafe Barbera",
      description: "Drink with joy",
      phoneNumber: "0631235422",
      website: "www.cafe.com",
      configuration: null,
      city: "Hargeisa",
      location: "downtown",
      picture: "./images/cafe.png",
    },
  ];

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
  let providers = [
    {
      id: 100,
      guid: 100,
      currency: "usd",
      businessType: "cafeteria",
      serviceLevel: 2,
      name: "Nomad Cafe",
      description: "Drink with joy",
      phoneNumber: "0631235422",
      website: "www.cafe.com",
      configuration: null,
      city: "Hargeisa",
      location: "downtown",
      picture: "./images/cafe.png",
    },
    {
      id: 101,
      guid: 101,
      currency: "usd",
      businessType: "cafeteria",
      serviceLevel: 2,
      name: "Mudakar Coffee",
      description: "Drink with joy",
      phoneNumber: "0631235422",
      website: "www.cafe.com",
      configuration: null,
      city: "Hargeisa",
      location: "downtown",
      picture: "./images/cafe.png",
    },
    {
      id: 102,
      guid: 102,
      currency: "usd",
      businessType: "cafeteria",
      serviceLevel: 2,
      name: "Cafe Barbera",
      description: "Drink with joy",
      phoneNumber: "0631235422",
      website: "www.cafe.com",
      configuration: null,
      city: "Hargeisa",
      location: "downtown",
      picture: "./images/cafe.png",
    },
  ];

  let spData = providers.filter((sp) => sp.id == context.params.spId)[0];

  return {
    props: { spData },
  };
}
