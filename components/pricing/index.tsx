import { Box, Container, Divider, Stack, Text } from "@chakra-ui/react";
import PricingCard from "./pricingCard";

export default function () {
  return (
    <Box bg='brand.darkBlue' w={"full"} id='Pricing'>
      <Container maxW='7xl' centerContent color='brand.text.secondary'>
        <Text fontWeight='bold' fontSize='4xl' my='10' color='white'>
          Pricing Plans
        </Text>
        <Text textAlign='center'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          necessitatibus sit, deserunt fugiat corporis dolorem quo ut magnam
          quibusdam eos illo iusto assumenda ab doloremque animi ducimus magni
          tempora officiis!
        </Text>

        <Stack my='10' direction={{ base: "column", lg: "row" }} gap={10}>
          <PricingCard
            title='Starter'
            price='29'
            description='up to 3 users'
            buttonLink='/'
            color='Dark'
          />
          <PricingCard
            title='Standard'
            price='99'
            description='up to 20 users'
            buttonLink='/'
            color='Light'
          />
          <PricingCard
            title='Premium'
            price='299'
            description='up to 200 users'
            buttonLink='/'
            color='Dark'
          />
        </Stack>
      </Container>
    </Box>
  );
}
