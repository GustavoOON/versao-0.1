import React from 'react'
import {
    CCard, 
    CCardBody,
    CButton ,
    CRow,
    CCol,
    CNavItem,
    CFormInput,
    CProgress,
    CProgressBar
  } from '@coreui/react'

const AnalistaData = (props) => {

    return (
        <> 
            <div className='container-dados-ocorrencia'>
                <div className='container-conteudo'>
                    <label className='titulo-container-card'> Dados do analista</label>
                    <CRow className='containters-ocorrencia' >
                        <CCol>
                            <label className='conteudo-label-titulo'> Nome do analista </label>
                            <br />
                            <label className='conteudo-label-info-sublinhado'> Lucas de Castro </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Telefone </label>
                            <br />
                            <label className='conteudo-label-info'> 031 - 9878 3131 </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Grupo </label>
                            <br />
                            <label className='conteudo-label-info'> PP II RR </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Perito </label>
                            <br />
                            <label className='conteudo-label-info'> Aloísio Guedes </label>
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Supervisor </label>
                            <br />
                            <label className='conteudo-label-info'> Carla Fernandes </label>
                        </CCol>

                    
                    </CRow>

                    <hr />

                    <CRow className='containters-ocorrencia' >
                        <CCol >
                            <label className='conteudo-label-titulo'> Regulador Responsável </label>
                            <br />
                            <label className='conteudo-label-info'> Aloísio Fernandes </label>
                            <br />
                        </CCol>
                        <CCol >
                            <label className='conteudo-label-titulo'> Sindicancia </label>
                            <br />
                            <label className='conteudo-label-info'> Ababel </label>
                            <br />
                        </CCol>
                        <CCol >
                            <label className='conteudo-label-titulo'> Supervisor </label>
                            <br />
                            <label className='conteudo-label-info'> Marcelo Vieira </label>
                            <br />
                        </CCol>
                        <CCol>

                        </CCol>
                        <CCol>
                           
                        </CCol>

                    </CRow>

                   
                </div>
            </div>
        </>
    )
}

export default AnalistaData