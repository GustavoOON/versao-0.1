import React from 'react'
import ButtonGraph  from './../bottons/ButtonChart'

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CCardText,
    CRow,
    CCardTitle,
    CButtonGroup, 
   
  } from '@coreui/react'

import {CChart} from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import {cilOptions } from '@coreui/icons'

const ChartUsers = () =>{

    
    return(
        <>
            <CCard className="cardsFinance">
                <CCardBody>
                    <CRow>
                        <CCol  className = 'esq23'sm="auto">
                            <label className="fincTitulo"> Planos</label>
                            <br />
                            <label  className="fincSub"> Dez 2021</label>
                        </CCol>
                        <CCol className='dir23'>
                            <div className='direita-container-top-card'>
                                <CButtonGroup size="sm" role="group" aria-label="Basic outlined example">
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
                                
                                <ButtonGraph />
                            </div>
                        </CCol>
                    </CRow>
                    
                    <CChart
                        type="bar"
                        data={{
                            labels: ['Ativo', 'Em análise', 'Cancelado'],
                            datasets: [
                            {
                                label: 'Usuários',
                                backgroundColor: ['#6BFF77', '#FF9500', '#FF2801' ],
                                data: [40,10,20, 60],
                            },
                            ],
                        }}
                        width={"10%"}
                        height={"10%"}
                        labels="months"
                    />
                </CCardBody>
            </CCard>
        </>
    )
}

export default ChartUsers