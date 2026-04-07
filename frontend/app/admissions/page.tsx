import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AdmissionsHero from "@/components/AdmissionsHero/AdmissionsHero";
import AdmissionProcess from "@/components/AdmissionProcess/AdmissionProcess";
import FeeStructure from "@/components/FeeStructure/FeeStructure";
import ApplicationForm from "@/components/ApplicationForm/ApplicationForm";

export default function AdmissionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <AdmissionsHero />
        <AdmissionProcess />
        <FeeStructure />
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}
