import React, { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Component() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User data posted successfully');
        setUserData({
          username: '',
          email: '',
          password: '',
          role: '',
        });
      } else {
        console.error('Failed to post user data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center px-4">
      <div className="mx-auto max-w-md w-full space-y-4">
        <div className="space-y-2 text-center">
          <p className="text-gray-500 text-2xl dark:text-gray-400">Register for an account</p>
        </div>
        <div className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="John" required value={userData.username} onChange={e => handleChange(e)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="johndoe@example.com" required type="email" value={userData.email} onChange={e => handleChange(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Password" required type="password" value={userData.password} onChange={e => handleChange(e.target.value)} />
          </div>
          <div className="space-y-2">
            {/* <Label htmlFor="role">Roles</Label> */}
            {/* <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="doctor">Doctor</SelectItem>
                <SelectItem value="Receptionist">Receptionist</SelectItem>
              </SelectContent>
            </Select> */}
            <div className="space-y-2">
            <Label htmlFor="password">role</Label>
            <Input id="role" placeholder="role" required type="text" value={userData.role} onChange={e => handleChange(e.target.value)} />
          </div>
          </div>
          <Button className="w-full" onClick={handleSubmit}>Register</Button>
        </div>
        <div className="text-center text-sm">
          <Link to={'/login'} className="underline">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
