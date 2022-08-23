import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Features from "../components/features";
import Footer from "../components/footer";
import HeroArea from "../components/heroArea";
import MobileNavbar from "../components/Navbar/mobileNav";
import Pricing from "../components/pricing";

//
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Advance Analytics</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Box color={"brand.text.main"} bg={"brand.darkBlue"} w='100%'>
          <HeroArea />
          <Features />
          <Pricing />
          <Footer />
        </Box>
      </main>
    </>
  );
};

export default Home;
