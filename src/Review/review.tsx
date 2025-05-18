import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const patients = [
    {name: "Kabir Zubairu", image: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/KABIR-ZUBAIRU.webp"},
    {name: "Namagembe Winnie", image: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/Namagembe-Winnie.webp"},
    {
        name: "M.Rahman Anan Faruque",
        image: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/M.Rahman-Faruque.webp"
    },
    {name: "Shahdat Hossain", image: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/shahdat-hossain.webp"},
    {name: "Addisu", image: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/Addisu.webp"},
    {name: "Johnson Marun", image: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/Johnson-Marun.webp"},
];

const Review: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50 text-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                {/* Google Rating Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                            alt="Google"
                            className="w-10 h-10"
                        />
                        <div className="text-left">
                            <div className="text-sm font-semibold">Google Rating</div>
                            <div className="text-yellow-400 text-xl font-bold">4.7 ★★★★★</div>
                            <a href="#" className="text-blue-500 text-sm underline">
                                See all our reviews
                            </a>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <h2 className="text-3xl font-bold text-center mb-2">Satisfied Patients, Proud Service</h2>
                <p className="text-blue-600 text-center font-medium mb-4">
                    100,000+ patients have trusted us since 2016
                </p>

                {/* Testimonial */}
                <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
                    My experience with GTT Health has been splendid and very rewarding. I had all the support and
                    guidance to
                    make my Medical Tourism to BLK-MAX Hospital, Pisa Road - New Delhi hassle free. The staff are very
                    courteous
                    and always willing to help patients. Also cost-saving measures — without compromising quality
                    standards —
                    were proffered for the overall budget targets of patient. I will recommend this Organization to any
                    prospective patient that may seek medical care overseas.
                </p>

                {/* CTA */}
                <div className="text-center mb-10">
                    <a
                        href="#"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                    >
                        View All Reviews
                    </a>
                </div>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Pagination]}
                    pagination={{clickable: true}}
                    spaceBetween={20}
                    breakpoints={{
                        320: {slidesPerView: 1},
                        640: {slidesPerView: 2},
                        1024: {slidesPerView: 3},
                    }}
                    className="!px-2"
                >
                    {patients.map((patient, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex flex-col items-center bg-white rounded-xl shadow-md py-6 px-4 mx-2"
                        >
                            <img
                                src={patient.image}
                                alt={patient.name}
                                className="rounded-full mb-4 w-28 h-28 object-cover border-4 border-blue-100"
                            />
                            <p className="font-semibold text-lg text-center">{patient.name}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Review;