import React, { useState } from 'react'
import { CButton, CCol, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import { Modal } from 'react-bootstrap';

import FormatDate from '../components/FormatDate';
import CustomerData from '../components/CustomerData';

const Resume = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    function verifica() {
        setShow(true);
    }

    return (
        <>
            <CButton
                className='btn-save-global'
                onClick={verifica}
            >
                Gerar relatório
            </CButton>
            <CModal
                visible={show}
                onClose={handleClose}
                size="xl"
            >
                <CModalHeader closeButton>
                    <div>
                        <CModalTitle className="title-modal">Resumo</CModalTitle>
                        <FormatDate />
                    </div>
                </CModalHeader>
                <CModalBody>
                    <CRow>
                        <CCol>
                            <CustomerData />
                        </CCol>
                        <CCol>
                            <label className='font-info-subTitle'>Dados do veículo</label>
                            <br />
                            <label className='font-info-interTitle'>Placa do veículo</label>
                            <br />
                            <label className='font-info-content'></label>
                            <br />

                            <label className='font-info-interTitle'>Status do dispositivo</label>
                            <br />
                            <label className='font-info-content'></label>
                            <br />

                            <label className='font-info-interTitle'>Último sincronismo</label>
                            <br />
                            <label className='font-info-content'></label>
                            <br />

                            <label className='font-info-interTitle'>Quilometragem</label>
                            <br />
                            <label className='font-info-content'></label>
                            <br />

                            <label className='font-info-interTitle'>Consumo/km</label>
                            <br />
                            <label className='font-info-content'></label>
                            <br />

                            <label className='font-info-interTitle'>Sinistro abertos no mês</label>
                            <br />
                            <label className='font-info-content'></label>
                        </CCol>
                    </CRow>
                </CModalBody>
                <CModalFooter>
                    <CButton
                        className='btn-cancel-global'
                        variant='outline'
                        onClick={handleClose}
                    >
                        Cancelar
                    </CButton>
                    <CButton
                        className='btn-save-global'
                        onClick={handleClose}
                    >
                        Baixar relatório
                    </CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default Resume