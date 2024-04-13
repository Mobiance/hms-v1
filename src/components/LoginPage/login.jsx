import React, { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Component() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleLogin = () => {
    // Here you can perform any actions you need with the form data
    // For now, let's just log it to the console
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Role:', role);
  };

  return (
    <div className="flex items-center px-4">
      <div className="mx-auto max-w-md w-full space-y-4">
        <div className="space-y-2 text-center">
          <p className="text-gray-500 text-2xl dark:text-gray-400">Sign in to your account</p>
        </div>
        <div className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select value={role} onChange={(e) => setRole(e.target.value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="doctor">Doctor</SelectItem>
                <SelectItem value="receptionist">Receptionist</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full" onClick={handleLogin}>Login</Button>
        </div>
        
      </div>
    </div>
  )
}
