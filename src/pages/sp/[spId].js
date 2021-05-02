import React from "react";
import { useRouter } from "next/router";
import { useSwipeable } from "react-swipeable";
import LoadingSpinner from "@/components/shared/Spinner";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  useColorModeValue,
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
  const [pageScroll, setPageScroll] = React.useState(0);
  const [tabSize, setTabSize] = React.useState(0);
  const [tabIndex, setTabIndex] = React.useState(0);

  function handleTabsChange(index) {
    setTabIndex(index);
  }

  // swipe tabs
  React.useEffect(() => {
    let tabs = window.document.querySelectorAll('div[role="tablist"] > button');

    let tabsLength = tabs?.length || 0;

    setTabSize(tabsLength - 1);
  }, []);
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (tabIndex == tabSize) return;
      setTabIndex(tabIndex + 1);
    },
    onSwipedRight: () => {
      if (tabIndex == 0) return;
      setTabIndex(tabIndex - 1);
    },
    preventDefaultTouchmoveEvent: true,
  });

  const router = useRouter();

  let {
    categoriesList: categories,
    menuItemsList: menuItems,
    provider,
  } = serviceProviderData;

  // // // store provider id to localStorage

  React.useEffect(
    function () {
      // Save service provider id to session for later use in order processing
      window.sessionStorage.setItem("spId", provider.guid);
      window.sessionStorage.setItem(
        "spCode",
        window.location.pathname.split("/")[2]
      );

      // Save also possible location information.

      window.sessionStorage.setItem("location", router.query.location || "");
    },
    [serviceProviderData]
  );

  // save service provider data to state

  React.useEffect(() => {
    dispatch({ type: "setProvider", payload: { provider } });
  }, []);

  // detect scroll
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // remove event
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    setPageScroll(Math.round(window.pageYOffset));
  }

  // show loading spinner if data is not fetched yet.
  if (!serviceProviderData) return <LoadingSpinner />;

  categories = categories || [];
  menuItems = menuItems || [];

  // Filter out unpublished items.
  menuItems = menuItems.filter((m) => m.status === 1);

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
      <Flex flexDir="column" minH="100vh">
        <GoBack title={provider.name} cart />
        <ProviderBanner {...provider} />
        {/* sticky header */}
        <Tabs
          index={tabIndex}
          onChange={handleTabsChange}
          pb="12"
          flexGrow={2}
          overflow="hidden"
          width="100%"
          size="sm"
        >
          <TabList
            overflowX="scroll"
            width="100%"
            py="3"
            bg={useColorModeValue("#fff", "gray.900")}
            border="none"
            pos={pageScroll > 180 ? "fixed" : ""}
            overflow="overlay"
            top="40px"
            zIndex="1000"
          >
            {Cats}
          </TabList>
          <TabPanels {...swipeHandlers}>
            {Object.keys(TapContent).map((menu, index) => {
              return (
                <TabPanel p={4} key={index} className="food-menu">
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
