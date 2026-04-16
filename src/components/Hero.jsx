import { motion } from "framer-motion";
import StatsCards from "./StatsCards";

export default function Hero() {
  return (
    <section className="px-6 pt-24 md:pt-34 pb-10">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[70px] sm:text-[40px] md:text-[90px] text-[#161616] font-semibold leading-[1] md:leading-[0.95] tracking-[-0.05em]"
      >
        Get Hyped. Get <br className="hidden md:block" /> Noticed. Get Results.
      </motion.h1>

      <p className="mt-6 text-[1.1em] md:text-[1.4em] text-[#161616] leading-[1.3em] font-semibold tracking-[-0.03em]">
        Klaar met gokken op content <br />
        die niets oplevert?
      </p>
      <div className="mt-10 md:mt-0">
        <StatsCards />
      </div>
    </section>
  );
}