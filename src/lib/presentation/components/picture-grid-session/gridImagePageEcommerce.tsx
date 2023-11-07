import  { FC } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

interface Props {
  title: string;
  header: string;
  description: string;
  link: string;
  button: string;
  image1?:string,
  image2?:string,
  image3?:string,
  image4?:string,
  background?:string
}

export const GridImagePage: FC<Props> = (props) => {
  return (
    <section className="grid-image-session" style={{background:props.background}}>
      <Container>
        <Row>
          <Col md={5}>
            <div className="grid-image-title">{props.title}</div>
            <div className="grid-image-header fw-bold">
              {props.header}
            </div>
            <div className="grid-image-description mt-3">
              {props.description}
            </div>
            <div className="grid-image-link mt-5">
              <a href={props.link}>
                <Button className="p-3">{props.button}</Button>
              </a>
            </div>
          </Col>
          <Col>
            <Row>
              <Col className=" d-flex align-items-end justify-content-end">
                <img
                  src={props.image1}
                  alt=""
                  className="img-fluid first-grid"
                  style={{width:"250px"}}
                />
              </Col>
              <Col>
                <img
                  src={props.image2}
                  alt=""
                  className="img-fluid"
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
              <img
                  src={props.image3}
                  alt=""
                  className="img-fluid"
                />
              </Col>
              <Col>
              <img
                  src={props.image4}
                  alt=""
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
