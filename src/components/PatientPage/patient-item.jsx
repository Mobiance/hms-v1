import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";

const PatientArray = [
    {
        id: 1,
        name: "John Doe",
        dob: "12 Jan 1980",
        gender: "male",
        contact: "1212121212",
        weight: "70 KG",
        age: 30,
    },
    {
        id: 2,
        name: "Sahil Kshirsagar",
        dob: "7 feb 2004",
        gender: "male",
        contact: "1212121212",
        weight: "95 KG",
        age: 20,
    },
    {
        id: 3,
        name: "Shubham Sharma",
        dob: "25 May 2003",
        gender: "male",
        contact: "1212121212",
        weight: "73 KG",
        age: 20,
    },
    {
        id: 4,
        name: "John Doe",
        dob: "12 Jan 1980",
        gender: "male",
        contact: "1212121212",
        weight: "70 KG",
        age: 30,
    },
    {
        id: 5,
        name: "John Doe",
        dob: "12 Jan 1980",
        gender: "male",
        contact: "1212121212",
        weight: "70 KG",
        age: 30,
    },
];

const PatientItem = () => {
    return (
        <div>
            <Table> 
                <TableCaption>Patient Information</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Patient Id</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>DOB</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Contact Number</TableHead>
                        <TableHead>Weight</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {PatientArray.map(patient => (
                        <TableRow key={patient.id}>
                            <TableCell>{patient.id}</TableCell>
                            <TableCell>{patient.name}</TableCell>
                            <TableCell>{patient.dob}</TableCell>
                            <TableCell>{patient.gender}</TableCell>
                            <TableCell>{patient.contact}</TableCell>
                            <TableCell>{patient.weight}</TableCell>
                            <TableCell>{patient.age}</TableCell>
                            <TableCell><Link to={`/patientinfo/${patient.id}`}>View</Link></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default PatientItem;

