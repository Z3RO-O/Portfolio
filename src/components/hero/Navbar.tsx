import { motion } from 'framer-motion';
import { navLinks } from '@/data/content.tsx';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className='fixed left-0 right-0 top-0 z-50 glass-panel'
    >
      <div className='container mx-auto px-4 py-3'>
        <div className='flex min-h-10 items-center justify-between gap-4'>
          <a
            href='/'
            className='font-display text-lg tracking-widest text-glow text-primary'
          >
            {'<Z3RO-O/>'}
          </a>
          <div className='mt-3 flex gap-2 overflow-x-auto pb-1 md:mt-0 md:justify-center md:overflow-visible md:pb-0'>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className='whitespace-nowrap rounded-full border border-border/70 bg-secondary/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary md:border-transparent md:bg-transparent md:px-0 md:py-0 md:text-xs'
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className='font-mono text-xs text-muted-foreground hidden sm:block'>
            <span className='text-primary'>●</span> online
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
