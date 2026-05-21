import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
import Services from "./components/Services";
import Allies from "./components/Allies";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FansCRUD from "./components/FansCRUD";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <Allies />
      <Gallery />
      <Testimonials />
      <FansCRUD />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
