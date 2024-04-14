import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing-page'
import LoginPage2 from "./components/LoginPage/LoginPage2"
import RegisterPage from './pages/register-page';
import PatientPage from './pages/patient-page';
import PatientInfoPage from './pages/patient-info-page';
import AppointmentPage from './pages/appointment-page';
import PrescriptionPage from './pages/prescription-page';
import DashboardPage from './pages/dashboard-page';
import SideDash from './components/SideDash/SideDash';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage2/>} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/patients" element={<PatientPage />} />
                <Route path="/patientinfo/:id" element={<PatientInfoPage />} />
                <Route path="/appointment" element={<AppointmentPage /> } />
                <Route path="/prescription" element={<PrescriptionPage /> } />
                <Route path="/dashboard" element={<DashboardPage /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App
