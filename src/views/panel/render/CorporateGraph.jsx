import React, { useState } from 'react'
import { CCard, CCardBody, CCardTitle } from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle } from "@coreui/utils";

import ButtonGraph from "../btns/ButtonGraph";

function CorporateGraph() {
    const year = new Date().getFullYear()
    const month = new Date().getMonth()

    const monthName = {
        0: 'Janeiro',
        1: 'Fevereiro',
        2: 'Março',
        3: 'Abril',
        4: 'MAio',
        5: 'Junho',
        6: 'Julho',
        7: 'Agosto',
        8: 'Setembro',
        9: 'Outubro',
        10: 'Novembro',
        11: 'Dezembro',
    };


    const [labelChartSemana, setLabelChartSemana] = useState([
        15, 16, 17, 18, 19, 20, 21,
    ]); // semana

    // chart mensal
    const [comparativo, setComparativo] = useState({
        titleAcumulado: "Acumulado mensal",
        dataAcumulado: [12, 32, 45, 22, 54, 32, 21],
        titleEncerrado: "Atendimentos Encerrados",
        dataEncerrado: [6, 12, 22, 11, 27, 16, 10],
    });

    return (
        <CCard className="cardEsquerda">
            <CCardBody>
                <div className='d-flex justify-content-between'>
                    <CCardTitle>Comparativo</CCardTitle>
                    <ButtonGraph />
                </div>
                <label>
                    {monthName[month]} {year}
                </label>

                <CChartLine
                    style={{ height: "300px", marginTop: "40px" }}
                    data={{
                        labels: labelChartSemana,
                        datasets: [
                            {
                                label: "Acumudddlado",
                                backgroundColor: "transparent",
                                borderColor: getStyle("--cui-info"),
                                borderWidth: 2,
                                pointHoverBackgroundColor: "#fff",
                                data: comparativo.dataAcumulado,
                                fill: true,
                            },
                            {
                                label: "Atendimentos Encerrados",
                                backgroundColor: "transparent",
                                borderColor: getStyle("--cui-success"),
                                pointHoverBackgroundColor:
                                    getStyle("--cui-success"),
                                borderWidth: 2,
                                pointHoverBackgroundColor: "#fff",
                                data: comparativo.dataEncerrado,
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
                        point: {
                            radius: 4,
                            hitRadius: 10,
                            hoverRadius: 4,
                        },
                    }}
                />
            </CCardBody>
        </CCard>
    )
}

export default CorporateGraph;
