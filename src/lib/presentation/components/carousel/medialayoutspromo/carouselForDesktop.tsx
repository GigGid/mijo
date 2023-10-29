import { Card, CardImg, Carousel, Col, Row, CarouselItem } from "react-bootstrap";
import carouselimg1 from "../../../../../assets/images/carouselimg1.jpg";
import carouselimg2 from "../../../../../assets/images/carouselimg2.jpg";
import carouselimg3 from "../../../../../assets/images/carouselimg3.png";

function CarouselForDesktop() {
  const data = [
    { image: carouselimg2 },
    { image: carouselimg3 },
    { image: carouselimg1 },
    
  ];

  return (
    <Carousel className="mt-4" style={{ height: "330px" }}>
      <CarouselItem>
        <Row className="align-items-stretch">
          {data.map((data) => (
            <Col md={4} className="align-items-stretch"style={{borderRadius:"20px" }} >
              <Card className="d-flex" style={{ height: "300px",}}>
                <CardImg src={data.image} style={{ objectFit: "cover", height: "100%" }} />
              </Card>
            </Col>
          ))}
        </Row>
      </CarouselItem>
    </Carousel>
  );
}

export default CarouselForDesktop;