import { Box, Stack, Text, Container } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Image from "next/image";

export default function () {
  return (
    <Box>
      <Box bg={"brand.darkBlue"} minH={"50vh"} paddingY='9' margin={0}>
        <Container maxW='7xl' centerContent>
          <Navbar />

          <Box w='full' mt='32'>
            <Stack
              direction='column'
              w='35%'
              h='30vh'
              alignItems='center'
              justify='center'
            >
              <Text fontSize='4xl' fontWeight='bold' color='#ffffff'>
                Monitor Your buisness on real-time dashboard
              </Text>
              <Text color='brand.text.secondary'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci non dignissimos aliquam libero, recusandae molestiae
                quaerat quam placeat quo eligendi repudiandae! Nesciunt eos
                doloribus placeat harum, itaque quod labore amet!
              </Text>

              <Box position='absolute' right='0' top={220} zIndex={9}>
                <Image
                  src='/assets/images/hero-1.png'
                  width={600}
                  height={500}
                  alt='cover'
                  layout='fixed'
                />
              </Box>
              <Box
                position='absolute'
                right='300'
                top='300'
                p='10'
                bg='white'
                zIndex={10}
                borderRadius={32}
              >
                <Image
                  src='/assets/images/hero-2.png'
                  width={361 / 1.5}
                  height={246 / 1.5}
                  alt='cover'
                  layout='fixed'
                />
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#F8F9FF'
          fill-opacity='1'
          d='M0,224L1440,96L1440,320L0,320Z'
        ></path>
        <polyline
          strokeWidth={"15px "}
          stroke='#EF2A82'
          fill='#172755'
          points='0,220 1400,100 1440,96 0'
        />
      </svg>
    </Box>
  );
}
