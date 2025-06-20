import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type CountryKey = 'Bangladesh' | 'Thailand' | 'China';

interface FormData {
    personal: {
        name: string;
        email: string;
        country: CountryKey;
        phone: string;
        problem: string;
    };
    answers: {
        age: string;
        doctorPref: string;
        timing: string;
        hospitalPref: string;
    };
}

interface helperFunc {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const code: Record<CountryKey, string> = {
    Bangladesh: "+880",
    China: "+86",
    Thailand: "+66"
};

const PersonalInfo: React.FC<helperFunc> = ({ setIsModalOpen }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [formData, setFormData] = useState<FormData>({
        personal: {
            name: "",
            email: "",
            country: "Bangladesh",
            phone: "",
            problem: "",
        },
        answers: {
            age: "",
            doctorPref: "",
            timing: "",
            hospitalPref: ""
        }
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            personal: {
                ...prev.personal,
                [name]: value
            }
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const fullPhone = `${code[formData.personal.country]}${formData.personal.phone}`;
        const finalData = {
            ...formData,
            personal: {
                ...formData.personal,
                phone: fullPhone
            }
        };

        navigate("/survey", { state: finalData });

        setIsModalOpen(false);
    };

    return (
        <div className="relative z-10 container mx-auto h-full flex flex-col md:flex-row items-center justify-end px-6 lg:px-6">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    {t("form.heading")}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        required
                        name="name"
                        value={formData.personal.name}
                        onChange={handleChange}
                        type="text"
                        placeholder={t("form.placeholders.name")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    <input
                        required
                        name="email"
                        value={formData.personal.email}
                        onChange={handleChange}
                        type="email"
                        placeholder={t("form.placeholders.email")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    <select
                        required
                        name="country"
                        value={formData.personal.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="Bangladesh">{t("form.countryOptions.default")}</option>
                        <option value="China">{t("form.countryOptions.china")}</option>
                        <option value="Thailand">{t("form.countryOptions.thailand")}</option>
                    </select>

                    <div className="flex">
                        <input
                            type="text"
                            value={code[formData.personal.country]}
                            disabled
                            className="w-20 px-4 py-3 border border-gray-300 rounded-l-lg bg-gray-100 cursor-not-allowed"
                        />
                        <input
                            required
                            name="phone"
                            value={formData.personal.phone}
                            onChange={handleChange}
                            type="tel"
                            placeholder={t("form.placeholders.phone")}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <textarea
                        required
                        name="problem"
                        value={formData.personal.problem}
                        onChange={handleChange}
                        rows={4}
                        placeholder={t("form.placeholders.problem")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full cursor-pointer py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                        {t("form.submit")}
                    </button>
                </form>

                <p className="text-xs text-gray-500 mt-4">
                    {t("form.termsPrefix")}{" "}
                    <a href="#" className="text-blue-600 underline">
                        {t("form.termsLink1")}
                    </a>{" "}
                    {t("form.and")}{" "}
                    <a href="#" className="text-blue-600 underline">
                        {t("form.termsLink2")}
                    </a>{" "}
                    {t("form.termsSuffix")}
                </p>
            </div>
        </div>
    );
};

export default PersonalInfo;