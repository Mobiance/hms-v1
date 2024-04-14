import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Box } from "@mui/material"; // Removed Modal, Select, and TextField since they are not directly used here
import AddRecordModal from "./add-record-modal";
import MedicalCard from "./medical-card";

const PatientCard = () => {
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
    <div className="border-2 rounded-lg text-2xl font-semibold">
      <div className="flex flex-row justify-between p-5">
        <div>Medical Record</div>
        {/* Invoke handleOpenModal when the button is clicked */}
        <Button onClick={handleOpenModal} className="text-white rounded-lg p-3">Add New Record</Button>
      </div>
      {/* Pass necessary props to the AddRecordModal */}
      <AddRecordModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleAddRecord} />
      <div className="p-10 flex flex-col gap-y-[40px]">
        <MedicalCard />
        <MedicalCard />
        <MedicalCard />
      </div>
    </div>
  );
};

export default PatientCard;

