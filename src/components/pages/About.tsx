import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from '@/content_option';
import { SkillsWithIcons } from '@/components/common/SkillsWithIcons';
import PageHead from '@/components/common/PageHead';

const About = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <PageHead
        title={`About | ${meta.title}`}
        description={meta.description}
      />
      <div className='w-full px-4'>
        <h1 className='text-4xl sm:text-5xl mb-4 font-bold'>About me</h1>
        <hr className='border-border' />
      </div>
      <div className='flex flex-col gap-8 md:mt-12 mt-6 lg:mx-8'>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-5/12 px-4'>
            <h3 className='text-2xl sm:text-3xl font-semibold my-3'>
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
            <h3 className='text-2xl sm:text-3xl font-semibold my-3'>Work Timeline</h3>
          </div>
          <div className='w-full lg:w-7/12'>
            <table className='w-full border-collapse'>
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr
                      key={i}
                      className='border-b border-border last:border-b-0'
                    >
                      <th
                        scope='row'
                        className='text-foreground bg-card py-3 px-4 text-left font-semibold align-top'
                      >
                        {data.jobtitle}
                      </th>
                      <td className='text-foreground bg-card py-3 px-4 align-top'>
                        {data.where}
                      </td>
                      <td className='text-foreground bg-card py-3 px-4 align-top'>
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
            <h3 className='text-2xl sm:text-3xl font-semibold py-4'>
              Skills & Technologies
            </h3>
            <SkillsWithIcons skills={skills} />
          </div>
        </div>
        <div className='flex flex-wrap mb-6'>
          <div className='w-full lg:w-5/12 px-4'>
            <h3 className='text-2xl sm:text-3xl font-semibold py-4'>
              Services & Interests
            </h3>
          </div>
          <div className='w-full lg:w-7/12 px-4'>
            {services.map((data, i) => {
              return (
                <div className='text-md py-4' key={i}>
                  <h5 className='text-xl my-2 border-b-2 border-border'>
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
  );
};

export default About;
