import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    red: "#EF2A82",
    darkBlue: "#172755",
    blue: "#0088F0",
    chartLines: "#EEEEF7",

    text: {
      secondary: "#8794BA",
      main: "#172755",
    },
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
