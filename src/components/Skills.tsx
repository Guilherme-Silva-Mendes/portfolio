import { useRef } from 'react';
import { skills } from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const ref = useRef(null);

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="text-center mb-16">
          <h2 className="section-title">
            {t.skills.title} <span className="gradient-text">{t.skills.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t.skills.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

              <div className="relative p-6 rounded-xl bg-dark-secondary border border-white/5 hover:border-accent-cyan/30 transition-all duration-300">
                <div className="flex flex-col items-center gap-4">
                  <div
                    className="p-4 rounded-xl bg-dark-tertiary"
                    style={{
                      boxShadow: `0 0 30px ${skill.color}20`,
                    }}
                  >
                    <skill.icon
                      className="text-4xl"
                      style={{ color: skill.color }}
                    />
                  </div>

                  <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>

                  {/* Skill level bar */}
                  <div className="w-full h-1 bg-dark-tertiary rounded-full overflow-hidden">
                    <div
                      className="h-full w-full rounded-full"
                      style={{
                        background: `linear-gradient(to right, ${skill.color}, ${skill.color}80)`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
