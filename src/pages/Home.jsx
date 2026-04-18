import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../Sections/Hero";
import AboutSection from "../Sections/AboutSection";
import SliderSection from "../Sections/SliderSection";
import MySwiper from "../Sections/SliderSection";


export default function Home() {
  return (
    <div className="bg-primary min-h-screen">
      <Hero />
      <AboutSection></AboutSection>
      {/* <SliderSection></SliderSection> */}
      <MySwiper></MySwiper>
    </div>
  );
}