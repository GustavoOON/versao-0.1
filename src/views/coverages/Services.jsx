import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    CButton,
    CCard,
    CCardBody,
    CFormInput,
    CNavbar,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react';
import Cookies from 'js-cookie';
import { Spinner } from 'react-bootstrap';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdOutlineFilterList } from 'react-icons/md';

// import UrlDomain, { configCookies } from './../../config'
import BtnEditarRender from './render/BtnEdit';
import NovosServicos from './render/NewServices';
import StatusRender from './render/Status';
import Pagination from '../components/Pagination';

import './css/service.css';

var CryptoJS = require('crypto-js');

const Services = () => {
    const [previousPage, setPreviousPage] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState('');
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [qtdElements, setQtdElements] = useState(1);

    function page(e) {}
    function initPages(e) {
        if (e.data.totalPages > 1) {
            setCurrentPage(1);
            setNextPage(2);
            setPreviousPage('');
        }
    }

    useEffect(() => {
        initPages({ data: { totalPages: 10 } });
        setNumberOfPages(4);
    }, []);
    // descriptando
    var usT = Cookies.get('userType');
    var msg = CryptoJS.AES.decrypt(usT, 'OnnSeguros');
    var msgOri = msg.toString(CryptoJS.enc.Utf8);

    const [services, setServices] = useState([]);
    // const token = Cookies.get('TokenID')
    const userType = msgOri;

    // let config = {
    //     headers: {
    //     'Authorization': `Bearer ${token}`,
    //     'Content-Type': 'application/json;charset=UTF-8',
    //     "Access-Control-Allow-Origin": "*",
    //     }
    // };

    // const [dados, setDados] = useState(services)
    const [busca2, setBusca] = useState('');
    let busca;
    const dados2 = [];

    const dados = [
        {
            id: '93af6e15-438e-42f5-b33f-2e9fcb454d97',
            eventId: '1',
            name: 'Pane seca APAGAR',
            valuePerKm: 0.0,
            description: 'Pane por falta de combustível',
            icon: 'sdsd',
            type: 'Sinistro',
        },
    ];
    const buscaService = (e) => {
        setBusca(e.target.value);
        busca = e.target.value;
        BuscaUser();
    };

    const BuscaUser = () => {
        let auxBusca = busca.toLocaleLowerCase();

        services.map((item) => {
            let auxService = item.description.toLocaleLowerCase(); // ALTERAR AQUI DE ACORDO COM OS CAMPOS DA API

            if (auxService.includes(auxBusca)) {
                dados2.push(item);
                setDados(dados2);
            }
        });
    };

    const atualizar = () => {
        // setDados([])
        // const config = configCookies()
        // axios
        //     .get(`${UrlDomain}/coverages`, config)
        //     .then((response) => {
        //         setServices(response.data)
        //         setDados(response.data)
        //     })
        //     .catch(r => {
        //         console.log('error', r), alert('Login expirado'), window.location.reload()
        //     }) // window.location.reload();
    };

    // useEffect(() => {
    //     const config = configCookies()
    //     axios
    //         .get(`${UrlDomain}/coverages`, config)
    //         .then((response) => {
    //             setServices(response.data)
    //             setDados(response.data)
    //         })
    //         .catch(r => {
    //             console.log('error', r), alert('Login expirado'), window.location.reload()
    //         }) // window.location.reload();
    // }, [])

    if (dados == '') {
        return <Spinner animation="grow" variant="info" />;
    } else {
        return (
            <CCard>
                <CCardBody>
                    <CNavbar className="justify-content-between">
                        <div className="d-flex">
                            <div className="container-icon-input">
                                <i className="icon-search-global i-absolute-global">
                                    <BiSearchAlt2 color="#6D6D6D" />
                                </i>
                                <CFormInput
                                    className="input-search-global"
                                    type="search"
                                    onChange={buscaService}
                                    value={busca2}
                                    placeholder="Pesquisar"
                                />
                            </div>
                            <CButton
                                className="ms-2 btn-search-global"
                                variant="outline"
                                onClick={atualizar}
                            >
                                Buscar
                            </CButton>
                        </div>
                        <div>
                            {userType == 'ADMIN' ? (
                                <NovosServicos attPage={atualizar} />
                            ) : null}
                        </div>
                    </CNavbar>
                    <br />
                    <CTable
                        striped
                        align="middle"
                        className="mb-0"
                        hover
                        responsive
                    >
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell className="p-1">
                                    Serviços
                                    <CButton
                                        onClick={() =>
                                            console.log('ordenar lista')
                                        }
                                        size="sm"
                                        color="link"
                                    >
                                        <MdOutlineFilterList
                                            size={24}
                                            color="black"
                                        />
                                    </CButton>
                                </CTableHeaderCell>

                                <CTableHeaderCell className="p-1">
                                    Tipo
                                    <CButton
                                        onClick={() =>
                                            console.log('ordenar lista')
                                        }
                                        size="sm"
                                        color="link"
                                    >
                                        <MdOutlineFilterList
                                            size={24}
                                            color="black"
                                        />
                                    </CButton>
                                </CTableHeaderCell>

                                <CTableHeaderCell className="text-center">
                                    Status
                                </CTableHeaderCell>

                                <CTableHeaderCell className="text-center">
                                    Valor por km (R$)
                                </CTableHeaderCell>
                                <CTableHeaderCell></CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>

                        <CTableBody>
                            {dados.map((item, index) => (
                                <CTableRow key={index}>
                                    <CTableDataCell>
                                        {item.description}
                                    </CTableDataCell>

                                    <CTableDataCell>{item.type}</CTableDataCell>

                                    <CTableDataCell>
                                        <StatusRender status={item.disabled} />
                                    </CTableDataCell>

                                    <CTableDataCell className="text-center">
                                        R$ {item.valuePerKm}
                                    </CTableDataCell>

                                    <CTableDataCell className="text-center">
                                        {userType == 'ADMIN' ? (
                                            <BtnEditarRender
                                                item={item}
                                                parentCallback={atualizar}
                                            />
                                        ) : null}
                                    </CTableDataCell>
                                </CTableRow>
                            ))}
                        </CTableBody>
                    </CTable>
                </CCardBody>
                <Pagination
                    page={page}
                    numberOfPages={numberOfPages}
                    previousPage={previousPage}
                    setPreviousPage={setPreviousPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    nextPage={nextPage}
                    setNextPage={setNextPage}
                    name={'coberturas'}
                    qtdElements={qtdElements}
                />
            </CCard>
        );
    }
};

export default Services;
