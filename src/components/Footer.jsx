import { Mail} from 'lucide-react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faWordpress, faXTwitter } from "@fortawesome/free-brands-svg-icons";




function Footer() {
const year = new Date().getFullYear();
  
return (
    <footer className="bg-slate-950/90 border-t border-slate-800/50 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">

        <div className="mb-10">
          <p className="font-mono text-slate-400 mb-4 text-lg">
            Connect with me on:
          </p>

          <div className="grid grid-cols-3 md:flex justify-center gap-3 sm:gap-4 md:gap-6">
            <motion.a
              href="https://ng.linkedin.com/in/marvellous-braimah-97a711335"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 40px rgba(34,211,238,0.8)',
              }}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-white text-lg sm:text-xl md:text-2xl" />
            </motion.a>

            <motion.a
              href="https://x.com/marvellousbh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 40px rgba(56,189,248,0.8)',
              }}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-white text-lg sm:text-xl md:text-2xl" />
            </motion.a>

            <motion.a
              href="mailto:marvellousbraimah71@gmail.com"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 40px rgba(168,85,247,0.8)',
              }}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </motion.a>

            <motion.a
              href="https://instagram.com/marvellousbh/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 40px rgba(236,72,153,0.8)',
              }}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-white text-lg sm:text-xl md:text-2xl" />
            </motion.a>

            <motion.a
              href="https://marvellousbraimah.wordpress.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 40px rgba(59,130,246,0.8)',
              }}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <FontAwesomeIcon icon={faWordpress} className="text-white text-lg sm:text-xl md:text-2xl" />
            </motion.a>

            <motion.a
              href="https://github.com/Marvellous2317"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 40px rgba(100,116,139,0.8)',
              }}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className="text-white text-lg sm:text-xl md:text-2xl" />
            </motion.a>
          </div>
        </div>

        <p className="font-mono text-slate-500 text-sm mt-6">
          © {year} Marvellous .O. Braimah
        </p>

      </div>
    </footer>
  );
}


export default Footer;