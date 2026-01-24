import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import JobSearchPic from "../assets/Job-search-page.png";
import Newslettercard from "../assets/Newsletter-card.png";
import WebdesignAgency from "../assets/Webdesign-Agency.png";
import TindogWebsite from "../assets/Tindog-Website.png";
import PricingTable from "../assets/Pricing-table.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'JobSearch Platform',
      description: 'A sample webpage where companies can post jobs and candidates can search and apply for jobs. ',
      image: JobSearchPic,
      tags: ['React', 'Node.js', 'Tailwind CSS'],
      link: ' https://marvellous2317.github.io/job-search-page/',
    },
    {
      id: 2,
      title: 'Newsletter Card',
      description: 'A Newsletter subscription card using form validation.',
      image: Newslettercard,
      tags: ['HTML', 'JavaScript', 'CSS'],
      link: 'https://marvellous2317.github.io/Newsletter-Card/',
    },
    {
      id: 3,
      title: 'Webdesign Agency',
      description: 'A sample webpage for a web design agency showcasing their services and portfolio.',
      image: WebdesignAgency,
      tags: ['HTML', 'CSS'],
      link: 'https://marvellous2317.github.io/Webdesign-agency/',
    },
    {
      id: 4,
      title: 'Tindog Website',
      description: 'A sample webpage for a Tindog website showcasing their services and portfolio.',
      image: TindogWebsite,
      tags: ['HTML', 'CSS', "Bootstrap"],
      link: 'https://marvellous2317.github.io/Tindog-Website/',
    },
    {
      id: 5,
      title: 'Pricing Table',
      description: 'A sample webpage for a pricing table showcasing different pricing plans.',
      image: PricingTable,
      tags: ['HTML', 'CSS'],
      link: 'https://marvellous2317.github.io/Pricing-table/',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className=" max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-mono font-bold text-center mb-16 text-white "
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -15,
                boxShadow: '0 0 60px rgba(168,85,247,0.4)',
              }}
              className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden transform transition-all duration-300 hover:border-purple-500/50"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-auto h-auto bg-slate-900"
              />
              <div className="p-6">
                <h3 className="text-2xl font-mono font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  className="font-mono flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;