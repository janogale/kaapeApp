import Link from "next/link";
import {
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";

import Layout from "@/components/Layout";

import ProviderBanner from "@/components/ProviderBanner";
import FoodMenu from "@/components/FoodMenu";
import GoBack from "@/components/GoBack";
import { groupBy } from "../../../utils";

// import Data
import serviceProvidersSample from "../../samples/providers";
import menuData from "../../samples/menu";
import Categories from "../../samples/categories";

export default function ServiceProviderPage({ spData }) {
  const TapContent = groupBy(menuData, "itemCategoryId");

  const Cats = Categories.map((cat) => {
    return (
      <Tab
        _selected={{ color: "brand.500", borderColor: "currentColor" }}
        _focus={{
          boxShadow: "none",
        }}
        key={cat.id}
      >
        {cat.name}
      </Tab>
    );
  });

  return (
    <Layout hide>
      <Box>
        <GoBack title={spData.name} cart />
        <ProviderBanner {...spData} img="/menu/menu.jpg" />
        <Tabs overflow="auto">
          <TabList>{Cats}</TabList>
          <TabPanels>
            {Object.keys(TapContent).map((menu, index) => {
              return (
                <TabPanel p={4} key={index}>
                  {TapContent[menu].map((menu) => {
                    return (
                      <Box key={menu.id} mt="3">
                        <FoodMenu {...menu} />
                      </Box>
                    );
                  })}
                </TabPanel>
              );
            })}
          </TabPanels>
        </Tabs>
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
