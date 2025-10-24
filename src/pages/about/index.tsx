import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "@/content_option";
import { SkillsWithIcons } from "@/components/SkillsWithIcons";

export const About = (): JSX.Element => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col>
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg={5}>
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg={7} className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme[0]}</p>
              <p>{dataabout.aboutme[1]}</p>
              <p>{dataabout.aboutme[2]}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg={5}>
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg={7}>
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg={12}>
            <h3 className="color_sec py-4">Skills & Technologies</h3>
            <SkillsWithIcons skills={skills} />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg={5}>
            <h3 className="color_sec py-4">Services & Interests</h3>
          </Col>
          <Col lg={7}>
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

