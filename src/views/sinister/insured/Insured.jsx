import React from 'react'

// Componentes
import HeaderFollow from '../acompanhamento/render/FollowHeader'
import HeaderContract from './render/HeaderContract'
import OcurrenceData from './render/UserSafeData'
import VehicleData from './render/AnalistyData'
import './insured.css'

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

const segurado = (props) =>{

    return (
        <> 
            

            <CCard className="container-card-insured">
                <CCardBody>
                    
                    <HeaderFollow protocolo={props.protocolo} />

                    <HeaderContract protocolo={props.protocolo} />

                    <OcurrenceData protocolo={props.protocolo} />

                    <VehicleData protocolo={props.protocolo} />
                    
                <div className='container-dados-ocorrencia'>
                    <div className='container-conteudo' >
                        <CButton className='titulo-container-card2' variant='ghost' color='dark' >  Avarias </CButton>
                        {/* <label className='titulo-container-card2'> Dados do veículo</label> */}
                    </div>
                </div>

                </CCardBody>
            </CCard>
        </>
    )
}

export default segurado