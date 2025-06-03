import {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import GttLogo from "../assets/gtt_logo.png";
import {Link} from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#183B4E] text-white w-full shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Left Section: Logo and Brand */}
                <Link to={'/'}>
                    <div className="flex items-center justify-center ">
                        <img src={GttLogo} alt="GTT Logo" className="h-12 w-auto"/>
                        <div className="text-left text-sm sm:text-lg font-bold leading-tight">
                            Global Treatment <br/> and Tourism
                        </div>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search by disease, hospital or procedure"
                        className="px-4 py-2 rounded-full text-black bg-white focus:outline-none w-64"
                    />
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition">
                        Get a FREE Quote
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        {menuOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-4 bg-blue-600">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 w-full rounded-full text-black focus:outline-none"
                    />
                    <button className="bg-red-600 hover:bg-red-700 w-full text-white py-2 rounded-lg transition">
                        Get a FREE Quote
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;