import React from 'react'

import HeaderFollow from '../acompanhamento/render/FollowHeader'
import HeaderContract from '../insured/render/HeaderContract'
import RoofUser from './render/RoofUser'
import './roof.css'

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

import FranchiseBenefit from './render/FranchiseBenefit'
import BenefitBackupCar from './render/BenefitBackupCar'


const Roof = (props) => {  

    return (
        <> 
            <CCard className="container-card-insured">
                <CCardBody>
                   
                    <HeaderFollow  protocolo={props.protocolo} />

                    <HeaderContract protocolo={props.protocolo} />
                    
                    <RoofUser protocolo={props.protocolo} />

                    <FranchiseBenefit protocolo={props.protocolo} />
                    
                    <BenefitBackupCar protocolo={props.protocolo} />
                </CCardBody>
            </CCard>
        </>
    )
}


export default Roof