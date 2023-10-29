import React from 'react'
import { GridColumn } from '../../../../components/picture-grid-session/gridColumn'

export const GridRowImageManufacture = () => {

    const title="Fulfill to supermarkets countrywide"
    const header1="Reduce costs to fulfil upto 60%"
    const description1="Benefit from a fully optimised, shared logistics network backed by an automated Fulfillment Center.  "
    const image1="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6486d8361d103bf4a740bcda_Sendy_Fullfilment%20Center-01836.jpg"
    const header2 ="Create orders faster, get delivery notes promptly "
    const description2="More capacity when you need it. Effortlessly handle any season of your business. "
    const image2 ="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6486bc35cc7e344f80ba856c_SendyToyota1137%20(1).jpg"
    const header3 ="Track inventory levels anytime"
    const description3="See which stock items and purchase orders are in transit, and easily monitor returns. Zero stock disappearance."
    const image3 = "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/6384bec95752a26d0f2aa21e_l1.png"
    const background="#f2fbff"
    


  return (
   <>
   <GridColumn
   title={title}
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
