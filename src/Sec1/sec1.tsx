const countries = [
    {
        name: "India",
        flag: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/india-flag.webp",
    },
    {
        name: "Turkey",
        flag: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/turkey-flag.webp",
    },
    {
        name: "Thailand",
        flag: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/thailand-flag.webp",
    },
    {
        name: "UAE",
        flag: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/uae-flag.webp",
    },
    {
        name: "Egypt",
        flag: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/egypt-flag.webp",
    },
    {
        name: "Germany",
        flag: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/germany-flag.webp",
    },
];

const Sec1 = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">Top Medical Destinations</h2>
                <p className="text-gray-600 mb-10">
                    Our network spans the top medical tourism hubs worldwide - giving you the choice of cities, doctors
                    and price.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {countries.map((country, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-5 py-3 bg-blue-50 rounded-xl border border-blue-300 shadow-sm hover:shadow-md transition"
                        >
                            <img
                                src={country.flag}
                                alt={`${country.name} Flag`}
                                width={24}
                                height={16}
                                className="object-contain"
                                loading="lazy"
                            />
                            <span className="font-medium text-blue-900">{country.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sec1;