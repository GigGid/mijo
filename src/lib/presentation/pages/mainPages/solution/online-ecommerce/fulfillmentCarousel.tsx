import React from "react";
import { Container } from "react-bootstrap";
import { CarouselFulfillment } from "../../../../components/carousel/medialayoutfeedback/carouselfeedbackForDesktop";

export const FulfillmentCarousel = () => {
  const data = [
    {
      message:
        "Get your business booming with swift, safe delivery of your products, and a stress-free experience for your customers.",
      image:
        "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6196599162218156cbb1f5f2_Fashion.148c4d93.jpg",
      header: <span>Deliver <span className="fw-bold">fashion accessories </span>with Sendy Fulfillment</span>,
    },
    {
      message:
        "Get your business booming with swift, safe delivery of your products, and a stress-free experience for your customers.",
      image:
        "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6196599162218156cbb1f5f2_Fashion.148c4d93.jpg",
      header:  <span>Deliver <span className="fw-bold">fashion accessories </span>with Sendy Fulfillment</span>,
    },
    {
      message:
        "Get your business booming with swift, safe delivery of your products, and a stress-free experience for your customers.",
      image:
        "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6196599162218156cbb1f5f2_Fashion.148c4d93.jpg",
      header:  <span>Deliver <span className="fw-bold">fashion accessories </span>with Sendy Fulfillment</span>,
    },
  ];
  return (
    <section className="carousel-session py-5">
      <Container className="carousel-container ">
        <div className=" shadow-card">
          <CarouselFulfillment data={data} />
        </div>
      </Container>
    </section>
  );
};
