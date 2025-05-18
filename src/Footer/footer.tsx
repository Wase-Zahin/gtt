import {FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white text-sm">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-6 gap-8">
                <div>
                    <h4 className="font-bold text-lg mb-3">About Us</h4>
                    <ul className="space-y-2">
                        <li>Our Services</li>
                        <li>Vision</li>
                        <li>Team</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                        <li>Jobs</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-3">For Hospital</h4>
                    <ul className="space-y-2">
                        <li>Our Services</li>
                        <li>OPD Camps</li>
                    </ul>
                    <h4 className="font-bold text-lg mt-5 mb-3">For Doctors</h4>
                    <ul className="space-y-2">
                        <li>Our Services</li>
                    </ul>
                    <h4 className="font-bold text-lg mt-5 mb-3">For Partners</h4>
                    <ul className="space-y-2">
                        <li>Refer to Us</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-3">Policy</h4>
                    <ul className="space-y-2">
                        <li>Privacy Policy</li>
                        <li>Editorial Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-3">Medical Destinations</h4>
                    <ul className="space-y-2">
                        <li>India</li>
                        <li>Turkey</li>
                        <li>Thailand</li>
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h4 className="font-bold text-lg mb-3">Our Offices</h4>
                    <p><strong>India:</strong><br/>GTT Health Pvt Ltd, Gurgaon, Haryana, INDIA, PIN 122001</p>
                    <p className="mt-3"><strong>UAE:</strong><br/>GTT Health FZC LLC, Sharjah, United Arab Emirates
                    </p>
                    <p className="mt-3"><strong>USA:</strong><br/>GTT Health USA LLC, Dover, Delaware, 19901</p>
                </div>
            </div>

            <div className="bg-blue-100 text-blue-900 py-6 px-4">
                <div
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left gap-6">
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <FaEnvelope size={28}/>
                        <div>
                            <p className="font-semibold text-base">Email</p>
                            <p>hello@GTT.com</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <FaWhatsapp size={28} className="text-green-600"/>
                        <div>
                            <p className="font-semibold text-base">Phone</p>
                            <p>+91-9971616131</p>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Great_Place_to_Work_logo.svg/768px-Great_Place_to_Work_logo.svg.png"
                            alt="Great Place to Work"
                            className="h-20"
                        />
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <div className="flex justify-center space-x-5">
                        <FaYoutube size={22} className="hover:text-red-600 cursor-pointer"/>
                        <FaLinkedin size={22} className="hover:text-blue-700 cursor-pointer"/>
                        <FaFacebook size={22} className="hover:text-blue-500 cursor-pointer"/>
                        <FaInstagram size={22} className="hover:text-pink-500 cursor-pointer"/>
                    </div>
                </div>
            </div>

            <div className="bg-blue-900 text-center text-xs text-gray-300 py-4 border-t border-blue-800">
                <p>
                    Note: GTT Health does not provide medical advice, diagnosis or treatment. All content is for
                    informational purposes only.
                </p>
                <p className="mt-2">© Copyrights 2025 GTT.com. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;