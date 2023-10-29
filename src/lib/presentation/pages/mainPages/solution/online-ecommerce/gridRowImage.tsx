import React from 'react'
import { GridColumn } from '../../../../components/picture-grid-session/gridColumn'

export const GridRowImage = () => {

    const header1="One platform for the things that matter"
    const description1="Storage, packaging, insurance and delivery - all in your pocket. More value than using fragmented services.  "
    const image1="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6481a126fac6bbdeec6eadb1_Sendy%20online%20seller2.jpg"
    const header2 ="Fulfil your orders reliably"
    const description2="More capacity when you need it. Effortlessly handle any season of your business. "
    const image2 ="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6481a21d387f691d7bb1e49e_Sendy%20rider.jpg"
    const header3 ="See how much stock you have anytime, no surprises"
    const description3="Monitor your stock levels, order statuses, and fulfillment progress from wherever you are."
    const image3 = "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6486e5ec220ebf18890ef849_Stock%20levels.png"
    const background="#fef3e8"


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
