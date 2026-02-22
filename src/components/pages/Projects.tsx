import { meta, projects } from '@/content_option';
import SingleProject from '@/components/common/SingleProject';
import PageHead from '@/components/common/PageHead';

const Projects = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <PageHead
        title={`Projects | ${meta.title}`}
        description={meta.description}
      />
      <div className='w-full px-4'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold'>Projects</h1>
        <hr className='border-border' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8'>
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
  );
};

export default Projects;
