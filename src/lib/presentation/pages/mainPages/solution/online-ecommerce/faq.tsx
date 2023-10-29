import { Button, Col, Container, Row } from "react-bootstrap";
import  {AiOutlinePlus} from 'react-icons/ai'

export const Faq = () => {
  const faqs = [
    {
      title: "What is Sendy Fulfillment?",
      icon: <AiOutlinePlus />,
      body: "Sendy Fulfillment is an end-to-end platform connecting manufacturers, distributors and e-commerce businesses directly to warehousing, order processing, deliveries, payment processing and much more. ",
    },
    {
      title: "What is Sendy Fulfillment?",
      icon: <AiOutlinePlus/>,
      body: "Sendy Fulfillment is an end-to-end platform connecting manufacturers, distributors and e-commerce businesses directly to warehousing, order processing, deliveries, payment processing and much more. ",
    },
    {
      title: "What is Sendy Fulfillment?",
      icon: <AiOutlinePlus/>,
      body: "Sendy Fulfillment is an end-to-end platform connecting manufacturers, distributors and e-commerce businesses directly to warehousing, order processing, deliveries, payment processing and much more. ",
    },
    {
      title: "What is Sendy Fulfillment?",
      icon: <AiOutlinePlus/>,
      body: "Sendy Fulfillment is an end-to-end platform connecting manufacturers, distributors and e-commerce businesses directly to warehousing, order processing, deliveries, payment processing and much more. ",
    },
    {
      title: "What is Sendy Fulfillment?",
      icon: <AiOutlinePlus/>,
      body: "Sendy Fulfillment is an end-to-end platform connecting manufacturers, distributors and e-commerce businesses directly to warehousing, order processing, deliveries, payment processing and much more. ",
    },
    {
      title: "What is Sendy Fulfillment?",
      icon: <AiOutlinePlus/>,
      body: "Sendy Fulfillment is an end-to-end platform connecting manufacturers, distributors and e-commerce businesses directly to warehousing, order processing, deliveries, payment processing and much more. ",
    },
    {
      title: "What is Sendy Fulfillment?",
      icon: <AiOutlinePlus/>,
      body: "Sendy Fulfillment is an end-to-end platform connecting manufacturers, distributors and e-commerce businesses directly to warehousing, order processing, deliveries, payment processing and much more. ",
    },
  ];
  return (
    <section className="faq-session">
      <Container>
        <div className="d-flex justify-content-center faq-header my-5 fs-1 fw-bold text-primary">FAQs</div>
        <div className="d-block faq-wrapper">
          {faqs.map((data, key) => (
            <Row key={key} className="my-5">
              <Col>
                <div className="d-flex  justify-content-between border-bottom">
                  <div className="fs-5">{data.title}</div>
                  <div className="">
                    <Button variant="transparent" className="rounded-circle mb-2 border-0 bg-light">{data.icon}</Button>
                    </div>
                </div>
                <div className="mt-3 text-muted">{data.body}</div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};


