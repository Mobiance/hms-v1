import React, { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select, SelectGroup } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Link, redirect } from "react-router-dom"
import { Navigate, useNavigate } from "react-router-dom"
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    const navigate = useNavigate();
    const handleCloseToast = () => {
        setShowToast(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:5000/api/users/register',
                {
                    username,
                    email,
                    password,
                    role,
                },
                {
                    withCredentials: true
                }
            );

            if (response.status === 200) {
                // Handle successful login (e.g., redirect to dashboard)
                console.log('Register successful!', response); // Log response if needed
                document.cookie = accessToken = +response.data.data.accessToken
                setShowToast(true); // Show success toast
            } else {
                // Handle errors from backend
                console.error('Register failed:', errorMessage);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setErrorMessage('An error occurred during registeration. Please try again.'); // Generic error message
        }
    };
    return (
        <div className="flex items-center px-4">
            <div className="mx-auto max-w-md w-full space-y-4">
                <div className="space-y-2 text-center">
                    <p className="text-gray-500 text-2xl dark:text-gray-400">Register a new Account</p>
                </div>
                <div className="space-y-2">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="Password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Select onValueChange={setRole} >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup label="Roles">
                                    <SelectItem value="Doctor">Doctor</SelectItem>
                                    <SelectItem value="Receptionist">Receptionist</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button className="w-full" onClick={handleSubmit}>Login</Button>
                </div>
            </div>
        </div>
    )
}
export default Register;
