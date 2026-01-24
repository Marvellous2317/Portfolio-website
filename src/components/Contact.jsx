import { useState } from 'react';
import { motion } from 'framer-motion';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && message) {
      setFormStatus('Message sent! Thank you for reaching out!');
      setName('');
      setEmail('');
      setMessage('');

      setTimeout(() => {
        setFormStatus('');
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-mono font-bold text-center mb-16 text-white "
        >
          Get In <span className="text-cyan-400">Touch</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 shadow-[0_0_60px_rgba(34,211,238,0.2)]"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-slate-300 font-medium mb-2 text-lg">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-4 text-slate-100 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all outline-none text-lg"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-2 text-lg">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-4 text-slate-100 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all outline-none text-lg"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-2 text-lg">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="6"
                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-4 text-slate-100 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all outline-none resize-none text-lg"
                placeholder="Your message..."
              ></textarea>
            </div>

            {formStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 px-6 py-4 rounded-xl text-center"
              >
                {formStatus}
              </motion.div>
            )}

            <motion.button
              onClick={handleSubmit}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 60px rgba(34,211,238,0.8)',
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full font-mono bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Send Message
            </motion.button>
          </div>

          
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;