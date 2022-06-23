import React, { useState } from 'react';
import {
    CButton,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableRow,
} from '@coreui/react';
import { Spinner } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

import CallInfo from './InfoCall';

import MapFollowCall from './google-map/MapFollowCall';
import MapOff from './MapOff';
import Pagination from '../../components/Pagination';

import '../css/followCall.css';

const FollowCall = () => {
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [qtdElements, setQtdElements] = useState();
    const [previousPage, setPreviousPage] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState('');

    function initPages() {
        setCurrentPage(1);
        setNextPage(2);
        setPreviousPage('');
    }

    function page(e) {}

    const calls = [
        {
            status: 'Iniciado',
            name: 'Fulano ferreira',
            tempoCall: 32,
            tipo: 'Reboque',
            placa: 'XYZ-1234',
            timeDest: 14,
            obs: 'Motor sem óleo',
            distance: null,
            adressOcorrency: { lat: -19.967788, lng: -43.9607583 },
            adressDestino: { lat: -19.9159613, lng: -43.9075169 },
            namePrestador: null,
            tempo: null,
            addressPrestador: { lat: null, lng: null },
        },
        {
            status: 'Iniciado',
            name: 'Whinderson Nunes',
            tempoCall: 32,
            tipo: 'Borracheiro',
            placa: 'ABC - 1234',
            timeDest: 5,
            obs: 'Dois pneus furados',
            distance: null,
            adressOcorrency: { lat: -19.965425, lng: -43.8719556 },
            adressDestino: { lat: -19.9607086, lng: -43.9214618 },
            tempo: null,
            namePrestador: null,
            addressPrestador: { lat: null, lng: null },
        },
        {
            status: 'Prestador a caminho',
            name: 'Popo freitas',
            tempoCall: 32,
            tipo: 'Guincho',
            placa: 'CDE 4545',
            timeDest: 29,
            obs: 'Batida de carro',
            adressOcorrency: { lat: -19.9285546, lng: -43.9248353 },
            adressDestino: { lat: -19.9043105, lng: -44.0172453 },
            tempo: 10,
            namePrestador: 'Borracharia mao na roda 3',
            distance: 8,
            addressPrestador: { lat: -19.8799211, lng: -43.8904928 },
        },
        {
            status: 'Iniciado',
            name: 'Fulano ferreira',
            tempoCall: 32,
            tipo: 'Reboque',
            placa: 'XYZ-1234',
            timeDest: 14,
            obs: 'Motor sem óleo',
            distance: null,
            adressOcorrency: { lat: -19.967788, lng: -43.9607583 },
            adressDestino: { lat: -19.9159613, lng: -43.9075169 },
            namePrestador: null,
            tempo: null,
            addressPrestador: { lat: null, lng: null },
        },
        {
            status: 'Iniciado',
            name: 'Whinderson Nunes',
            tempoCall: 32,
            tipo: 'Borracheiro',
            placa: 'ABC - 1234',
            timeDest: 5,
            obs: 'Dois pneus furados',
            distance: null,
            adressOcorrency: { lat: -19.965425, lng: -43.8719556 },
            adressDestino: { lat: -19.9607086, lng: -43.9214618 },
            tempo: null,
            namePrestador: null,
            addressPrestador: { lat: null, lng: null },
        },
        {
            status: 'Prestador a caminho',
            name: 'Popo freitas',
            tempoCall: 32,
            tipo: 'Guincho',
            placa: 'CDE 4545',
            timeDest: 29,
            obs: 'Batida de carro',
            adressOcorrency: { lat: -19.9285546, lng: -43.9248353 },
            adressDestino: { lat: -19.9043105, lng: -44.0172453 },
            tempo: 10,
            namePrestador: 'Borracharia mao na roda 3',
            distance: 8,
            addressPrestador: { lat: -19.8799211, lng: -43.8904928 },
        },
        {
            status: 'Iniciado',
            name: 'Fulano ferreira',
            tempoCall: 32,
            tipo: 'Reboque',
            placa: 'XYZ-1234',
            timeDest: 14,
            obs: 'Motor sem óleo',
            distance: null,
            adressOcorrency: { lat: -19.967788, lng: -43.9607583 },
            adressDestino: { lat: -19.9159613, lng: -43.9075169 },
            namePrestador: null,
            tempo: null,
            addressPrestador: { lat: null, lng: null },
        },
        {
            status: 'Iniciado',
            name: 'Whinderson Nunes',
            tempoCall: 32,
            tipo: 'Borracheiro',
            placa: 'ABC - 1234',
            timeDest: 5,
            obs: 'Dois pneus furados',
            distance: null,
            adressOcorrency: { lat: -19.965425, lng: -43.8719556 },
            adressDestino: { lat: -19.9607086, lng: -43.9214618 },
            tempo: null,
            namePrestador: null,
            addressPrestador: { lat: null, lng: null },
        },
        {
            status: 'Prestador a caminho',
            name: 'Popo freitas',
            tempoCall: 32,
            tipo: 'Guincho',
            placa: 'CDE 4545',
            timeDest: 29,
            obs: 'Batida de carro',
            adressOcorrency: { lat: -19.9285546, lng: -43.9248353 },
            adressDestino: { lat: -19.9043105, lng: -44.0172453 },
            tempo: 10,
            namePrestador: 'Borracharia mao na roda 3',
            distance: 8,
            addressPrestador: { lat: -19.8799211, lng: -43.8904928 },
        },
        {
            status: 'Iniciado',
            name: 'Whinderson Nunes',
            tempoCall: 32,
            tipo: 'Borracheiro',
            placa: 'ABC - 1234',
            timeDest: 5,
            obs: 'Dois pneus furados',
            distance: null,
            adressOcorrency: { lat: -19.965425, lng: -43.8719556 },
            adressDestino: { lat: -19.9607086, lng: -43.9214618 },
            tempo: null,
            namePrestador: null,
            addressPrestador: { lat: null, lng: null },
        },
        {
            status: 'Prestador a caminho',
            name: 'Popo freitas',
            tempoCall: 32,
            tipo: 'Guincho',
            placa: 'CDE 4545',
            timeDest: 29,
            obs: 'Batida de carro',
            adressOcorrency: { lat: -19.9285546, lng: -43.9248353 },
            adressDestino: { lat: -19.9043105, lng: -44.0172453 },
            tempo: 10,
            namePrestador: 'Borracharia mao na roda 3',
            distance: 8,
            addressPrestador: { lat: -19.8799211, lng: -43.8904928 },
        },
        {
            status: 'Iniciado',
            name: 'Whinderson Nunes',
            tempoCall: 32,
            tipo: 'Borracheiro',
            placa: 'ABC - 1234',
            timeDest: 5,
            obs: 'Dois pneus furados',
            distance: null,
            adressOcorrency: { lat: -19.965425, lng: -43.8719556 },
            adressDestino: { lat: -19.9607086, lng: -43.9214618 },
            tempo: null,
            namePrestador: null,
            addressPrestador: { lat: null, lng: null },
        },
        {
            status: 'Prestador a caminho',
            name: 'Popo freitas',
            tempoCall: 32,
            tipo: 'Guincho',
            placa: 'CDE 4545',
            timeDest: 29,
            obs: 'Batida de carro',
            adressOcorrency: { lat: -19.9285546, lng: -43.9248353 },
            adressDestino: { lat: -19.9043105, lng: -44.0172453 },
            tempo: 10,
            namePrestador: 'Borracharia mao na roda 3',
            distance: 8,
            addressPrestador: { lat: -19.8799211, lng: -43.8904928 },
        },
    ];

    const [screen, setScreen] = useState(1);
    function choiceScreen1() {
        setScreen(1);
    }
    // tela onde mostra informacoes de cada usuario
    const [callSelect, setCallSelect] = useState();
    //const [providerSelect, setProviderSelect] = useState()
    function choiceScreen2(e) {
        setScreen(2);
        setCallSelect(e);
    }

    function infoRoute(e) {
        console.log('oq vem de providers', e);
    }

    const [flagMap, setFlagMap] = useState(false);
    function statusMap(e) {
        setFlagMap(e);
    }

    if (calls == '') {
        return (
            <div>
                <br />
                <h4>
                    <Spinner animation="grow" variant="info" />
                </h4>
            </div>
        );
    } else {
        if (screen == 1) {
            return (
                <>
                    <CTable striped>
                        <CTableBody>
                            {calls.map((call, index) => {
                                return (
                                    <CTableRow key={index}>
                                        <CTableDataCell>
                                            <div className="d-flex ms-4">
                                                <div className="w-100 mb-2">
                                                    <label className="title-follow-call">
                                                        {call.name}
                                                    </label>
                                                    <br />
                                                    <label className="boxes">
                                                        {call.status}
                                                    </label>
                                                    <label className="boxes">
                                                        {call.tipo}
                                                    </label>
                                                    {call.distance != '' ? (
                                                        <label className="boxes">
                                                            {call.distance} Kms
                                                        </label>
                                                    ) : null}
                                                    {call.tempo != '' ? (
                                                        <label className="boxes">
                                                            {call.tempo} Minutos
                                                        </label>
                                                    ) : null}
                                                </div>
                                                <div className="container-btn-fallow-call">
                                                    <CButton
                                                        className="btn-call"
                                                        onClick={() =>
                                                            choiceScreen2(call)
                                                        }
                                                    >
                                                        <BsSearch />
                                                    </CButton>
                                                </div>
                                            </div>
                                        </CTableDataCell>
                                    </CTableRow>
                                );
                            })}
                        </CTableBody>
                    </CTable>
                    <Pagination
                        page={page}
                        numberOfPages={numberOfPages}
                        previousPage={previousPage}
                        setPreviousPage={setPreviousPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        nextPage={nextPage}
                        setNextPage={setNextPage}
                        qtdElements={qtdElements}
                    />
                </>
            );
        } else {
            return (
                <CRow>
                    <CCol>
                        <CallInfo
                            choiceScreen1={choiceScreen1}
                            cliente={callSelect}
                        />
                        {!flagMap ? (
                            <CButton
                                className="btn-save-global mb-4"
                                onClick={() => {
                                    statusMap(true);
                                }}
                            >
                                Ver no mapa
                            </CButton>
                        ) : (
                            <CButton
                                className="btn-save-global mb-4"
                                onClick={() => statusMap(false)}
                            >
                                Esconder mapa
                            </CButton>
                        )}
                        <br />
                    </CCol>

                    <CCol>
                        {flagMap ? (
                            <MapFollowCall
                                cliente={callSelect}
                                providerInfos={infoRoute}
                            />
                        ) : (
                            <MapOff />
                        )}
                    </CCol>
                </CRow>
            );
        }
    }
};

export default FollowCall;
