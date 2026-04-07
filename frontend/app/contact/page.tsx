import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactHero from "@/components/ContactHero/ContactHero";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import ContactMap from "@/components/ContactMap/ContactMap";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}
