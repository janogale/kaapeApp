import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function MenuCatagories() {
  return (
    <Tabs>
      <TabList>
        <Tab>Main Dishes</Tab>
        <Tab>Hot Drinks</Tab>
        <Tab>Cold Drinks</Tab>
        <Tab>Cold Drinks</Tab>
        <Tab>Cold Drinks</Tab>
        <Tab>Cold Drinks</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>Main Dishes</p>
        </TabPanel>
        <TabPanel>
          <p>Main Dishes</p>
        </TabPanel>{" "}
        <TabPanel>
          <p>Main Dishes</p>
        </TabPanel>{" "}
        <TabPanel>
          <p>Main Dishes</p>
        </TabPanel>
        <TabPanel>
          <p>Hot Drinks!</p>
        </TabPanel>
        <TabPanel>
          <p>Cold Drinks</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
