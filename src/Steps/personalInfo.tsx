import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface PersonalInfoState {
    name: string;
    email: string;
    country: string;
    phone: string;
    problem: string;
}

const PersonalInfo: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [formData, setFormData] = useState<PersonalInfoState>({
        name: "",
        email: "",
        country: t("form.countryOptions.default"),
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
        navigate("/survey", { state: formData });
    };

    return (
        <div className="relative z-10 container mx-auto h-full flex flex-col md:flex-row items-center justify-end px-6 lg:px-6">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
                {/* Heading */}
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    {t("form.heading")}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Patient Name */}
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        placeholder={t("form.placeholders.name")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    {/* Email */}
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder={t("form.placeholders.email")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    {/* Country */}
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option>{t("form.countryOptions.default")}</option>
                        <option>{t("form.countryOptions.india")}</option>
                        <option>{t("form.countryOptions.china")}</option>
                    </select>

                    {/* Phone (with +880 prefix disabled) */}
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
                            placeholder={t("form.placeholders.phone")}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Problem Description */}
                    <textarea
                        name="problem"
                        value={formData.problem}
                        onChange={handleChange}
                        rows={4}
                        placeholder={t("form.placeholders.problem")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                        {t("form.submit")}
                    </button>
                </form>

                {/* Terms Text */}
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