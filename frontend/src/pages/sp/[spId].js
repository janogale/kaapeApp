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

// gRPC functions
import {
  getServiceProviderList,
  getServiceProvider,
} from "../../service/kaabe";

import Layout from "@/components/Layout";

import ProviderBanner from "@/components/ProviderBanner";
import FoodMenu from "@/components/FoodMenu";
import OrderView from "@/components/OrderView";
import GoBack from "@/components/GoBack";
import { groupBy } from "../../../utils";

// context
import { useAppState } from "../../../context/AppProvider";

export default function ServiceProviderPage({ spData }) {
  const [state] = useAppState();

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
        <ProviderBanner {...provider} />
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
        {state.cart?.length > 0 && <OrderView />}
      </Flex>
    </Layout>
  );
}

export async function getStaticPaths() {
  const providerList = await getServiceProviderList({});

  // get paths.

  let paths = providerList.providers.map((sp) => {
    return {
      params: { spId: sp.code + "" },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  var provider = await getServiceProvider({
    guid: context.params.spId,
    includeItems: true,
  });

  const spData = provider;

  return {
    props: { spData },
  };
}
