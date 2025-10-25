import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { meta, projects } from '@/content_option';
import SingleProject from '@/components/common/SingleProject';

const Projects = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet='utf-8' />
          <title> Projects | {meta.title} </title>{' '}
          <meta name='description' content={meta.description} />
        </Helmet>
        <Row className=''>
          <Col>
            <h1 className='display-4 m-0'> Projects </h1>{' '}
            <hr className='border-(--secondary) text-left' />
          </Col>
        </Row>
        <div className='flex flex-wrap justify-center gap-8 mb-4'>
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
      </Container>
    </HelmetProvider>
  );
};

export default Projects;
