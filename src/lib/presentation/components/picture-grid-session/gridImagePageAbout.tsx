import React, { FC } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

interface Props {

  header: string;
  description: string;
  image1?:string,
  image2?:string,
  image3?:string,
  image4?:string,
  background?:string
}

export const GridImagePageAbout: FC<Props> = (props) => {
  return (
    <section className="grid-image-session" style={{background:props.background}}>
      <Container>
        <Row>
          <Col md={5} className=" text-primary">
            <div className="grid-image-header px-4 fw-bold">
              {props.header}
            </div>
            <div className="grid-image-description mt-5 px-3">
              {props.description}
            </div>
            
          </Col>
          <Col>
            <Row>
              <Col md={8} className="d-flex align-items-end justify-content-end">
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
              <Col md={7} className="d-flex justify-content-end">
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
      </Container>
    </section>
  );
};
