import React, { useEffect, useState } from 'react'
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CCard, CCardBody, CRow, CCol, CButton } from '@coreui/react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'

import urlDomain, { configCookies } from 'src/config'

import '../css/scratchs.css'

function Scratchs() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        const config = configCookies()

        axios
            .get(`${urlDomain}/risks`, config)
            .then((response) => {
                setDados(response.data)
            })
            .catch(r => {
                //console.log('error', r), alert('Login expirados'),window.location.reload()
            })
    }, [])

    const attScratchs = () => {
        const config = configCookies()
        axios
            .get(`${urlDomain}/risks`, config)
            .then((response) => {
                setDados(response.data)
            })
            .catch(r => {
                //console.log('error', r), alert('Login expirados'),window.location.reload()
            })
    }


    return (
        <CCard className='card'>
            <CCardBody>
                <CRow>
                    <CCol>
                        <label className="plan-title">Riscos</label >
                    </CCol>
                    <CCol className='btn-filter'>
                        <CButton
                            className='btn-save-global'
                            onClick={() => attScratchs()}
                        >
                            Atualizar
                        </CButton>
                    </CCol>
                </CRow>
                <br />
                {dados.length == 0 ?
                    <>
                        <h4> <Spinner animation="grow" variant="info" /></h4>
                        <br />
                    </> :
                    <div className="table-overflow">
                        <CTable striped hover>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">Valor m??nimo do ve??culo</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Valor m??ximo do ve??culo</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Constante de risco</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Vari??vel de exposi????o</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody >
                                {dados.map((item, index) => {
                                    return (
                                        <CTableRow key={index.toString()}>
                                            <CTableDataCell className="valorMin">
                                                <p> R$ {item.to} </p>
                                            </CTableDataCell>

                                            <CTableDataCell color='secondary' className="text-center">
                                                <p> R$ {item.until} </p>
                                            </CTableDataCell>

                                            <CTableDataCell className="text-center">
                                                <p> {item.krisk} </p>
                                            </CTableDataCell>

                                            <CTableDataCell color='secondary' className="text-center">
                                                <p> {item.exposition} </p>
                                            </CTableDataCell>
                                        </CTableRow>
                                    )
                                })}
                            </CTableBody>
                        </CTable>
                    </div>
                }
            </CCardBody>
        </CCard>
    )
}

export default Scratchs