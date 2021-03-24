import React from "react";
import Link from "next/link";
import QrReader from "react-qr-reader";
import { useRouter } from "next/router";
import {
  Flex,
  Icon,
  Text,
  Box,
  Stack,
  Input,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { RiCameraSwitchLine, RiCameraSwitchFill } from "react-icons/ri";
import { IoMdArrowBack } from "react-icons/io";

function QrCodeReader(props) {
  const [qrData, setQrData] = React.useState(null);
  const [isActiveCam, setIsActiveCam] = React.useState(true);
  const [camera, switchCamera] = React.useState("environment");
  const router = useRouter();

  React.useEffect(
    function () {
      if (qrData) {
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
        <Text>Scan Menu to Order</Text>
        <Icon
          bg="transparent"
          onClick={handleSwitchCamera}
          as={CameraSwitchIcon}
          w={5}
          h={5}
        />
      </Flex>
      <Tabs isFitted>
        <TabList>
          <Tab onClick={() => setIsActiveCam(true)}>Scan Code</Tab>
          <Tab onClick={() => setIsActiveCam(false)}>Type Code</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {isActiveCam && (
              <QrReader
                delay={500}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
                facingMode={camera}
              />
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

  const handleSubmit = () => {
    if (!code) return;

    if (typeof code !== "string" && code.length < 3) return;

    router.push(`/sp/${code.toUpperCase()}?location=${location}`);
  };

  return (
    <>
      <Text fontSize="sm" textAlign="center">
        Please Enter the Code & location
      </Text>
      <Input
        placeholder="type code"
        errorBorderColor="red.300"
        onChange={(e) => setCode(e.target.value)}
        value={code}
        autoCapitalize
        size="lg"
        borderColor="red.300"
        textAlign="center"
      />

      <Input
        placeholder="type location"
        errorBorderColor="red.300"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        autoCapitalize
        size="md"
        borderColor="red.300"
        textAlign="center"
      />
      <Box></Box>
      <Button
        variant="outline"
        onClick={handleSubmit}
        width="100%"
        border="1px"
        borderColor="brand.200"
      >
        Scan Menu
      </Button>
    </>
  );
}

export default QrCodeReader;
