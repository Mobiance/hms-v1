import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing-page'
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import PatientPage from './pages/patient-page';
import PatientInfoPage from './pages/patient-info-page';
import AppointmentList from './components/AppointmentList/AppointmentList';
import PrescriptionForm from './components/PrescriptionForm/PrescriptionForm';
import AppointmentPage from './pages/appointment-page';
import PrescriptionPage from './pages/prescription-page';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/patients" element={<PatientPage />} />
                <Route path="/patientinfo/:id" element={<PatientInfoPage />} />
                <Route path="/appointment" element={<AppointmentPage /> } />
                <Route path="/prescription" element={<PrescriptionPage /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App
