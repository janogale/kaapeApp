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
  const [result, setResult] = React.useState(null);
  const [qrData, setQrData] = React.useState(null);
  const [isActiveCam, setIsActiveCam] = React.useState(true);
  const [camera, switchCamera] = React.useState("environment");
  const router = useRouter();

  React.useEffect(function () {
    if (qrData) {
      router.push("/sp/a4337c7a-68b2-45f8-827d-8e4389d5eb51");
    }
  });

  const handleScan = (data) => {
    setResult(data);
    if (data) {
      setQrData(data);
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
            <Stack spacing={12} px="5">
              <Text fontSize="sm" textAlign="center">
                Please Enter the Code
              </Text>
              <Input
                placeholder="type code"
                errorBorderColor="red.300"
                size="lg"
                borderColor="red.300"
                textAlign="center"
              />
              <Box></Box>
              <Button
                variant="outline"
                width="100%"
                border="1px"
                borderColor="brand.200"
              >
                Scan Menu
              </Button>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default QrCodeReader;
