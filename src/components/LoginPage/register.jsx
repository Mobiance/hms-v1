/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KtezpDsU9El
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
export default function Component() {
  return (
    <div className="flex items-center px-4">
      <div className="mx-auto max-w-md w-full space-y-4">
        <div className="space-y-2 text-center">
          <p className="text-gray-500 text-2xl dark:text-gray-400">Register for an account</p>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="johndoe@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Password" required type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="roles">Roles</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="doctor">Doctor</SelectItem>
                <SelectItem value="nurse">Reciptionist</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full">Register</Button>
        </div>
        <div className="text-center text-sm">
          <Link to={'/login'} className="underline" href="#">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
