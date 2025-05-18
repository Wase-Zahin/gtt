import React, {useState} from "react";

const faqs = [
    {
        question: "What is medical tourism, and why do people travel abroad for medical treatments?",
        answer:
            "Medical tourism involves traveling to another country to receive medical care, often to access better services or more affordable treatment options.",
    },
    {
        question: "What is GTT.com, and how does it work?",
        answer:
            "GTT.com connects international patients with trusted hospitals and doctors for treatment in India and other countries.",
    },
    {
        question: "Can GTT.com assist with travel and accommodation arrangements for my medical trip?",
        answer:
            "Yes, we organize airport transfers, book accommodation near the hospitals, arrange interpreters, and assist our patients with money exchange, SIM cards, etc.",
    },
    {
        question: "How do I request a cost estimate for my treatment through GTT.com?",
        answer:
            "Submit your medical reports or case details via our website or chat, and our medical team will get back with a customized treatment plan and estimate.",
    },
    {
        question: "How do I request a cost estimate for my treatment through GTT.com?",
        answer:
            "Submit your medical reports or case details via our website or chat, and our medical team will get back with a customized treatment plan and estimate.",
    },
    {
        question: "How do I request a cost estimate for my treatment through GTT.com?",
        answer:
            "Submit your medical reports or case details via our website or chat, and our medical team will get back with a customized treatment plan and estimate.",
    },
    {
        question: "How do I request a cost estimate for my treatment through GTT.com?",
        answer:
            "Submit your medical reports or case details via our website or chat, and our medical team will get back with a customized treatment plan and estimate.",
    },
    {
        question: "How do I request a cost estimate for my treatment through GTT.com?",
        answer:
            "Submit your medical reports or case details via our website or chat, and our medical team will get back with a customized treatment plan and estimate.",
    },
];

const Faqs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-12 px-4 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                Frequently Asked Questions (FAQ’s)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border rounded-lg transition-all duration-300 overflow-hidden ${
                            activeIndex === index ? "bg-blue-700 text-white" : "bg-white text-blue-700 border-blue-700"
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
                            <div className="px-4 pb-4 text-sm">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faqs;