import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopNav from "./desktopNav";
import MobileNavbar from "./mobileNav";

export default function () {
  const [width, setWidth] = useState<number>(0);

  const [isMobile, setIsMobile] = useState<boolean>(
    width < 1024 ? true : false
  );
  useEffect(() => {
    setWidth(window.innerWidth);
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    const handelResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handelResize);

    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, [isMobile]);

  return (
    <Box w='full'>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        direction={"row"}
        flexGrow={1}
      >
        <Flex
          alignItems='center'
          direction='row'
          gap='2'
          mr={{ base: 0, lg: 40 }}
        >
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
        {isMobile ? <MobileNavbar /> : <DesktopNav />}
      </Flex>
    </Box>
  );
}
