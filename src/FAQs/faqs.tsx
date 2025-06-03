import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Faqs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { t } = useTranslation();

    const faqs = t("faq.items", { returnObjects: true }) as {
        question: string;
        answer: string;
    }[];

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-50">
            <section className="py-20 px-4 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    {t("faq.heading")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-lg transition-all duration-300 overflow-hidden ${
                                activeIndex === index
                                    ? "bg-blue-700 text-white"
                                    : "bg-white text-blue-700 border-blue-700"
                            }`}
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full text-left px-4 py-3 font-medium flex justify-between items-center focus:outline-none"
                            >
                                {faq.question}
                                <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
                            </button>
                            {activeIndex === index && (
                                <div className="px-4 pb-4 text-sm">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Faqs;