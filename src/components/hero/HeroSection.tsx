import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Download,
  ChevronDown,
} from 'lucide-react';
import { profile, socials } from '@/data/content.tsx';
import { Button } from '@/components/ui/button';

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

      <div className='container relative z-10 flex flex-col items-center text-center px-4 pt-20'>
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
          className='mb-6'
        >
          <div className='w-28 h-28 rounded-full border-2 border-primary overflow-hidden box-glow'>
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
          className='font-mono text-xs text-muted-foreground mb-3'
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

        {/* Title */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className='font-mono text-sm sm:text-base text-muted-foreground mb-6 max-w-lg'
        >
          {'// '}
          {profile.title}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className='font-body text-sm text-muted-foreground max-w-md mb-8 leading-relaxed'
        >
          {profile.description}
        </motion.p>

        {/* Social + Resume */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className='flex items-center gap-3 mb-8'
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

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className='animate-scroll-hint'
        >
          <a
            href='#about'
            className='text-muted-foreground hover:text-primary transition-colors'
          >
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
