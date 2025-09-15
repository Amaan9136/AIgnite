import Head from "next/head";
import AboutEvent from "../components/AboutEvent/Index";
import AboutJury from "../components/AboutJury/Index";
import AboutMentors from "../components/AboutMentors/Index";
import ContactUs from "../components/ContactUs/Index";
import EventLocation from "../components/EventLocation/Index";
import Footer from "../components/Footer/Index";
import Hero from "../components/Hero/Index";
import Places from "../components/Places/Index";
import Schedule from "../components/Schedule/Index";
import TheyTrustedUs from "../components/TheyTrustedUs/Index";
import NeonGlowEffect from "../components/helpers/NeonGlowEffect";
import Memories from "../components/Memories";

export default function Home() {
  return (
    <>
  <NeonGlowEffect /> 
      <Head>
        <title>AIgnite</title>
        <meta name="description" content="AIgnite Technical Event by AIT AIML Chikmagalur" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <main className="font-IBM-Plex">
      
       
  <AboutEvent />
  <ContactUs />
        <Memories />
        <Places />
        <EventLocation />
        <Schedule />
        <AboutJury />
        <AboutMentors />
        {/* <TheyTrustedUs /> */}
      </main>
      
      <Footer />
      {/* <h1 className="text-center text-4xl">Temporarily Disabled</h1>
      <p className="text-center text-lg">469 | May take time to resolve.</p> */}
    </>
  );
}
