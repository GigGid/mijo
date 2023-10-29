import React from 'react'
import { GridFulfilment } from '../../../../components/picture-grid-session/gridFulfillment'

export const GridRowFulfilment = () => {

    
    const header1="Raise an order request"
    const description1=`Use the Sendy Fulfillment Web app, app or free API website
    integration to request for deliveries to customers or Sendy's Fulfillment Center. `
    const image1="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/62f4bd17bbbfc1618d5ff9ba_screen.png"
    const header2 ="Sendy automatically picks up goods"
    const description2=`Sendy will pick up goods using the most suitable vehicle size and either offer priority delivery to match your need for speed, or consign them at our Fulfillment Center as a central dispatch location saving you money, space and time.  `
    const image2 ="https://global-uploads.webflow.com/618ac079e7dd392826f282d6/61bc9704a24e98286f20101d_619632980be55c14929152b5_seller_2.c9473154.png"
    const header3 ="Consolidation for greater efficiency"
    const description3="We provide automated consolidation at our Fulfillment Center, automatically pick the right vehicle for the most optimal route and deliver a full truckload rather than half empty vehicles."
    const image3 = "https://global-uploads.webflow.com/618ac079e7dd392826f282d6/61bc9704348734fc6952fb6f_619630bf8b596d225a993588_store.75cc82f5.png"
    const linkVisible = true

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
     linkIsVisible={linkVisible}
     />
   </>
  )
}
