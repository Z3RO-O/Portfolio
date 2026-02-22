import { Link } from 'react-router-dom';
import { logotext } from '@/content_option';
import Themetoggle from '@/components/common/ThemeToggle';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  return (
    <header className='fixed top-4 left-4 right-4 sm:left-6 sm:right-6 z-50'>
      <div className='flex items-center justify-between gap-4 px-4 sm:px-6 py-3 rounded-full bg-background/80 backdrop-blur-xl border border-border/60 shadow-lg max-w-4xl mx-auto'>
        <Link
          className='text-xl font-heading font-bold text-foreground hover:text-foreground shrink-0'
          to='/'
        >
          {logotext}
        </Link>
        <nav className='flex items-center gap-1 sm:gap-2 flex-wrap justify-end'>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className='px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-colors whitespace-nowrap'
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className='shrink-0'>
          <Themetoggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
