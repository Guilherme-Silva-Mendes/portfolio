import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiBriefcase } from 'react-icons/hi';
import { useLanguage } from '../i18n/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            {t.experience.title}{' '}
            <span className="gradient-text">{t.experience.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t.experience.subtitle}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-blue to-transparent" />

          {t.experience.items.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue animate-pulse-glow z-10"
              />

              {/* Content Card */}
              <div
                className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative p-6 rounded-xl bg-dark-secondary border border-white/5 hover:border-accent-cyan/30 transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="absolute -left-3 top-6 md:hidden w-6 h-6 rounded-full bg-dark-secondary border-2 border-accent-cyan flex items-center justify-center">
                    <HiBriefcase className="text-accent-cyan text-xs" />
                  </div>

                  {/* Period Badge */}
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-accent-cyan bg-accent-cyan/10 rounded-full border border-accent-cyan/20">
                    {exp.period}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:gradient-text transition-all duration-300">
                    {exp.role}
                  </h3>

                  <p className="text-accent-cyan mb-4">{exp.company}</p>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.2 + 0.4 + i * 0.1 }}
                        className="flex items-start gap-2 text-gray-400 text-sm"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan/50 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Decorative gradient */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-cyan/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
