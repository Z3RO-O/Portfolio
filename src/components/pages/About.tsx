import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from '@/content_option';
import { SkillsWithIcons } from '@/components/common/SkillsWithIcons';

const About = () => {
  return (
    <HelmetProvider>
      <div className='max-w-7xl mx-auto px-4'>
        <Helmet>
          <meta charSet='utf-8' />
          <title> About | {meta.title}</title>
          <meta name='description' content={meta.description} />
        </Helmet>
        <div className='w-full px-4'>
          <h1 className='text-5xl mb-4'> About me </h1>
          <hr className='border-(--secondary) text-left' />
        </div>
        <div className='flex flex-col gap-8 md:mt-12 mt-6 lg:mx-8'>
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-5/12 px-4'>
              <h3 className='text-3xl text-(--secondary) my-3'>
                {dataabout.title}
              </h3>
            </div>
            <div className='w-full lg:w-7/12 px-4 flex items-center'>
              <div>
                <p>{dataabout.aboutme[0]}</p>
                <p>{dataabout.aboutme[1]}</p>
                <p>{dataabout.aboutme[2]}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-5/12 px-4'>
              <h3 className='text-3xl text-(--secondary) my-3'>Work Timline</h3>
            </div>
            <div className='w-full lg:w-7/12'>
              <table className='w-full border-collapse'>
                <tbody>
                  {worktimeline.map((data, i) => {
                    return (
                      <tr
                        key={i}
                        className='border-b border-(--secondary)/20 last:border-b-0'
                      >
                        <th
                          scope='row'
                          className='text-(--secondary) bg-(--primary) py-3 px-4 text-left font-semibold align-top'
                        >
                          {data.jobtitle}
                        </th>
                        <td className='text-(--secondary) bg-(--primary) py-3 px-4 align-top'>
                          {data.where}
                        </td>
                        <td className='text-(--secondary) bg-(--primary) py-3 px-4 align-top'>
                          {data.date}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className='w-full px-4'>
              <h3 className='text-3xl text-(--secondary) py-4'>
                Skills & Technologies
              </h3>
              <SkillsWithIcons skills={skills} />
            </div>
          </div>
          <div className='flex flex-wrap mb-6'>
            <div className='w-full lg:w-5/12 px-4'>
              <h3 className='text-3xl text-(--secondary) py-4'>
                Services & Interests
              </h3>
            </div>
            <div className='w-full lg:w-7/12 px-4'>
              {services.map((data, i) => {
                return (
                  <div className='text-md py-4' key={i}>
                    <h5 className='text-xl my-2 border-b-2 border-(--secondary)'>
                      {data.title}
                    </h5>
                    <p>{data.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default About;
