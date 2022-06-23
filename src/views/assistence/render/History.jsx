import React, { useState } from 'react';
import {
    CRow,
    CCol,
    CButton,
    CTable,
    CTableBody,
    CTableRow,
    CTableDataCell,
    CTableHeaderCell,
} from '@coreui/react';
import { Spinner } from 'react-bootstrap';
import { MdDescription } from 'react-icons/md';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import MapGoogle from './google-map/HistoryMap';
import MapOff from './MapOff';
import Pagination from '../../components/Pagination';

import '../css/history.css';

const History = () => {
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

    const [chamados, setChamados] = useState([
        {
            id: '1',
            date: '10/12/2021',
            plate: 'xxx 1234',
            name: 'Maria',
            type: 'Reboque',
            status: 'finalizado',
            adressOcorrency: { lat: -19.967788, lng: -43.9607583 },
            adressDestino: { lat: -19.9159613, lng: -43.9075169 },
            tempoFinal: 10,
            namePrestador: 'Guincho do Tiao',
            distance: 82,
            addressPrestador: { lat: -19.9036664, lng: -43.9791041 },
        },

        {
            id: '2',
            date: '10/12/2021',
            plate: 'yyyy 1234',
            name: 'Joao',
            type: 'Guincho',
            status: 'finalizado',
            adressOcorrency: { lat: -19.965425, lng: -43.8719556 },
            adressDestino: { lat: -19.9607086, lng: -43.9214618 },
            tempoFinal: 10,
            namePrestador: 'Reboque zekinha',
            distance: 18,
            addressPrestador: { lat: -19.9036664, lng: -43.9654505 },
        },

        {
            id: '3',
            date: '10/12/2021',
            plate: 'zzz 1234',
            name: 'Fabio',
            type: 'Pneu',
            status: 'finalizado',
            adressOcorrency: { lat: -19.9285546, lng: -43.9248353 },
            adressDestino: { lat: -19.9043105, lng: -44.0172453 },
            tempoFinal: 10,
            namePrestador: 'Borracharia mao na roda 3',
            distance: 8,
            addressPrestador: { lat: -19.8799211, lng: -43.8904928 },
        },
    ]);
    const [chamado, setChamado] = useState({
        id: '',
        plate: '',
        date: '10/12/2021',
        name: '',
        type: '',
        status: '',
        adressOcorrency: { lat: null, lng: null },
        adressDestino: { lat: null, lng: null },
        tempoFinal: null,
        namePrestador: '',
        distance: null,
        addressPrestador: { lat: null, lng: null },
    });
    const [flag, setFlag] = useState(false);

    const setCall = (e) => {
        setFlag(true);
        setChamado(e);
    };

    const backList = () => {
        setFlag(false);
        setMapShow(false);
    };

    const [mapShow, setMapShow] = useState(false);

    if (chamados.length <= 0) {
        return (
            <>
                <h4>
                    <Spinner animation="grow" variant="info" />
                </h4>
            </>
        );
    } else {
        if (flag == false) {
            return (
                <>
                    <CTable striped>
                        <CTableBody>
                            {chamados.map((item, index) => (
                                <CTableRow key={index}>
                                    <CTableHeaderCell className="ps-4">
                                        {item.id}
                                    </CTableHeaderCell>
                                    <CTableDataCell>
                                        <div className="d-flex ms-4">
                                            <div className="w-100 mb-2">
                                                <label className="title-history">
                                                    {item.name}
                                                </label>
                                                <br />
                                                <label className="boxes">
                                                    {item.type}
                                                </label>
                                                <label className="boxes">
                                                    {item.status}
                                                </label>
                                                <label className="boxes">
                                                    <b>Tempo de atendimento:</b>{' '}
                                                    {item.tempoFinal} minutos
                                                </label>

                                                <label className="boxes">
                                                    <b>Nome do prestador:</b>{' '}
                                                    {item.namePrestador}
                                                </label>

                                                <label className="boxes">
                                                    {item.date}
                                                </label>
                                            </div>
                                            <div className="container-btn-history">
                                                <CButton
                                                    className="btn-history"
                                                    onClick={() =>
                                                        setCall(item)
                                                    }
                                                >
                                                    <MdDescription />
                                                </CButton>
                                            </div>
                                        </div>
                                    </CTableDataCell>
                                </CTableRow>
                            ))}
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
                    <hr />
                </>
            );
        } else {
            return (
                <>
                    <CButton
                        color="link"
                        variant="ghost"
                        onClick={backList}
                        className="btn-come-back-history btn-link-global"
                    >
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </CButton>
                    <CRow>
                        <CCol>
                            <label className="title-history">
                                Atendimento {chamado.id}
                            </label>
                            <br />
                            <br />

                            <div>
                                <label className="font-history-header">
                                    Cliente
                                </label>
                                <br />
                                <label className="font-history-text">
                                    {chamado.name}
                                </label>
                                <br />
                                <label className="boxes">{chamado.type}</label>
                                <label className="boxes">
                                    {chamado.status}
                                </label>
                            </div>

                            <hr className="my-4" />

                            <div>
                                <label className="font-history-header">
                                    Trajeto do prestador
                                </label>
                                <br />
                                <br />
                                <label className="font-history-header">
                                    Endereço da ocorrência
                                </label>
                                <br />
                                <label className="font-history-text">
                                    Av da moda
                                </label>
                                <br />
                                <br />
                                <label className="font-history-header">
                                    Endereço de destino
                                </label>
                                <br />
                                <label className="font-history-text">
                                    Av Barão homem de Melo
                                </label>
                                <br />
                                <br />
                                {!mapShow ? (
                                    <CButton
                                        className="btn-save-global"
                                        onClick={() => setMapShow(true)}
                                    >
                                        Ver no mapa
                                    </CButton>
                                ) : (
                                    <CButton
                                        className="btn-save-global"
                                        onClick={() => setMapShow(false)}
                                    >
                                        Esconder mapa
                                    </CButton>
                                )}
                            </div>

                            <hr className="my-4" />

                            <div>
                                <label className="font-history-header">
                                    Serviço: {chamado.type}
                                </label>
                                <br />
                                <label className="boxes">{chamado.type}</label>
                                <label className="boxes">{chamado.date}</label>
                                <label className="boxes">
                                    <b>Tempo de atendimento:</b>{' '}
                                    {chamado.tempoFinal} minutos
                                </label>
                                <label className="boxes">
                                    <b>Nome do prestador:</b>{' '}
                                    {chamado.namePrestador}
                                </label>
                            </div>
                            <br />
                        </CCol>

                        <CCol>
                            {mapShow ? (
                                <MapGoogle history={chamado} />
                            ) : (
                                <MapOff />
                            )}
                        </CCol>
                    </CRow>
                </>
            );
        }
    }
};

export default History;
