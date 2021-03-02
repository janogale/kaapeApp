import React from "react";
import Link from "next/link";
import QrReader from "react-qr-reader";
import { useRouter } from "next/router";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { RiCameraSwitchLine, RiCameraSwitchFill } from "react-icons/ri";
import { IoMdArrowBack } from "react-icons/io";

function QrCodeReader(props) {
  const [result, setResult] = React.useState(null);
  const [qrData, setQrData] = React.useState(null);
  const [camera, switchCamera] = React.useState("environment");
  const router = useRouter();

  React.useEffect(function () {
    if (qrData) {
      router.push("/sp/100");
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
    <Flex direction="column" mx="auto" position="relative" width="100%">
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
      <QrReader
        delay={500}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        facingMode={camera}
      />
      <Flex
        direction="column"
        boxShadow="sm"
        py="2"
        align="center"
        position="relative"
        zIndex={100}
      ></Flex>
      <Flex
        boxShadow="sm"
        direction="column"
        py="2"
        mt="4"
        align="center"
        position="relative"
        zIndex={100}
      >
        <Text color="brand.300" fontSize="xs">
          Type Code
        </Text>
        <Text color="brand.400" fontSize="xs" mt="2">
          to Browse Menu
        </Text>
      </Flex>
    </Flex>
  );
}

export default QrCodeReader;
