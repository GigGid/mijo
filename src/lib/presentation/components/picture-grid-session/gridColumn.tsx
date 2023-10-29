import React, { FC } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

interface Props {
  title?:string,
  header1: string;
  description1: string;
  image1: string;
  header2: string;
  description2: string;
  image2: string;
  header3: string;
  description3: string;
  image3: string;
  background?:string
}
export const GridColumn: FC<Props> = (props) => {
  return (
    <section className="grid-column-sections pt-3" style={{background:props.background}}>
      <Container  style={{marginTop:"5%"}}>
        <div className="grid-column-session-header fs-1 text-center fw-bold text-primary">{props.title}</div>
        <Row className="align-items-center text-primary" style={{paddingTop:"5%"}}>
          <Col>
            <div className="grid-column-header fw-bold ">{props.header1}</div>
            <div className="grid-column-descriptions ">{props.description1}</div>
          </Col>

          <Col>
            <div className="grid-columns-image">
              <Image alt="img" className="grid-colum-img" src={props.image1} style={{objectFit:"cover",width:"100%",height:"350px"}} />
            </div>
          </Col>
        </Row>
        <Row className=" grid-column-row align-items-center text-primary" style={{paddingTop:"100px"}}>
          <Col>
            <div className="grid-columns-image">
              <Image alt="img" className="grid-colum-img" src={props.image2} style={{objectFit:"cover",width:"100%",height:"350px"}} />
            </div>
          </Col>
          <Col>
            <div className="grid-column-header">{props.header2}</div>
            <div className="grid-column-descriptions">{props.description2}</div>
          </Col>
        </Row>
        <Row className="grid-column-row align-items-center text-primary" style={{paddingTop:"100px"}}>
          <Col>
            <div className="grid-column-header">{props.header3}</div>
            <div className="grid-column-descriptions">{props.description3}</div>
          </Col>

          <Col>
            <div className="grid-columns-image">
              <Image alt="img" className="grid-colum-img" src={props.image3} style={{width:"100%",height:"400px"}} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
