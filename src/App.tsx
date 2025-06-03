import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/header';
import Hero from './Hero/hero';
import Quotes from './Quotes/quotes.tsx';
import Faqs from './FAQs/faqs';
import Footer from './Footer/footer';
import HowItWorks from "./HowItWorks/howItWorks.tsx";
import Gallery from "./Gallery/gallery.tsx";
import Survey from "./Steps/survey.tsx";
import ThankYou from "./Steps/thankYou.tsx";
import Services from "./Services/services.tsx";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            {/*<Sec1 />*/}
                            <Services />
                            {/*<Sec3 />*/}
                            {/*<Sec4 />*/}
                            <Quotes />
                            <HowItWorks/>
                            {/*<Review />*/}
                            <Faqs />
                            <Gallery/>
                            <Footer />
                        </>
                    }
                />
                <Route path="/survey" element={<Survey />} />
                <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;