import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/header';
import Hero from './Hero/hero';
import Sec2 from './Sec2/sec2';
import Sec5 from './Sec5/sec5';
import Faqs from './FAQs/faqs';
import Footer from './Footer/footer';
import FollowUp from './FollowUp/followUp';
import HowItWorks from "./HowItWorks/howItWorks.tsx";
import Gallery from "./Gallery/gallery.tsx";
import FinalReport from "./FinalReport/finalReport.tsx";

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
                            <Sec2 />
                            {/*<Sec3 />*/}
                            {/*<Sec4 />*/}
                            <Sec5 />
                            <HowItWorks/>
                            {/*<Review />*/}
                            <Faqs />
                            <Gallery/>
                            <Footer />
                        </>
                    }
                />
                <Route path="/follow-up" element={<FollowUp />} />
                <Route path="/final-report" element={<FinalReport />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;