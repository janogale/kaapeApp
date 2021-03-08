import Link from "next/link";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
} from "@chakra-ui/react";

import Layout from "@/components/Layout";

import ProviderBanner from "@/components/ProviderBanner";
import FoodMenu from "@/components/FoodMenu";
import OrderBanner from "@/components/OrderBanner";
import GoBack from "@/components/GoBack";
import { groupBy } from "../../../utils";

export default function ServiceProviderPage({ spData }) {
  const { categories, menuItems, provider } = spData;

  const TapContent = groupBy(menuItems, "itemCategoryId");

  // get only category IDs with items
  const categoryIdWithItems = menuItems.map((item) => item.itemCategoryId);

  const Cats = categories.map((cat) => {
    // if id is not assigned to any menuItem skip.
    if (!categoryIdWithItems.includes(cat.id)) return null;

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
      <Flex flexDir="column" h="100vh">
        <GoBack title={provider.name} cart />
        <ProviderBanner {...provider} img="/menu/menu.jpg" />
        <Tabs overflow="auto" flexGrow={2}>
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
        <OrderBanner />
      </Flex>
    </Layout>
  );
}

const SERVER = process.env.SERVER;

export async function getStaticPaths() {
  const result = await fetch(`${SERVER}/api/providers`);

  const data = await result.json();

  // get paths.

  let paths = data.providers.map((sp) => {
    return {
      params: { spId: sp.guid + "" },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const result = await fetch(`${SERVER}/api/providers/${context.params.spId}`);

  const spData = await result.json();

  return {
    props: { spData },
  };
}
