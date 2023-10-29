import {
  Card,
  CardImg,
  Carousel,
  CarouselItem,
  Col,
  Row,


} from "react-bootstrap";
import { FC, ReactElement } from "react";


interface Props {
  image:string;
  message:string;
  header:ReactElement
}

interface data {
  data:Props[]
}

export const CarouselFulfillment:FC<data> = (props) =>{
  
  return (
    <Card className="border-0  carousel-card py-5" style={{height:"500px"}}>
      <Card.Body className="p-0 m-0 ">
        <Carousel  style={{height:"500px"}}>
          {props.data.map((data) => (
            <CarouselItem >
              <Row className="align-items-center ">
                <Col className="px-5">
                <div className="text-primary fs-2" ><span>{data.header}</span></div>
                <div className=" py-3 text-primary  mx-2 mt-4">{data.message}</div>
                </Col>
                <Col
                  md={6}
                  className="align-items-stretch"
                >
                  {/* <Card className="d-flex border-0 rounded-5 " style={{ height: "400px" }}> */}
                    <CardImg
                      className="px-2 rounded-5"
                      src={data.image}
                      style={{ objectFit: "cover", width:"100%", height: "100%" ,}}
                    />
                  {/* </Card> */}
                </Col>
              </Row>
            </CarouselItem>
          ))}
        </Carousel>
      </Card.Body>
    </Card>
  );
}


