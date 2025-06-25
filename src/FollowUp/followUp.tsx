import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface StateProps {
    name: string;
    email: string;
    country: string;
    phone: string;
    problem: string;
}

const FollowUp: React.FC = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const initial: StateProps = (state as StateProps) || { name: '', email: '', country: '', phone: '', problem: '' };
    const [answers, setAnswers] = useState({ age: '', doctorPref: '', timing: '', hospitalPref: '' });

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAnswers(prev => ({ ...prev, [name]: value }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswers(prev => ({ ...prev, hospitalPref: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const payload = { ...initial, ...answers };
        navigate('/final-report', { state: payload });
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Thank you. Please respond to following questions for the hospital:</h1>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
                <div>
                    <label className="block font-medium">Patient's Age or Date Of Birth*</label>
                    <input name="age" value={answers.age} onChange={handleRadioChange} type="text" placeholder="Example: 30 Yrs or 29-05-1985" className="w-full border-b border-gray-300 py-2 focus:outline-none" />
                </div>
                <fieldset>
                    <legend className="font-medium">1. What kind of doctors shall we recommend you?*</legend>
                    {[
                        'I am looking for the cheapest option, i have very strict budget.',
                        'I am somewhat flexible with my budget, i am looking for value for money. Good doctor and decent price.',
                        'I want the best doctor available. I want 5 star services for myself.',
                        'Other'
                    ].map((opt, idx) => (
                        <label key={idx} className="block mt-2">
                            <input type="radio" name="doctorPref" value={opt} onChange={handleRadioChange} className="mr-2" />{opt}
                        </label>
                    ))}
                </fieldset>
                {/* Repeat for question 2 */}
                <fieldset>
                    <legend className="font-medium">2. How soon do you plan for this treatment?*</legend>
                    {[
                        'I am not sure yet. Maybe after 3-4 months.',
                        'I already have my dates ready. I am just looking for the right doctor/ price from your side.',
                        'Once you help me find the right doctor/ price, i can travel in next 30-45 days.',
                        'Other'
                    ].map((opt, idx) => (
                        <label key={idx} className="block mt-2">
                            <input type="radio" name="timing" value={opt} onChange={handleRadioChange} className="mr-2" />{opt}
                        </label>
                    ))}
                </fieldset>
                <div>
                    <label className="block font-medium">Do you have any preferred Hospital or City?</label>
                    <input name="hospitalPref" value={answers.hospitalPref} onChange={handleInputChange} type="text" placeholder="Any preference for hospital or city?" className="w-full border-b border-gray-300 py-2 focus:outline-none" />
                </div>
                <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">SUBMIT</button>
            </form>
        </div>
    );
};

export default FollowUp;