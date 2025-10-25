import { useState } from 'react';
import { VscGrabber, VscClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { logotext, socialprofils } from '@/content_option';
import Themetoggle from '@/components/common/ThemeToggle';
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const [isActive, setActive] = useState<boolean>(false);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle('ovhidden');
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-(--primary)'>
      <div className='flex items-center justify-between px-4 py-3'>
        <Link
          className='border-none bg-(--primary) text-xl font-[Marcellus] text-(--secondary) leading-loose font-bold z-1000 hover:text-(--secondary)'
          to='/'
        >
          {logotext}
        </Link>
        <div className='flex items-center gap-4'>
          <Themetoggle />
          <button
            className='border-none bg-(--primary) text-xl font-[Marcellus] text-(--secondary) leading-loose font-bold z-1000 focus:text-(--secondary) focus:shadow-none hover:text-(--secondary) hover:shadow-none [&>svg]:w-8 [&>svg]:h-8 [&>svg]:fill-(--secondary) [&>svg]:text-(--secondary)'
            onClick={handleToggle}
          >
            {isActive ? <VscClose /> : <VscGrabber />}
          </button>
        </div>
      </div>

      <div
        className={`h-full left-0 overflow-hidden fixed top-0 w-full ${isActive ? 'visible' : 'invisible'}`}
      >
        <div
          className={`absolute left-0 top-0 w-full h-full bg-(--primary) will-change-transform transition-all duration-500 ease-in-out ${isActive ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <div className='relative w-full h-full overflow-y-auto overflow-x-hidden'>
            <div className='p-3 lg:ml-[33.3333%]'>
              <ul className='pt-[20vh] pb-[20vh] pl-0 lg:pt-[10vh] lg:pb-[10vh]'>
                <li className='list-none my-2.5'>
                  <Link
                    onClick={handleToggle}
                    to='/'
                    className='text-(--secondary) leading-none text-[2rem] md:text-[4.8vw] inline-block relative transition-colors duration-250 ease-[cubic-bezier(0,0,0.58,1)] py-1 px-0 no-underline font-[Marcellus] hover:text-(--accent)!'
                  >
                    Home
                  </Link>
                </li>
                <li className='list-none my-2.5'>
                  <Link
                    onClick={handleToggle}
                    to='/projects'
                    className='text-(--secondary) leading-none text-[2rem] md:text-[4.8vw] inline-block relative transition-colors duration-250 ease-[cubic-bezier(0,0,0.58,1)] py-1 px-0 no-underline font-[Marcellus] hover:text-(--accent)!'
                  >
                    My Projects
                  </Link>
                </li>
                <li className='list-none my-2.5'>
                  <Link
                    onClick={handleToggle}
                    to='/about'
                    className='text-(--secondary) leading-none text-[2rem] md:text-[4.8vw] inline-block relative transition-colors duration-250 ease-[cubic-bezier(0,0,0.58,1)] py-1 px-0 no-underline font-[Marcellus] hover:text-(--accent)!'
                  >
                    About
                  </Link>
                </li>
                <li className='list-none my-2.5'>
                  <Link
                    onClick={handleToggle}
                    to='/contact'
                    className='text-(--secondary) leading-none text-[2rem] md:text-[4.8vw] inline-block relative transition-colors duration-250 ease-[cubic-bezier(0,0,0.58,1)] py-1 px-0 no-underline font-[Marcellus] hover:text-(--accent)!'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between md:items-center absolute w-full p-3 bottom-0 font-[Marcellus] text-sm bg-(--primary)'>
          <div className='flex gap-2'>
            {socialprofils.twitter && (
              <a
                target='_blank'
                rel='noreferrer'
                href={socialprofils.twitter}
                className='text-(--secondary) mr-2.5 no-underline'
              >
                <FaTwitter size={32} />
              </a>
            )}
            {socialprofils.github && (
              <a
                target='_blank'
                rel='noreferrer'
                href={socialprofils.github}
                className='text-(--secondary) mr-2.5 no-underline'
              >
                <FaGithub size={32} />
              </a>
            )}
            {socialprofils.instagram && (
              <a
                target='_blank'
                rel='noreferrer'
                href={socialprofils.instagram}
                className='text-(--secondary) mr-2.5 no-underline'
              >
                <FaInstagram size={32} />
              </a>
            )}
            {socialprofils.linkedin && (
              <a
                target='_blank'
                rel='noreferrer'
                href={socialprofils.linkedin}
                className='text-(--secondary) mr-2.5 no-underline'
              >
                <FaLinkedin size={32} />
              </a>
            )}
          </div>
          <p className='m-0'>copyright © {logotext}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
