
import SideDash from '@/components/SideDash/SideDash';

import Footer from '@/components/LandingPage/footer';
import AppointmentList from '@/components/AppointmentList/AppointmentList';
export default function AppointmentPage () {
  return (
    <div>
      <SideDash />
      <div className="pt-[40px] px-[120px] pb-10">
        <AppointmentList />
      </div>
      <Footer />
    </div>
  );
}
