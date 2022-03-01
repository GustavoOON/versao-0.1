import React from 'react'
import './css/mapOff.css'
import { CImage } from '@coreui/react'
import img1 from './../../../assets/images/map2.png'
const MapOff = () =>{


    return (
        <div className='container-mapOff'>
           <CImage rounded thumbnail src={img1} width={200} height={200} />
        </div>
    )
}


export default MapOff