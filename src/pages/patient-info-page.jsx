import Footer from "@/components/LandingPage/footer";
import PatientInfo from "@/components/PatientPage/patient-info";
import SideDash from "@/components/SideDash/SideDash";

export default function PatientInfoPage () {
  return (
    <div>
      <SideDash />
      <div className="pt-[40px] px-[120px] pb-10">
        <PatientInfo />
      </div>
      <Footer />
    </div>
  );
}
