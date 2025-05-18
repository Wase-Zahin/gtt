const hospitals = [
    {
        country: 'India',
        flag: '🇮🇳',
        hospitals: [
            {
                name: 'Medanta',
                location: 'Gurgaon',
                image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/Medanta.webp'
            },
            {
                name: 'Indraprastha Apollo',
                location: 'New Delhi',
                image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/indraprastha%20apollo%20hospital%20new%20delhi.webp'
            },
            {
                name: 'Kokilaben',
                location: 'Mumbai',
                image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/kokilaben%20hospital%20mumbai.webp'
            },
            {
                name: 'Apollo',
                location: 'Chennai',
                image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/apollo%20hospital%20%20chennai.webp'
            }
        ]
    },
    {
        country: 'Turkey',
        flag: '🇹🇷',
        hospitals: [
            {
                name: 'Medical Park',
                location: 'Istanbul',
                image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/Medical%20Park,%20Istanbul.webp'
            },
            {
                name: 'Memorial Hospitals',
                location: 'Istanbul',
                image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/Memorial%20Hospital%20istanbul.webp'
            }
        ]
    },
    {
        country: 'UAE',
        flag: '🇦🇪',
        hospitals: [
            {
                name: 'Burjeel',
                location: 'Abu Dhabi',
                image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/Burjeel,%20Abu%20Dhabi.webp'
            },
            {
                name: 'Saudi German',
                location: 'Dubai',
                image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/Saudi%20German,%20Dubai.webp'
            }
        ]
    },
    {
        country: 'Thailand',
        flag: '🇹🇭',
        hospitals: [
            {
                name: 'Bumrungrad',
                location: 'Bangkok',
                image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/Bumrungrad,%20Bangkok.webp'
            },
            {
                name: 'Bangkok Hospital',
                location: 'Bangkok',
                image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/Bangkok%20Hospital,%20Bangkok,%20Bangkok.webp'
            }
        ]
    },
    {
        country: 'Germany',
        flag: '🇩🇪',
        hospitals: [
            {
                name: 'Charite',
                location: 'Berlin',
                image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/Charite,%20Berlin.webp'
            },
            {
                name: 'Heidelberg University',
                location: 'Heidelberg',
                image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/Heidelberg%20University,%20Heidelberg.webp'
            }
        ]
    }
];

const Sec4 = () => {
    return (
        <section className="py-12 px-4 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Network of Top Hospitals</h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
                We rigorously vet hospitals before adding to our panel, ensuring you receive the best care. We have
                in-depth knowledge of hospitals in every country we operate in.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hospitals.map((region, index) => (
                    <div key={index} className="bg-white rounded-2xl p-4 shadow-md">
                        <div className="flex items-center mb-4">
                            <span className="text-2xl mr-2">{region.flag}</span>
                            <h3 className="text-xl font-semibold">{region.country}</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {region.hospitals.map((hospital, idx) => (
                                <div key={idx}
                                     className="rounded-xl overflow-hidden shadow hover:scale-105 transition-transform">
                                    <img src={hospital.image} alt={hospital.name} className="w-full h-40 object-cover"/>
                                    <div className="p-4">
                                        <h4 className="font-semibold">{hospital.name}</h4>
                                        <p className="text-gray-600 text-sm">{hospital.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Sec4;