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
    <>
      <header className='fixed top-[10px] left-0 right-0 px-2.5 z-50'>
        <div className='flex items-center justify-between'>
          <Link
            className='py-[5px] px-[15px] m-0 border-none bg-(--primary-color) text-xl font-[Marcellus] text-(--text-color-2) leading-loose h-[50px] font-bold z-1000 no-underline hover:text-(--text-color-2)'
            to='/'
          >
            {logotext}
          </Link>
          <div className='flex items-center'>
            <Themetoggle />
            <button
              className='py-[5px] px-[15px] m-0 border-none bg-(--primary-color) text-xl font-[Marcellus] text-(--text-color) leading-loose h-[50px] font-bold z-1000 focus:text-(--text-color) focus:shadow-none hover:text-(--text-color) hover:shadow-none [&>svg]:w-8 [&>svg]:h-8 [&>svg]:fill-(--text-color-2) [&>svg]:text-(--text-color-2)'
              onClick={handleToggle}
            >
              {isActive ? <VscGrabber /> : <VscClose />}
            </button>
          </div>
        </div>

        <div
          className={`h-full left-0 overflow-hidden fixed top-0 w-full ${isActive ? 'invisible' : 'visible'}`}
        >
          <div
            className={`absolute left-0 top-0 w-full h-full bg-(--primary-color) will-change-transform transition-all duration-500 ease-in-out ${isActive ? '-translate-y-full' : 'translate-y-0'}`}
          >
            <div className='relative w-full h-full overflow-y-auto overflow-x-hidden'>
              <div className='p-3 lg:ml-[33.3333%]'>
                <ul className='pt-[20vh] pb-[20vh] pl-0 lg:pt-[10vh] lg:pb-[10vh]'>
                  <li className='list-none my-2.5'>
                    <Link
                      onClick={handleToggle}
                      to='/'
                      className='text-(--text-color-2) leading-none text-[2rem] md:text-[4.8vw] inline-block relative transition-colors duration-250 ease-[cubic-bezier(0,0,0.58,1)] py-1 px-0 no-underline font-[Marcellus] hover:text-(--text-color-3)'
                    >
                      Home
                    </Link>
                  </li>
                  <li className='list-none my-2.5'>
                    <Link
                      onClick={handleToggle}
                      to='/projects'
                      className='text-(--text-color-2) leading-none text-[2rem] md:text-[4.8vw] inline-block relative transition-colors duration-250 ease-[cubic-bezier(0,0,0.58,1)] py-1 px-0 no-underline font-[Marcellus] hover:text-(--text-color-3)'
                    >
                      My Projects
                    </Link>
                  </li>
                  <li className='list-none my-2.5'>
                    <Link
                      onClick={handleToggle}
                      to='/about'
                      className='text-(--text-color-2) leading-none text-[2rem] md:text-[4.8vw] inline-block relative transition-colors duration-250 ease-[cubic-bezier(0,0,0.58,1)] py-1 px-0 no-underline font-[Marcellus] hover:text-(--text-color-3)'
                    >
                      About
                    </Link>
                  </li>
                  <li className='list-none my-2.5'>
                    <Link
                      onClick={handleToggle}
                      to='/contact'
                      className='text-(--text-color-2) leading-none text-[2rem] md:text-[4.8vw] inline-block relative transition-colors duration-250 ease-[cubic-bezier(0,0,0.58,1)] py-1 px-0 no-underline font-[Marcellus] hover:text-(--text-color-3)'
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between md:items-center absolute w-full p-3 bottom-0 font-[Marcellus] text-sm bg-(--primary-color)'>
            <div className='flex gap-2'>
              {socialprofils.twitter && (
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={socialprofils.twitter}
                  className='text-(--text-color-2) mr-2.5 no-underline'
                >
                  <FaTwitter size={32} />
                </a>
              )}
              {socialprofils.github && (
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={socialprofils.github}
                  className='text-(--text-color-2) mr-2.5 no-underline'
                >
                  <FaGithub size={32} />
                </a>
              )}
              {socialprofils.instagram && (
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={socialprofils.instagram}
                  className='text-(--text-color-2) mr-2.5 no-underline'
                >
                  <FaInstagram size={32} />
                </a>
              )}
              {socialprofils.linkedin && (
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={socialprofils.linkedin}
                  className='text-(--text-color-2) mr-2.5 no-underline'
                >
                  <FaLinkedin size={32} />
                </a>
              )}
            </div>
            <p className='m-0'>copyright © {logotext}</p>
          </div>
        </div>
      </header>
      {/* Border decorations */}
      <div className='fixed top-0 h-[10px] left-0 w-full z-999999 bg-(--primary-color)'></div>
      <div className='fixed bottom-0 left-0 h-[10px] w-full z-999999 bg-(--primary-color)'></div>
      <div className='fixed w-[10px] left-0 top-0 h-full z-999999 bg-(--primary-color)'></div>
      <div className='fixed w-[10px] right-0 top-0 h-full z-999999 bg-(--primary-color)'></div>
    </>
  );
};

export default Header;
