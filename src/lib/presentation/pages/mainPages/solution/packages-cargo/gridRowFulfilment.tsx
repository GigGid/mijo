
import { GridFulfilment } from '../../../../components/picture-grid-session/gridFulfillment'

export const GridRowFulfilment = () => {

    
    const header1="Make a delivery request"
    const description1=`Raise a request using Sendy's app, Web app or automatically
    through our free API integration with your website. `
    const image1="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6486caa1232715675f5444c4_Order_request.png"
    const header2 ="Sendy picks up & drops off goods"
    const description2=`We use the most suitable vehicle sizes for your load.`
    const image2 ="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/61bc9704a24e98286f20101d_619632980be55c14929152b5_seller_2.c9473154.png"
    const header3 ="Stamped delivery notes"
    const description3="We return all crucial documents so you get paid promptly."
    const image3 = "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6486cc2be365df2928f90bca_Track%20delivery%20-%20Multidestination.png"


  return (
   <>
   <GridFulfilment
     header1={header1}
     description1={description1}
     image1={image1}
     header2={header1}
     description2={description2}
     image2={image2}
     header3={header3}
     description3={description3}
     image3={image3}
     showSocials= {false}
     />
   </>
  )
}
