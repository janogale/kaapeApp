import React from "react";
import { useRouter } from "next/router";
import LoadingSpinner from "@/components/shared/Spinner";

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
import { getServiceProvider } from "../../service/kaabe";

import Layout from "@/components/Layout";

import ProviderBanner from "@/components/ProviderBanner";
import FoodMenu from "@/components/FoodMenu";
import OrderView from "@/components/OrderView";
import GoBack from "@/components/GoBack";
import { groupBy } from "../../../utils";

// context
import { useAppState } from "../../../context/AppProvider";

export default function ServiceProviderPage() {
  const [state, dispatch] = useAppState();
  const [spData, setSpData] = React.useState(null);

  const router = useRouter();

  // // store provider id to localStorage

  // React.useEffect(() => {
  //   window.sessionStorage.setItem("spId", JSON.stringify(spData.provider.guid));
  // }, []);

  React.useEffect(function () {
    const spId = window.location?.pathname?.split("/").slice(-1).join();

    getData();

    async function getData() {
      let spData = await getServiceProvider(router.query.spId || spId);
      setSpData(spData);
    }
  }, []);

  // show loading spinner if data is not fetched yet.
  if (!spData) return <LoadingSpinner />;

  const {
    categoriesList: categories,
    menuItemsList: menuItems,
    provider,
  } = spData;

  // store service prodiver data to state.

  const TapContent = groupBy(menuItems, "itemCategoryId");

  // get only category IDs with items
  const categoryIdWithItems = menuItems.map((item) => item.itemCategoryId);

  const Cats = categories.map((cat) => {
    // if id is not assigned to any menuItem skip.
    if (!categoryIdWithItems.includes(cat.id)) return null;

    return (
      <Tab
        _selected={{
          color: "brand.500",
          borderColor: "currentColor",
          fontWeight: "bold",
          borderBottom: "1px solid",
        }}
        whiteSpace="nowrap"
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
        <Tabs py="2" flexGrow={2} overflow="hidden" width="100%" size="sm">
          <TabList overflowX="scroll" width="100%" py="2">
            {Cats}
          </TabList>
          <TabPanels>
            {Object.keys(TapContent).map((menu, index) => {
              return (
                <TabPanel p={4} key={index}>
                  {TapContent[menu].map((menu) => {
                    return (
                      <Box key={menu.id} mt="3">
                        <FoodMenu {...menu} provider={provider} />
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

/**
 * Providers list maintained by hand for now.
 */
const PROVIDERS = [
  'HDH',
  'CNHC',
  'RCR',
  'RCL',
  'RHS',
];

export async function getStaticPaths() {
  let paths = PROVIDERS.map((sp) => {
    return {
      params: { spId: sp },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {}, 
  }
}