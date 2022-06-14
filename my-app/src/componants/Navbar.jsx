import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { RiVipCrownFill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Container maxWidth="100%" h={90} background="#0F0617">
      <Flex marginLeft="10" justifyContent="space-between" align="center">
        <HStack marginTop="5">
          <Box boxSize={46}>
            <Image src="https://seeklogo.com/images/Z/zee5-logo-A4464FCB2C-seeklogo.com.png" />
          </Box>
          <Flex marginLeft="5" gap="20px" justifyContent="space-around">
            <Breadcrumb color="white" separator=" ">
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">TV Shows</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Movies</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Web Series</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">News</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#"></BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
        </HStack>
        <HStack>
          <Box>
            <Flex gap={5} align={"center"} justifyContent="space-between">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon w={5} h={5} color="white" />}
                />
                <Input
                  type="search"
                  w={300}
                  color="white"
                  borderRadius={5}
                  size={"sm"}
                  placeholder="Search for Movies, Shows etc"
                />
              </InputGroup>{" "}
              <Button size="sm" color="white" variant="outline">
                LOGIN
              </Button>
              <Button
                size="sm"
                w={150}
                colorScheme="purple"
                leftIcon={<Icon as={RiVipCrownFill} />}
              >
                BUY PLAN
              </Button>
              <>
                <Button
                  size="sm"
                  ref={btnRef}
                  onClick={onOpen}
                  colorScheme="none"
                  leftIcon={
                    <Icon color={"white"} w={30} h={30} as={AiOutlineMenu} />
                  }
                ></Button>

                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                      <Input placeholder="Type here..." />
                    </DrawerBody>

                    <DrawerFooter>
                      <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button colorScheme="blue">Save</Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </>
            </Flex>
          </Box>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
