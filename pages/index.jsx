import Head from "next/head";
import AboutEvent from "../components/AboutEvent/Index";
import AboutUs from "../components/AboutUs/Index";
import Agenda from "../components/Agenda/Index";
import Footer from "../components/Footer/Index";
import Hero from "../components/Hero/Index";
import OurPartners from "../components/OurPartners/Index";
import OurSpeakers from "../components/OurSpeakers/Index";
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
        <AboutUs />
        <OurPartners />
        <OurSpeakers/>
        <TheyTrustedUs />
        <Agenda />
      </main>
      <Footer />
    </>
  );
}
