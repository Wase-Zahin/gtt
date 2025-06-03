import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
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

    const ENTRY_NAME = "entry.837166168";
    const ENTRY_EMAIL = "entry.445737279";
    const ENTRY_COUNTRY = "entry.204858248";
    const ENTRY_PHONE = "entry.610409314";
    const ENTRY_PROBLEM = "entry.1231513784";

    const ENTRY_AGE = "entry.1281241777";
    const ENTRY_DOCTOR_PREF = "entry.414428756";
    const ENTRY_TIMING = "entry.996085864";
    const ENTRY_HOSPITAL = "entry.1834061005";

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
                {t("survey.title")}
            </h1>

            <form
                action={GOOGLE_FORM_ACTION}
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-6 rounded-lg shadow"
            >
                <input type="hidden" name={ENTRY_NAME} value={initialPersonal.name} />
                <input type="hidden" name={ENTRY_EMAIL} value={initialPersonal.email} />
                <input type="hidden" name={ENTRY_COUNTRY} value={initialPersonal.country} />
                <input type="hidden" name={ENTRY_PHONE} value={initialPersonal.phone} />
                <input type="hidden" name={ENTRY_PROBLEM} value={initialPersonal.problem} />

                <div>
                    <label className="block font-medium">
                        {t("survey.ageLabel")}
                    </label>
                    <input
                        value={answers.age}
                        onChange={handleAgeChange}
                        type="text"
                        placeholder={t("survey.agePlaceholder")}
                        className="w-full border-b border-gray-300 py-2 focus:outline-none"
                    />
                    <input type="hidden" name={ENTRY_AGE} value={answers.age} />
                </div>

                <fieldset>
                    <legend className="font-medium">{t("survey.doctorLegend")}</legend>
                    {t("survey.doctorOptions", { returnObjects: true })?.map((opt: string, idx: number) => (
                        <label key={idx} className="block mt-2">
                            <input
                                type="radio"
                                checked={answers.doctorPref === opt}
                                onChange={() =>
                                    setAnswers((prev) => ({ ...prev, doctorPref: opt }))
                                }
                                className="mr-2"
                            />
                            {opt}
                        </label>
                    ))}
                    <input type="hidden" name={ENTRY_DOCTOR_PREF} value={answers.doctorPref} />
                </fieldset>

                <fieldset>
                    <legend className="font-medium">{t("survey.timingLegend")}</legend>
                    {t("survey.timingOptions", { returnObjects: true })?.map((opt: string, idx: number) => (
                        <label key={idx} className="block mt-2">
                            <input
                                type="radio"
                                checked={answers.timing === opt}
                                onChange={() =>
                                    setAnswers((prev) => ({ ...prev, timing: opt }))
                                }
                                className="mr-2"
                            />
                            {opt}
                        </label>
                    ))}
                    <input type="hidden" name={ENTRY_TIMING} value={answers.timing} />
                </fieldset>

                <div>
                    <label className="block font-medium">
                        {t("survey.hospitalLabel")}
                    </label>
                    <input
                        value={answers.hospitalPref}
                        onChange={handleInputChange}
                        type="text"
                        placeholder={t("survey.hospitalPlaceholder")}
                        className="w-full border-b border-gray-300 py-2 focus:outline-none"
                    />
                    <input type="hidden" name={ENTRY_HOSPITAL} value={answers.hospitalPref} />
                </div>

                <button
                    type="submit"
                    disabled={!isValidStepTwo}
                    className={`bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition ${
                        !isValidStepTwo ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    {t("survey.submit")}
                </button>

                <iframe
                    name="hidden_iframe"
                    style={{ display: "none" }}
                    title="hidden-iframe"
                    onLoad={onIframeLoad}
                />
            </form>
        </div>
    );
};

export default Survey;