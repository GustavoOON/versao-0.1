import { CButton, CCol, CRow } from '@coreui/react';
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import '../css/callInfo.css';

const CallInfo = (props) => {
    return (
        <>
            <CButton
                color="link"
                variant="ghost"
                onClick={props.choiceScreen1}
                className="btn-come-back-call-info btn-link-global"
            >
                <AiOutlineArrowLeft className="me-2" />
                Voltar
            </CButton>
            <CRow>
                <CCol>
                    <label className="title-info-call">
                        Acompanhar o atendimento
                    </label>
                    <br />
                    <br />

                    <label className="font-info-call-header">Cliente</label>
                    <br />
                    <label className="font-info-call-text">
                        {props.cliente.name}
                    </label>
                    <br />

                    <label className="boxes">{props.cliente.status}</label>
                    <label className="boxes">{props.cliente.tipo}</label>
                    <label className="boxes">
                        Tempo de atendimento: {props.cliente.tempoCall} Minutos
                    </label>

                    <hr className="my-4" />

                    <label className="font-info-call-header">
                        Nome Provedor
                    </label>
                    <br />

                    <label className="font-info-call-text">
                        {props.cliente.namePrestador}
                    </label>
                    <br />

                    <div>
                        <label className="font-info-call-header">
                            Endereço Provedor
                        </label>
                        <br />
                        <label className="font-info-call-text">
                            Av Raja Galia 245
                        </label>
                        <br />
                        <label className="boxes">
                            Lat: {props.cliente.addressPrestador.lat}
                        </label>
                        <label className="boxes">
                            Lng: {props.cliente.addressPrestador.lng}
                        </label>
                    </div>
                    <br />

                    <div>
                        <label className="font-info-call-header">
                            Endereço da ocorrência
                        </label>
                        <br />
                        <label className="font-info-call-text">
                            Av barão homen de melo 2455
                        </label>
                        <br />
                        <label className="boxes">
                            Lat: {props.cliente.adressOcorrency.lat}
                        </label>
                        <label className="boxes">
                            Lng: {props.cliente.adressOcorrency.lng}
                        </label>
                        <label className="boxes">
                            Tempo trajeto provedor: {props.cliente.tempo}{' '}
                            minutos
                        </label>
                        <label className="boxes">
                            Distância provedor ocorrência:{' '}
                            {props.cliente.distance} Kms
                        </label>
                    </div>
                    <br />

                    <div>
                        <label className="font-info-call-header">
                            Endereço de destino
                        </label>
                        <br />
                        <label className="font-info-call-text">
                            Av professor mario werneck 730
                        </label>
                        <br />
                        <label className="boxes">
                            Lat: {props.cliente.adressDestino.lat}
                        </label>
                        <label className="boxes">
                            Lng: {props.cliente.adressDestino.lng}
                        </label>
                        <label className="boxes">
                            Tempo trajeto ocorrência destino:{' '}
                            {props.cliente.tempo} minutos
                        </label>
                        <label className="boxes">
                            Distância ocorrência destino:{' '}
                            {props.cliente.distance} Kms
                        </label>
                        <br />
                    </div>
                    <br />
                </CCol>
            </CRow>
        </>
    );
};

export default CallInfo;
