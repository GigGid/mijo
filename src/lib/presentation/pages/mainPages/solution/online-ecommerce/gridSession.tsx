import { GridImagePage } from "../../../../components/picture-grid-session/gridImagePageEcommerce";
import "../solution.scss";
export const GridSession = () => {
  const title = "Online & E-commerce sellers solutions";
  const header = "Get your orders flowing effortlessly";
  const description = "Say goodbye to time consuming follow-ups with customers and riders. Free more time to grow your business";
  const link = "#";
  const button = "Get Started now";
  const image1="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/62f4620b26c698c7908aff66_61b08cc066c008000aae8d53_7-p-500.jpg"
  const image2="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/62f4624766b83702a173211c_61b08cc9c2e00bf2b16439a5_4-p-500.jpg"
  const image3="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/62f462460b642d2952fc81a5_61b08a207e4a65f0e500a180_1-p-800.jpg"
  const image4="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/62985cfbfdcea27115d74f7e_Screenshot%202022-06-02%20at%2009.44.13.png"
  const background=""
  return (
    <>
      <GridImagePage
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
