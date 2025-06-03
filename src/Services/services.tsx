import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();

    const services = t('services.items', { returnObjects: true }) as {
        title: string;
        description: string;
    }[];

    const openWhatsApp = () => {
        const phone = '8801805205869';
        const message = encodeURIComponent(
            'Hello, please contact me regarding https://www.GTT.com.bd, Thank you!'
        );

        const isMobile = /iPhone|Android|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

        const link = isMobile
            ? `whatsapp://send?phone=${phone}&text=${message}`
            : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;

        window.open(link, '_blank');
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {t("services.heading")}
                </h2>
                <p className="text-gray-600 mb-12">{t("services.intro")}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-blue-50 rounded-xl p-6 flex gap-4 items-start text-left shadow-sm hover:shadow-md transition"
                        >
                            <img
                                src={`https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/serv-icon0${index + 1}.webp`}
                                alt={service.title}
                                width={40}
                                height={40}
                                className="shrink-0"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">{service.title}</h3>
                                <p className="text-gray-600 mt-1">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <a
                        onClick={openWhatsApp}
                        href="#"
                        className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium rounded-full px-6 py-2 transition"
                    >
                        <img
                            src="https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/whatsaap-icon01.webp"
                            alt="Chat with Us"
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                        {t("services.chatButton")}
                    </a>
                    <p className="mt-4 text-sm text-gray-500">{t("services.chatNote")}</p>
                </div>
            </div>
        </section>
    );
};

export default Services;