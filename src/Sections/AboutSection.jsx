import React from "react";
import { FaArrowDown } from "react-icons/fa";
import CustomButton from "../components/CustomButton";
import { PiArrowRightLight } from "react-icons/pi";

const AboutSection = () => {
  return (
    <section className="min-h-screen flex flex-col px-8 md:px-16 lg:px-24 py-12 md:py-10 relative max-w-[1600px] mx-auto text-[#222222]">
      
      <div className="mb-16 md:mb-16 ml-0 md:ml-11 max-w-6xl">
        <h1 className="text-[3.5em] leading-[.95em] font-semibold tracking-[-0.05em]">
          Wij maken content die opvalt. Die <br />
          blijft hangen. Die jouw doelgroep <br />
          raakt en jouw merk in beweging <br />
          brengt. Snel, krachtig en energiek.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[50px] md:gap-[140px] items-end justify-start ml-0 md:ml-[-66px]">
        
 <div className="lg:col-span-3 md:col-span-12">
  <div className="h-[305px] w-[220px] overflow-hidden rounded-2xl md:rotate-0 rotate-[5deg]">

    <img
      src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
      alt="Portrait"
      className="w-full h-full object-cover hidden md:block"
    />
    <video
      src="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover md:hidden scale-110"
    />

  </div>
</div>

        <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-end">
          <div className="max-w-xl">

            <div className="space-y-1">
              <p className="text-[1.4em] leading-[1.1em] font-semibold tracking-[-0.03em]">
                We stoppen niet bij mooie plaatjes en
              </p>
              <p className="text-[1.4em] leading-[1.1em] font-semibold tracking-[-0.03em]">
                vette beelden. We maken het meetbaar.
              </p>
              <p className="text-[1.4em] leading-[1.1em] font-semibold tracking-[-0.03em]">
                Zo weet je precies wat werkt en wat niet.
              </p>
              <p className="text-[1.4em] leading-[1.1em] font-semibold tracking-[-0.03em]">
                Nooit meer content zonder strategie.
              </p>
              <p className="text-[1.4em] leading-[1.1em] font-semibold tracking-[-0.03em]">
                Nooit meer content zonder resultaat.
              </p>
            </div>

            <div className="pt-4">
              <CustomButton
                text="Leer ons kennen"
                icon={PiArrowRightLight}
                iconColorClass="text-[#f7f2ea]"
                className="bg-transparent border-[1.5px] border-black bg-white text-black [&>div]:bg-black"
              />
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-8 md:right-16 lg:right-32 group">
        <div className="w-[40px] h-[40px] border border-black rounded-xl flex items-center justify-center cursor-pointer relative overflow-hidden">

          <FaArrowDown className="text-[#ff4704] text-[18px] absolute transition-all duration-500
            group-hover:translate-y-3 group-hover:opacity-0" />

          <FaArrowDown className="text-[#ff4704] text-[18px] absolute transition-all duration-500
            -translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" />

        </div>
      </div>

    </section>
  );
};

export default AboutSection;