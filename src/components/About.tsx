import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiCog, HiServer } from 'react-icons/hi';
import { SiDocker } from 'react-icons/si';
import { TbBrain, TbArrowsShuffle } from 'react-icons/tb';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: HiCode,
      title: t.about.highlights.cleanCode.title,
      description: t.about.highlights.cleanCode.description,
    },
    {
      icon: HiCog,
      title: t.about.highlights.automation.title,
      description: t.about.highlights.automation.description,
    },
    {
      icon: SiDocker,
      title: t.about.highlights.docker.title,
      description: t.about.highlights.docker.description,
    },
    {
      icon: TbArrowsShuffle,
      title: t.about.highlights.workflows.title,
      description: t.about.highlights.workflows.description,
    },
    {
      icon: TbBrain,
      title: t.about.highlights.aiAgents.title,
      description: t.about.highlights.aiAgents.description,
    },
    {
      icon: HiServer,
      title: t.about.highlights.backend.title,
      description: t.about.highlights.backend.description,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-secondary to-dark" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            {t.about.title} <span className="gradient-text">{t.about.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t.about.subtitle}</p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-6">
            {t.about.role} <span className="gradient-text">{t.hero.role}</span>
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">{t.about.bio}</p>

          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">{t.about.bioExtra}</p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-dark-tertiary/50 hover:bg-dark-tertiary transition-colors group"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 group-hover:from-accent-cyan/30 group-hover:to-accent-blue/30 transition-colors mb-4">
                <item.icon className="text-accent-cyan text-2xl" />
              </div>
              <h4 className="font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
