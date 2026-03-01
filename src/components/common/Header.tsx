import { Link } from 'react-router-dom';
import { logotext } from '@/content_option';
import Themetoggle from '@/components/common/ThemeToggle';
import ShinyText from '@/components/specific/ShinyText';
import GlassSurface from '@/components/specific/GlassSurface';
import { useTheme } from '@/hooks/useTheme';

const navLinks = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const { isDark } = useTheme();

  const textColor = isDark ? '#d1d5db' : '#6b7280';
  const shineColor = isDark ? '#ffffff' : '#1f2937';

  return (
    <header className='fixed top-4 left-4 right-4 sm:left-6 sm:right-6 z-50'>
      <GlassSurface
        width='100%'
        height='auto'
        borderRadius={50}
        blur={15}
        brightness={isDark ? 20 : 95}
        opacity={0.85}
        backgroundOpacity={isDark ? 0.2 : 0.3}
        saturation={1.2}
        borderWidth={0.08}
        className='max-w-4xl mx-auto'
      >
        <div className='flex items-center justify-between gap-4 px-4 sm:px-6 py-3 w-full'>
          <Link
            className='text-xl font-heading font-bold text-foreground hover:text-foreground shrink-0'
            to='/'
          >
            <ShinyText
              text={logotext}
              speed={2}
              delay={0}
              color={textColor}
              shineColor={shineColor}
              spread={120}
              direction='left'
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </Link>
          <nav className='flex items-center gap-1 sm:gap-2 flex-wrap justify-end'>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className='px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-colors whitespace-nowrap'
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className='shrink-0'>
            <Themetoggle />
          </div>
        </div>
      </GlassSurface>
    </header>
  );
};

export default Header;
