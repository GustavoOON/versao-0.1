import React, { useState } from 'react'
import { CButton, CCol, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import { Modal } from 'react-bootstrap';

import FormatDate from '../components/FormatDate';
import CustomerData from '../components/CustomerData';

const Travel = () => {
    const [visible, setVisible] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [fullscreen, setFullscreen] = useState(true);

    function verifica(breakpoint) {
        setFullscreen(breakpoint);
        const handleShow = setShow(true);
    }
    return (
        <>
            <CButton className='btn-save-global'
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
                        <CModalTitle className="title-modal">Viagens</CModalTitle>
                        <FormatDate date={new Date()} />
                    </div>
                </CModalHeader>
                <CModalBody>
                    <CRow>
                        <CCol>
                            <CustomerData />
                        </CCol>
                        <CCol>
                            <label className='font-info-subTitle'>Dados das viagens realizadas pelo veículo</label>
                            <br />
                            <label className='font-info-interTitle'>Placa do veículo</label>
                            <br />
                            <label className='font-info-content'></label>
                            <br />
                        </CCol>
                    </CRow>
                </CModalBody>
                <CModalFooter>
                    <CButton className='btn-cancel-global'
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

export default Travel;
