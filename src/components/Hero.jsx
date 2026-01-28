import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ProfilePic from "../assets/Marvellous.png";

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
       
        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center"
        >
          <motion.div
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-50"></div>
            <img
              src={ProfilePic}
              loading= "lazy"
              alt="Marvellous"
              className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full object-cover object-[center_30%] ring-8 ring-cyan-500/40 shadow-[0_0_80px_rgba(34,211,238,0.5)]"
            />
          </motion.div>
        </motion.div> 
        
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-5xl sm:text-7xl font-bold mb-6"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 ">
              Marvellous!
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-mono mb-8"
          >
            <TypeAnimation
              sequence={[
                "I'm a Website Developer!",
                2000,
                "I'm a Problem Solver!",
                2000,
                "I'm a Digital Architect!",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className=" text-2xl sm:text-3xl text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-sans text-slate-300 text-xl mb-8 leading-relaxed max-w-2xl"
          >
            I create beautiful, responsive websites that don’t just look good, they work.
From performance to user experience, I focus on building products that make life easier for the people using them.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 50px rgba(34,211,238,0.8)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r font-mono from-cyan-500 via-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
          >
            Work With Me 
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default Hero;