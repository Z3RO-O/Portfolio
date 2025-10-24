import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { meta, projects } from '@/content_option';
import SingleProject from '@/components/pages/projects/SingleProject';

export const Projects = () => {
  return (
    <HelmetProvider>
      <Container className='About-header'>
        <Helmet>
          <meta charSet='utf-8' />
          <title> Projects | {meta.title} </title>{' '}
          <meta name='description' content={meta.description} />
        </Helmet>
        <Row className='my-3 pt-md-3'>
          <Col>
            <h1 className='display-4 mb-4'> Projects </h1>{' '}
            <hr className='t_border my-4 text-left' />
          </Col>
        </Row>
        <div className='po_items_ho'>
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
