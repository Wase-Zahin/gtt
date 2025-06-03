import {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import GttLogo from "../assets/gtt_logo.png";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { i18n, t } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "bn" : "en";
        i18n.changeLanguage(newLang);
    };

    return (
        <header className="bg-[#183B4E] text-white w-full shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Left Section: Logo and Brand */}
                <Link to={'/'}>
                    <div className="flex items-center justify-center ">
                        <img src={GttLogo} alt="GTT Logo" className="h-12 w-auto"/>
                        <div className="text-left text-sm sm:text-lg font-bold leading-tight">
                            {t('brand')}
                        </div>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-4">
                    <button onClick={toggleLanguage}
                            className="bg-white text-black px-4 py-2 rounded-lg font-semibold">
                        {t('toggle_language')}
                    </button>
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition">
                        {t("form.submit")}
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