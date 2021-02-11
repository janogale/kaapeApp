import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import {
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
  Input,
  Heading,
  Icon,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

function DrawerLeft() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}
      <Icon ref={btnRef} onClick={onOpen} as={BiMenuAltLeft} w={8} h={8} />
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
                    src="./kaape-icon.png"
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
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export { DrawerLeft };
