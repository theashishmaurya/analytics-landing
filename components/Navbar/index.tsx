import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./desktopNav";

export default function () {
  return (
    <Box w='full'>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        direction={"row"}
        flexGrow={1}
      >
        <Flex alignItems='center' direction='row' gap='2' mr={40}>
          <Box w='full'>
            <Image
              layout='fixed'
              src='/assets/images/logo-1.png'
              alt='logo'
              width={40}
              height={40}
            />
          </Box>

          <Text color='white' fontSize='24px' fontWeight={"bold"}>
            ANALYTICS
          </Text>
        </Flex>
        <DesktopNav />
      </Flex>
    </Box>
  );
}
