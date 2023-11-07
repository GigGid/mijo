import { GridColumn } from '../../../../components/picture-grid-session/gridColumn'

export const GridRowImage = () => {

    const header1="Access vetted and trained transporters"
    const description1="Take your pick: 28 ton, 10 ton, 5 ton, 3 ton truck, van, tuktuk or bike. Choose the most efficient vehicle for your delivery.   "
    const image1="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6486bbb2d982eb5bc9b72db8_Sendy_delivery_network.jpg"
    const header2 ="Benefit from the highest SLAs through technology"
    const description2="High efficiency based on full automation and AI ensuring that you benefit from the smartest route for each order."
    const image2 ="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6486c07324d1d65cc8e87ee8_Sendy_tech.jpg"
    const header3 ="An easy platform to manage all your orders"
    const description3="Gain from real-time visibility and Insurance."
    const image3 = "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6486c6fcb6686414533a3264_Order_analytics_sendy_dashboard1.png"
    const background="#f3f3f6"

  return (
   <>
   <GridColumn
   header1={header1}
   description1={description1}
   image1={image1}
   header2={header2}
   description2={description2}
   image2={image2}
   header3={header3}
   description3={description3}
   image3={image3}
   background={background}
   />
   </>
  )
}
