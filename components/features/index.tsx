import { Container, Text, Stack, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function () {
  return (
    <Box>
      <Container maxW='7xl' centerContent>
        <Text fontSize='3xl' fontWeight='bold'>
          Main Features
        </Text>
        <Text textAlign='center' color='brand.secondary' my='10'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae totam,
          adipisci nam unde cupiditate sit voluptatem nobis eveniet. Odit modi
          magnam iste in distinctio delectus illum cum iure perspiciatis
          praesentium!
        </Text>

        <Stack direction='row' gap='10' my='10'>
          <Stack alignItems='center' justifyContent='center'>
            <Image
              src='/assets/images/ClockIcon.png'
              width={45}
              height={45}
              layout='fixed'
            />
            <Text fontWeight='bold'>Monitoring 24/7</Text>
            <Text textAlign='center'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              ut obcaecati asperiores, unde debitishiera.
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
            <Text textAlign='center'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              ut obcaecati asperiores, unde debitishiera.
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
            <Text textAlign='center'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              ut obcaecati asperiores, unde debitishiera.
            </Text>
          </Stack>
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
  );
}
