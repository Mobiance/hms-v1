import { Button } from "../ui/button";
import { Input } from "../ui/input";
import AddPatientModal from "./add-patient-modal";
import PatientItem from "./patient-item";
import { useState } from "react";

const PatientHero = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddRecord = (record) => {
        // Handle adding the record, for example, by calling an API
        console.log('Adding record:', record);
        handleCloseModal(); // Close the modal after submitting the record
    };

    return (
        <div>
            <div className="text-4xl font-semibold">
                All Patients
                <div className="p-10">
                    <Input placeholder="Search Patients by Name, Phone Number, Email or Patient Id" />
                </div>
                <div className="flex items-center justify-center">
                    <Button onClick={handleOpenModal}>Add New Patient</Button>
                    <AddPatientModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleAddRecord} />
                </div>
            </div>
            <div>
                <PatientItem />
            </div>
        </div>
    );
};
export default PatientHero;
