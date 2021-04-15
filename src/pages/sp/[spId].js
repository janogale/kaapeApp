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

export default function ServiceProviderPage({ serviceProviderData }) {
  const [state, dispatch] = useAppState();
  const [spData, setSpData] = React.useState(null);

  const router = useRouter();

  // // // store provider id to localStorage

  React.useEffect(function () {
    // save service provider id to session for later use in order processing
    window.sessionStorage.setItem("spId", provider.guid);
  }, [serviceProviderData]);

  // show loading spinner if data is not fetched yet.
  if (!serviceProviderData) return <LoadingSpinner />;

  let {
    categoriesList: categories,
    menuItemsList: menuItems,
    provider,
  } = serviceProviderData;

  categories = categories || [];
  menuItems = menuItems || [];

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
          <TabList overflowX="scroll" width="100%" py="2" border="none">
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

export async function getStaticPaths() {
  const result = await fetch(
    "https://ktasks.azurewebsites.net/api/Providers?code=n6P5xtOcSa9tbLIbgTIiudpNiSqqGZHaIfxFKJkDdnHGaplHK2Uy7Q=="
  );

  const PROVIDERS = await result.json();

  // validate the data

  let paths = PROVIDERS.map((sp) => {
    return {
      params: { spId: sp.code },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const result = await fetch(
    `https://ktasks.azurewebsites.net/api/Providers?code=n6P5xtOcSa9tbLIbgTIiudpNiSqqGZHaIfxFKJkDdnHGaplHK2Uy7Q==&spCode=${context.params.spId}`
  );

  const serviceProviderData = await result.json();

  return {
    props: { serviceProviderData },
  };
}
