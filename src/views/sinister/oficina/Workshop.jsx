import React from 'react'

import WorkshopData from './render/WorkshopData'
import HeaderFollow from '../acompanhamento/render/FollowHeader'

import {
    CCard, 
    CCardBody,
    CButton ,
    CRow,
    CCol,
    CNavItem,
    CFormInput,
    CProgress,
    CProgressBar
  } from '@coreui/react'



const Workshop = (props) => {  

    return (
        <> 
            <CCard className="cardOcorrence">
                <CCardBody>
                    <HeaderFollow protocolo={props.protocolo} />

                    <WorkshopData protocolo={props.protocolo} />

                    
                </CCardBody>
            </CCard>
            
        </>
    )
}


export default Workshop