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
    document.documentElement.setAttribute('theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div
      className='border-none bg-(--primary-color) text-xl font-[Marcellus] text-(--text-color-2) leading-loose font-bold z-1000 cursor-pointer hover:text-(--text-color-2) [&>svg]:w-8 [&>svg]:h-8'
      onClick={themetoggle}
    >
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default ThemeToggle;
