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
    const [submitting, setSubmitting] = useState(false);
    const isValid =
        answers.age.trim() &&
        answers.doctorPref.trim() &&
        answers.timing.trim();

    // ← point to your Netlify Function
    const PROXY_URL = "/.netlify/functions/proxy-form";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValid) return;

        setSubmitting(true);
        try {
            const res = await fetch(PROXY_URL, {
                method: "POST",
                body: JSON.stringify({ personal: initialPersonal, answers }),
            });
            const json = await res.json();
            if (json.status === "OK") {
                navigate("/thank-you", { state: initialPersonal });
            } else {
                throw new Error(json.message || "Submission failed");
            }
        } catch (err: any) {
            alert("Error submitting form: " + err.message);
            setSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">{t("survey.title")}</h1>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
                {/* AGE */}
                <div>
                    <label className="block font-medium">{t("survey.ageLabel")}</label>
                    <input
                        value={answers.age}
                        onChange={e => setAnswers(a => ({ ...a, age: e.target.value }))}
                        type="text"
                        placeholder={t("survey.agePlaceholder")}
                        className="w-full border-b border-gray-300 py-2 focus:outline-none"
                        required
                    />
                </div>
                {/* DOCTOR PREF */}
                <fieldset>
                    <legend className="font-medium">{t("survey.doctorLegend")}</legend>
                    {t("survey.doctorOptions", { returnObjects: true })?.map((opt: string, i: number) => (
                        <label key={i} className="block mt-2">
                            <input
                                type="radio"
                                name="doctor"
                                checked={answers.doctorPref === opt}
                                onChange={() => setAnswers(a => ({ ...a, doctorPref: opt }))}
                                className="mr-2"
                                required
                            />
                            {opt}
                        </label>
                    ))}
                </fieldset>
                {/* TIMING */}
                <fieldset>
                    <legend className="font-medium">{t("survey.timingLegend")}</legend>
                    {t("survey.timingOptions", { returnObjects: true })?.map((opt: string, i: number) => (
                        <label key={i} className="block mt-2">
                            <input
                                type="radio"
                                name="timing"
                                checked={answers.timing === opt}
                                onChange={() => setAnswers(a => ({ ...a, timing: opt }))}
                                className="mr-2"
                                required
                            />
                            {opt}
                        </label>
                    ))}
                </fieldset>
                {/* HOSPITAL */}
                <div>
                    <label className="block font-medium">{t("survey.hospitalLabel")}</label>
                    <input
                        value={answers.hospitalPref}
                        onChange={e => setAnswers(a => ({ ...a, hospitalPref: e.target.value }))}
                        type="text"
                        placeholder={t("survey.hospitalPlaceholder")}
                        className="w-full border-b border-gray-300 py-2 focus:outline-none"
                    />
                </div>
                <button
                    type="submit"
                    disabled={!isValid || submitting}
                    className={`bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition ${(!isValid || submitting) && "opacity-50 cursor-not-allowed"}`}
                >
                    {submitting ? t("survey.submitting") : t("survey.submit")}
                </button>
            </form>
        </div>
    );
};

export default Survey;