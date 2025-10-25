import { useEffect, useState } from 'react';
import { WiMoonAltWaningCrescent4 } from 'react-icons/wi';

const ThemeToggle = () => {
  const [theme, settheme] = useState<string>(
    localStorage.getItem('theme') || 'dark'
  );

  const themetoggle = () => {
    settheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div
      className='border-none bg-(--primary) font-[Marcellus] text-(--secondary) leading-loose font-bold z-1000 cursor-pointer hover:text-(--secondary) [&>svg]:w-6 [&>svg]:h-6'
      onClick={themetoggle}
    >
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default ThemeToggle;
