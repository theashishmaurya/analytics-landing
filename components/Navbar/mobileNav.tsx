import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function MobileNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Flex justifyContent={"end"}>
        <Button
          ref={btnRef}
          onClick={onOpen}
          bg='transparent'
          aria-label='menu'
        >
          <HiMenuAlt3 size={"40px"} color={"#E5E5E5"} />
        </Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          background={"brand.darkBlue"}
          color={"brand.text.secondary"}
        >
          <DrawerCloseButton />

          <DrawerBody height={"100%"} justifyContent='center'>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              direction={"column"}
            >
              <Spacer my={8} />
              <Link href={"/"}>
                <Text fontSize={"lg"}>Product</Text>
              </Link>
              <Spacer my={8} />
              <Link href={"#Pricing"}>
                <Text fontSize={"lg"}>Pricing</Text>
              </Link>
              <Spacer my={8} />
              <Link href={"/"}>
                <Text fontSize={"lg"}>FAQ</Text>
              </Link>
              <Spacer my={8} />

              <Link href={"/"}>
                <Text fontSize={"lg"}>Blog</Text>
              </Link>
              <Spacer my={8} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
