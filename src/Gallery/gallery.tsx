import React from "react";
import { useTranslation } from "react-i18next";

const Gallery: React.FC = () => {
    const { t } = useTranslation();

    const placeholderImages = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        src: `https://placehold.co/400x250?text=Image+${i + 1}`,
        alt: `Placeholder Image ${i + 1}`,
    }));

    return (
        <section className="py-12 px-4 md:px-16 bg-white">
            <h2 className="text-3xl font-semibold text-center mb-10 text-[#1C398E]">
                {t("gallery.heading")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {placeholderImages.map((image) => (
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