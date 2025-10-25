import { Helmet, HelmetProvider } from 'react-helmet-async';
import { meta, projects } from '@/content_option';
import SingleProject from '@/components/common/SingleProject';

const Projects = () => {
  return (
    <HelmetProvider>
      <div className='max-w-7xl mx-auto px-4'>
        <Helmet>
          <meta charSet='utf-8' />
          <title> Projects | {meta.title} </title>{' '}
          <meta name='description' content={meta.description} />
        </Helmet>
        <div className='w-full px-4'>
          <h1 className='text-5xl mb-4'> Projects </h1>
          <hr className='border-(--secondary) text-left' />
        </div>
        <div className='flex flex-wrap justify-center gap-8 py-8'>
          {projects.map(project => {
            return (
              <SingleProject
                key={project.id}
                id={project.id}
                name={project.projectName}
                desc={project.projectDesc}
                tags={project.tags}
                code={project.code}
                demo={project.demo}
                image={project.image}
              />
            );
          })}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Projects;
