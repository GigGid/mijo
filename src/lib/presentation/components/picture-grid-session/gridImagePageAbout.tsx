import { createMedia } from "@artsy/fresnel";
import{ FC } from "react";
import {  Col, Container, Row } from "react-bootstrap";

interface Props {

  header: string;
  description: string,
  overview:string,
  overviewContent:string,
  value:string,
  valueContent:string,
  focus:string,
  focusContent:string,
  image1?:string,
  image2?:string,
  image3?:string,
  image4?:string,
  background?:string
}

export const GridImagePageAbout: FC<Props> = (props) => {
  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 0,
      md: 768,
    },
  });
  return (
    <section className="grid-image-session" style={{background:props.background}}>
      <Container>
      <MediaContextProvider>
        <Media at="md">
        <Row className="align-items-center about-bg rounded-4 p-3">
          <Col lg={6} md={7} className=" text-primary">
            <div className="grid-image-header px-4 fw-bold">
              {props.header}
            </div>
            <div className="grid-image-description mt-5 px-3">
              {/* {props.description} */}
              <ul>
                <li>
                  <p className="fw-bold">{props.overview}</p>
                  <p>{props.overviewContent}</p>
                </li>
                <li>
                  <p className="fw-bold">{props.value}</p>
                  <p>{props.valueContent}</p>
                </li>
                <li>
                  <p className="fw-bold">{props.focus}</p>
                  <p>{props.focusContent}</p>
                </li>
              </ul>
            </div>
            
          </Col>
          <Col>
            <Row>
              <Col lg={8} md={12} className="d-flex align-items-end justify-content-end">
                <img
                  src={props.image1}
                  alt=""
                  className="img-fluid first-grid"
                  style={{width:"180px",height:"150px"}}
                />
              </Col>
              <Col className="">
                <img
                  src={props.image2}
                  alt=""
                  className="img-fluid"
                  style={{width:"150px",height:"190px"}}
                  
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col lg={7} md={12} className="d-flex justify-content-end">
              <img
                  src={props.image3}
                  alt=""
                  className="img-fluid"
                  style={{width:"200px",height:"130px"}}
                />
              </Col>
              <Col>
              <img
                  src={props.image4}
                  alt=""
                  className="img-fluid"
                  style={{width:"200px",height:"130px"}}
                />
              </Col>
            </Row>
          </Col>
        </Row>
          </Media>
          <Media at="sm">
          <div className="grid-image-header px-4 fw-bold">
              {props.header}
            </div>
            <div className="grid-image-description mt-5 px-3">
              {/* {props.description} */}
              <ul>
                <li>
                  <p className="fw-bold">{props.overview}</p>
                  <p>{props.overviewContent}</p>
                </li>
                <li>
                  <p className="fw-bold">{props.value}</p>
                  <p>{props.valueContent}</p>
                </li>
                <li>
                  <p className="fw-bold">{props.focus}</p>
                  <p>{props.focusContent}</p>
                </li>
              </ul>
            </div>
          </Media>
          </MediaContextProvider>
        
      </Container>
    </section>
  );
};
