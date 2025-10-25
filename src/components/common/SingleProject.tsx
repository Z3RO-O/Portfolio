import { FaPlay, FaCode } from 'react-icons/fa';
import { placeholder } from '@/assets/assets';

interface SingleProjectProps {
  id: number;
  name: string;
  desc: string;
  tags: string[];
  code: string;
  demo: string;
  image: string;
}

const SingleProject = ({
  id,
  name,
  desc,
  tags,
  code,
  demo,
  image,
}: SingleProjectProps) => {
  return (
    <>
      <div
        key={id}
        className='bg-white shadow-[1px_2px_4px_2px_rgba(3,3,3,0.2)] w-[324px] h-[354px] rounded-[10px] flex flex-col items-center justify-center p-[1.4rem_2rem] relative cursor-pointer overflow-hidden group'
      >
        <div className='flex flex-col items-center justify-between w-full h-full'>
          <h2
            id={name}
            className='text-black font-semibold text-2xl leading-[110%] text-center'
          >
            {name}
          </h2>
          <img
            src={image ? image : placeholder}
            alt={name}
            className='w-full h-[60%] transition-opacity duration-700 delay-300 group-hover:opacity-0'
          />
          <div className='flex items-center justify-between w-full'>
            <a
              href={demo}
              target='_blank'
              rel='noreferrer'
              className='cursor-pointer bg-black rounded-full p-[4%] no-underline transition-transform duration-500 delay-300 flex items-center justify-center w-10 h-10 border-2 border-solid'
              aria-labelledby={`${name} ${name}-demo`}
            >
              <FaPlay
                id={`${name}-demo`}
                color='white'
                className='text-base transition-all duration-200'
                aria-label='Demo'
              />
            </a>
            <a
              href={code}
              target='_blank'
              rel='noreferrer'
              className='cursor-pointer bg-black rounded-full p-[4%] no-underline transition-transform duration-500 delay-300 flex items-center justify-center w-10 h-10 border-2 border-solid group-hover:-translate-x-[140px] group-hover:scale-110'
              aria-labelledby={`${name} ${name}-code`}
            >
              <FaCode
                id={`${name}-code`}
                color='white'
                className='text-base transition-all duration-200'
                aria-label='Code'
              />
            </a>
          </div>
        </div>
        <p className='bg-[rgb(90,90,90)] absolute w-[95%] h-[160px] left-0 top-0 -translate-x-[110%] translate-y-[40%] p-[15px] rounded-r-[20px] transition-transform duration-900 leading-[110%] flex items-center justify-center group-hover:translate-x-[-2%]'>
          {desc}
        </p>
        <div className='bg-[rgb(90,90,90)] absolute bottom-5 right-0 w-[140px] text-[0.8rem] flex justify-center gap-2 flex-col rounded-l-[10px] translate-x-full transition-transform duration-500 delay-300 p-[0.825rem] group-hover:translate-x-0'>
          {tags.map((tag, id) => (
            <span
              key={id}
              className='font-medium wrap-break-word leading-[100%]'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleProject;
