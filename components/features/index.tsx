import { Container, Text, Stack, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function () {
  return (
    <Box>
      <Box bg={"#F8F9FF"}>
        <Container maxW='7xl' centerContent>
          <Text fontSize='3xl' fontWeight='bold'>
            Main Features
          </Text>
          <Text textAlign='center' color='brand.text.secondary' my='10'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            totam, adipisci nam unde cupiditate sit voluptatem nobis eveniet.
            Odit modi magnam iste in distinctio delectus illum cum iure
            perspiciatis praesentium!
          </Text>

          <Stack direction={{ base: "column", lg: "row" }} gap='10' my='10'>
            <Stack alignItems='center' justifyContent='center'>
              <Image
                src='/assets/images/ClockIcon.png'
                width={45}
                height={45}
                layout='fixed'
              />
              <Text fontWeight='bold'>Monitoring 24/7</Text>
              <Text textAlign='center' color='brand.text.secondary'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum ut obcaecati asperiores, unde debitishiera.
              </Text>
            </Stack>
            <Stack alignItems='center' justifyContent='center'>
              <Image
                src='/assets/images/pcIcon.png'
                width={45}
                height={45}
                layout='fixed'
              />
              <Text fontWeight='bold'>Widget System</Text>
              <Text textAlign='center' color='brand.text.secondary'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum ut obcaecati asperiores, unde debitishiera.
              </Text>
            </Stack>
            <Stack alignItems='center' justifyContent='center'>
              <Image
                src='/assets/images/rocketIcon.png'
                width={45}
                height={45}
                layout='fixed'
              />
              <Text fontWeight='bold'>Best Performance</Text>
              <Text textAlign='center' color='brand.text.secondary'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum ut obcaecati asperiores, unde debitishiera.
              </Text>
            </Stack>
          </Stack>

          <Stack
            mt='40'
            w='full'
            direction={{ base: "column", lg: "row-reverse" }}
            gap={{ base: 10, lg: 40 }}
            alignItems='center'
          >
            <Box p='10' bg='white' borderRadius={30} boxShadow='lg'>
              <Image
                src='/assets/images/widget.png'
                width={500}
                height={310}
                layout='fixed'
              />
            </Box>

            <Flex w='100' direction={"column"} justifyContent='start'>
              <Text fontSize='4xl' fontWeight='bold' my='10'>
                Automated Reports and Widget Reports
              </Text>
              <Text color='brand.text.secondary'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                laudantium sed assumenda tenetur esse amet blanditiis velit hic
                quae nobis officia, aliquid accusantium possimus quasi qui sint
                illo et vel!
              </Text>
            </Flex>
          </Stack>
          <Stack
            mt='40'
            w='full'
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 10, lg: 40 }}
            alignItems='center'
          >
            <Box p='10' bg='white' borderRadius={30} boxShadow='lg'>
              <Image
                src='/assets/images/char.png'
                width={500}
                height={310}
                layout='fixed'
              />
            </Box>

            <Flex w='100' direction={"column"} justifyContent='start'>
              <Text fontSize='4xl' fontWeight='bold' my='10'>
                Fully customizable to address your needs
              </Text>
              <Text color='brand.text.secondary'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                laudantium sed assumenda tenetur esse amet blanditiis velit hic
                quae nobis officia, aliquid accusantium possimus quasi qui sint
                illo et vel!
              </Text>
            </Flex>
          </Stack>
          <Stack
            mt='40'
            w='full'
            direction={{ base: "column", lg: "row-reverse" }}
            gap={{ base: 10, lg: 40 }}
            alignItems='center'
          >
            <Box p='10' bg='white' borderRadius={30} boxShadow='lg'>
              <Image
                src='/assets/images/calendar.png'
                width={500}
                height={310}
                layout='fixed'
              />
            </Box>

            <Flex w='100' direction={"column"} justifyContent='start'>
              <Text fontSize='4xl' fontWeight='bold' my='10'>
                Pre-build Dashboard Templates
              </Text>
              <Text color='brand.text.secondary'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                laudantium sed assumenda tenetur esse amet blanditiis velit hic
                quae nobis officia, aliquid accusantium possimus quasi qui sint
                illo et vel!
              </Text>
            </Flex>
          </Stack>
        </Container>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#172755'
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
    </Box>
  );
}
