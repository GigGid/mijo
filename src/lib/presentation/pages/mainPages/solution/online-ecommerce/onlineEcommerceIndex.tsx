import React from "react";
import { GridSession } from "./gridSession";
import { GridRowImage } from "./gridRowImage";
import { GridRowFulfilment } from "./gridRowFulfilment";
import { FulfillmentCarousel } from "./fulfillmentCarousel";
import { Faq } from "./faq";
import { Brands } from "../../home/brands";
import { VideoPlayerSession } from "./videoPlaySession";

export const OnlineEcommerceIndex = () => {
  return (
    <>
      <GridSession />
      <GridRowImage />
      <GridRowFulfilment />
      <FulfillmentCarousel />
      <Faq />
      <Brands />
      <VideoPlayerSession/>
    </>
  );
};
