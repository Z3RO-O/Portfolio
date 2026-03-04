import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { socials, profile } from '@/data/content.tsx';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
} as const;

export default function Footer() {
  return (
    <footer className='border-t border-border py-10'>
      <div className='container px-4 max-w-4xl mx-auto'>
        {/* Terminal message */}
        <div className='glass-panel rounded-lg p-4 font-mono text-xs text-muted-foreground mb-6 max-w-sm mx-auto'>
          <p>
            <span className='text-primary'>{'>'}</span> Built with React + Vite
            + Three.js
          </p>
          <p>
            <span className='text-primary'>{'>'}</span> Designed & Developed by{' '}
            {profile.name}
          </p>
          <p className='mt-1'>
            <span className='text-primary'>$</span>{' '}
            <span className='animate-blink-caret border-r-2 border-primary pr-1'>
              _
            </span>
          </p>
        </div>

        {/* Socials */}
        <div className='flex items-center justify-center gap-4 mb-4'>
          {socials.map(s => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.name}
                href={s.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors'
                aria-label={s.name}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        <p className='text-center font-mono text-xs text-muted-foreground'>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
