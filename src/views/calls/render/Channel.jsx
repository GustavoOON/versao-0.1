import React from 'react';
import { CChart } from '@coreui/react-chartjs';
import { CCol, CCard, CCardBody, CRow } from '@coreui/react';

import ButtonGraph from '../btns/ButtonGraph';
import MonthYear from 'src/views/components/MonthYear';

const Channel = () => {
    return (
        <CCard className='card'>
            <CCardBody>
                <CRow>
                    <CCol>
                        <label className="call-title">Comparativo</label >
                        <br />
                        <MonthYear />
                    </CCol>
                    <CCol className='btn-filter'>
                        <ButtonGraph />
                    </CCol>
                </CRow>
                <CChart
                    type="doughnut"
                    options={{
                        plugins: {
                            legend: {
                                position: 'bottom',
                            },
                        }
                    }}
                    data={{
                        datasets: [
                            {
                                backgroundColor: ['#EB9B00', '#E7E6E6', '#B836F5', '#96BAF1', '#C9F196'],
                                data: [40, 20, 80, 10, 5],
                            },
                        ],
                        labels: ['Chat do aplicativo', 'E-mail', 'Instagram', 'Whatsapp', 'Outro'],
                    }}
                />
            </CCardBody>
        </CCard>
    )
}

export default  Channel;
