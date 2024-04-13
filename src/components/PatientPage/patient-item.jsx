import React, { useEffect, useState } from 'react';
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

    const  [patients, setPatients]= useState([]);
    // async function getPatients() {
    //     try {
    //         const response = await fetch("http://localhost:5000/api/patients");
    //     const data = await response.json();
    //     setPatients(data.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    //   }
      useEffect(() => {
        async function getPatients() {
            try {
                const response = await fetch("http://localhost:5000/api/patients");
            const data = await response.json();
 
            setPatients(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    getPatients()
}, [])
console.log(patients)
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
               {
                patients? <TableBody>
                {patients&& patients.map(patient => (
                    <TableRow key={patient._id}>
                        <TableCell>{patient._id}</TableCell>
                        <TableCell>{patient.name}</TableCell>
                        <TableCell>{patient.Dob}</TableCell>
                        <TableCell>{patient.gender}</TableCell>
                        <TableCell>{patient.contactNumber}</TableCell>
                        <TableCell>{patient.weight}</TableCell>
                        <TableCell>{patient.age}</TableCell>
                        <TableCell><Link to={`/patientinfo/${patient._id}`}>View</Link></TableCell>
                    </TableRow>
                ))}
            </TableBody>:<h3>Loading</h3>
               }
            </Table>
        </div>
    );
};

export default PatientItem;

