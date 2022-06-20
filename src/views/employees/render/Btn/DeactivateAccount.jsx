import React, { useState } from 'react';
import { CButton, CCol, CFormCheck, CFormInput, CFormLabel, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'

function DeactivateAccount({ setDeactivateAccount, deactivateAccount }) {
    const [dateFim, setDateFim] = useState(false)


    return (
        <CModal
            alignment="center"
            visible={deactivateAccount}
            size="lg"
            onClose={() => setDeactivateAccount(false)}
        >
            <CModalHeader>
                <CModalTitle className="title-modal">Desativar funcionário</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <p>Defina o intervalo de tempo que o funcionário ficará desativado:</p>
                <CRow>
                    <CCol md={4}>
                        <CFormLabel>Data de início</CFormLabel>
                        <CFormInput
                            type='date'
                        />

                    </CCol>
                    <CCol md={4}>
                        <CFormLabel>Data de fim</CFormLabel>
                        <CFormInput
                            disabled={dateFim}
                            type='date'
                        />
                    </CCol>
                    <CCol md={10} className="mt-4">
                        <CFormCheck
                            onClick={() => setDateFim(!dateFim)}
                            label="Data de fim não definida"
                        />
                    </CCol>
                </CRow>
            </CModalBody>
            <CModalFooter>
                <CButton
                    className='btn-cancel-global'
                    size="lg"
                    variant='outline'
                    onClick={() => setDeactivateAccount(false)}
                >
                    Cancelar
                </CButton>
                <CButton
                    size="lg"
                    className='btn-save-global'
                >
                    Salvar
                </CButton>
            </CModalFooter>
        </CModal>
    )
}

export default DeactivateAccount