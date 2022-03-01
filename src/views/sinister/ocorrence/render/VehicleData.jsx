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

const VeiculoInfo = (props) => {

    return (
        <> 
            {/* Dados da ocorrencia */}
            <div className='container-dados-ocorrencia'>
                <div className='container-conteudo'>
                    <label className='titulo-container-card'> Dados do veículo</label>
                    <CRow className='containters-ocorrencia' >
                        <CCol>
                        <label className='conteudo-label-titulo'> Rastreador </label>
                        <br />
                        <label className='conteudo-label-info-sublinhado'> 43455323 </label>
                        <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Placa </label>
                        <br />
                        <label className='conteudo-label-info'> ASR - 4545 </label>
                        <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Marca </label>
                        <br />
                        <label className='conteudo-label-info'> Lada </label>
                        <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Modelo </label>
                        <br />
                        <label className='conteudo-label-info'> Vest Sport </label>
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Tipo </label>
                            <br />
                            <label className='conteudo-label-info'> Particular </label>
                        </CCol>

                        <CCol>
                            <label className='conteudo-label-titulo'> Fabricação </label>
                            <br />
                            <label className='conteudo-label-info'> 2020 </label>
                            
                        </CCol>
                    </CRow>

                    <hr />

                    <CRow className='containters-ocorrencia' >
                        <CCol >
                        <label className='conteudo-label-titulo'> Cor </label>
                        <br />
                        <label className='conteudo-label-info'> Cinza </label>
                        <br />
                        </CCol>
                        <CCol >
                        <label className='conteudo-label-titulo'> Chassi </label>
                        <br />
                        <label className='conteudo-label-info'> 6A7 6A5unC 32 gY4947 </label>
                        <br />
                        </CCol>
                        <CCol >
                        <label className='conteudo-label-titulo'> Renavam </label>
                        <br />
                        <label className='conteudo-label-info'> 57878201323223 </label>
                        <br />
                        </CCol>
                        <CCol>

                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Leiloeiro </label>
                            <br />
                            <label className='conteudo-label-info'> - </label>
                            <br />
                        </CCol>

                    </CRow>

                   
                </div>
            </div>
        </>
    )
}

export default VeiculoInfo