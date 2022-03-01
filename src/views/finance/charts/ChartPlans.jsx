import React from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CCardText,
    CRow,
    CCardTitle,
    CButtonGroup
   
  } from '@coreui/react'
  import { cilLoop } from '@coreui/icons'
  import CIcon from '@coreui/icons-react'
  import {CChart} from '@coreui/react-chartjs'
  import ButtonGraph  from './../bottons/ButtonChart'

const ChartPlan = () =>{


    return(
        <>
            <CCard className="cardsFinance">
                <CCardBody>
                    <CRow className='container-linha-top-card'>
                        <CCol  className = 'esq23'>
                            <label className="fincTitulo">Planos</label>
                            <br />
                            <label  className="fincSub"> Dez 2021</label>
                        </CCol>
                        
                        <CCol className='dir23'>
                            <div className='direita-container-top-card'>
                                <CButtonGroup size="sm" role="group" aria-label="Basic outlined example">
                                    <CButton color="primary" size="sm" variant="outline" color="dark">
                                        Dia
                                    </CButton>
                                    <CButton color="primary" size="sm" variant="outline" color="dark">
                                        Semana
                                    </CButton>
                                    <CButton color="primary" size="sm" variant="outline" color="dark">
                                        Mês
                                    </CButton>
                                    <CButton color="primary" size="sm"  variant="outline" color="dark">
                                        <CIcon icon={cilLoop}  size="sm"/>
                                    </CButton>
                                    
                                </CButtonGroup>
                                
                                <ButtonGraph />
                            </div>
                        </CCol>
                    </CRow>
                    
                    <CChart
                        type="doughnut"
                        data={{
                            datasets: [
                            {
                                backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                                data: [40, 20, 80, 10],
                            },
                            ],
                            labels: ['Plano Ouro', 'Plano Prata', 'Plano Bronze', 'Customizado'],
                        }}
                    />
                   
                </CCardBody>
            </CCard>
        </>
    )
}

export default ChartPlan