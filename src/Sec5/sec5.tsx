import React from "react";
import Knee from "../assets/lqa/RHEUMATOLOGY-51.svg";
import Hip from "../assets/lqa/Hip-Replecement.svg";
import Brain from "../assets/lqa/Brain-Tumor.svg";
import Heart from "../assets/lqa/Heart-Bypass-Surgery.svg";
import Valve from "../assets/lqa/Valve-Replacement.svg";
import Breast from "../assets/lqa/Breast-Cancer.svg";
import Lung from "../assets/lqa/Lung-Cancer.svg";
import Rhinoplasty from "../assets/lqa/Rhinoplasty.svg";
import Hair from "../assets/lqa/Hair-Transpalnt.svg";
import Cervical from "../assets/lqa/cervical-cancer.svg";
import Hysterectomy from "../assets/lqa/Hysterectomy.svg";

const LowestQuotesAssuredSection: React.FC = () => {
    const quotes = [
        { title: "Knee Replacement",        price: "$4,000", icon: Knee },
        { title: "Hip Replacement",         price: "$5,500", icon: Hip },
        { title: "Brain Tumor",             price: "$5,000", icon: Brain },
        { title: "Heart Bypass Surgery",    price: "$4,500", icon: Heart },
        { title: "Valve Replacement",       price: "$9,500", icon: Valve },
        { title: "Breast Cancer",           price: "$5,000", icon: Breast },
        { title: "Lung Cancer",             price: "$5,500", icon: Lung },
        { title: "Rhinoplasty",             price: "$1,800", icon: Rhinoplasty },
        { title: "Breast Implants",         price: "$2,750", icon: Breast },
        { title: "Hair Transplant",         price: "$1,400", icon: Hair },
        { title: "Cervical Cancer",         price: "$4,500", icon: Cervical },
        { title: "Hysterectomy",            price: "$3,000", icon: Hysterectomy },
    ];

    const openWhatsApp = () => {
        const phone = '8801805205869';
        const message = encodeURIComponent(
            'Hello, please contact me regarding https://www.GTT.com.bd, Thank you!'
        );

        const isMobile = /iPhone|Android|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

        const link = isMobile
            ? `whatsapp://send?phone=${phone}&text=${message}`
            : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;

        window.open(link, '_blank');
    };

    return (
        <section className="px-4 py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-4">
                Lowest Quotes Assured
            </h2>
            <p className="text-center text-gray-500 mb-12">
                We constantly negotiate better prices and alternatives without compromising treatment quality. Our
                prices are consistently lower.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {quotes.map((quote, idx) => (
                    <div
                        key={idx}
                        className="bg-blue-50 rounded-2xl shadow p-6 flex gap-5 items-center text-center"
                    >
                        <img
                            src={quote.icon}
                            alt={quote.title}
                            className="w-16 h-16 mb-4"
                        />
                        <div className="flex justify-end items-start flex-col gap-2">
                            <h3 className="text-xl font-semibold text-blue-700">
                                {quote.title}
                            </h3>
                            <p className="text-gray-600">
                                Starting <span className="font-bold">{quote.price}</span>
                            </p>
                            <button className="text-red-500 border-none">
                                Get Quote
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col justify-center items-center mt-12 gap-4">
                <p>Discover what we offer!</p>
                <div className="flex gap-4">
                    <button className="inline-flex items-center justify-center bg-red-500 hover:bg-green-600 text-white font-medium rounded-full px-6 py-2 transition">
                        Get Quote
                    </button>
                    <a
                        onClick={openWhatsApp}
                        href="#"
                        className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium rounded-full px-6 py-2 transition"
                    >
                        <img
                            src="https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/whatsaap-icon01.webp"
                            alt="Chat with Us"
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                        Chat
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LowestQuotesAssuredSection;