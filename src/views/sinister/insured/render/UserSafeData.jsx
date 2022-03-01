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

const OcorrenciaInfos = (props) => {

    return (
        <> 
            {/* Dados da ocorrencia */}
            <div className='container-dados-ocorrencia'>
                <div className='container-conteudo'>
                    <label className='titulo-container-card'> Dados do comunicante e segurado </label>

                    <label className='subtituloTipoData' > Dados do comunicante</label>
                    <CRow className='containters-ocorrencia' >
                        <CCol>
                            <label className='conteudo-label-titulo'> Evento </label>
                            <br />
                            <label className='conteudo-label-info-sublinhado'> Colisão </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Dia da ocorrência </label>
                            <br />
                            <label className='conteudo-label-info'> Quinta-feira </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Data de nascimento </label>
                            <br />
                            <label className='conteudo-label-info'> 17/03/1999 </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Parentesco do condutor </label>
                            <br />
                            <label className='conteudo-label-info'> - </label>
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Proprietário no sinistro </label>
                            <br />
                            <label className='conteudo-label-info'> - </label>
                            
                        </CCol>
                    </CRow>

                    <hr />
                    <label className='subtituloTipoData2' > Dados do segurado </label>
                    <CRow className='containters-ocorrencia' >
                        <CCol >
                            <label className='conteudo-label-titulo'> Nome do segurado </label>
                            <br />
                            <label className='conteudo-label-info'> Fernanda Lopes </label>
                            <br />
                        </CCol>

                        <CCol >
                            <label className='conteudo-label-titulo'> Telefone </label>
                            <br />
                            <label className='conteudo-label-info'> (031) 99890890</label>
                            <br />
                        </CCol>

                        <CCol >
                            <label className='conteudo-label-titulo'> E-mail </label>
                            <br />
                            <label className='conteudo-label-info'> ferlopes@gmail.com </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Utilizou o guincho ? </label>
                            <br />
                            <label className='conteudo-label-info'> Sim </label>
                            <br />
                        </CCol>

                        <CCol >
                            <label className='conteudo-label-titulo'> Tipo de guincho </label>
                            <br />
                            <label className='conteudo-label-info'> Particular </label>
                            <br />
                        </CCol>

                    </CRow>

                    <hr />

                    <CRow className='containters-ocorrencia'>
                        <CCol xs={4} >
                            <label className='conteudo-label-titulo'> Endereço do cliente</label>
                            <br />
                            <label className='conteudo-label-info'> Rua Laurindo Ferreira, 789 - Belo Horizonte MG </label>
                            <br />
                        </CCol>

                        <CCol >
                            <label className='conteudo-label-titulo'> CEP </label>
                            <br />
                            <label className='conteudo-label-info'> 31587-985 </label>
                            <br />
                        </CCol>

                        <CCol >
                            <label className='conteudo-label-titulo'> Data de nascimento </label>
                            <br />
                            <label className='conteudo-label-info'> 17/03/1999 </label>
                            <br />
                        </CCol>

                        <CCol >
                            <label className='conteudo-label-titulo'> Profissão </label>
                            <br />
                            <label  className='conteudo-label-info'> Médica </label>
                            <br />
                        </CCol>

                        <CCol >
                            <label className='conteudo-label-titulo'> Reparos autorizados ?  </label>
                            <br />
                            <label  className='conteudo-label-info' > Não </label>
                            <br />
                        </CCol>
                    </CRow>
                    <hr />

                    <CRow className='containters-ocorrencia'>
                        <CCol xs={4} >
                            <label className='conteudo-label-titulo'> Segurado decladra ser, ou ter relacionamento, com a pessoa politicamente exposta estrangeira    </label>
                            <br />
                            <label className='conteudo-label-info'> Não </label>
                            <br />
                        </CCol>

                        <CCol>
                            <label className='conteudo-label-titulo'>Conta  </label>
                            <br />
                            <label className='conteudo-label-info'> - </label>
                            <br />
                        </CCol>

                        <CCol>
                            <label className='conteudo-label-titulo'>Unidade  </label>
                            <br />
                            <label className='conteudo-label-info'> - </label>
                            <br />
                        </CCol>

                         <CCol>
                            <label className='conteudo-label-titulo'>Cargo  </label>
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

export default OcorrenciaInfos