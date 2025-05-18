const services = [
    {
        title: "Medical Opinion and Cost Estimations",
        description: "Expert opinions and cost estimates.",
        icon: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/serv-icon07.webp",
    },
    {
        title: "Pre-Travel Consultations",
        description: "Understand your procedure before traveling.",
        icon: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/serv-icon01.webp",
    },
    {
        title: "Visa Assistance",
        description: "Complete medical visa assistance.",
        icon: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/serv-icon02.webp",
    },
    {
        title: "Money Exchange",
        description: "Convenient currency exchange services in your city.",
        icon: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/serv-icon03.webp",
    },
    {
        title: "Interpreters and Translators",
        description: "Fluent professionals to break language barriers at every step.",
        icon: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/serv-icon04.webp",
    },
    {
        title: "Transportation Assistance",
        description: "Complimentary airport transfers.",
        icon: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/serv-icon05.webp",
    },
    {
        title: "Accommodation Options",
        description: "Near the hospital and matching your budget and needs.",
        icon: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/noun-hotel-star.svg",
    },
    {
        title: "Admission, Appointment, Pharma Care",
        description: "Full coordination of medical logistics.",
        icon: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/serv-icon06.webp",
    },
    {
        title: "Private Duty Nursing",
        description: "Arrangements of private nursing care as needed.",
        icon: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/serv-icon08.webp",
    },
];

const Sec2 = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services Cover Every Need</h2>
                <p className="text-gray-600 mb-12">
                    You will be assisted by a dedicated case manager from our team. List of services you can expect from
                    us, for <strong>FREE</strong>!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index}
                             className="bg-blue-50 rounded-xl p-6 flex gap-4 items-start text-left shadow-sm hover:shadow-md transition">
                            <img src={service.icon} alt={service.title} width={40} height={40} className="shrink-0"/>
                            <div>
                                <h3 className="font-semibold text-gray-800">{service.title}</h3>
                                <p className="text-gray-600 mt-1">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <a
                        href="https://api.whatsapp.com/send?phone=919971616131&text=Hello,%20please%20contact%20me%20regarding%20https://www.GTT.com?source=wpchat_HPSS,%20Thank%20you!"
                        className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium rounded-full px-6 py-2 transition"
                    >
                        <img
                            src="https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/whatsaap-icon01.webp"
                            alt="Chat with Us"
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                        Chat
                    </a>
                    <p className="mt-4 text-sm text-gray-500">
                        Our services are <strong>FREE</strong> and by using our services your hospital bill does not
                        increase!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Sec2;