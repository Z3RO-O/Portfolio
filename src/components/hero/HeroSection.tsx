import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Download,
  ChevronDown,
} from 'lucide-react';
import { profile, socials, about } from '@/data/content.tsx';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/SectionHeading';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
} as const;

export default function HeroSection() {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Grid overlay */}
      <div className='absolute inset-0 grid-bg opacity-40' />

      <div className='container relative z-10 flex flex-col items-center'>
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
          className='mb-6'
        >
          <div className='w-30 h-30 rounded-full border-2 border-primary overflow-hidden box-glow mt-10 md:mt-0'>
            <img
              src={profile.avatar}
              alt={profile.name}
              className='w-full h-full object-cover'
            />
          </div>
        </motion.div>

        {/* Terminal greeting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='font-mono text-sm text-muted-foreground mb-3'
        >
          <span className='text-primary'>$</span> whoami
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className='font-display text-4xl sm:text-5xl md:text-7xl text-glow tracking-wider mb-4 text-primary'
        >
          {profile.name}
        </motion.h1>

        {/* About */}
        <div className='container px-4  max-w-4xl mx-auto text-center my-8'>
          {/* Bio terminal */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='glass-panel rounded-lg p-6 flex flex-col gap-4'
          >
            <div className='flex items-center gap-2'>
              <span className='w-3 h-3 rounded-full bg-destructive/60' />
              <span className='w-3 h-3 rounded-full bg-yellow-500/60' />
              <span className='w-3 h-3 rounded-full bg-primary/60' />
              <span className='ml-2 font-mono text-xs text-muted-foreground'>
                about.md
              </span>
            </div>
            <p className='font-body text-lg text-foreground/80 leading-relaxed'>
              {about.bio}
            </p>
            <p className='font-display text-md text-muted-foreground italic tracking-wider'>
              {about.philosophy}
            </p>

            {/* Social + Resume */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className='flex flex-wrap items-center gap-3 my-4 justify-center'
            >
              {socials.map(s => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors'
                    aria-label={s.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
              <Button variant='neon' size='sm' asChild>
                <a href={profile.resume} download>
                  <Download size={14} />
                  Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className='absolute bottom-18 animate-scroll-hint'
      >
        <a
          href='#experience'
          className='text-muted-foreground hover:text-primary transition-colors'
        >
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
