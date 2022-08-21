import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Features from "../components/features";
import HeroArea from "../components/heroArea";
import MobileNavbar from "../components/Navbar/mobileNav";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Advance Analytics</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Box color={"brand.text.main"} bg={"#E5E5E5"}>
          <HeroArea />
          <Features />
        </Box>
      </main>
    </div>
  );
};

export default Home;
