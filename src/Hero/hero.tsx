import React from "react";
import hero from "../assets/hero.png";
import PersonalInfo from "../Steps/personalInfo.tsx";

const Hero: React.FC = () => {
    return (
        <section className="relative w-full  py-12 md:py-20 overflow-hidden">
            {/* Background image */}
            <img
                src={hero}
                alt="Hero Background"
                className="absolute inset-0 w-full min-h-full object-cover"
            />
            <div className="absolute inset-0 "></div>
            <PersonalInfo/>
        </section>
    );
};

export default Hero;