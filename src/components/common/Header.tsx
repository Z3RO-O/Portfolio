import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logotext, socialprofils } from '@/content_option';
import Themetoggle from '@/components/common/ThemeToggle';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'My Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: socialprofils.twitter, icon: Twitter },
  { href: socialprofils.github, icon: Github },
  { href: socialprofils.instagram, icon: Instagram },
  { href: socialprofils.linkedin, icon: Linkedin },
].filter(link => link.href);

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className='fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex items-center justify-between px-4 sm:px-6 py-3'>
        <Link
          className='text-xl font-[Marcellus] font-bold text-foreground hover:text-foreground'
          to='/'
        >
          {logotext}
        </Link>
        <div className='flex items-center gap-2'>
          <Themetoggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon' aria-label='Open menu'>
                <Menu className='size-6' />
              </Button>
            </SheetTrigger>
            <SheetContent
              side='right'
              className='w-full max-w-sm sm:max-w-md flex flex-col'
              showCloseButton={true}
            >
              <SheetHeader>
                <SheetTitle className='sr-only'>Navigation</SheetTitle>
              </SheetHeader>
              <nav className='flex flex-col gap-2 pt-8'>
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className='block py-3 text-2xl font-[Marcellus] text-foreground hover:text-accent transition-colors'
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className='mt-auto pt-8 pb-4'>
                <div className='flex gap-4 mb-4'>
                  {socialLinks.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      target='_blank'
                      rel='noreferrer'
                      className='text-muted-foreground hover:text-foreground transition-colors'
                      aria-label={link.icon.name}
                    >
                      <link.icon className='size-6' />
                    </a>
                  ))}
                </div>
                <p className='text-sm text-muted-foreground'>
                  © {new Date().getFullYear()} {logotext}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
