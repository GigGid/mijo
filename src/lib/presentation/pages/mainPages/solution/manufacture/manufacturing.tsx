import { GridRowImageManufacture } from './gridRowImage'
import { ManufacturingCarousel } from './manufacturingCarousel'
import './manufacturing.scss'
import { VideoPlayerSession } from './videoPlaySession'
import { Brands } from '../../home/brands'
import { GridSession } from './gridSession'
import { GridRowManufacturing } from './gridRowFulfilment'
export const Manufacturing = () => {
  return (
 <>
 <GridSession/>
 <GridRowImageManufacture/>
 <GridRowManufacturing />
 <ManufacturingCarousel />
 <Brands/>
 <VideoPlayerSession/>
 </>
  )
}
