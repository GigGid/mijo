import { Col, Container, Row } from "react-bootstrap";

export const Banner = () => {
  const figures = [
    {
      num: "420",
      text: "Active suppliers fulfilling",
    },
    {
      num: "2.5m",
      text: "Orders fulfilled",
    },
    {
      num: "60%",
      text: "Savings in Fulfillment costs",
    },
    {
      num: "450",
      text: "Active delivery partners",
    },
  ];
  return (
    <section className="banner-session bg-secondary">
      <Container className="py-5">
        <div className="banner-header text-center fw-semibold text-white ">
          {" "}
          Opening up the continent creates opportunities for everyone
        </div>
          <Row className="p-0 mt-5 gy-5">
          {figures.map((data, key) => (
            <Col key={key} className="bg-secondary  text-center" lg={3} md={6} sm={12}  >
              <div className="">
              <div className="fs-1 fw-bold text-white  "> {data.num}</div>
                <div className="text-white ">{data.text}</div>
              </div>
              
            </Col>
            ))}
          </Row>
      </Container>
    </section>
  );
};
