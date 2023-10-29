import React, { FC } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

interface Props {
  header1: string;
  description1: string;
  image1: string;
  header2: string;
  description2: string;
  image2: string;
  header3: string;
  description3: string;
  image3: string;
  showSocials: boolean;
  linkIsVisible?:boolean | false;
}

export const GridFulfilment: FC<Props> = (props) => {
  return (
    <section className="grid-fulfillment-sections pt-3">
      <Container style={{ marginTop: "5%" }}>
        <div className="grid-column-session-header fs-1 text-center fw-bold text-primary">
          How Sendy Fulfillment works
        </div>
        <Row
          className="align-items-center text-primary"
          style={{ paddingTop: "5%" }}
        >
          <Col>
            <div className="grid-column-header fw-bold ">{props.header1}</div>
            <div className="grid-column-descriptions ">
              {props.description1}
            </div>
            <div className="mt-3 fw-bold">
            {props.linkIsVisible ? (
                    <a href="/" className="text-decoration-none">
                    HERE'S HOW TO DO IT{" "}
                    <Image
                      src="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6192d06ad7b9cb2f05d3a76b_2561330_arrow_left_icon.svg"
                      alt="arrow"
                      style={{ width: "18px" }}
                    />
                  </a>
                ) : ("")}
            </div>
            {props.showSocials === true ? (
              <div className="d-flex align-items-center mt-5">
                <div>
                  <Image src="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/62e3c6f8774e4adec2b4c8c8_Artboard%202%402x.png" alt="socials" style={{width:"150px"}} />
                </div>
                <div>
                  <Image src="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/62e3c6fe8dc2d16c20160233_Artboard%203%402x.png" alt="socials" style={{width:"150px"}} />
                </div>
                <div>
                  <Image src="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6384b68f15bbb64b30a448b9_app.png" alt="socials" style={{width:"150px"}} />
                </div>
              </div>
            ) : (
              ""
            )}
          </Col>
          <Col>
            <div className="grid-columns-image">
              <Image
                alt="img"
                className="grid-colum-img"
                src={props.image1}
                style={{ objectFit: "cover", width: "550px", height: "100%" }}
              />
            </div>
          </Col>
        </Row>
        <Row
          className=" grid-column-row align-items-center text-primary"
          style={{ paddingTop: "100px" }}
        >
          <Col>
            <div className="grid-columns-image">
              <Image
                alt="img"
                className="grid-colum-img"
                src={props.image2}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </Col>
          <Col>
            <div className="grid-column-header">{props.header2}</div>
            <div className="grid-column-descriptions">{props.description2}</div>
            <div className="mt-3 fw-bold">
            {props.linkIsVisible ? (
                    <a href="/" className="text-decoration-none">
                    HERE'S HOW TO DO IT{" "}
                    <Image
                      src="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6192d06ad7b9cb2f05d3a76b_2561330_arrow_left_icon.svg"
                      alt="arrow"
                      style={{ width: "18px" }}
                    />
                  </a>
                ) : ("")}
            </div>
          </Col>
        </Row>
        <Row
          className="grid-column-row align-items-center text-primary"
          style={{ paddingTop: "100px" }}
        >
          <Col>
            <div className="grid-column-header">{props.header3}</div>
            <div className="grid-column-descriptions">{props.description3}</div>
            <div className="mt-3 fw-bold">
                {props.linkIsVisible ? (
                    <a href="/" className="text-decoration-none">
                    HERE'S HOW TO DO IT{" "}
                    <Image
                      src="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6192d06ad7b9cb2f05d3a76b_2561330_arrow_left_icon.svg"
                      alt="arrow"
                      style={{ width: "18px" }}
                    />
                  </a>
                ) : ("")}
              
            </div>
          </Col>

          <Col>
            <div className="grid-columns-image">
              <Image
                alt="img"
                className="grid-colum-img"
                src={props.image3}
                style={{ objectFit: "cover", width: "550px", height: "100%" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
