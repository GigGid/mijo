import React from "react";
import { Container } from "react-bootstrap";

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
        <div className="d-flex flex-wrap justify-content-center mt-5 figures-side">
          {figures.map((data, key) => (
            <div className=" text-center">
              <div className="strokes px-5 ">
                <div className="fs-1 fw-bold text-white "> {data.num}</div>
                <div className="text-white">{data.text}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
