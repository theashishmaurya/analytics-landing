import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  buttonLink: string;
  color: "Light" | "Dark";
}

export default function PricingCard(props: PricingCardProps) {
  let selectedColor = props.color === "Light" ? "#ffffff" : "#0F1F4B";
  let color = props.color === "Light" ? "#000000" : "#ffffff";
  return (
    <Box minW='300' minH='440' bg={selectedColor} borderRadius='30px' p='10'>
      <Box>
        <Flex
          justifyContent={"center"}
          direction='column'
          alignItems='center'
          h='full'
          w='full'
        >
          <Text fontSize='2xl' fontWeight='bold' color={color}>
            {props.title}
          </Text>
          <Text my='2'>{props.description}</Text>
          <Divider my='10' />

          <Flex alignItems='end' fontWeight='bold' color={color}>
            <Text>$</Text>
            <Text fontSize='5xl' my='-3' py='0'>
              {props.price}
            </Text>
          </Flex>
          <Text my='2'>Per Month</Text>

          <Button
            variant='outline'
            borderRadius='68'
            position='relative'
            minW='100'
            bg={props.color == "Light" ? "brand.red" : ""}
            color='#ffffff'
            top='10'
          >
            Order
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
