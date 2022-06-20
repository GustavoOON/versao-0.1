import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Spinner } from 'react-bootstrap';
import {
    CButton,
    CContainer,
    CNavbar,
    CCollapse,
    CCard,
    CNavbarNav,
    CNavbarToggler,
    CCardBody,
    CFormInput,
    CInputGroup,
    CRow,
    CCol,
} from '@coreui/react';

import ListVehicles from './render/ListVehicles';
import WidgetsImprocess from './render/WidgetsImprocess';
import WidgetsRegistered from './render/WidgetsRegistered';
import UrlDomain, { configCookies } from './../../config';
import Decrypt from './../../security/decripty';

import Pagination from '../components/Pagination';
import FilterCitySubStatus from './render/btn/FilterCitySubStatus';

import './css/devices.css';

const Devices = () => {
    const [op1, setOp1] = useState(false);
    const [op2, setOp2] = useState(false);
    const [op3, setOp3] = useState(false);
    const [op4, setOp4] = useState(false);
    const [op5, setOp5] = useState(false);

    const [filterWidgets, setFilterWidgets] = useState('');
    const [openSearch, setOpenSearch] = useState(false);
    // descriptando
    const [userType, setUserType] = useState();
    const [dados, setDados] = useState([]);
    const [visible, setVisible] = useState(false);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [qtdElements, setQtdElements] = useState();
    const [previousPage, setPreviousPage] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState('');
    const [search, setSearch] = useState('');
    const qtdPgns = 12;

    const [inProcess, setInProcess] = useState(true);
    const [complete, setComplete] = useState(false);

    const choiceInProcess = () => {
        setInProcess(true), setComplete(false);
    };

    const choiceComplete = () => {
        setInProcess(false), setComplete(true);
    };

    // const token = Cookies.get("TokenID");
    // const configCookies = {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type": "application/json;charset=UTF-8",
    //         "Access-Control-Allow-Origin": "*",
    //     },
    // };
    useEffect(() => {
        const config = configCookies();
        // setPermissions(Decrypt.userPermissionsDescription())
        setUserType(Decrypt.UserTypeDecryption());

        axios
            .get(`${UrlDomain}/signatures?pageSize=${qtdPgns}`, config)
            .then((response) => {
                setDados(response.data.content);
                setNumberOfPages(response.data.totalPages);
                initPages();
                setQtdElements(response.data.totalElements);
                setOp1(true);
            })
            .catch((r) => {
                console.log(r);
                console.log('error', r),
                    alert('Login expirado'),
                    window.location.reload();
            });
    }, []);

    function initPages() {
        setCurrentPage(1);
        setNextPage(2);
        setPreviousPage('');
    }

    function page(e) {
        setDados([]);
        const config = configCookies();

        axios
            .get(
                `${UrlDomain}/signatures?pageSize=${qtdPgns}&pageNumber=${e}`,
                config
            )
            .then((response) => {
                setDados(response.data.content);
                setNumberOfPages(response.data.totalPages);
            })
            .catch((r) => {
                console.log('error', r),
                    alert('Login expirado'),
                    window.location.reload();
            });
    }

    function searchPlate(e) {
        const config = configCookies();

        if (e.key === 'Enter' || e.type === 'click') {
            axios
                .get(
                    `${UrlDomain}/signatures/d36bcc6a-5065-4dda-8630-3e6a77fb6880`,
                    config
                )
                .then((response) => {
                    setDados([response.data]);
                    setOpenSearch(true);
                })
                .catch((r) => {
                    console.log('Não encontrado', alert('Não encontrado!'), r);
                });
        }
    }

    function refreshPage() {
        setDados([]);
        const config = configCookies();

        axios
            .get(`${UrlDomain}/signatures?pageSize=${qtdPgns}`, config)
            .then((response) => {
                setDados(response.data.content);
                setNumberOfPages(response.data.totalPages);
                initPages();
                setQtdElements(response.data.totalElements);
            })
            .catch((r) => {
                console.log('error', r),
                    alert('Login expirado'),
                    window.location.reload();
            });
        setOpenSearch(false);
    }

    function open1({ target }) {
        setOp1(true);
        setOp2(false);
        setOp3(false);
        setOp4(false);
        setOp5(false);
        refreshPage();
    }

    function open2({ target }) {
        setOp1(false);
        setOp2(true);
        setOp3(false);
        setOp4(false);
        setOp5(false);
        target === 'Pré registro' ? true : false;
        // aqui vai fazer o get para os filtros, em preocesso ou cadastrados
    }
    function open3({ target }) {
        setOp1(false);
        setOp2(false);
        setOp3(true);
        setOp4(false);
        setOp5(false);
        target === 'Aguardando fotos' ? true : false;
        // aqui vai fazer o get para os filtros, em preocesso ou cadastrados
    }
    function open4({ target }) {
        setOp1(false);
        setOp2(false);
        setOp3(false);
        setOp4(true);
        setOp5(false);
        target === 'Em análise' ? true : false;
        // aqui vai fazer o get para os filtros, em preocesso ou cadastrados
    }
    function open5({ target }) {
        setOp1(false);
        setOp2(false);
        setOp3(false);
        setOp4(false);
        setOp5(true);
        target === 'Reprovado' ? true : false;
        // aqui vai fazer o get para os filtros, em preocesso ou cadastrados
    }

    const ChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    if (dados == '') {
        return (
            <>
                <Spinner animation="grow" variant="info" />
            </>
        );
    } else if (openSearch) {
        return (
            <>
                <CCard className="device-container">
                    <CCardBody>
                        <CNavbar expand="lg" className="menu-device-container">
                            <CContainer fluid>
                                <CNavbarToggler
                                    aria-label="Toggle navigation"
                                    aria-expanded={visible}
                                    onClick={() => setVisible(!visible)}
                                />
                                <CCollapse
                                    className="navbar-collapse"
                                    visible={visible}
                                >
                                    <CNavbarNav className="me-auto mb-2 mb-lg-0"></CNavbarNav>
                                </CCollapse>
                            </CContainer>
                        </CNavbar>
                        <WidgetsDevices
                            open1={open1}
                            open2={open2}
                            open3={open3}
                            open4={open4}
                            open5={open5}
                            op1={op1}
                            op2={op2}
                            op3={op3}
                            op4={op4}
                            op5={op5}
                        />
                        <br />
                        <ListVehicles
                            dados={dados}
                            refreshPage={refreshPage}
                            userType={userType}
                        />
                    </CCardBody>
                </CCard>
            </>
        );
    } else {
        return (
            <>
                <CCard className="device-container">
                    <CCardBody>
                        <CNavbar expand="lg" className="menu-device-container">
                            <CContainer fluid>
                                <CNavbarToggler
                                    aria-label="Toggle navigation"
                                    aria-expanded={visible}
                                    onClick={() => setVisible(!visible)}
                                />
                                <CCollapse
                                    className="navbar-collapse"
                                    visible={visible}
                                >
                                    {/* <CNavbarNav className="me-auto mb-2 mb-lg-0"></CNavbarNav> */}
                                    <CInputGroup className="mb-3 justify-content-end">
                                        <FilterCitySubStatus />

                                        <div className="d-flex">
                                            <div className="container-icon-input">
                                                <i className="icon-search-global  i-absolute-global">
                                                    <BiSearchAlt2 color="#6D6D6D" />
                                                </i>
                                                <CFormInput
                                                    className="input-search-global"
                                                    placeholder="Pesquise"
                                                    onChange={ChangeSearch}
                                                />
                                            </div>
                                            <CButton
                                                className="btn-search-global"
                                                onClick={searchPlate}
                                                variant="outline"
                                                color="primary"
                                            >
                                                Buscar
                                            </CButton>
                                        </div>
                                    </CInputGroup>
                                </CCollapse>
                            </CContainer>
                        </CNavbar>
                        <CRow>
                            <CCol
                                className={
                                    inProcess
                                        ? 'nav-in-process-active'
                                        : 'nav-in-process'
                                }
                                onClick={choiceInProcess}
                            >
                                <label>Em processo de cadastro</label>
                            </CCol>
                            <CCol
                                className={
                                    complete
                                        ? 'nav-complete-active'
                                        : 'nav-complete'
                                }
                                onClick={choiceComplete}
                            >
                                <label>Clientes cadastrados</label>
                            </CCol>
                            <CCol></CCol>
                            <CCol></CCol>
                            <hr />
                        </CRow>
                        <br />
                        {inProcess ? (
                            <>
                                <WidgetsImprocess
                                    open1={open1}
                                    open2={open2}
                                    open3={open3}
                                    open4={open4}
                                    open5={open5}
                                    op1={op1}
                                    op2={op2}
                                    op3={op3}
                                    op4={op4}
                                    op5={op5}
                                    qtdElements={qtdElements}
                                />
                                <br />
                                {/* {
                        //     otherFilters ? (
                        //         <WidgetsFilterDevices
                        //             filterOp1={filterOp1}
                        //             filterOp2={filterOp2}
                        //             filterOp3={filterOp3}
                        //             filterOp4={filterOp4}
                        //             filterOp5={filterOp5}
                        //             filterOp6={filterOp6}
                        //             filterOp7={filterOp7}
                        //             filterOp8={filterOp8}
                        //             openFilterOp1={openFilterOp1}
                        //             openFilterOp2={openFilterOp2}
                        //             openFilterOp3={openFilterOp3}
                        //             openFilterOp4={openFilterOp4}
                        //             openFilterOp5={openFilterOp5}
                        //             openFilterOp6={openFilterOp6}
                        //             openFilterOp7={openFilterOp7}
                        //             openFilterOp8={openFilterOp8}
                        //         />
                        //     ) : (
                        //         <> */}
                                <ListVehicles
                                    dados={dados}
                                    refreshPage={refreshPage}
                                    userType={userType}
                                />

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
                                    name={'veículos em processo de cadastro'}
                                />
                            </>
                        ) : null}
                        {complete ? (
                            <>
                                <WidgetsRegistered
                                    open1={open1}
                                    open2={open2}
                                    open3={open3}
                                    open4={open4}
                                    open5={open5}
                                    op1={op1}
                                    op2={op2}
                                    op3={op3}
                                    op4={op4}
                                    op5={op5}
                                    qtdElements={qtdElements}
                                />
                                <br />
                                {/* {
                        //     otherFilters ? (
                        //         <WidgetsFilterDevices
                        //             filterOp1={filterOp1}
                        //             filterOp2={filterOp2}
                        //             filterOp3={filterOp3}
                        //             filterOp4={filterOp4}
                        //             filterOp5={filterOp5}
                        //             filterOp6={filterOp6}
                        //             filterOp7={filterOp7}
                        //             filterOp8={filterOp8}
                        //             openFilterOp1={openFilterOp1}
                        //             openFilterOp2={openFilterOp2}
                        //             openFilterOp3={openFilterOp3}
                        //             openFilterOp4={openFilterOp4}
                        //             openFilterOp5={openFilterOp5}
                        //             openFilterOp6={openFilterOp6}
                        //             openFilterOp7={openFilterOp7}
                        //             openFilterOp8={openFilterOp8}
                        //         />
                        //     ) : (
                        //         <> */}
                                <ListVehicles
                                    dados={dados}
                                    refreshPage={refreshPage}
                                    userType={userType}
                                />

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
                                    name={'clientes cadastrados'}
                                />
                            </>
                        ) : null}
                    </CCardBody>
                </CCard>
            </>
        );
    }
};

export default Devices;
