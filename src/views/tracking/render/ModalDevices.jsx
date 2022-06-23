import React from 'react';
import {
    CButton,
    CFormInput,
    CInputGroup,
    CModal,
    CModalBody,
    CModalHeader,
    CModalTitle,
} from '@coreui/react';
import { Modal } from 'react-bootstrap';
import { BiSearchAlt2 } from 'react-icons/bi';

import InfoCars from './InfosCars';

function ModalDevices({ show2, closeModal2 }) {
    return (
        <CModal visible={show2} onClose={closeModal2} size="xl">
            <CModalHeader closeButton>
                <CModalTitle className="w-50 title-modal">
                    Dispositivos
                </CModalTitle>
                <CInputGroup className="w-50">
                    <div className="d-flex">
                        <div className="  container-icon-input">
                            <i className="icon-dispositivos i-absolute-global">
                                <BiSearchAlt2 color="#6D6D6D" />
                            </i>
                            <CFormInput
                                className="input-search-global"
                                placeholder="Pesquisar placa"
                                size="sm"
                                type="text"
                            />
                        </div>
                        <CButton
                            className="btn-search-global"
                            type="button"
                            color="primary"
                            variant="outline"
                            size="sm"
                        >
                            Buscar
                        </CButton>
                    </div>
                </CInputGroup>
                {/* <div className="d-flex">
                    <CFormInput
                        type="text"
                        size='sm'
                        placeholder="Pesquise uma placa"
                    />
                    <CButton
                        variant='ghost'
                        color="secondary"
                    >
                    </CButton>
                </div> */}
            </CModalHeader>
            <CModalBody>
                <InfoCars />
            </CModalBody>
        </CModal>
    );
}

export default ModalDevices;
