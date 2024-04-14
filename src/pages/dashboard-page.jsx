import Dashboard from "@/components/Dashboard/Dashboard";
import Footer from "@/components/LandingPage/footer";
import SideDash from "@/components/SideDash/SideDash";

export default function DashboardPage () {
  return (
    <div>
      <SideDash />
      <div className="pt-[40px] px-[120px] pb-10">
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}
