import { motion } from 'framer-motion';
import 'devicon/devicon.min.css';

          

function Skills() {
  const skills = [
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'HTML', icon: 'devicon-html5-plain colored' },
    { name: 'CSS', icon: 'devicon-css3-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-mono font-bold text-center mb-16 text-white "
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100, 
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.2,
                delay: (index % 4) * 0.2, 
              }}
              whileHover={{
                y: -10,
                boxShadow: '0 0 40px rgba(34,211,238,0.4)',
              }}
              className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 transform transition-all duration-300 hover:border-cyan-500/50"
            >
              <div
                className={`bg-slate-900/80 w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-3xl mb-4`}
              >
                <i className={`${skill.icon} text-5xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;