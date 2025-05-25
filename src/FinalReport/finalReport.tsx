import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

interface StateProps {
    name: string;
    email: string;
    country: string;
    phone: string;
    problem: string;
}

const FinalReport: React.FC = () => {
    const { state } = useLocation();
    const data: StateProps = (state as StateProps) || {
        name: '',
        email: '',
        country: '',
        phone: '',
        problem: '',
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-100 px-4 py-12">
            <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">

                    {/* Left Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center border-r border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Thank you for your details!
                        </h2>
                        <p className="text-gray-600 text-base mb-6">
                            Please share your reports or images related to the medical case.
                        </p>
                        <a
                            href="https://wa.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-6 py-3 rounded-full shadow transition-all"
                        >
                            <FaWhatsapp className="mr-2 text-2xl" />
                            Share Report on WhatsApp
                        </a>
                        <p className="text-xs text-gray-500 mt-4 max-w-xs">
                            *If you don’t have the reports now, you can still say hello to confirm your number and share later.
                        </p>

                        <div className="w-full mt-8 max-w-md rounded-xl overflow-hidden border border-blue-200 shadow">
                            <iframe
                                className="w-full aspect-video"
                                src="https://www.youtube.com/embed/21X5lGlDOfg"
                                title="How it works"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="bg-gray-50 p-8 md:p-12 text-left">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">
                            Summary of Your Request
                        </h3>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-gray-700 text-base">
                            <p className="font-medium text-gray-900 ">Name:</p>
                            <p>{data.name}</p>

                            <p className="font-medium text-gray-900 ">Email:</p>
                            <p>{data.email}</p>

                            <p className="font-medium text-gray-900 ">Phone:</p>
                            <p>{data.phone}</p>

                            <p className="font-medium text-gray-900 ">Country:</p>
                            <p>{data.country}</p>

                            <p className="font-medium text-gray-900 ">Medical Problem:</p>
                            <p>{data.problem}</p>
                        </div>

                        <p className="text-sm text-gray-500 mt-6">
                            *This is a summary of your request. Our team will reach out to confirm the details and
                            appointment availability.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FinalReport;