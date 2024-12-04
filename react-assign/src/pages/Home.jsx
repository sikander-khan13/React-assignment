import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Train from "../components/Train";
import Era from "../components/Era";

const Home = () => (
  <div>
    <Navbar />
    <Hero />
    <Partners/>
    <Features />
    <Train/>
    <Testimonials />
    <Stats />
    <Era/>
    <Footer />
  </div>
);

export default Home;