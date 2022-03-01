import React, { useState } from 'react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
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

const Atendimento = () =>{

    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // Exemplos
    const [labelChartSemana, setLabelChartSemana] = useState([15,16,17,18,19,20,21]) // semana 
    const [labelChartDia, setLabelChartDia] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]) // dia 
    const [labelChartMes, setLabelChartMes] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]) // Mes
    const [data, setData] = useState({dia:'Quarta-Feira ', mes:'Janeiro ', ano:'2022 '}) // deixar vir o mes certo
    return (
        <> 
            <CCard className='cardEsquerda'>
                <CCardBody>
                    <CCardTitle> <h3> Comparativo </h3> </CCardTitle>
                    <label > {data.mes}  {data.ano}</label>
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

                    <CChartLine
                        style={{ height: '300px', marginTop: '40px' }}
                        data={{
                        labels: labelChartSemana,
                        datasets: [
                            {
                            label: 'Atendimentos Abertos',
                            backgroundColor:  'transparent',
                            borderColor: getStyle('--cui-info'),
                            pointHoverBackgroundColor: getStyle('--cui-info'),
                            borderWidth: 2,
                            data: [
                                random(50, 200),
                                random(50, 200),
                                random(50, 200),
                                random(50, 200),
                                random(50, 200),
                                random(50, 200),
                                random(50, 200),
                            ],
                            fill: true,
                            },
                            {
                            label: 'Atendimentos Encerrados',
                            backgroundColor: 'transparent',
                            borderColor: getStyle('--cui-success'),
                            pointHoverBackgroundColor: getStyle('--cui-success'),
                            borderWidth: 2,
                            data: [
                                random(50, 200),
                                random(50, 200),
                                random(50, 200),
                                random(50, 200),
                                random(50, 200),
                                random(50, 200),
                                random(50, 200),
                            ],
                            },
                            
                        ],
                        }}
                        options={{
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                            display: true,
                            },
                        },
                        scales: {
                            x: {
                            grid: {
                                drawOnChartArea: false,
                            },
                            },
                            y: {
                            ticks: {
                                beginAtZero: true,
                                maxTicksLimit: 5,
                                stepSize: Math.ceil(250 / 5),
                                max: 250,
                            },
                            },
                        },
                        elements: {
                            line: {
                            tension: 0.4,
                            },
                            point: {
                            radius: 0,
                            hitRadius: 10,
                            hoverRadius: 4,
                            hoverBorderWidth: 3,
                            },
                        },
                        }}
                    />
                </CCardBody>
            </CCard>
        </>

    )
}

export default Atendimento