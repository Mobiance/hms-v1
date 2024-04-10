import Footer from "@/components/LandingPage/footer";
import PatientInfo from "@/components/PatientPage/patient-info";
import Navbar from "@/components/navbar";

export default function PatientInfoPage () {
  return (
    <div>
      <Navbar />
      <div className="pt-[40px] px-[120px] pb-10">
        <PatientInfo />
      </div>
      <Footer />
    </div>
  );
}
