import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1C398E] text-white py-12 px-4 md:px-16">
            <div className="flex flex-col lg:flex-row justify-between gap-10">
                {/* Left Column */}
                <div className="lg:w-1/3">
                    <img
                        src="/your-logo.png"
                        alt="GT Tourism Logo"
                        className="h-12 mb-4"
                    />
                    <p className="text-sm mb-4">
                        Address: Room 13D, Rongjian Mansion, No. 29, Jianliuma Road, Yuexiu District, Guangzhou City, Guangdong Province, China
                    </p>
                    <button className="bg-white text-[#1C398E] px-5 py-2 rounded-full font-semibold mb-4">
                        Contact Details
                    </button>
                    <p className="text-sm font-semibold">
                        Hotline: 📞 +86-18214558585
                    </p>
                </div>

                {/* Middle Column */}
                <div className="lg:w-1/3">
                    <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms of Service</a></li>
                        <li><a href="#" className="hover:underline">FAQ</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                {/* Right Column */}
                <div className="lg:w-1/3 flex flex-col items-center lg:items-end">
                    <img
                        src="/wechat-qr.png"
                        alt="WeChat QR"
                        className="w-32 h-32 mb-2 border-4 border-white rounded-lg"
                    />
                    <p className="text-sm">WeChat</p>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="mt-10 border-t border-white/30 pt-6 flex flex-col lg:flex-row justify-between items-center text-sm">
                <p>© 2025 Global Treatment and Tourism. All Rights Reserved.</p>
                <div className="flex space-x-4 mt-4 lg:mt-0">
                    <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
                    <FaInstagram className="hover:text-gray-300 cursor-pointer" />
                    <FaTwitter className="hover:text-gray-300 cursor-pointer" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;