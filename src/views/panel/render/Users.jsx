import React from 'react'
import { CChart } from '@coreui/react-chartjs'
import { CCard, CCardBody, CCardTitle } from '@coreui/react'

import ButtonCall from '../btns/ButtonGraph'

const Users = () => {
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

    return (
        <>
            <CCard className='cardEsquerda'>
                <CCardBody>
                    <div className='d-flex justify-content-between'>
                        <CCardTitle>Usuários</CCardTitle>
                        <ButtonCall />
                    </div>
                    <label>{monthName[month]} {year}</label>
                    <CChart
                        type="bar"
                        data={{
                            labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
                            datasets: [
                                {
                                    label: 'Usuários novos',
                                    backgroundColor: '#2561FA',
                                    data: [40, 20, 12, 39, 10, 80],
                                },
                                {
                                    label: 'Usuários recorrentes',
                                    backgroundColor: '#19D1FD',
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

export default Users