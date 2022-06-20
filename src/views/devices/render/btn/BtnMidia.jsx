import React, { useState } from 'react';
import axios from 'axios';
import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
} from '@coreui/react';
import { MdPhotoCamera } from 'react-icons/md';

import CarrocelImg from '../components/CarrocelImg';
import UrlDomain, { configCookies } from '../../../../config';

import '../../css/btnMidia.css';

const BtnMidia = (props) => {
    const { midia } = props;

    const [show, setShow] = useState(false);
    const [failPhoto, setFailPhoto] = useState([]);

    const handleClose = () => setShow(false);

    const [data, setData] = useState([]);

    function verifica() {
        const config = configCookies();
        axios
            .get(`${UrlDomain}/images/vehicle/${midia}`, config)
            .then(({ data }) => {
                setData(data);
                setShow(true);
            })
            .catch((r) => {
                console.log('error', r),
                    alert('Login expirado'),
                    window.location.reload();
            });
    }

    const savePhotos = () => {
        // enviar array com todas as fotos que foram negadas!
        // failPhoto <<< onde as fotos estão
    };

    return (
        <>
            <div className="container-device-midia-actions">
                <CButton
                    onClick={() => verifica(midia)}
                    size="sm"
                    className="icon-css-midia"
                    color="black"
                >
                    <MdPhotoCamera size={24} color="black" />
                </CButton>
            </div>

            <CModal visible={show} onClose={handleClose} size="xl">
                <CModalHeader closeButton>
                    <CModalTitle className="title-modal">
                        Fotos do Veículo
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CarrocelImg midia={data} setFailPhoto={setFailPhoto} />
                </CModalBody>
                <CModalFooter>
                    {data.length !== 0 ? (
                        <>
                            <CButton
                                className="btn-cancel-global"
                                variant="outline"
                                onClick={handleClose}
                            >
                                Não aprovar
                            </CButton>
                            <CButton
                                className="btn-save-global"
                                onClick={savePhotos}
                            >
                                Aprovar
                            </CButton>
                        </>
                    ) : (
                        <CButton
                            className="btn-cancel-global"
                            variant="outline"
                            onClick={handleClose}
                        >
                            Cancelar
                        </CButton>
                    )}
                    {/* <CButton
                        className="btn-cancel-global"
                        variant="outline"
                        onClick={handleClose}
                    >
                        Cancelar
                    </CButton>
                    <CButton className="btn-save-global" onClick={handleClose}>
                        Salvar
                    </CButton> */}
                </CModalFooter>
            </CModal>
        </>
    );
};

export default BtnMidia;
