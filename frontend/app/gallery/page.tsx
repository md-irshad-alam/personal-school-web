import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import GalleryHeader from "@/components/GalleryHeader/GalleryHeader";
import GalleryGrid from "@/components/GalleryGrid/GalleryGrid";
import CampusTourCTA from "@/components/CampusTourCTA/CampusTourCTA";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <GalleryHeader />
        <GalleryGrid />
        <CampusTourCTA />
      </main>
      <Footer />
    </>
  );
}
