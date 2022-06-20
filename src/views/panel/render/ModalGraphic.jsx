import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CFormInput, CFormLabel, CFormSelect, CListGroup, CListGroupItem, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import FormatDate from 'src/views/tracking/components/FormatDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function ModalGraphic({ visibleGraphic, setVisibleGraphic }) {
    const [value, onChange] = useState(new Date())

    return (
        <CModal
            visible={visibleGraphic}
            onClose={() => setVisibleGraphic(false)}
            size="lg"
        >
            <CModalHeader
                closeButton={false}
                className='d-block'
            >
                <CModalTitle className="title-modal">Gerar gráfico</CModalTitle>
                <CModalTitle><FormatDate /></CModalTitle>
            </CModalHeader>
            <CModalBody className="p-0" >
                <CCard>
                    <CRow className="g-0">
                        <CCol md={4}>
                            <CListGroup className='border-card' flush>
                                <CListGroupItem className="background-card">
                                    <label>Tipo de gráfico</label>
                                    <CFormSelect size="sm" className="mb-3">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CListGroupItem>
                                <CListGroupItem
                                    className="background-card">
                                    <label>Títulos do gráfico e dos eixos</label>
                                    <CFormSelect size="sm" className="mb-3">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                    <label>Texto do título</label>
                                    <CFormInput
                                        type='text'
                                        placeholder='Título'
                                        size="sm"
                                        className="mb-3" />
                                </CListGroupItem>
                                <CListGroupItem className="background-card">
                                    <label>Intervalo de dados</label>
                                    <CFormSelect size="sm" className="mb-3">
                                        <option>Seleciona o mês</option>
                                        <option value="1">Janeiro</option>
                                        <option value="2">Fevereiro</option>
                                        <option value="3">Março</option>
                                        <option value="4">Abril</option>
                                        <option value="5">Maio</option>
                                        <option value="6">Junho</option>
                                        <option value="7">Julho</option>
                                        <option value="8">Agosto</option>
                                        <option value="9">Setembro</option>
                                        <option value="10">Outubro</option>
                                        <option value="11">Novembro</option>
                                        <option value="12">Dezembro</option>
                                    </CFormSelect>
                                    <Calendar
                                        onChange={onChange}
                                        value={value}
                                        className="calendario-css-panel mb-3"
                                    />

                                </CListGroupItem>
                            </CListGroup>
                        </CCol>
                        <CCol md={8}>
                            <CCardBody>
                               
                            </CCardBody>
                        </CCol>
                    </CRow>
                </CCard>
            </CModalBody>
            <CModalFooter>
                <CButton
                    className='btn-cancel-global'
                    variant='outline'
                    onClick={() => setVisibleGraphic(false)}
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

export default ModalGraphic;
