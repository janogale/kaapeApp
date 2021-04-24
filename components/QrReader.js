import React from "react";
import Link from "next/link";
import QrReader from "modern-react-qr-reader";
import { useRouter } from "next/router";
import {
  chakra,
  Flex,
  Icon,
  Text,
  Box,
  Stack,
  VStack,
  Input,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
} from "@chakra-ui/react";
import { RiCameraSwitchLine, RiCameraSwitchFill } from "react-icons/ri";
import { AiOutlineQrcode, AiFillFileText } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";

function QrCodeReader(props) {
  const [qrData, setQrData] = React.useState(null);
  const [isActiveCam, setIsActiveCam] = React.useState(true);
  const [camera, switchCamera] = React.useState("environment");
  const router = useRouter();

  React.useEffect(
    function () {
      if (qrData) {
        // make vibration
        window.navigator.vibrate([200, 100, 200]);

        // go to matched url
        router.push(qrData);
      }
    },
    [qrData]
  );

  const handleScan = (data) => {
    if (data === null) return;
    if (qrData !== null) return;

    const parsedUrl = new URL(data);

    // check if the URL is valid
    if (
      parsedUrl.pathname.includes("sp") &&
      parsedUrl.origin === window.location.origin
    ) {
      // route to the matched url.
      const path = parsedUrl.pathname;
      const searchParams = parsedUrl.search;

      setQrData(`${path}${searchParams}`);
    } else {
      console.log("url not matched");
      console.log(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleSwitchCamera = () => {
    switchCamera(camera == "environment" ? "user" : "environment");
  };

  const CameraSwitchIcon =
    camera == "environment" ? RiCameraSwitchLine : RiCameraSwitchFill;

  const previewStyle = {
    width: "100%",
    marginTop: "10%",
  };

  return (
    <Flex
      direction="column"
      mx="auto"
      position="relative"
      minH="100vh"
      width="100%"
    >
      <Flex
        color="brand.500"
        justify="space-between"
        align="center"
        py="2"
        px="6"
        borderBottom="2px"
        borderColor="brand.100"
      >
        <Link href="/">
          <a>
            <Icon borderRadius="100%" as={IoMdArrowBack} w={5} h={5} />
          </a>
        </Link>
        <Text>Scan Or Type</Text>
        <Icon
          bg="transparent"
          onClick={handleSwitchCamera}
          as={CameraSwitchIcon}
          w={5}
          h={5}
        />
      </Flex>
      <Tabs isFitted mt="2">
        <TabList>
          <Tab
            _selected={{ color: "brand.500", borderColor: "currentColor" }}
            onClick={() => setIsActiveCam(true)}
          >
            <VStack>
              <Icon as={AiOutlineQrcode} w={6} h={6} />
              <Text>Scan</Text>
            </VStack>
          </Tab>
          <Tab
            _selected={{ color: "brand.500", borderColor: "currentColor" }}
            onClick={() => setIsActiveCam(false)}
          >
            <VStack>
              <Icon as={AiFillFileText} w={6} h={6} />
              <Text>Type</Text>
            </VStack>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {isActiveCam && (
              <VStack spacing="12">
                <QrReader
                  delay={2000}
                  style={previewStyle}
                  onError={handleError}
                  onScan={handleScan}
                  facingMode={camera}
                />

                <VStack textAlign="center" spacing="4">
                  <Text>Scan QR-code on the table to browse menu and place an order</Text>
                  <chakra.small>
                    Hold the camera on the QR-code for 3 seconds and menu will be automatically displayed
                  </chakra.small>
                </VStack>
              </VStack>
            )}
          </TabPanel>
          <TabPanel>
            <Stack spacing={12} px="12">
              <TypeCodeBox />
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

function TypeCodeBox() {
  const [code, setCode] = React.useState("");
  const [location, setLocation] = React.useState("");
  const router = useRouter();
  const toast = useToast();
  const handleSubmit = () => {
    if (!code) {
      // inform user to type code
      toast({
        title: "Code is Required",
        description: "Please Type Restaurant Code.",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    if (typeof code !== "string" && code.length < 3) return;

    router.push(`/sp/${code.toUpperCase()}?location=${location}`);
  };

  return (
    <>
      <Text mt="4" fontSize="xs" textAlign="center">
        Enter Restaurant Code & Your Location or Table Number.
      </Text>
      <Box fontSize="2" color="brand.500">
        <Input
          mb="8"
          required
          placeholder="Type Restaurant Code"
          colorScheme="brand"
          errorBorderColor="red.300"
          onChange={(e) => setCode(e.target.value)}
          onKeyPress={(e) => {
            if (e.code === "Enter") {
              handleSubmit();
            }
          }}
          value={code}
          size="lg"
          fontWeight="bold"
          letterSpacing="wide"
          borderColor="red.300"
          textAlign="center"
          textTransform="uppercase"
        />

        <Input
          placeholder="Your Location or table number"
          errorBorderColor="red.300"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          size="md"
          borderColor="red.300"
          textAlign="center"
        />
      </Box>
      <Box></Box>
      <Button
        variant="outline"
        onClick={handleSubmit}
        width="100%"
        border="1px"
        bg="green.500"
        color="gray.100"
      >
        OK
      </Button>
    </>
  );
}

export default QrCodeReader;
