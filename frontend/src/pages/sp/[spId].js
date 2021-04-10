import React from "react";
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

  // store provider id to localStorage

  // React.useEffect(() => {
  //   window.sessionStorage.setItem("spId", JSON.stringify(spData.provider.guid));
  // }, []);

  React.useEffect(function () {
    getData();

    async function getData() {
      let spData = await getServiceProvider("HDH");
      console.log(spData);
      setSpData(spData);
    }
  }, []);

  console.log(spData);

  if (!spData) {
    return <h1>Loading</h1>;
  }

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
        <Tabs flexGrow={2} overflow="hidden" width="100%">
          <TabList overflowX="scroll" width="100%">
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

// export async function getStaticPaths() {
//   const providerList = await getServiceProviderList();

//   // get paths.

//   let paths = providerList.providersList.map((sp) => {
//     return {
//       params: { spId: sp.code + "" },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getServerSideProps(context) {
//   var provider = await await getServiceProvider(
//     "5A1F2A0D-81B2-4808-A554-02B2EC91B333"
//   );

//   const spData = provider;

//   return {
//     props: { spData },
//   };
// }
