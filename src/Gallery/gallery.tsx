import React from "react";
import { useTranslation } from "react-i18next";
import boss from "../assets/gallery/boss.png";
import coordinator from "../assets/gallery/coordinator.png";
import me from "../assets/gallery/me.png";
import one from "../assets/gallery/brain surgery in China.jpg";
import two from "../assets/gallery/aerial view of the First Affiliated Hospital of Kunming Medical University.png";
import three from "../assets/gallery/hospital lab in china.jpg";
import four from "../assets/gallery/the First Affiliated Hospital of Kunming Medical University has introduced the Kanghua Dry Eye Detection System.jpg";
import five from "../assets/gallery/S2015_feature_health_china_Hospital_After.jpg.webp";
import six from "../assets/gallery/Foreigner in Chinese hospitals.jpg";
import nine from "../assets/gallery/Yunnan Cancer hospital.jpg";
import ten from "../assets/gallery/Yunnan_Province_First_People's_Hospital.jpg";
import eleven from "../assets/gallery/Yunnan Fuwai Cardiovascular Hospital, Kunming.jpg";

const Gallery: React.FC = () => {
    const { t } = useTranslation();

    const gallery = [
        {
            id: 1,
            src: boss,
            alt: "China recognition award"
        },
        {
            id: 2,
            src: coordinator,
            alt: "On behalf of GT Tourism, Medical tourism coordinator Minaj having meeting with healthcare professionals"
        },
        {
            id: 3,
            src: me,
            alt: "On behalf of GT Tourism, Medical tourism coordinator Minaj having meeting with healthcare professionals"
        },
        {
            id: 4,
            src: one,
            alt: "brain surgery in China"
        },
        {
            id: 5,
            src: two,
            alt: "aerial view of the First Affiliated Hospital of Kunming Medical University"
        },
        {
            id: 6,
            src: three,
            alt: "hospital lab in china"
        },
        {
            id: 7,
            src: four,
            alt: "the First Affiliated Hospital of Kunming Medical University has introduced the Kanghua Dry Eye Detection System"
        },
        {
            id: 8,
            src: five,
            alt: "China Hospital"
        },
        {
            id: 9,
            src: six,
            alt: "Foreigner in Chinese hospitals"
        },
        {
            id: 10,
            src: nine,
            alt: "Yunnan Cancer hospital"
        },
        {
            id: 11,
            src: ten,
            alt: "Yunnan Province First People's Hospital"
        },
        {
            id: 12,
            src: eleven,
            alt: "Yunnan Fuwai Cardiovascular Hospital, Kunming"
        },
    ]



    return (
        <section className="py-12 px-4 md:px-16 bg-white">
            <h2 className="text-3xl font-semibold text-center mb-10 text-[#1C398E]">
                {t("gallery.heading")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.map((image) => (
                    <div
                        key={image.id}
                        className="w-full h-auto overflow-hidden rounded-lg shadow-sm"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;