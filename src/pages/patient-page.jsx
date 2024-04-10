import Footer from "@/components/LandingPage/footer";
import PatientHero from "@/components/PatientPage/patient-hero";
import Navbar from "@/components/navbar";

export default function PatientPage () {
  return (
    <div>
      <Navbar />
      <div className="pt-[40px] px-[120px] pb-10">
        <PatientHero />
      </div>
      <Footer />
    </div>
  );
}
