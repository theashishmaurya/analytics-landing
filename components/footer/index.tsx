import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <Box color='#ffffff' minH='200'>
      <Container maxW='7xl'>
        <Divider color='#2A407C' />

        <Flex
          justifyContent='space-between'
          py='20'
          alignItems='center'
          direction={{ base: "column", lg: "row" }}
          gap={{ base: "10", lg: "0" }}
        >
          <Flex alignItems='center' direction='row' gap='2'>
            <Box w='full'>
              <Image
                layout='fixed'
                src='/assets/images/logo-2.png'
                alt='logo'
                width={30}
                height={30}
              />
            </Box>

            <Text
              color='brand.text.secondary'
              fontSize='18px'
              fontWeight={"bold"}
            >
              ANALYTICS
            </Text>
          </Flex>

          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={10}
            alignItems='center'
            justifyContent='start'
            color='brand.text.secondary'
          >
            <Link href={"#Product"}>
              <Button variant='link' fontSize={"md"}>
                Products
              </Button>
            </Link>
            <Link href={"#Pricing"}>
              <Button variant='link' fontSize={"md"}>
                Pricing
              </Button>
            </Link>
            <Link href={"#FAQ"}>
              <Button variant='link' fontSize={"md"}>
                FAQ
              </Button>
            </Link>
            <Link href={"#Blog"}>
              <Button variant='link' fontSize={"md"}>
                Blog
              </Button>
            </Link>
          </Stack>
          <Stack direction='row' gap='10'>
            <Image
              src='/assets/images/facebook.png'
              width={10}
              height={20}
              layout='fixed'
              alt='facebook'
            />
            <Image
              src='/assets/images/twitter.png'
              width={24}
              height={20}
              layout='fixed'
              alt='twitter'
            />
            <Image
              src='/assets/images/instagram.png'
              width={20}
              height={20}
              layout='fixed'
              alt='instagram'
            />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
