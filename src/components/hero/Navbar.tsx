import { motion } from 'framer-motion';
import { useState } from 'react';
import { navLinks } from '@/data/content.tsx';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Navbar() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className='fixed left-4 right-4 top-4 z-50 glass-panel rounded-full md:left-8 md:right-8'
    >
      <div className='container mx-auto px-4 py-3'>
        <div className='flex min-h-10 items-center justify-between gap-4'>
          <a
            href='/'
            className='font-display text-lg tracking-widest text-glow text-primary whitespace-nowrap'
          >
            {'Z3RO-O'}
          </a>

          {isMobile ? (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className='p-2'>
                  <Menu className='h-5 w-5 text-primary' />
                </button>
              </SheetTrigger>
              <SheetContent
                side='right'
                className='w-[80%] bg-background/95 backdrop-blur-sm border-border'
              >
                <SheetHeader className='border-b border-border pb-4'>
                  <SheetTitle className='font-mono text-2xl text-primary text-start'>
                    $ navigate to
                  </SheetTitle>
                  <SheetDescription className='font-mono text-muted-foreground'></SheetDescription>
                </SheetHeader>
                <nav className='flex flex-col gap-2 mt-6'>
                  {navLinks.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className='group flex items-center gap-2 p-4 font-mono text-lg'
                    >
                      <span className='text-primary'>/</span>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <>
              <div className='flex gap-8'>
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className='whitespace-nowrap font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary'
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className='font-mono text-xs text-muted-foreground hidden lg:block'>
                <span className='text-primary'>●</span> online
              </div>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
