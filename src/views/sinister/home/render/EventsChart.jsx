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
import {CChart} from '@coreui/react-chartjs'
import ButtonRelatory from '../../btn-relatory/ButtonCall'

const eventChart = () =>{

    return (
        <>
            <CRow >
                <CCol  className = 'esq23'>
                    <label className="text-titulo">Eventos</label>
                    <br />
                    <label  className="fincSub"> Dezembro 2021</label>
                </CCol>
                
                <CCol className='direitaChartSinister'>
                    
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
                        {/* Passar valores props */}
                    <ButtonRelatory /> 
                </CCol>
            </CRow>
                     
                    
            <CChart
                type="bar"
                data={{
                    labels: ['Colisão', 'Saída da pista', 'Capotamento', 'Atropelamento', 'Outro'],
                    datasets: [
                        {
                            label: 'Este mês',
                            backgroundColor: [ '#03F5EA' ],
                            data: [43, 21, 32, 60, 80, 100],
                        },
                        {
                            label: 'Mês passado',
                            backgroundColor: [ '#00B3F5'],
                            data: [55, 11, 22, 40, 60,100],
                        },
                    ],
                }}
            />
        </>

    )
}

export default eventChart