import { GridSession } from "./gridSession";
import { GridRowImage } from "./gridRowImage";
import { GridRowFulfilment } from "./gridRowFulfilment";
import { FulfillmentCarousel } from "./fulfillmentCarousel";
import { Brands } from "../../home/brands";
import { VideoPlayerSession } from "./videoPlaySession";
import './package.scss'

export const PackagesCargo = () => {
  return (
    <>
      <GridSession />
      <GridRowImage />
      <GridRowFulfilment />
      <FulfillmentCarousel />
      <Brands />
      <VideoPlayerSession/>
    </>
  );
};
