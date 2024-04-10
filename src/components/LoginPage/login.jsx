import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-y-4">
                <div className="text-4xl font-semibold">Welcome to the KayaHealth Connect</div>
                <div className="w-[500px]">Your health and safety are our top priorities. Your care team is here to help you navigate your care journey</div>
            </div>
            <div className="w-[512px] flex flex-col items-start gap-y-4 pt-10">
                <Label className="font-semibold text-xl">Username</Label>
                <Input />
                <Label className="font-semibold text-xl">Password</Label>
                <Input />
                <Button className="w-full bg-[#1c91f2] hover:bg-[#1870b8]">Login</Button>
            </div>
            <Link to="/register" className="text-[#1c91f2] hover:underline pt-5">Register</Link>
        </div>
    );
};
export default Login;
