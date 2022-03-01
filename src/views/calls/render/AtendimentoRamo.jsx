import React, { Component } from 'react'
import { CChart } from '@coreui/react-chartjs'

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

const AtendimentoPorEndereco = () =>{

  
    
    return (
        <> 
            <CCard className='cardEsquerda'>
                <CCardBody>
                    <CCardTitle> <h3> Comparativo </h3> </CCardTitle>
                    <label > Dezembro 2021</label>
                    <CButtonGroup size="sm" role="group" className='btn1Chamados' aria-label="Basic outlined example">
                        <CButton color="primary" variant="outline" color="dark">
                            Dia
                        </CButton>
                        <CButton color="primary" variant="outline" color="dark">
                            Semana
                        </CButton>
                        <CButton color="primary"  variant="outline" color="dark">
                            Mês
                        </CButton>
                    </CButtonGroup>
                    <ButtonRelatory   />
                    <CChart
                        type="bar"
                        data={{
                            labels: ['WhatsApp', 'E-mail', 'Chat', 'Instagram',  'Outro'],
                            datasets: [
                            {
                                label: 'Clientes',
                                backgroundColor:  '#198BDB',
                                data: [40, 20, 12, 39, 10, 80],
                            },
                            {
                                label: 'Não Clientes',
                                backgroundColor: '#6EDBAC',
                                data: [10, 45, 22, 19, 30, 40],
                            },
                            ],
                        }}
                        labels="months"
                    />
                    
                </CCardBody>
            </CCard>
        </>

    )
}

export default AtendimentoPorEndereco