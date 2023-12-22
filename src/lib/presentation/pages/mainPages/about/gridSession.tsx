
import { GridImagePageAbout } from "../../../components/picture-grid-session/gridImagePageAbout";

export const GridSession = () => {
  const header = "About Us";
  const value = "Why Partners Us.";
  const valueContent = "Partnering with Mijo means benefiting from our efficient digital fulfillment, logistics network and seamless cross border operations.";
  const focus = "Our Promise";
  const focusContent = "We prioritize customer satisfaction and go beyond to build a long-term relationship and partnership with our clients, offering excellent customer service and providing solutions to meet their unique needs.";
  const overview = "Who We Are.";
  const overviewContent = "At Mijo, we are driven by a mission to run aggregator model which aims at scaling operations across Africa and enable easy movement of goods across borders. we are dedicated to providing innovative solutions and exceptional service.";
  const description = "We make trading in Africa easier and more beneficial to more people";
  const image1 = "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/61ea997a8e25a200278f8014_61d2ead9f463973775dda037_1Untitled-1.jpg";
  const image2="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/61d2ead912b5848e0d4c9693_2Untitled-2.jpg"
  const image3="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/61d2ead90a037e3acd8a8938_3Untitled-3.jpg"
  const image4="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/61d2ead8711659271d552213_4Untitled-3.jpg"
  const background=""
  return (
    <>
      <GridImagePageAbout
        header={header}
        value={value}
        valueContent={valueContent}
        focus={focus}
        focusContent={focusContent}
        overview={overview}
        overviewContent={overviewContent}
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
