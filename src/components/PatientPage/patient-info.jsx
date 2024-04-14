import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
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
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Medical Records</h1>
      <Button onClick={handleOpenModal} size="lg" variant="outline">
        Add New Record
      </Button>
      <AddRecordModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleAddRecord} />
      <div className="border border-gray-200 shadow rounded-lg overflow-hidden">
        <div className="grid w-full gap-4 p-4">
          <h2 className="font-bold">Patient Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium tracking-wide uppercase text-gray-500">Patient Name</p>
              <p>Jane Doe</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium tracking-wide uppercase text-gray-500">Date of Birth</p>
              <p>May 3, 1985 (37 years old)</p>
            </div>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Date of Birth</TableHead>
              <TableHead>Medical Condition</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Jane Doe</TableCell>
              <TableCell>May 3, 1985</TableCell>
              <TableCell>Diabetes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Doe</TableCell>
              <TableCell>May 3, 1985</TableCell>
              <TableCell>Asthma</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Doe</TableCell>
              <TableCell>May 3, 1985</TableCell>
              <TableCell>High Blood Pressure</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Prescription</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Jane Doe</TableCell>
              <TableCell>April 15, 2023</TableCell>
              <TableCell>Medication A, Medication B</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Doe</TableCell>
              <TableCell>May 2, 2023</TableCell>
              <TableCell>Medication C</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Doe</TableCell>
              <TableCell>June 10, 2023</TableCell>
              <TableCell>Medication D, Medication E, Medication F</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
export default PatientInfo;
