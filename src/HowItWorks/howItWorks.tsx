import React from "react";
import { useTranslation } from "react-i18next";

import Contact from "../assets/hiw/noun-contact-us.svg";
import FollowUp from "../assets/hiw/noun-follow-up.svg";
import Cost from "../assets/hiw/Cost.svg";
import Booking from "../assets/hiw/noun-booking-online.svg";

const icons = [Contact, Cost, Booking, FollowUp];

const HowItWorks: React.FC = () => {
    const { t } = useTranslation();
    const steps = t("how_it_works.steps", { returnObjects: true }) as string[];

    return (
        <section className="bg-white py-12 px-4 md:px-16">
            <h2 className="text-3xl font-semibold text-center mb-10">
                {t("how_it_works.heading")}
            </h2>
            <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-2/3">
                    {steps.map((title, index) => (
                        <div
                            key={index}
                            className="bg-blue-50 rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                        >
                            <img className="text-4xl mb-4" alt="steps icon" src={icons[index]} />
                            <p className="text-gray-700 font-bold">{title}</p>
                        </div>
                    ))}
                </div>

                {/* Video */}
                <div className="w-full lg:w-1/3 flex justify-center">
                    <div className="w-full aspect-video max-w-md border-2 border-blue-300 rounded-xl overflow-hidden">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/21X5lGlDOfg"
                            title="How it works"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="mt-12 text-center">
                <button className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors">
                    {t("how_it_works.button")}
                </button>
            </div>
        </section>
    );
};

export default HowItWorks;