import React, {useState} from 'react'
import './css/home.css'
import {
    CCard, 
    CCardBody,
    CFormInput ,
    CRow,
    CCol,
    CNavItem,
  } from '@coreui/react'

import SinisterChart from './render/SinisterChart'
import EventsChart from './render/EventsChart'
import CalendarOcorrencias from './render/Calendar'
const Home = () => {

    const [qtd_total_sinistro, setQtd_total_sinistro] = useState(34)
    return (
        <> 
            <br />
            <CRow>
                <CCol xs={8}>
                    <CCard className='card1'>
                        <CCardBody>
                            <div>
                                <label className='text-titulo'> Pesquise o número da ocorrência</label>
                                <CFormInput type="search" className="me-2" placeholder="Pesquisar" />
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol xs={4}>
                    <CCard className='card1'>
                        <CCardBody>
                            <div className='card2'>
                                <h4>Total de sinistro já abertos</h4>
                                <h2>{qtd_total_sinistro}</h2>
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            <br />

            <CRow>
                <CCol xs={8}>
                    <CCard className='cardEsqSinistro'>
                        <CCardBody>
                            <SinisterChart />
                        </CCardBody>
                    </CCard>
                    <br />
                    <CCard className='cardEsquerda'>
                        <CCardBody>
                            <EventsChart />
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol xs={4}>
                    <CCard className='card-Dir'>
                        <CCardBody>
                           <CalendarOcorrencias /> 
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            <br />
        </>
    )
}

export default Home