import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { CButton, CFormSelect, CModal, CModalBody } from '@coreui/react';

import { configCookies } from 'src/config';
import StatusSituation from './StatusSituation';

import '../../css/status.css';

// FLUXO
// IN_PROCESS = {
//     VEHICLE_ALREADY_IN_USE,
//     WAITING_PHOTOS,
//     PRE_REGISTRATION,
// }

// IN_ANALYSIS ={
//     WAITING_ANALYSIS
// }

// REPROVED = {
//     NOT_APPROVED
// } OU

// REPROVED = {
//     UNREADABLE_DOCUMENT_PHOTO,
//     UNREADABLE_VEHICLE_PHOTO,
//     FRAUD
// } OU

// APPROVED = {
//     WAITING_OBD,
//     WAITING_ADRESS
// }

// COMPLETED = {
//     SYNCED
// }

// REPROVED = {
//     SUSPENDED,
//     CANCELLED,
//     BLOCKED,
//     BLUETOOTH_NOT_CONNECTED,
//     PAYMENT_FAILURE
// }

export const options = [
    { label: 'Cancelado', value: 'CANCELLED' },
    { label: 'Bloqueado', value: 'BLOCKED' },
    { label: 'Sincronizado', value: 'SYNCHRONIZED' },
    { label: 'Enviado', value: 'SENT' },
    { label: 'Não aprovado', value: 'REPROVED' },
    { label: 'Análise documentos', value: 'IN_ANALYSE' },
    { label: 'Documento aprovado', value: 'APPROVED' },
    { label: 'Falha no pagamento', value: 'PAYMENT' },
];

const status_fluxo = [
    // sub_status
    { label: 'Veículo já em uso', value: 'VEHICLE_ALREADY_IN_USE' },
    { label: 'Aguardando fotos', value: 'WAITING_PHOTOS' },
    { label: 'Pré inscrição', value: 'PRE_REGISTRATION' },
    { label: 'Aguardando análise', value: 'WAITING_ANALYSIS' },
    { label: 'Foto do documento ilegível', value: 'UNREADABLE_DOCUMENT_PHOTO' },
    { label: 'Foto do veiculo ilegível', value: 'UNREADABLE_VEHICLE_PHOTO' },
    { label: 'Fraude', value: 'FRAUD' },
    { label: 'Aguardando OBD', value: 'WAITING_OBD' },
    { label: 'Aguardando endereço', value: 'WAITING_ADRESS' },
    { label: 'Sincronizado', value: 'SYNCED' },
    { label: 'Cancelado', value: 'CANCELLED' },
    { label: 'Bloqueado', value: 'BLOCKED' },
    { label: 'Falha no pagamento', value: 'PAYMENT_FAILURE' },
    { label: 'Suspenso', value: 'SUSPENDED' },
    { label: 'BlueTooth não conectado', value: 'BLUETOOTH_NOT_CONNECTED' },
    // status
    { label: 'Em processo', value: 'iN_PROCESS' },
    { label: 'Em análise', value: 'iN_ANALYSIS' },
    { label: 'Não aprovado', value: 'REPROVED' },
    { label: 'Aprovado', value: 'APPROVED' },
    { label: 'Completo', value: 'COMPLETED' },
];

const Status = (props) => {
    const { status, callBack } = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const openModal = () => setShow(true);
    const [choice, setChoice] = useState(status.status);

    const updateStatus = (e) => {
        setChoice(e.target.value);
    };

    const salvarEdicoes = () => {
        let upStatus = { status: choice };
        const config = configCookies();

        const urlDomain = 'http://dashboardbff.oonpayperuse.com.br'; //'http://localhost:8080'
        axios
            .patch(`${urlDomain}/signatures/${status.id}`, upStatus, config)
            .then(() => {
                setShow(false);
                callBack();
            })
            .catch((r) => {
                console.log('error', r),
                    alert('Login expirado'),
                    window.location.reload();
            });
    };

    return (
        <>
            {status.status == 'WAITING_CHECK_CREDIT_CARD' ? (
                <StatusSituation
                    title={'Aguardando pagamento'}
                    color={'yellow'}
                    style={{ fontSize: '14px', padding: '3px' }}
                    openModal={openModal}
                />
            ) : null}

            {status.status == 'IN_ANALYSE' ? (
                <StatusSituation
                    title={'Análise documentos'}
                    color={'yellow'}
                    openModal={openModal}
                />
            ) : null}

            {status.status == 'APPROVED' ? (
                <StatusSituation
                    title={'Documento aprovado'}
                    color={'blue'}
                    openModal={openModal}
                />
            ) : null}

            {status.status == 'BLOCKED' ? (
                <StatusSituation
                    title={'Bloqueado'}
                    color={'red'}
                    openModal={openModal}
                />
            ) : null}

            {status.status == 'SUSPENDED' ? (
                <StatusSituation
                    title={'Suspenso'}
                    color={'orange'}
                    openModal={openModal}
                />
            ) : null}
            {status.status == 'DISABLED' ? (
                <StatusSituation
                    title={'Desabilitado'}
                    color={'red'}
                    openModal={openModal}
                />
            ) : null}

            {status.status == 'SENT' ? (
                <StatusSituation
                    title={'Enviado'}
                    color={'blue'}
                    openModal={openModal}
                />
            ) : null}

            {status.status == 'SYNCHRONIZED' ? (
                <StatusSituation
                    title={'Sincronizado'}
                    color={'green'}
                    openModal={openModal}
                />
            ) : null}

            {status.status == 'CANCELLED' ? (
                <StatusSituation
                    title={'Cancelado'}
                    color={'red'}
                    openModal={openModal}
                />
            ) : null}

            {status.status == 'REPROVED' ? (
                <StatusSituation
                    title={'Não aprovado'}
                    color={'red'}
                    openModal={openModal}
                />
            ) : null}

            {status.status == 'PAYMENT_FAILURE' ? (
                <StatusSituation
                    title={'Falha no pagamento'}
                    color={'orange'}
                    openModal={openModal}
                />
            ) : null}

            <CModal visible={show} onClose={handleClose} size="sm">
                <CModalBody>
                    <h4 className="text-center">Alterar status</h4>
                    <br />
                    <label>Alterar status do cliente:</label>
                    <br />
                    <label>
                        <b>{status.customer.fullName}</b>
                    </label>
                    <br />
                    <br />
                    <CFormSelect
                        options={options}
                        value={choice}
                        onChange={updateStatus}
                    />
                    <br />
                    <br />
                    <CButton
                        className="btn-save-global"
                        onClick={salvarEdicoes}
                        size="sm"
                    >
                        Salvar Alterações
                    </CButton>
                </CModalBody>
            </CModal>
        </>
    );
};

export default Status;
