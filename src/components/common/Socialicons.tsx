import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { socialprofils } from '@/content_option';

const SocialIcons = () => {
  return (
    <div className='fixed top-1/2 left-[30px] w-5 h-[200px] -mt-[100px] lg:static lg:w-auto lg:h-auto lg:mt-0 lg:flex lg:flex-row-reverse lg:justify-center lg:py-10 lg:items-center'>
      <ul className='list-none p-0 m-0 lg:mb-5'>
        {socialprofils.twitter && (
          <li className='block text-xs text-center mb-2.5 transition-all duration-300 lg:inline lg:mb-[29px] lg:mr-2.5'>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialprofils.twitter}
              className='[&>svg]:w-[1.3em] [&>svg]:h-[1.3em] [&>svg]:fill-(--text-color)'
            >
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li className='block text-xs text-center mb-2.5 transition-all duration-300 lg:inline lg:mb-[29px] lg:mr-2.5'>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialprofils.github}
              className='[&>svg]:w-[1.3em] [&>svg]:h-[1.3em] [&>svg]:fill-(--text-color)'
            >
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li className='block text-xs text-center mb-2.5 transition-all duration-300 lg:inline lg:mb-[29px] lg:mr-2.5'>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialprofils.instagram}
              className='[&>svg]:w-[1.3em] [&>svg]:h-[1.3em] [&>svg]:fill-(--text-color)'
            >
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li className='block text-xs text-center mb-2.5 transition-all duration-300 lg:inline lg:mb-[29px] lg:mr-2.5'>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialprofils.linkedin}
              className='[&>svg]:w-[1.3em] [&>svg]:h-[1.3em] [&>svg]:fill-(--text-color)'
            >
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p className='relative top-[70px] -left-6 w-[68px] h-5 text-(--text-color) text-xs font-semibold leading-[1.2] whitespace-nowrap -rotate-90 after:content-[""] after:block after:absolute after:top-[9px] after:-right-12 after:w-10 after:h-px after:bg-(--text-color) lg:static lg:w-auto lg:h-auto lg:rotate-0 lg:text-[17px] lg:mr-[65px] lg:after:hidden'>
        Follow Me
      </p>
    </div>
  );
};

export default SocialIcons;
