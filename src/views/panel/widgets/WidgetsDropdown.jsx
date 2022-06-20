import React, { useState } from "react";
import { CRow, CCol, CDropdown, CDropdownMenu, CDropdownItem, CDropdownToggle, CWidgetStatsA, CCard, CCardBody, CCallout, CPopover, CButton } from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import { BsCircleFill } from "react-icons/bs";
import CIcon from "@coreui/icons-react";
import { cilOptions } from "@coreui/icons";

import "./css/widget.css";
import ModalReport from "../render/ModalReport";
import ModalGraphic from "../render/ModalGraphic";

const WidgetsDropdown = () => {
    // WIDGET 1 (Acumulado Mensal)-- Ainda falta colocar dados, labels ex: mes 1,2,3,4 ...
    const [acumuladoMensal, setAcumuladoMensal] = useState({
        valor: 9999.99,
        porcentagem: -12,
        title: "Acumulado Mensal",
    });


    const [widget1, setWidget1] = useState(acumuladoMensal);
    const [visibleReport, setVisibleReport] = useState(false);
    const [visibleGraphic, setVisibleGraphic] = useState(false);

    const month = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'MAio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];

    // WIDGET 2 (Abertura de Sinistro)
    const [sinistroMes, setSinistroMes] = useState({
        qtdAbertos: 23,
        porcentagem: 10,
        title: "Sinistro abertos no mês",
    });
    // Semana
    // DIA
    // Variavel definidora
    const [widgetSinistro, setWidgetSinistro] = useState(sinistroMes);

    // widget 3 - valores de planos
    const [planosData, setPlanosData] = useState({
        planAnalise: 20,
        planAtivo: 35,
        planDesativado: 40,
    });

    return (
        <>
            <ModalGraphic visibleGraphic={visibleGraphic} setVisibleGraphic={setVisibleGraphic} />
            <ModalReport visibleReport={visibleReport} setVisibleReport={setVisibleReport} />
            <CRow className="mb-3">
                <CCol xs={4}>
                    <CCallout className="p-0 callout-widget" color="success">
                        <CWidgetStatsA
                            className="widget-container"
                            value={`R$ ${widget1.valor}`}
                            title={widget1.title}
                            action={
                                <CDropdown alignment="end">
                                    <CDropdownToggle
                                        color="transparent"
                                        caret={false}
                                        className="p-0"
                                    >
                                        <CIcon icon={cilOptions} />
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CPopover
                                            content={
                                                <>
                                                    {
                                                        month.map((name, index) => (
                                                            <div key={index}>
                                                                <CButton
                                                                    color="link"
                                                                    variant="outline"
                                                                    onClick={() => console.log("Funcionouuuuuuu")}>
                                                                    {name}
                                                                </CButton>
                                                                <br />
                                                            </div>
                                                        ))
                                                    }
                                                </>
                                            }
                                            placement="right"
                                        >
                                            <CDropdownItem 
                                            color="link">
                                                Alterar mês
                                            </CDropdownItem>
                                        </CPopover>
                                        <CDropdownItem
                                            onClick={() => setVisibleReport(true)}
                                        >
                                            Gerar relátorio
                                        </CDropdownItem>
                                        <CDropdownItem
                                            onClick={() => setVisibleGraphic(true)}
                                        >
                                            Gerar gráfico
                                        </CDropdownItem>
                                        <CDropdownItem disabled>
                                            Mais Ferramentas
                                        </CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            }
                            chart={
                                <CChartLine
                                    className="mt-3 mx-3 "
                                    style={{ height: "70px" }}
                                    data={{
                                        labels: [
                                            "Januaryss",
                                            "FebruarySSS",
                                            "March",
                                            "April",
                                            "May",
                                            "June",
                                            "July",
                                            "January",
                                            "February",
                                            "March",
                                            "April",
                                            "May",
                                            "June",
                                            "July",
                                        ],
                                        datasets: [
                                            {
                                                label: "My First dataset",
                                                backgroundColor: "warning",
                                                borderColor: "rgba(29,27,31,0.5)",
                                                pointBackgroundColor:
                                                    "rgba(35,235,58, 0.8)",
                                                data: [
                                                    65, 59, 84, 84, 51, 55, 40, 65,
                                                    59, 84, 84, 51, 55, 40,
                                                ],
                                            },
                                        ],
                                    }}
                                    options={{
                                        plugins: {
                                            legend: {
                                                display: false,
                                            },
                                        },
                                        maintainAspectRatio: false,
                                        scales: {
                                            x: {
                                                grid: {
                                                    display: false,
                                                    drawBorder: false,
                                                },
                                                ticks: {
                                                    display: false,
                                                },
                                            },
                                            y: {
                                                min: 30,
                                                max: 89,
                                                display: false,
                                                grid: {
                                                    display: false,
                                                },
                                                ticks: {
                                                    display: false,
                                                },
                                            },
                                        },
                                        elements: {
                                            line: {
                                                borderWidth: 1,
                                                tension: 0.4,
                                            },
                                            point: {
                                                radius: 4,
                                                hitRadius: 10,
                                                hoverRadius: 4,
                                            },
                                        },
                                    }}
                                />
                            }
                        />
                    </CCallout>
                </CCol>

                <CCol xs={4}>
                    <CCallout className="p-0 callout-widget" color="danger">
                        <CWidgetStatsA
                            className="widget-container"
                            value={widgetSinistro.qtdAbertos}

                            title={widgetSinistro.title}
                            action={
                                <CDropdown alignment="end">
                                    <CDropdownToggle
                                        color="transparent"
                                        caret={false}
                                        className="p-0"
                                    >
                                        <CIcon icon={cilOptions} />
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CPopover
                                            content={
                                                <>
                                                    {
                                                        month.map((name, index) => (
                                                            <div key={index}>
                                                                <CButton
                                                                    color="link"
                                                                    variant="outline"
                                                                    onClick={() => console.log("Funcionouuuuuuu")}>
                                                                    {name}
                                                                </CButton>
                                                                <br />
                                                            </div>
                                                        ))
                                                    }
                                                </>
                                            }
                                            placement="right"
                                        >
                                            <CDropdownItem>
                                                Alterar mês
                                            </CDropdownItem>
                                        </CPopover>
                                        <CDropdownItem
                                            onClick={() => setVisibleReport(true)}
                                        >
                                            Gerar relátorio
                                        </CDropdownItem>
                                        <CDropdownItem
                                            onClick={() => setVisibleGraphic(true)}
                                        >
                                            Gerar gráfico
                                        </CDropdownItem>
                                        <CDropdownItem disabled>
                                            Mais Ferramentas
                                        </CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            }
                            chart={
                                <CChartLine
                                    className="mt-3 mx-3"
                                    style={{ height: "70px" }}
                                    data={{
                                        labels: [
                                            "Januaryi",
                                            "February",
                                            "March",
                                            "April",
                                            "May",
                                            "June",
                                            "July",
                                        ],
                                        datasets: [
                                            {
                                                label: "My First dataset  ORIGIM",
                                                backgroundColor: "info",
                                                borderColor: "rgba(29,27,31,0.5)",
                                                pointBackgroundColor:
                                                    "rgba(235,0,38, 0.8)",
                                                data: [1, 18, 9, 17, 34, 22, 11],
                                            },
                                        ],
                                    }}
                                    options={{
                                        plugins: {
                                            legend: {
                                                display: false,
                                            },
                                        },
                                        maintainAspectRatio: false,
                                        scales: {
                                            x: {
                                                grid: {
                                                    display: false,
                                                    drawBorder: false,
                                                },
                                                ticks: {
                                                    display: false,
                                                },
                                            },
                                            y: {
                                                min: -9,
                                                max: 39,
                                                display: false,
                                                grid: {
                                                    display: false,
                                                },
                                                ticks: {
                                                    display: false,
                                                },
                                            },
                                        },
                                        elements: {
                                            line: {
                                                borderWidth: 1,
                                            },
                                            point: {
                                                radius: 4,
                                                hitRadius: 10,
                                                hoverRadius: 4,
                                            },
                                        },
                                    }}
                                />
                            }
                        />
                    </CCallout>
                </CCol>

                <CCol xs={4}>

                    <CCallout className="p-0 callout-widget" color="warning">
                        <CCard className="card-widget">
                            <CCardBody className="py-0">
                                <CRow>
                                    <CCol className="d-flex justify-content-end mt-3">
                                        <CDropdown>
                                            <CDropdownToggle
                                                color="transparent"
                                                caret={false}
                                                className="p-0"
                                            >
                                                <CIcon icon={cilOptions} />
                                            </CDropdownToggle>
                                            <CDropdownMenu>
                                                <CPopover
                                                    content={
                                                        <>
                                                            {
                                                                month.map((name, index) => (
                                                                    <div key={index}>
                                                                        <CButton
                                                                            color="link"
                                                                            variant="outline"
                                                                            onClick={() => console.log("Funcionouuuuuuu")}>
                                                                            {name}
                                                                        </CButton>
                                                                        <br />
                                                                    </div>
                                                                ))
                                                            }
                                                        </>
                                                    }
                                                    placement="left"
                                                >
                                                    <CDropdownItem>
                                                        Alterar mês
                                                    </CDropdownItem>
                                                </CPopover>
                                                <CDropdownItem
                                                    onClick={() => setVisibleReport(true)}>
                                                    Gerar relátorio
                                                </CDropdownItem>
                                                <CDropdownItem
                                                    onClick={() => setVisibleGraphic(true)}
                                                >
                                                    Gerar gráfico
                                                </CDropdownItem>
                                                <CDropdownItem disabled>
                                                    Mais Ferramentas
                                                </CDropdownItem>
                                            </CDropdownMenu>
                                        </CDropdown>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol className="leftSimbol" sm="auto">
                                        <p className="circle-orange">
                                            <BsCircleFill />
                                        </p>
                                        <p className="circle-green">
                                            <BsCircleFill />
                                        </p>
                                        <p className="circle-red">
                                            <BsCircleFill />
                                        </p>
                                    </CCol>
                                    <CCol xs={9} className="p-0">
                                        <p>
                                            {planosData.planAnalise} Planos em
                                            análise
                                        </p>
                                        <p> {planosData.planAtivo} Planos ativos</p>
                                        <p>
                                            {planosData.planDesativado} Planos
                                            desativados
                                        </p>
                                    </CCol>
                                </CRow>
                            </CCardBody>
                        </CCard>
                    </CCallout>
                </CCol>
            </CRow>
        </>
    );
};

export default WidgetsDropdown;
