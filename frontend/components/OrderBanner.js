import React from "react";
import { useRouter } from "next/router";

// Authentication hooks
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from "../src/authConfig";

// chakra
import {
  chakra,
  Flex,
  Text,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  FormControl,
  Textarea,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";

// Icons
import { RiSendPlane2Line } from "react-icons/ri";

// utils
import { formatCurrency } from "../utils";

// context
import { useAppState } from "../context/AppProvider";

function OrderBanner() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useAppState();

  // total order price
  const totalPrice = state.cart.reduce(
    (acc, item) => acc + item.saleUnitPrice * item.amount,
    0
  );

  return (
    <Flex
      color="gray.100"
      justify="space-around"
      align="center"
      width="100%"
      flexShrink={1}
    >
      <Button
        onClick={onOpen}
        rounded="none"
        colorScheme="brand"
        width="100%"
        fontSize="lg"
        rightIcon={<RiSendPlane2Line />}
        _hover={{
          color: "brand.400",
          bg: "gray.300",
        }}
      >
        Place Order{" "}
        <chakra.small ml="3" fontWeight="thin" fontSize="xs" mb="-2">
          {state.currencySign}
        </chakra.small>
        <chakra.span ml="1">{formatCurrency(totalPrice)}</chakra.span>
      </Button>
      <ConfirmOrder isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Flex>
  );
}

function ConfirmOrder({ isOpen, onOpen, onClose }) {
  // msal
  const isAuthenticated = useIsAuthenticated();
  const { accounts, instance, inProgress } = useMsal();
  const [userAccount, setUserAccount] = React.useState(null);

  // state management
  const [state, dispatch] = useAppState();
  const [additionalInfo, setAdditionalInfo] = React.useState("");
  const [status, setStatus] = React.useState(null);
  const [accessToken, setAcessToken] = React.useState(null);

  const router = useRouter();

  const baseUrl = window.location.origin;
  const spId = JSON.parse(window.sessionStorage.getItem("spId"));

  // handle login
  const handleLogin = (loginType) => {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest);
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest);
    }
  };

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
    //console.log(accessToken);
    accessToken;
  }

  React.useEffect(() => {
    if (accounts.length > 0) {
      let fname = accounts[0].idTokenClaims?.given_name || "";
      let lname = accounts[0].idTokenClaims?.family_name || "";
      setUserAccount(fname + " " + lname);
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

  // handle order submit
  const handleSubmit = async function () {
    setStatus("pending");

    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: new Headers({
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        spId: spId,
        tableNumber: router.query.tn || "",
        additionalInfo: additionalInfo,
        orderRows: JSON.stringify(state.cart),
        status: 1, // In-queue.
      }),
    };

    // send order data
    const result = await fetch(`${baseUrl}/api/orders`, requestOptions);

    const data = await result.json();

    //  order is success
    if (data?.guid) {
      // save order id to that state
      dispatch({
        type: "setOrderId",
        payload: { orderId: data.guid, accessToken: accessToken },
      });
      setStatus("done");
      router.push(`/cart/success?orderId=${data.guid}`);
    }
  };

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={3}>
            <FormControl>
              <FormLabel fontSize="sm">Add additional Information</FormLabel>
              <Textarea
                borderColor="brand.100"
                size="sm"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                placeholder="Add additional Information"
                variant="outline"
                colorScheme="gray"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent="space-around">
            {userAccount && (
              <Box>
                <Text fontSize="xs">Logged in as</Text>
                <Text fontSize="0.6rem" fontWeight="bold">
                  {userAccount}
                </Text>
              </Box>
            )}
            {status ? (
              <Box
                width="120px"
                bg="brand.500"
                py="0.18rem"
                borderRadius="5px"
                textAlign="center"
              >
                <Spinner color="green.300" size="lg" />
              </Box>
            ) : isAuthenticated ? (
              <Button
                width="120px"
                onClick={handleSubmit}
                colorScheme="red"
                size="sm"
                mr={3}
              >
                Order Now
              </Button>
            ) : (
              <Button
                width="160px"
                onClick={() => handleLogin("popup")}
                key="loginPopup"
                colorScheme="red"
                variant="outline"
                size="sm"
                mr={3}
              >
                Sign in to Order
              </Button>
            )}

            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default OrderBanner;
