import Navbar from "@/components/Navbar/Navbar";
import AboutHero from "@/components/AboutHero/AboutHero";
import Philosophy from "@/components/Philosophy/Philosophy";
import Leadership from "@/components/Leadership/Leadership";
import Infrastructure from "@/components/Infrastructure/Infrastructure";
import AboutCTA from "@/components/AboutCTA/AboutCTA";
import Footer from "@/components/Footer/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <Philosophy />
        <Leadership />
        <Infrastructure />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
