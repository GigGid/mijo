
import { GridImagePagePackage } from "../../../../components/picture-grid-session/gridImagePagePackage";
export const GridSession = () => {
  const title = "packages and cargo transport solutions";
  const header = "Reliable delivery for goods countrywide";
  const description = "Deliver anything, anywhere at anytime. Get access to 1000s of vetted and trained transporters.";
  const link = "#";
  const button = "Get Started now";
  const image1 = "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6481a21d387f691d7bb1e49e_Sendy%20rider.jpg";
  const image2="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6486bf6c2dab4d8c36c4bacd_Sendy_delivery_partners.jpg"
  const image3="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6486bf848896bd698cad5daf_Sendy_pickup_trucks1.jpg"
  const image4="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6481bd321e583cd05d7029a8_Sendy_delivers_countrywide.jpg"
  const background=""
  return (
    <>
      <GridImagePagePackage
        link={link}
        header={header}
        title={title}
        button={button}
        description={description}
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
        background={background}
      />
    </>
  );
};
