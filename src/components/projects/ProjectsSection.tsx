import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { projects } from '@/data/content.tsx';
import SectionHeading from '@/components/shared/SectionHeading';
import TechStackChips from '@/components/shared/TechStackChips';

export default function ProjectsSection() {
  return (
    <section id='projects' className='py-24 relative'>
      <div className='container px-4 max-w-5xl mx-auto'>
        <SectionHeading title='Projects' tag='ls ~/projects' />

        <div className='grid sm:grid-cols-2 gap-6 mt-12'>
          {projects.map((proj, i) => (
            <a
              href={proj.live}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
              aria-label='Live demo'
            >
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
                  <span className='w-2.5 h-2.5 rounded-full bg-destructive/90' />
                  <span className='w-2.5 h-2.5 rounded-full bg-yellow-500/90' />
                  <span className='w-2.5 h-2.5 rounded-full bg-primary/90' />
                  <span className='ml-2 font-mono text-xs text-muted-foreground truncate'>
                    ~/{proj.title.toLowerCase().replace(/\s/g, '-')}
                  </span>
                </div>

                <div className='p-5 font-display'>
                  <h3 className='text-lg text-primary tracking-wider group-hover:text-glow transition-all'>
                    {proj.title}
                  </h3>
                  <p className='text-md text-foreground/80 leading-relaxed mb-4'>
                    {proj.description}
                  </p>

                  <div className='flex items-center justify-between'>
                    {/* Tech */}
                    <TechStackChips tech={proj.tech} />
                    {proj.github && (
                      <a
                        href={proj.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-muted-foreground hover:text-primary transition-colors'
                        aria-label='GitHub'
                      >
                        <SiGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
