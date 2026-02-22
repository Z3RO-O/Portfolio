import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { socialprofils } from '@/content_option';

const Socials = () => {
  return (
    <div className='fixed top-1/2 left-6 sm:left-8 w-5 h-[200px] -mt-[100px] max-lg:w-auto max-lg:h-auto max-lg:static max-lg:mt-0 max-lg:flex max-lg:flex-row-reverse max-lg:justify-center max-lg:py-8 max-lg:items-center max-lg:gap-4'>
      <ul className='list-none max-lg:flex max-lg:flex-row max-lg:gap-4'>
        {socialprofils.twitter && (
          <li className='block text-xs text-center mb-0 lg:mb-2.5 transition-all duration-300'>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialprofils.twitter}
              className='[&>svg]:w-[1.3em] [&>svg]:h-[1.3em] [&>svg]:fill-current text-foreground hover:text-primary transition-colors'
            >
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li className='block text-xs text-center mb-0 lg:mb-2.5 transition-all duration-300'>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialprofils.github}
              className='[&>svg]:w-[1.3em] [&>svg]:h-[1.3em] [&>svg]:fill-current text-foreground hover:text-primary transition-colors'
            >
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li className='block text-xs text-center mb-0 lg:mb-2.5 transition-all duration-300'>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialprofils.instagram}
              className='[&>svg]:w-[1.3em] [&>svg]:h-[1.3em] [&>svg]:fill-current text-foreground hover:text-primary transition-colors'
            >
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li className='block text-xs text-center mb-0 lg:mb-2.5 transition-all duration-300'>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialprofils.linkedin}
              className='[&>svg]:w-[1.3em] [&>svg]:h-[1.3em] [&>svg]:fill-current text-foreground hover:text-primary transition-colors'
            >
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <div className='relative top-[70px] -left-6 w-[68px] h-5 text-muted-foreground text-xs font-semibold leading-[1.2] whitespace-nowrap -rotate-90 after:content-[""] after:block after:absolute after:top-[9px] after:-right-12 after:w-10 after:h-px after:bg-border max-lg:static max-lg:w-auto max-lg:h-auto max-lg:rotate-0 max-lg:text-base max-lg:mr-0'>
        Follow Me
      </div>
    </div>
  );
};

export default Socials;
