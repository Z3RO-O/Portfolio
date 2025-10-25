import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { socialprofils } from '@/content_option';

const SocialIcons = () => {
  return (
    <div className='fixed top-1/2 left-[30px] w-5 h-[200px] -mt-[100px] max-lg:w-auto max-lg:h-auto max-lg:static max-lg:mt-0 max-lg:flex max-lg:flex-row-reverse max-lg:justify-center max-lg:py-10 max-lg:items-center'>
      <ul className='list-none p-0 m-0 max-lg:mb-5 max-lg:flex max-lg:flex-row max-lg:gap-2.5'>
        {socialprofils.twitter && (
          <li className='block text-xs text-center mb-2.5 transition-all duration-300 max-lg:mb-0'>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialprofils.twitter}
              className='[&>svg]:w-[1.3em] [&>svg]:h-[1.3em] [&>svg]:fill-(--secondary)'
            >
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li className='block text-xs text-center mb-2.5 transition-all duration-300 max-lg:mb-0'>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialprofils.github}
              className='[&>svg]:w-[1.3em] [&>svg]:h-[1.3em] [&>svg]:fill-(--secondary)'
            >
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li className='block text-xs text-center mb-2.5 transition-all duration-300 max-lg:mb-0'>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialprofils.instagram}
              className='[&>svg]:w-[1.3em] [&>svg]:h-[1.3em] [&>svg]:fill-(--secondary)'
            >
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li className='block text-xs text-center mb-2.5 transition-all duration-300 max-lg:mb-0'>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialprofils.linkedin}
              className='[&>svg]:w-[1.3em] [&>svg]:h-[1.3em] [&>svg]:fill-(--secondary)'
            >
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <div className='relative top-[70px] -left-6 w-[68px] h-5 text-(--secondary) text-xs font-semibold leading-[1.2] whitespace-nowrap -rotate-90 after:content-[""] after:block after:absolute after:top-[9px] after:-right-12 after:w-10 after:h-px after:bg-(--secondary) max-lg:static max-lg:w-auto max-lg:h-auto max-lg:rotate-0 max-lg:text-[17px] max-lg:mr-[65px]'>
        Follow Me
      </div>
    </div>
  );
};

export default SocialIcons;
