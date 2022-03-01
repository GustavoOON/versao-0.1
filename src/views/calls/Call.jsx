import React from 'react'
import './call.css'

// importando telas
import AtendimentosChart from './render/Atendimentos'
import AtendimentoQTD from './render/AtendimentoQTD'
import AtendimentoRamo from './render/AtendimentoRamo'
import Canal from './render/Canal'
import AtendimentoRealizado from './render/AtendimentosRealizados'
import Calendario from './render/CalendarioAtts'


import {
    CCol,
    CRow,
  } from '@coreui/react'


const Call = () =>{

    return(
        <>
            <CRow>

                <CCol xs={8}>
                    <AtendimentosChart />
                </CCol>

                <CCol xs={4}> 
                    <AtendimentoQTD />
                </CCol>

            </CRow>

            <br />

            <CRow>

                <CCol xs={8}>
                    <AtendimentoRamo />
                </CCol>

                <CCol xs={4}> 
                    <Canal />
                </CCol>

            </CRow>

            <br />

            <CRow>

                <CCol xs={8}>
                    <AtendimentoRealizado />
                </CCol>

                <CCol xs={4}> 
                    <Calendario />
                </CCol>

            </CRow>

            

        </>
    )
}

export default Call