import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(34,211,238,0.1)] z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 "
          >
            Marvellous
          </motion.div>

          
          <div className="hidden md:flex space-x-8">
            {['home', 'skills', 'projects', 'contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                whileHover={{ scale: 1.1 }}
                className="font-sans text-slate-300 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] transition-all duration-300 text-lg capitalize"
              >
                {item}
              </motion.button>
            ))}
          </div>

          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-slate-800/90 backdrop-blur-xl rounded-b-2xl border-t border-cyan-500/20 overflow-hidden"
            >
              {['home', 'skills', 'projects', 'contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-4 px-6 text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all capitalize text-lg"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;