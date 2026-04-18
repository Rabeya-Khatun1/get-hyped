import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../Sections/Hero";
import AboutSection from "../Sections/AboutSection";
import MySwiper from "../Sections/SliderSection";
import SelectedWorkSection from "../Sections/SelectedWorkSection";


export default function Home() {
  return (
    <div className="bg-primary min-h-screen">
      <Hero />
      <AboutSection></AboutSection>
      <MySwiper></MySwiper>
      <SelectedWorkSection></SelectedWorkSection>
    </div>
  );
}