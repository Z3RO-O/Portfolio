import { motion } from 'framer-motion';
import { skills } from '@/data/content.tsx';
import SectionHeading from '@/components/shared/SectionHeading';
import SkillsGlobe from '@/three/SkillsGlobe';

const categories = [
  { key: 'frontend' as const, label: 'Frontend', color: 'text-primary' },
  { key: 'backend' as const, label: 'Backend', color: 'text-neon-blue' },
  { key: 'tools' as const, label: 'Tools', color: 'text-neon-cyan' },
  { key: 'os' as const, label: 'Operating Systems', color: 'text-foreground' },
];

export default function SkillsSection() {
  return (
    <section id='skills' className='relative py-24'>
      <div className='container mx-auto max-w-6xl px-4'>
        <SectionHeading title='Skills' tag='cat skills.globe' />

        <div className='mt-12 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className='glass-panel overflow-hidden rounded-2xl p-3 sm:p-4'
          >
            <div className='mb-4 flex items-center justify-between gap-3 border-b border-border/60 px-3 pb-3'>
              <div>
                <p className='font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground'>
                  interactive skill orbit
                </p>
                <p className='font-body text-sm text-foreground/80'>
                  Drag to rotate the stack constellation.
                </p>
              </div>
              <div className='hidden rounded-full border border-border/70 bg-secondary/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-primary sm:block'>
                pointer enabled
              </div>
            </div>

            <SkillsGlobe skillsByCategory={skills} />
          </motion.div>

          <div className='space-y-4'>
            {categories.map((cat, index) => (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className='glass-panel rounded-2xl p-5'
              >
                <div className='mb-4 flex items-center justify-between gap-4'>
                  <h3
                    className={`font-display text-sm tracking-[0.28em] ${cat.color}`}
                  >
                    {cat.label}
                  </h3>
                  <span className='font-mono text-xs text-muted-foreground'>
                    {skills[cat.key].length.toString().padStart(2, '0')}
                  </span>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {skills[cat.key].map(skill => (
                    <span
                      key={skill.name}
                      className='flex items-center rounded-full border border-border/70 bg-secondary/60 px-3 py-1.5 font-mono text-[11px] leading-none uppercase tracking-[0.16em] text-foreground/80'
                    >
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
