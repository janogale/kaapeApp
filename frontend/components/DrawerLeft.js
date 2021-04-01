import React from "react";
import { useRouter } from "next/router";

// Authentication hooks
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from "../src/authConfig";

import { BiMenuAltLeft, BiFoodMenu } from "react-icons/bi";

// context
import { useAppState } from "../context/AppProvider";

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
  useColorModeValue,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

function DrawerLeft() {
  const [state, dispatch] = useAppState();
  // msal
  const isAuthenticated = useIsAuthenticated();
  const { accounts } = useMsal();
  const [name, setName] = React.useState(null);

  // drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const btnRef = React.useRef();

  // signin button
  const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {
      if (loginType === "popup") {
        instance.loginPopup(loginRequest);
      } else if (loginType === "redirect") {
        instance.loginRedirect(loginRequest);
      }
    };

    return (
      <Button
        size="xs"
        variant="outline"
        onClick={() => handleLogin("popup")}
        key="loginPopup"
      >
        Sign in
      </Button>
    );
  };

  // signin button
  const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = () => {
      instance.logout();
      dispatch({
        type: "signout",
        payload: {
          account: {
            isloggedIn: false,
            name: null,
          },
        },
      });
    };

    return (
      <Button size="xs" variant="outline" onClick={handleLogout}>
        Sign out
      </Button>
    );
  };

  React.useEffect(() => {
    if (accounts.length > 0) {
      let fname = accounts[0].idTokenClaims?.given_name || "";
      let lname = accounts[0].idTokenClaims?.family_name || "";
      setName(fname + " " + lname);
      dispatch({
        type: "signin",
        payload: {
          account: {
            isloggedIn: true,
            name: fname + " " + lname,
          },
        },
      });
    }
  }, [accounts]);

  return (
    <>
      <IconButton
        bg="transparent"
        ref={btnRef}
        fontSize="1.5rem"
        color="white"
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
          <DrawerContent color={useColorModeValue("gray.500", "gray.300")}>
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
                    fontSize="lg"
                    flexGrow={2}
                  >
                    Kaabe Digital Waiter
                  </Heading>
                </Flex>
                <Flex mt="1rem" justify="space-between">
                  {isAuthenticated ? (
                    <>
                      <Text fontSize="xs">{name}</Text>
                      <SignOutButton />
                    </>
                  ) : (
                    <SignInButton />
                  )}
                  <Divider orientation="vertical" colorScheme="gray" />
                  <Text fontSize="xs" color="green.300">
                    13 Orders
                  </Text>
                </Flex>
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              {/* menu */}
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
              cursor: "pointer",
            }}
            my="1rem"
            py=".5rem"
            px="1rem"
          >
            <ListIcon as={list.icon} color="green.600" />
            {list.name}
          </ListItem>
        );
      })}
    </List>
  );
}
export { DrawerLeft };
