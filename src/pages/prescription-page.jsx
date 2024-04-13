
import Footer from '@/components/LandingPage/footer';
import PrescriptionForm from '@/components/PrescriptionForm/PrescriptionForm';
import SideDash from '@/components/SideDash/SideDash';
export default function PrescriptionPage () {
  return (
    <div>
      <SideDash />
      <div className="pt-[40px] px-[120px] pb-10">
        <PrescriptionForm />
      </div>
      <Footer />
    </div>
  );
}
