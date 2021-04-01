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
  const { accounts, inProgress, instance } = useMsal();
  const [name, setName] = React.useState(null);
  const [accessToken, setAcessToken] = React.useState(null);

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

  React.useEffect(() => {
    if (inProgress === "none" && accounts.length > 0) {
      // Retrieve an access token
      instance
        .acquireTokenSilent({
          account: accounts[0],
          scopes: [
            "openid",
            "profile",
            "offline_access",
            "https://kaabeapp.onmicrosoft.com/24eee6ed-1a3a-4bb7-8c5b-36b49f9c4d19/Kaabe.Api",
          ],
        })
        .then((response) => {
          if (response.accessToken) {
            // set access token
            setAcessToken(response.accessToken);

            return response.accessToken;
          }
          return null;
        });
    }
  }, [inProgress, accounts, instance]);

  if (inProgress === "login") {
    // Render loading component
  } else if (accessToken) {
    // Call your api and render component
    // console.log(accessToken)
    accessToken;
  }

  return (
    <>
      <IconButton
        _hover={{ background: "transparent" }}
        _active={{ background: "transparent" }}
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
                    alt="Kaabe Digital Waiter"
                  />
                  <Heading
                    as="h2"
                    textAlign="center"
                    fontSize="md"
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
            key={list.path}
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
