import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import slider01 from "../assets/slider01.png";

const Hero: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "Bangladesh",
        phone: "",
        problem: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/follow-up", { state: formData });
    };

    return (
        <section className="relative w-full min-h-screen py-12 md:py-20 overflow-hidden">
            {/* Background image */}
            <img
                src={slider01}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 "></div>

            <div className="relative z-10 container mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6 lg:px-6">
                {/* Left content */}
                <div className=" flex-1 mb-12 md:mb-0 md:pr-12">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Medical Treatment With Unmatched Personal Care
                    </h1>
                    <p className="text-lg md:text-2xl mb-8">
                        World’s Most Trusted Medical Travel Assistance Platform
                    </p>

                    <div className="flex items-center space-x-4 mb-6">
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                src={`/assets/patient-${i + 1}.jpg`}
                                alt={`Patient ${i + 1}`}
                                className="w-12 h-12 rounded-full border-2 border-white object-cover"
                            />
                        ))}
                    </div>
                    <p className="text-sm md:text-base">
                        1,00,000+ Patients Assisted Since 2016
                    </p>

                    <div className="flex items-center mt-4">
                        <img
                            src="/assets/google-logo.png"
                            alt="Google logo"
                            className="w-8 h-8 mr-2"
                        />
                        <span className="text-xl font-semibold">4.7</span>
                        <div className="flex ml-2">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-5 h-5 fill-current text-yellow-400"
                                    viewBox="0 0 20 20"
                                >
                                    <polygon points="9.9,1.1 3.3,19.1 19.8,7.7 0,7.7 16.5,19.1" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right form */}
                <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">
                        Let Us Help You
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Patient Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option>Bangladesh</option>
                            <option>India</option>
                            <option>China</option>
                        </select>
                        <div className="flex">
                            <input
                                type="text"
                                defaultValue="+880"
                                disabled
                                className="w-20 px-4 py-3 border border-gray-300 rounded-l-lg bg-gray-100 cursor-not-allowed"
                            />
                            <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                type="tel"
                                placeholder="Your Phone number"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <textarea
                            name="problem"
                            value={formData.problem}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Describe The Current Medical Problem .."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
                        >
                            Get FREE Quote
                        </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-4">
                        By submitting the form I agree to the{' '}
                        <a href="#" className="text-blue-600 underline">
                            Terms of Use
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-blue-600 underline">
                            Privacy Policy
                        </a>{' '}
                        of Vaidam Health.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;