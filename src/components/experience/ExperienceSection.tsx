import { motion } from 'framer-motion';
import { experience } from '@/data/content.tsx';
import SectionHeading from '@/components/shared/SectionHeading';
import { cn } from '@/lib/utils';

function TimelineSegment({
  variant,
  extendThroughGap,
}: {
  variant: 'upper' | 'lower';
  /** Extend the line through the flex gap so it meets the next row */
  extendThroughGap: boolean;
}) {
  const isUpper = variant === 'upper';

  return (
    <div
      className={cn(
        'pointer-events-none absolute left-1/2 w-px -translate-x-1/2 bg-border',
        isUpper
          ? 'top-0 h-[calc(50%-6px)]'
          : cn(
              'top-[calc(50%+6px)]',
              extendThroughGap ? '-bottom-10' : 'bottom-0'
            )
      )}
      aria-hidden
    />
  );
}

export default function ExperienceSection() {
  const lastIndex = experience.length - 1;

  return (
    <section id='experience' className='relative py-24'>
      <div className='container mx-auto max-w-3xl px-4'>
        <SectionHeading title='Experience' tag='career.log' />

        <div className='mt-12 flex flex-col gap-10'>
          {experience.map((exp, i) => {
            return (
              <div
                key={`${exp.company}-${i}`}
                className='flex items-stretch gap-4 md:gap-5'
              >
                <div className='relative w-10 shrink-0 md:w-12'>
                  {i > 0 && (
                    <TimelineSegment variant='upper' extendThroughGap={false} />
                  )}
                  {i < lastIndex && (
                    <TimelineSegment variant='lower' extendThroughGap />
                  )}
                  <div
                    className='border-primary bg-background absolute left-1/2 top-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2'
                    aria-hidden
                  />
                </div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className='min-w-0 flex-1 font-display'
                >
                  <div className='glass-panel rounded-lg p-5'>
                    <div className='mb-2 flex flex-col font-bold sm:flex-row sm:items-center sm:justify-between'>
                      <div className='flex flex-wrap items-center gap-2'>
                        <a
                          className='flex shrink-0 items-center justify-center text-primary'
                          title={exp.company}
                          aria-label={exp.company}
                          href={exp.companyLinkedIn}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className='rounded-md w-10 h-10'
                          />
                        </a>
                        <div className='flex flex-col gap-0.5'>
                          <h3 className='text-sm tracking-wider text-primary'>
                            {exp.role}
                          </h3>
                          <span className='text-xs text-muted-foreground'>{exp.companyLocation}</span>
                        </div>
                      </div>
                      <span className='text-sm text-muted-foreground'>
                        {exp.duration}
                      </span>
                    </div>

                    <p className='text-sm leading-relaxed tracking-wider text-foreground/80'>
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
