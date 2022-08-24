import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function DesktopNav() {
  return (
    <Flex w={"full"}>
      <Stack
        direction='row'
        gap={10}
        alignItems='center'
        flexGrow={1}
        color='brand.text.secondary'
      >
        <Link href={"/"}>
          <Text fontSize={"lg"}>Products</Text>
        </Link>
        <Link href={"#Pricing"}>
          <Text fontSize={"lg"}>Pricing</Text>
        </Link>
        <Link href={"/"}>
          <Text fontSize={"lg"}>FAQ</Text>
        </Link>
        <Link href={"/"}>
          <Text fontSize={"lg"}>Blog</Text>
        </Link>
      </Stack>

      <Stack direction='row' gap={2} color='brand.text.secondary'>
        <Button variant='ghost'>Singup</Button>
        <Button variant='outline'>Login</Button>
      </Stack>
    </Flex>
  );
}
