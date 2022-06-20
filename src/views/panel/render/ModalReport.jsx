import React from 'react'
import { CButton, CCol, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import FormatDate from 'src/views/tracking/components/FormatDate';

function ModalReport({ visibleReport, setVisibleReport }) {
    return (
        <CModal
            visible={visibleReport}
            onClose={() => setVisibleReport(false)}
            size="lg"
        >
            <CModalHeader
                closeButton={false}
                className='d-block'
            >
                <CModalTitle className="title-modal">Relatório</CModalTitle>
                <CModalTitle><FormatDate /></CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CRow>
                    <CCol md={6} className="mb-5">
                        <label>Acumulado (R)</label>
                        <br />
                        <label>
                            999999
                        </label>
                    </CCol>
                    <CCol md={6} className="mb-5">
                        <label>Sinistros abertos no mês</label>
                        <br />
                        <label>
                            32
                        </label>
                    </CCol>
                    <CCol md={6} className="mb-5">
                        <label>Situação dos planos</label>
                        <br />
                        <label>
                            24 planos em análise
                        </label>
                        <br />
                        <label>
                            59 planos ativos
                        </label>
                        <br />
                        <label>
                            17 planos desativados
                        </label>
                    </CCol>
                    <CCol md={6} className="mb-5">
                        <label>Planos ativos</label>
                        <br />
                        <label>
                            Plano Bronze: 12 planos
                        </label>
                        <br />
                        <label>
                            Plano Prata: 26 planos
                        </label>
                        <br />
                        <label>
                            Plano Ouro: 13 planos
                        </label>
                        <br />
                        <label>
                            Customizado: 08 planos
                        </label>
                    </CCol>
                    <CCol md={6} className="mb-5">
                        <label>Situação dos planos</label>
                        <br />
                        <label>
                            105 usuários recorrentes
                        </label>
                        <br />
                        <label>
                            53 usuários novos
                        </label>
                    </CCol>
                </CRow>
            </CModalBody>
            <CModalFooter>
                <CButton
                    className='btn-cancel-global'
                    variant='outline'
                    onClick={() => setVisibleReport(false)}
                >
                    Cancelar
                </CButton>
                <CButton
                    className='btn-save-global'
                >
                    Salvar
                </CButton>
            </CModalFooter>
        </CModal>
    )
}

export default ModalReport;
