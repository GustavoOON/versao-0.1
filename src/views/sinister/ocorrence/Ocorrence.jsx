import React from 'react'
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
import './ocorrence.css'

import HeaderFollow from '../acompanhamento/render/FollowHeader'
import HeaderContract from '../insured/render/HeaderContract'
import OcorrenceData from './render/OccurrenceData'
import VehicleData from './render/VehicleData'

const Ocorrence =  (props) =>{

    return(
        <> 
            <CCard className="cardOcorrence">
                <CCardBody>
                    <HeaderFollow protocolo={props.protocolo} />

                    <HeaderContract protocolo={props.protocolo} />

                    <OcorrenceData protocolo={props.protocolo} /> 
                    
                    <VehicleData protocolo={props.protocolo} />

                    {/*  Ver oq vai ser aqui dps */}
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

export default Ocorrence