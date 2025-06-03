import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import GttLogo from "../assets/gtt_logo.png";
import WhatsAppQr from "../assets/whatsapp_qr.jpeg";

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-[#183B4E] text-white py-12 px-4 md:px-16">
            <div className="flex flex-col lg:flex-row justify-between gap-10">
                {/* Left Column */}
                <div className="lg:w-1/3">
                    <div className="flex items-center mb-4">
                        <img src={GttLogo} alt="GTT Logo" className="h-12 w-auto"/>
                        <div className="text-left text-sm sm:text-lg font-bold leading-tight">
                            Global Treatment <br/> and Tourism
                        </div>
                    </div>
                    <p className="text-sm mb-4">
                        <b>{t("footer.addressHeading")}</b> {t("footer.bdAddress")} <br/>
                        <b>{t("footer.chinaAddressHeading")}</b> {t("footer.cnAddress")}
                    </p>
                    <button className="bg-white text-[#1C398E] px-5 py-2 rounded-full font-semibold mb-4">
                        {t("footer.contactButton")}
                    </button>
                    <p className="text-sm font-semibold">{t("footer.hotline")}</p>
                </div>

                {/* Middle Column */}
                <div className="lg:w-1/3">
                    <h3 className="text-lg font-semibold mb-4">{t("footer.linksHeading")}</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">{t("footer.links.privacy")}</a></li>
                        <li><a href="#" className="hover:underline">{t("footer.links.terms")}</a></li>
                        <li><a href="#" className="hover:underline">{t("footer.links.faq")}</a></li>
                        <li><a href="#" className="hover:underline">{t("footer.links.contact")}</a></li>
                    </ul>
                </div>

                {/* Right Column */}
                <div className="lg:w-1/3 flex flex-col items-center lg:items-end">
                    <img
                        src={WhatsAppQr}
                        alt="WhatsApp QR Code"
                        className="w-32 h-32 mb-2 border-4 border-white rounded-lg"
                    />
                    <p className="text-sm">{t("footer.whatsapp")}</p>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="mt-10 border-t border-white/30 pt-6 flex flex-col lg:flex-row justify-between items-center text-sm">
                <p>{t("footer.copyright")}</p>
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