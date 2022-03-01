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

//    CSS DESSA PAGINA SE ENCONTRA NO INSURED, INSURED CSS, para manter o padrao 


const OcorrenciaInfos = (props) => {

    return (
        <> 
            {/* Dados da ocorrencia -->  */}
            <div className='container-dados-ocorrencia'>
                <div className='container-conteudo'>
                    <label className='titulo-container-card'> Dados da ocorrência</label>
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

                    <CRow className='containters-ocorrencia' >
                        <CCol xs={4}>
                            <label className='conteudo-label-titulo'> Endereço do local </label>
                            <br />
                            <label className='conteudo-label-info'> Av. Hypolito Guerra, 897 - Belo Horizonte - MG </label>
                            <br />
                        </CCol>
                        <CCol >
                            <label className='conteudo-label-titulo'> Referência </label>
                            <br />
                            <label className='conteudo-label-info'> - </label>
                            <br />
                        </CCol>
                        <CCol >
                            <label className='conteudo-label-titulo'> Número do B.O. </label>
                            <br />
                            <label className='conteudo-label-info'> 57878201 </label>
                            <br />
                        </CCol>
                        <CCol>
                            <label className='conteudo-label-titulo'> Unidade</label>
                            <br />
                            <label className='conteudo-label-info'> N/C </label>
                            <br />
                        </CCol>

                        <CCol >
                            <label className='conteudo-label-titulo'> Vítimas </label>
                            <br />
                            <label className='conteudo-label-info'> Não </label>
                            <br />
                        </CCol>

                        <CCol >
                            <label className='conteudo-label-titulo'> Terceiros </label>
                            <br />
                            <label className='conteudo-label-info'> Sim </label>
                            <br />
                        </CCol>

                        <CCol >
                            <label className='conteudo-label-titulo'> Ações contra o segurado </label>
                            <br />
                            <label className='conteudo-label-info'> Não </label>
                            <br />
                        </CCol>
                    </CRow>

                    <hr />

                    <CRow className='containters-ocorrencia'>
                        <CCol >
                            <label className='conteudo-label-titulo'> Constação de dados </label>
                            <br />
                            <label className='conteudo-label-info'> Não </label>
                            <br />
                        </CCol>

                        <CCol xs={4}>
                            <label className='conteudo-label-titulo'> Terceiros </label>
                            <br />
                            <label className='conteudo-label-info'> Sim </label>
                            <br />
                        </CCol>

                        <CCol >
                            <label className='conteudo-label-titulo'> Ressarcimento </label>
                            <br />
                            <label className='conteudo-label-info'> - </label>
                            <br />
                        </CCol>

                        <CCol >
                            <label className='conteudo-label-titulo'> Orçamento </label>
                            <br />
                            <label className='conteudo-label-titulo'> Ocorrência envolvidas </label>
                            <br />
                        </CCol>
                    </CRow>
                    <hr />
                    <CRow className='containters-ocorrencia'>
                        <CCol >
                            <label className='conteudo-label-titulo'> Descrição do ocorrido </label>
                            <br />
                            <label className='conteudo-label-info'> No local envolveram-se em acidente de trânsido o veículo Lada Vest Sport ASR 7B78 que era conduzido pela senhorita Fernanda Lopes, quando ela perdeu o controle do volante e bateu ao veículo Volkswagen Gol WET 2356 que era conduzido pelo senhor Joao Carlos Barroso </label>
                            <br />
                        </CCol>

                    </CRow>
                </div>
            </div>
        </>
    )
}

export default OcorrenciaInfos