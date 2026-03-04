import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/content.tsx';
import SectionHeading from '@/components/shared/SectionHeading';

export default function ProjectsSection() {
  return (
    <section id='projects' className='py-24 relative'>
      <div className='container px-4 max-w-5xl mx-auto'>
        <SectionHeading title='Projects' tag='ls ~/projects' />

        <div className='grid sm:grid-cols-2 gap-6 mt-12'>
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className='group glass-panel rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 hover:box-glow'
            >
              {/* Project header bar */}
              <div className='flex items-center gap-2 px-4 py-2 border-b border-border/50'>
                <span className='w-2 h-2 rounded-full bg-primary/40' />
                <span className='w-2 h-2 rounded-full bg-muted-foreground/30' />
                <span className='w-2 h-2 rounded-full bg-muted-foreground/30' />
                <span className='ml-2 font-mono text-xs text-muted-foreground truncate'>
                  ~/{proj.title.toLowerCase().replace(/\s/g, '-')}
                </span>
              </div>

              <div className='p-5'>
                <h3 className='font-display text-lg text-primary tracking-wider mb-2 group-hover:text-glow transition-all'>
                  {proj.title}
                </h3>
                <p className='font-body text-sm text-foreground/60 leading-relaxed mb-4'>
                  {proj.description}
                </p>

                {/* Tech */}
                <div className='flex flex-wrap gap-1.5 mb-4'>
                  {proj.tech.map(t => (
                    <span
                      key={t}
                      className='px-2 py-0.5 text-xs font-mono rounded bg-secondary text-secondary-foreground'
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className='flex items-center gap-3'>
                  {proj.github && (
                    <a
                      href={proj.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-primary transition-colors'
                      aria-label='GitHub'
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-primary transition-colors'
                      aria-label='Live demo'
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
