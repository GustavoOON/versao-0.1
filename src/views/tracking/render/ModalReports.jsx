import React from 'react';
import {
    CButton,
    CModal,
    CModalBody,
    CModalHeader,
    CModalTitle,
} from '@coreui/react';
import { Modal } from 'react-bootstrap';
import Report from './Report';

function ModalReports({ show, closeModal }) {
    return (
        <CModal visible={show} onClose={closeModal} size="xl">
            <CModalHeader closeButton>
                <CModalTitle className="title-modal">Relatórios</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <Report />
            </CModalBody>
            {/* <CModalFooter>  
                <CButton onClick={closeModal}>
                    Sair
                </CButton>
            </CModalFooter> */}
        </CModal>
    );
}

export default ModalReports;
