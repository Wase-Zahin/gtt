import './App.css'
import Header from "./Header/header.tsx";
import Hero from "./Hero/hero.tsx";
import Sec1 from "./Sec1/sec1.tsx";
import Sec2 from "./Sec2/sec2.tsx";
import Sec3 from "./Sec3/sec3.tsx";
import Sec4 from "./Sec4/sec4.tsx";
import Sec5 from "./Sec5/sec5.tsx";
import Review from "./Review/review.tsx";
import Faqs from "./FAQs/faqs.tsx";
import Footer from "./Footer/footer.tsx";

function App() {
    return (
        <div className="flex flex-col">
            <Header/>
            <Hero/>
            <Sec1/>
            <Sec2/>
            <Sec3/>
            <Sec4/>
            <Sec5/>
            <Review/>
            <Faqs/>
            <Footer/>
        </div>
    )
}

export default App