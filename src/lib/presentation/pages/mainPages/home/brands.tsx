import React from "react";
import { Container, Image } from "react-bootstrap";
import {
  Coffee,
  Linton,
  Cfi,
  Complast,
  Kapa,
  Kenya,
  Armco,
  Spin,
  Uncover,
  Waa,
  Pharma,
} from "../../../../../assets/images";

export const Brands = () => {
  const img = [
    {
      img: Spin,
    },
    {
      img: Kapa,
    },
    {
      img: Linton,
    },
    {
      img: Uncover,
    },
    {
      img: Cfi,
    },
    {
      img: Waa,
    },
    {
      img: Pharma,
    },
    {
      img: Coffee,
    },
    {
      img: Armco,
    },
    {
      img: Complast,
    },
    {
      img: Kenya,
    },
  ];
  return (
    <section className="brand-session">
      <Container>
        <div className="text-center text-secondary fs-2 mb-3 fw-bold">
          An african trade platform that enables customers to do more
        </div>
        <div className="d-flex justify-content-center flex-wrap px-5">
          {img.map((data) => (
            <div className="px-3">
              <Image src={data.img} alt="logos" style={{ width: "120px" , objectFit:"contain"}} className="brand-logo"/>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
