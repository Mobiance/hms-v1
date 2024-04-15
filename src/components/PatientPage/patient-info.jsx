import PatientCard from "./patient-card";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import AddRecordModal from "./add-record-modal";

const PatientInfo = () => {
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
        <div className="border-2 p-4">
            <div className="flex flex-row justify-evenly pb-5">
                <div className="text-xl font-semibold">Sarthak Nandedkar</div>
                <div className="text-lg font-thin">abc@gmail.com</div>
                <div className="text-xl ">1231231232</div>
                <Button onClick={handleOpenModal} size="lg" variant="outline">
                    Add New Record
                </Button>
                <AddRecordModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleAddRecord} />
            </div>
            <div>
                <PatientCard />
            </div>
        </div>
    );
};
export default PatientInfo;
