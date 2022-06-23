import React, { useState } from 'react';
import {
    CButton,
    CCol,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow,
} from '@coreui/react';
import { Modal } from 'react-bootstrap';

import FormatDate from '../components/FormatDate';
import CustomerData from '../components/CustomerData';

const Routes = () => {
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [fullscreen, setFullscreen] = useState(true);

    function verifica(breakpoint) {
        setFullscreen(breakpoint);
        const handleShow = setShow(true);
    }
    return (
        <>
            <CButton onClick={verifica} className="btn-save-global">
                Gerar relatório
            </CButton>
            <CModal visible={show} onCLose={handleClose} size="xl">
                <CModalHeader closeButton>
                    <div>
                        <CModalTitle className="title-modal">Rotas</CModalTitle>
                        <FormatDate />
                    </div>
                </CModalHeader>
                <CModalBody>
                    <CRow>
                        <CCol>
                            <CustomerData />
                        </CCol>
                        <CCol>
                            <label className="font-info-subTitle">
                                Rotas realizadas no mês
                            </label>
                            <br />
                        </CCol>
                    </CRow>
                </CModalBody>
                <CModalFooter>
                    <CButton
                        className="btn-cancel-global"
                        variant="outline"
                        onClick={handleClose}
                    >
                        Cancelar
                    </CButton>
                    <CButton className="btn-save-global" onClick={handleClose}>
                        Baixar relatório
                    </CButton>
                </CModalFooter>
            </CModal>
        </>
    );
};

export default Routes;
