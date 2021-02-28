import React from "react";
import { useRouter } from "next/router";

import { BiMenuAltLeft, BiFoodMenu } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Flex,
  Text,
  Divider,
  Heading,
  IconButton,
  Image,
  List,
  ListItem,
  ListIcon,
  FormLabel,
  Switch,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

function DrawerLeft() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const btnRef = React.useRef();

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}

      <IconButton
        bg="transparent"
        ref={btnRef}
        fontSize="1.5rem"
        color="brand.100"
        onClick={onOpen}
        icon={<BiMenuAltLeft />}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            {/* header */}
            <DrawerHeader borderBottomWidth="1px">
              <Flex w="100%" direction="column">
                <Flex>
                  <Image
                    borderRadius="full"
                    boxSize="30px"
                    src="/kaape-icon.png"
                    alt="Kaape Menu App icon"
                  />
                  <Heading
                    as="h2"
                    textAlign="center"
                    fontSize="xl"
                    flexGrow={2}
                  >
                    Kaape Menu
                  </Heading>
                </Flex>
                <Flex mt="1rem" justify="space-between">
                  <Text fontSize="xs">Mukhtar Mahamed</Text>
                  <Divider orientation="vertical" colorScheme="gray" />
                  <Text fontSize="xs" color="blue.300">
                    13 Orders
                  </Text>
                </Flex>
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <MenuList />

              <Divider orientation="horizontal" my="4rem" colorScheme="gray" />
              {/* switch color mode */}

              <Box display="flex" alignItems="center">
                <FormLabel htmlFor="darkmode" mb="0" fontSize=".8rem">
                  Enable Dark Mode
                </FormLabel>
                <Switch
                  id="darkmode"
                  onChange={toggleColorMode}
                  size="sm"
                  isChecked={colorMode == "dark"}
                />
              </Box>
            </DrawerBody>

            <DrawerFooter justifyContent="center" alignItems="center">
              <Text fontSize="sm" color="gray.400">
                &copy; 2021 -{" "}
                <a href="https://bigiltech.com">Bigil Technologies</a>
              </Text>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

function MenuList() {
  const router = useRouter();
  const MenuPaths = [
    {
      path: "/cart",
      name: "Orders",
      icon: BiFoodMenu,
    },
    {
      path: "/history",
      name: "History",
      icon: BiFoodMenu,
    },
    {
      path: "/setting",
      name: "Setting",
      icon: SettingsIcon,
    },
  ];

  return (
    <List spacing={3}>
      {MenuPaths.map((list) => {
        return (
          <ListItem
            onClick={() => router.push(`${list.path}`)}
            _hover={{
              background: "gray.200",
              color: "teal.500",
              pointer: "pointer",
            }}
            my="1rem"
            py=".5rem"
            px="1rem"
          >
            <ListIcon as={list.icon} color="green.500" />
            {list.name}
          </ListItem>
        );
      })}
    </List>
  );
}
export { DrawerLeft };
