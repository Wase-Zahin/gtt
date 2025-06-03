import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PersonalInfoState {
    name: string;
    email: string;
    country: string;
    phone: string;
    problem: string;
}

interface SurveyAnswers {
    age: string;
    doctorPref: string;
    timing: string;
    hospitalPref: string;
}

const Survey: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [submitted, setSubmitted] = useState(false);

    const initialPersonal: PersonalInfoState =
        (location.state as PersonalInfoState) || {
            name: "",
            email: "",
            country: "",
            phone: "",
            problem: "",
        };

    const [answers, setAnswers] = useState<SurveyAnswers>({
        age: "",
        doctorPref: "",
        timing: "",
        hospitalPref: "",
    });

    const GOOGLE_FORM_ACTION =
        "https://docs.google.com/forms/d/e/1FAIpQLScAojPc4zZpU3qEM5qQ41tya21YNe2eE6vfhGxtGsrpdFqQgw/formResponse";

    // entry IDs (PersonalInfo)
    const ENTRY_NAME    = "entry.837166168";
    const ENTRY_EMAIL   = "entry.445737279";
    const ENTRY_COUNTRY = "entry.204858248";
    const ENTRY_PHONE   = "entry.610409314";
    const ENTRY_PROBLEM = "entry.1231513784";

    // entry IDs (Survey questions)
    const ENTRY_AGE         = "entry.1281241777";
    const ENTRY_DOCTOR_PREF = "entry.414428756";
    const ENTRY_TIMING      = "entry.996085864";
    const ENTRY_HOSPITAL    = "entry.1834061005";

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswers((prev) => ({ ...prev, hospitalPref: e.target.value }));
    };
    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswers((prev) => ({ ...prev, age: e.target.value }));
    };

    const isValidStepTwo =
        answers.age.trim() !== "" &&
        answers.doctorPref.trim() !== "" &&
        answers.timing.trim() !== "";

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     if (!isValidStepTwo) return;
    //
    //     const formEl = e.currentTarget as HTMLFormElement;
    //     formEl.submit();
    //     setSubmitted(true);
    // };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isValidStepTwo) return;

        setSubmitted(true);
        e.currentTarget.submit();
    };


    const onIframeLoad = () => {
        if (submitted) {
            navigate("/thank-you", { state: initialPersonal });
        }
    };


    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">
                Thank you. Please respond to following questions for the hospital:
            </h1>

            <form
                action={GOOGLE_FORM_ACTION}
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-6 rounded-lg shadow"
            >
                <input type="hidden" name={ENTRY_NAME} value={initialPersonal.name}/>
                <input type="hidden" name={ENTRY_EMAIL} value={initialPersonal.email}/>
                <input type="hidden" name={ENTRY_COUNTRY} value={initialPersonal.country}/>
                <input type="hidden" name={ENTRY_PHONE} value={initialPersonal.phone}/>
                <input type="hidden" name={ENTRY_PROBLEM} value={initialPersonal.problem}/>

                <div>
                    <label className="block font-medium">
                        Patient’s Age or Date of Birth*
                    </label>
                    <input
                        value={answers.age}
                        onChange={handleAgeChange}
                        type="text"
                        placeholder="Example: 30 Yrs or 29-05-1985"
                        className="w-full border-b border-gray-300 py-2 focus:outline-none"
                    />
                    <input
                        type="hidden"
                        name={ENTRY_AGE}
                        value={answers.age}
                    />
                </div>

                <fieldset>
                    <legend className="font-medium">
                        1. What kind of doctors shall we recommend you?*
                    </legend>
                    {[
                        "I am looking for the cheapest option, i have very strict budget.",
                        "I am somewhat flexible with my budget, i am looking for value for money. Good doctor and decent price.",
                        "I want the best doctor available. I want 5 star services for myself.",
                        "Other",
                    ].map((opt, idx) => (
                        <label key={idx} className="block mt-2">
                            <input
                                type="radio"
                                checked={answers.doctorPref === opt}
                                onChange={() =>
                                    setAnswers((prev) => ({...prev, doctorPref: opt}))
                                }
                                className="mr-2"
                            />
                            {opt}
                        </label>
                    ))}
                    <input
                        type="hidden"
                        name={ENTRY_DOCTOR_PREF}
                        value={answers.doctorPref}
                    />
                </fieldset>

                <fieldset>
                    <legend className="font-medium">
                        2. How soon do you plan for this treatment?*
                    </legend>
                    {[
                        "I am not sure yet. Maybe after 3-4 months.",
                        "I already have my dates ready. I am just looking for the right doctor/ price from your side.",
                        "Once you help me find the right doctor/ price, i can travel in next 30-45 days.",
                        "Other",
                    ].map((opt, idx) => (
                        <label key={idx} className="block mt-2">
                            <input
                                type="radio"
                                checked={answers.timing === opt}
                                onChange={() =>
                                    setAnswers((prev) => ({...prev, timing: opt}))
                                }
                                className="mr-2"
                            />
                            {opt}
                        </label>
                    ))}
                    <input
                        type="hidden"
                        name={ENTRY_TIMING}
                        value={answers.timing}
                    />
                </fieldset>

                <div>
                    <label className="block font-medium">
                        Do you have any preferred Hospital or City?
                    </label>
                    <input
                        value={answers.hospitalPref}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Any preference for hospital or city?"
                        className="w-full border-b border-gray-300 py-2 focus:outline-none"
                    />
                    <input
                        type="hidden"
                        name={ENTRY_HOSPITAL}
                        value={answers.hospitalPref}
                    />
                </div>

                <button
                    type="submit"
                    disabled={!isValidStepTwo}
                    className={`bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition ${
                        !isValidStepTwo ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    SUBMIT
                </button>

                <iframe
                    name="hidden_iframe"
                    style={{display: "none"}}
                    title="hidden-iframe"
                    onLoad={onIframeLoad}
                />
            </form>
        </div>
    );
};

export default Survey;