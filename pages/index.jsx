import Head from "next/head";
import AboutEvent from "../components/AboutEvent/Index";
import AboutUs from "../components/AboutUs/Index";
import EventLocation from "../components/EventLocation/Index";
import Footer from "../components/Footer/Index";
import Hero from "../components/Hero/Index";
import OurSpeakers from "../components/OurSpeakers/Index";
import Schedule from "../components/Schedule/Index";
import TheyTrustedUs from "../components/TheyTrustedUs/Index";
export default function Home() {
  return (
    <>
      <Head>
        <title>AIgnite</title>
        <meta name="description" content="AIgnite Technical Events to remember forever" />
        <link rel="shortcut icon" href="/qiskit.png" />
      </Head>

      <Hero />
      <main className="font-IBM-Plex">
        <AboutEvent />
        <EventLocation />
        <AboutUs />
        <OurSpeakers/>
        <TheyTrustedUs />
        <Schedule />
      </main>
      <Footer />
    </>
  );
}
