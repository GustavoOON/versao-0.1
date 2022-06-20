import React, { useState } from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'

import ButtonGraph from '../buttons/ButtonGraph'
import MonthAndYear from '../components/MonthAndYear'

const ChartUsers = () => {
    const [cardChartFilter, setCardChartFilter] = useState(false);
    const [city, setCity] = useState('');
    const [period, setPeriod] = useState('');
    const [typeUsers, setTypeUsers] = useState('');

    const bodyWeek = {
        labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5'],
        newUsers: [40, 10, 20, 60, 20],
        recurringUsers: [30, 30, 10, 10, 63],
    }

    const saveFilter = (usersCity, usersType, initialDate, finalDate) => {
        const init = initialDate.split('-').splice(1).reverse().join('/');
        const final = finalDate.split('-').splice(1).reverse().join('/');

        setCardChartFilter(true)
        setCity(usersCity);
        setTypeUsers(usersType)
        setPeriod(`Período: ${init} - ${final}`)
        // endpoint para fazer o filtro
    }

    const saveReport = (usersCity, usersType, initialDate, finalDate) => {
        
    }

    return cardChartFilter ? (
        <CCard className="cards">
            <CCardBody>
                <CRow>
                    <CCol sm="auto pe-0">
                        <label className="finc-title">Total de usuários - <span className='fs-6 color-text'>{city}</span></label>
                        <br />
                        <label className="finc-sub"><MonthAndYear /> - <span className='color-text'> {period}</span> </label>
                    </CCol>
                    <CCol className='btn-filter ps-0'>
                        <ButtonGraph
                            name={'dos usuários'}
                            saveFilter={saveFilter}
                            saveReport={saveReport}
                        />
                    </CCol>
                </CRow>

                <CChart
                    labels="week"
                    type="bar"
                    options={{
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    padding: 8,
                                    boxWidth: 30
                                }
                            },
                        }
                    }}
                    data={{
                        labels: bodyWeek.labels,
                        datasets: [
                            {
                                label: 'Usuários novos',
                                barPercentage: 0.6,
                                backgroundColor: '#00F781',
                                data: bodyWeek.newUsers,
                            },
                            {
                                label: 'Usuários recorrentes',
                                barPercentage: 0.6,
                                backgroundColor: '#216CFF',
                                data: bodyWeek.recurringUsers,
                            },
                        ],
                    }}
                    width={100}
                    height={100}
                />
            </CCardBody>
        </CCard>
    ) : (
        <CCard className="cards">
            <CCardBody>
                <CRow>
                    <CCol sm="auto">
                        <label className="finc-title">Total de usuários</label>
                        <br />
                        <label className="finc-sub"><MonthAndYear /></label>
                    </CCol>
                    <CCol className='btn-filter'>
                        <ButtonGraph
                            name={'dos usuários'}
                            saveFilter={saveFilter}
                            saveReport={saveReport}
                        />
                    </CCol>
                </CRow>

                <CChart
                    labels="week"
                    type="bar"
                    options={{
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    padding: 8,
                                    boxWidth: 30
                                }
                            },
                        }
                    }}
                    data={{
                        labels: bodyWeek.labels,
                        datasets: [
                            {
                                label: 'Usuários novos',
                                barPercentage: 0.6,
                                backgroundColor: '#00F781',
                                data: bodyWeek.newUsers,
                            },
                            {
                                label: 'Usuários recorrentes',
                                barPercentage: 0.6,
                                backgroundColor: '#216CFF',
                                data: bodyWeek.recurringUsers,
                            },
                        ],
                    }}
                    width={100}
                    height={100}
                />
            </CCardBody>
        </CCard>
    )
}

export default ChartUsers;
