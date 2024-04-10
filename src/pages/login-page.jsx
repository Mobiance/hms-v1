import Login from '@/components/LoginPage/login';
import Navbar from '../components/navbar';
import Footer from '@/components/LandingPage/footer';
export default function LoginPage () {
  return (
    <div>
      <Navbar />
      <div className="pt-[40px] px-[120px] pb-10">
        <Login />
      </div>
      <Footer />
    </div>
  );
}
