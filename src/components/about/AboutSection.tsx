import { motion } from 'framer-motion';
import { about, skills } from '@/data/content.tsx';
import SectionHeading from '@/components/shared/SectionHeading';

export default function AboutSection() {
  const topSkills = [
    ...skills.frontend.slice(0, 3),
    ...skills.backend.slice(0, 2),
    ...skills.tools.slice(0, 1),
  ];

  return (
    <section id='about' className='py-24 relative'>
      <div className='container px-4 max-w-4xl mx-auto'>
        <SectionHeading title='About' tag='whoami' />

        <div className='grid md:grid-cols-2 gap-8 mt-12'>
          {/* Bio terminal */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='glass-panel rounded-lg p-5'
          >
            <div className='flex items-center gap-2 mb-4'>
              <span className='w-3 h-3 rounded-full bg-destructive/60' />
              <span className='w-3 h-3 rounded-full bg-yellow-500/60' />
              <span className='w-3 h-3 rounded-full bg-primary/60' />
              <span className='ml-2 font-mono text-xs text-muted-foreground'>
                about.md
              </span>
            </div>
            <p className='font-body text-sm text-foreground/80 leading-relaxed mb-4'>
              {about.bio}
            </p>
            <p className='font-mono text-xs text-muted-foreground italic'>
              {'// '}
              {about.philosophy}
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-4'
          >
            <div className='font-mono text-xs text-primary mb-2'>
              <span className='text-muted-foreground'>const</span> highlights{' '}
              <span className='text-muted-foreground'>=</span> [
            </div>
            {about.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className='font-mono text-sm text-foreground/70 pl-4'
              >
                <span className='text-primary'>"</span>
                {h}
                <span className='text-primary'>"</span>,
              </motion.div>
            ))}
            <div className='font-mono text-xs text-muted-foreground'>];</div>

            {/* Tech badges */}
            <div className='flex flex-wrap gap-2 mt-6'>
              {topSkills.map(skill => (
                <span
                  key={skill.name}
                  className='flex items-center gap-1.5 px-2 py-1 text-xs font-mono rounded border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors'
                >
                  <span style={{ color: skill.color }}>{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
