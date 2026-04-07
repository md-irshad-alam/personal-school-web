import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AcademicsHero from "@/components/AcademicsHero/AcademicsHero";
import CurriculumFeatures from "@/components/CurriculumFeatures/CurriculumFeatures";
import LearningJourney from "@/components/LearningJourney/LearningJourney";
import BeyondTextbooks from "@/components/BeyondTextbooks/BeyondTextbooks";

export default function AcademicsPage() {
  return (
    <>
      <Navbar />
      <main>
        <AcademicsHero />
        <CurriculumFeatures />
        <LearningJourney />
        <BeyondTextbooks />
      </main>
      <Footer />
    </>
  );
}
