import Head from "next/head";
import AboutEvent from "../components/AboutEvent/Index";
import AboutJury from "../components/AboutJury/Index";
import AboutMentors from "../components/AboutMentors/Index";
import EventLocation from "../components/EventLocation/Index";
import Footer from "../components/Footer/Index";
import Hero from "../components/Hero/Index";
import OurSpeakers from "../components/OurSpeakers/Index";
import Places from "../components/Places/Index";
import Schedule from "../components/Schedule/Index";
import TheyTrustedUs from "../components/TheyTrustedUs/Index";
export default function Home() {
  return (
    <>
      <Head>
        <title>AIgnite</title>
        <meta name="description" content="AIgnite Technical Event by AIT AIML Chikmagalur" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <main className="font-IBM-Plex">
        <AboutEvent />
        <Places />
        <EventLocation />
        <Schedule />
        <AboutJury />
        <AboutMentors />
        <TheyTrustedUs />
        <OurSpeakers/>
      </main>
      <Footer />
    </>
  );
}
