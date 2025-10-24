import './style.css';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { socialprofils } from '@/content_option';

export const Socialicons = () => {
  return (
    <div className='stick_follow_icon'>
      <ul>
        {socialprofils.twitter && (
          <li>
            <a target='_blank' rel='noreferrer' href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a target='_blank' rel='noreferrer' href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a target='_blank' rel='noreferrer' href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a target='_blank' rel='noreferrer' href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
