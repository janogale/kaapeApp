import Link from "next/link";
import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import serviceProvidersSample from "../../samples/providers";
import menuData from "../../samples/menu";
import ProviderBanner from "@/components/ProviderBanner";
import FoodMenu from "@/components/FoodMenu";

export default function ServiceProviderPage({ spData }) {
  return (
    <Layout>
      <Box mt="8">
        <ProviderBanner {...spData} img="/menu/menu.jpg" />
        {menuData.map((menu) => {
          return (
            <Box key={menu.id} mb="2" boxShadow="sm" p="4">
              <FoodMenu {...menu} />
            </Box>
          );
        })}
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  // get paths.

  let paths = serviceProvidersSample.map((sp) => {
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
  let spData = serviceProvidersSample.filter(
    (sp) => sp.id == context.params.spId
  )[0];

  return {
    props: { spData },
  };
}
