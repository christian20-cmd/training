import { MessageSquareShareIcon } from "lucide-react";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiWhatsappLogo } from "react-icons/pi";

const ContactButton = () => {
    const [isAllContactOpen, setIsAllContactOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {/* Menu Contact */}
            {isAllContactOpen && (
                <div className="bg-black/90 py-4 px-4 rounded-lg shadow-md shadow-cyan-200 mb-4 animate-fade-in">
                    <ul className="flex flex-col space-y-4 text-white text-xl">
                        <li className="flex items-center gap-2 hover:text-blue-300 cursor-pointer">
                            <PiWhatsappLogo /> WhatsApp
                        </li>
                        <li className="flex items-center gap-2 hover:text-blue-300 cursor-pointer">
                            <MdEmail /> Email
                        </li>
                        <li className="flex items-center gap-2 hover:text-blue-300 cursor-pointer">
                            <FaFacebook /> Facebook
                        </li>
                        <li className="flex items-center gap-2 hover:text-blue-300 cursor-pointer">
                            <BsInstagram /> Instagram
                        </li>
                    </ul>
                </div>
            )}
            
            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
                {isAllContactOpen && (
                    <span className="text-sm font-medium text-gray-800 whitespace-nowrap ml-6">
                        Nous Contacter
                    </span>
                )}
                <button 
                    onClick={() => setIsAllContactOpen(!isAllContactOpen)}
                    className="bg-black border-2 border-white rounded-full p-3 hover:bg-slate-700 transition-colors"
                    aria-label="Contact options"
                >
                    <MessageSquareShareIcon className="w-6 h-6 text-white" />
                </button>
            </div>
        </div>
    );
};

export default ContactButton;