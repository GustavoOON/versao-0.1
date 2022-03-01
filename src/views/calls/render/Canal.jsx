import React, { Component } from 'react'

import { CChart } from '@coreui/react-chartjs'
import ButtonRelatory from '../btns/ButtonCall'
import {
    CCol,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardTitle,
    CCardText,
  } from '@coreui/react'

const Canal = () =>{

    return (
        <>

            <CCard className='cardDireita'>
                <CCardBody>
                    <CCardTitle> <h3>Canal</h3> </CCardTitle>
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
                    <br /> <br />
                    <CChart
                        type="doughnut"
                        data={{
                            datasets: [
                            {
                                backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#082975'],
                                data: [40, 20, 80, 10, 5],
                            },
                            ],
                            labels: ['Chat Aplicativo', 'E-mail', 'Instagram', 'Whatsapp', 'Outro'],
                        }}
                    />
                    
                </CCardBody>
            </CCard>
             
            

        </>
    )
}

export default Canal