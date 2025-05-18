const LowestQuotesAssuredSection = () => {
    const quotes = [
        {title: 'Knee Replacement', price: '$4000', icon: '🦵'},
        {title: 'Hip Replacement', price: '$5500', icon: '🦴'},
        {title: 'Brain Tumor', price: '$5000', icon: '🧠'},
        {title: 'Heart Bypass Surgery', price: '$4500', icon: '❤️'},
        {title: 'Valve Replacement', price: '$9500', icon: '🫀'},
        {title: 'Breast Cancer', price: '$5000', icon: '🎗️'},
        {title: 'Lung Cancer', price: '$5500', icon: '🫁'},
        {title: 'Rhinoplasty', price: '$1800', icon: '👃'},
        {title: 'Breast Implants', price: '$2750', icon: '🗿'},
        {title: 'Hair Transplant', price: '$1400', icon: '💇'},
        {title: 'Cervical Cancer', price: '$4500', icon: '🧬'},
        {title: 'Hysterectomy', price: '$3000', icon: '🧫'}
    ];

    return (
        <section className="px-4 py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-4">Lowest Quotes Assured</h2>
            <p className="text-center text-gray-500 mb-12">We constantly negotiate better prices and alternatives
                without compromising treatment quality. Our prices are consistently lower.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {quotes.map((quote, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
                        <div className="text-5xl mb-4">{quote.icon}</div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">{quote.title}</h3>
                        <p className="text-gray-600">Starting <span className="font-bold">{quote.price}</span></p>
                        <button className=" mt-4 text-red-500 border-none">Get Quote</button>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-12 gap-4">
                <button className="bg-red-500 text-white px-6 py-3 rounded-full">Get Quote</button>
                <button className="bg-green-500 text-white px-6 py-3 rounded-full">Chat</button>
            </div>
        </section>
    );
};

export default LowestQuotesAssuredSection;