import { motion } from "framer-motion";
import StatsCards from "./StatsCards";

export default function Hero() {
  return (
    <section className="px-6 py-10">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[88px] text-[#161616] font-semibold leading-[0.95]  tracking-[-0.05em]"
      >
       Get Hyped. Get <br /> Noticed. Get Results.
      </motion.h1>

      {/* Subtitle */}
      <p className="mt-6 text-[1.75em] text-[#161616] leading-[1.3em] font-semibold tracking-[-0.03em">
       Klaar met gokken op content <br />
die niets oplevert?
      </p>

      <StatsCards></StatsCards>

    </section>
  );
}