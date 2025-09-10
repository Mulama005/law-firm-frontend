import { motion } from "framer-motion";
import "./HeroSection.css";


function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-4 font-serif"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Justice. Integrity. Excellence.
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Providing trusted legal solutions with dedication and professionalism to serve your needs.
        </motion.p>
        
      </div>
    </section>
  );
}

export default HeroSection;
