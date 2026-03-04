import { motion } from 'framer-motion';
import { experience } from '@/data/content.tsx';
import SectionHeading from '@/components/shared/SectionHeading';

export default function ExperienceSection() {
  return (
    <section id='experience' className='py-24 relative'>
      <div className='container px-4 max-w-3xl mx-auto'>
        <SectionHeading title='Experience' tag='career.log' />

        <div className='mt-12 relative'>
          {/* Vertical line */}
          <div className='absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border' />

          <div className='space-y-10'>
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className='relative pl-12 md:pl-16'
              >
                {/* Dot */}
                <div className='absolute left-[11px] md:left-[19px] top-1 w-3 h-3 rounded-full border-2 border-primary bg-background box-glow' />

                <div className='glass-panel rounded-lg p-5'>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2'>
                    <h3 className='font-display text-sm text-primary tracking-wider'>
                      {exp.role}
                    </h3>
                    <span className='font-mono text-xs text-muted-foreground'>
                      {exp.duration}
                    </span>
                  </div>
                  <p className='font-mono text-xs text-muted-foreground mb-3'>
                    @ {exp.company}
                  </p>
                  <p className='font-body text-sm text-foreground/70 leading-relaxed mb-3'>
                    {exp.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {exp.tech.map(t => (
                      <span
                        key={t}
                        className='px-2 py-0.5 text-xs font-mono rounded border border-border text-muted-foreground'
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
