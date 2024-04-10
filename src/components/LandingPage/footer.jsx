import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react'
const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row gap-x-[35px] pt-10">
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Security</div>
                <div>Status</div>
                <div>Contact Us</div>
            </div>
            <div className='pt-10 flex flex-row gap-x-[35px]'>
                <Twitter size={24} />
                <Instagram size={24} />
                <Facebook size={24} />
                <Linkedin size={24} />
            </div>
            <div className='flex pt-5 '>
                @2024 KayaHealth Connect
            </div> 
        </div>
    );
};
export default Footer;
