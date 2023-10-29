
import { GridImagePageAbout } from "../../../components/picture-grid-session/gridImagePageAbout";

export const GridSession = () => {
  const header = "Easier trade for Africa";
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
