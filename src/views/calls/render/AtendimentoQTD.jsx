import React, { Component } from 'react'


import {
    CCol,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardTitle,
    CCardText,
  } from '@coreui/react'

import ButtonRelatory from '../btns/ButtonCall'

const AtendimentoQTD = () =>{

    return (
        <>
            <CCard className='text-center cardDireita'>
                <CCardBody>
                    <ButtonRelatory   />
                    <div className='container-atendimentos'> 
                        <h2> 55 </h2> 
                        <h5>Atendimentos em Aberto</h5>
                    </div>

                    <div className='container-atendimentos-fechado'> 
                        <h2> 125 </h2> 
                        <h5>Atendimentos encerrados nas últimas 24 Hrs</h5>
                    </div>
                    
                </CCardBody>
            </CCard>
        </>
    )   
}

export default AtendimentoQTD