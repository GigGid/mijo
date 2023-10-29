import React from "react";
import "../solution.scss";
import { GridImagePageManufacturing } from "../../../../components/picture-grid-session/gridImagePageManufacturing";
export const GridSession = () => {
  const title = "Manufacturers & distributor solutions";
  const header = "From warehouse to shelves, zero headaches";
  const description = "Fulfill reliably and affordably without thinking about logistics.";
  const link = "#";
  const button = "Get Started";
  const image2="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6481badb9183c6fd9bce0c39_SendyFulfillmentService.jpg"
  const image3="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6481a8f4a664682e7e8b0c8f_Sendy_Fulfillment_solutions.jpg"
  const image4="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/64819cfeceb278271518e900_ATPL5815.jpg"
  const background=""
  return (
    <>
      <GridImagePageManufacturing
        link={link}
        header={header}
        title={title}
        button={button}
        description={description}
        image2={image2}
        image3={image3}
        image4={image4}
        background={background}
      />
    </>
  );
};
