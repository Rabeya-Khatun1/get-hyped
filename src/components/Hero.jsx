import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-6 py-16">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Get Hyped. Get <br />
        Noticed. Get Results.
      </motion.h1>

      {/* Subtitle */}
      <p className="mt-6 text-gray-700 max-w-md">
        Klaar met gokken op content die niets oplevert?
      </p>

      {/* Cards (10M+, 30+) */}
      <div className="mt-10 flex gap-4 overflow-hidden">
        <div className="bg-blue-500 text-black p-6 rounded-2xl text-2xl font-bold">
          10M+
        </div>
        <div className="bg-green-400 text-black p-6 rounded-2xl text-2xl font-bold">
          30+
        </div>
      </div>
    </section>
  );
}