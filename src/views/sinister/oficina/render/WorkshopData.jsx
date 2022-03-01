import React from 'react'

import {
    CCard, 
    CCardBody,
    CButton ,
    CRow,
    CCol,
 
  } from '@coreui/react'
const WorkshopData = () =>{

    return (
        <> 
             <div className='container-dados-ocorrencia'>
                <div className='container-conteudo'>
                    <label className='titulo-container-card'> Dados da ocorrência</label>
                    <CRow className='containters-ocorrencia' >
                        <CCol>
                            <label className='conteudo-label-titulo'> Data de agendamento da vistoria </label>
                            <br />
                            <label className='conteudo-label-info-sublinhado'> 29/03/2022 </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Oficina </label>
                            <br />
                            <label className='conteudo-label-info'> Oficina Mecânica Tomazina </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Tipo de oficina </label>
                            <br />
                            <label className='conteudo-label-info'> Fast service </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Veículo na oficina ? </label>
                            <br />
                            <label className='conteudo-label-info'> Sim </label>
                        </CCol>
                      
                    </CRow>

                    <hr />

                    <CRow className='containters-ocorrencia' >
                        <CCol>
                            <label className='conteudo-label-titulo'> Contato </label>
                            <br />
                            <label className='conteudo-label-info-sublinhado'> - </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Telefone </label>
                            <br />
                            <label className='conteudo-label-info'> 032 99088909 </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Telefone 2 </label>
                            <br />
                            <label className='conteudo-label-info'> 031 998076699 </label>
                            <br />
                        </CCol>
                        <CCol>
                      
                        </CCol>
                    </CRow>

                    <hr />

                    <CRow className='containters-ocorrencia' >
                        <CCol xs={6}>
                            <label className='conteudo-label-titulo'> Endereço </label>
                            <br />
                            <label className='conteudo-label-info-sublinhado'> Rua Tomazina, 166 - Belo Horizonte -MG </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> CEP </label>
                            <br />
                            <label className='conteudo-label-info'> 31259-478 </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> E-mail </label>
                            <br />
                            <label className='conteudo-label-info'> oficina.tomazina@gmail.com </label>
                        </CCol>
                    </CRow>
                </div>
            </div>
        </>
    )
}

export default WorkshopData