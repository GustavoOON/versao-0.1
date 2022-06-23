import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CFormInput,
    CInputGroup,
    CRow,
} from '@coreui/react';
import { BiSearchAlt2 } from 'react-icons/bi';

import FollowCall from './render/FollowCall';
import HistoryCalls from './render/History';
// import Decrypt from '../../security/decripty';

import './css/assistence.css';

const Assistence = () => {
    const [opened, setOpened] = useState(true);
    const [historic, setHistoric] = useState(false);
    const [serviceFlow, setServiceFlow] = useState(false);

    const choiceOpened = () => {
        setOpened(true), setHistoric(false), setServiceFlow(false);
    };

    const choiceHistoric = () => {
        setOpened(false), setHistoric(true), setServiceFlow(false);
    };

    const choiceServiceFlow = () => {
        setOpened(false), setHistoric(false), setServiceFlow(true);
    };

    // const [userType, setUserType] = useState();
    // const [permissions, setPermissions] = useState();

    // useEffect(() => {
    //     setUserType(Decrypt.UserTypeDecryption);
    //     setPermissions(Decrypt.permissions);
    // }, []);

    return (
        <CCard className="container-assistence">
            <CCardBody>
                <CInputGroup className="p-3 justify-content-end">
                    <div className="d-flex">
                        <div className="container-icon-input">
                            <i className="icon-search-global i-absolute-global">
                                <BiSearchAlt2 color="#6D6D6D" />
                            </i>
                            <CFormInput
                                className="input-search-global"
                                placeholder="Pesquise"
                                // onChange={changeSearch}
                            />
                        </div>
                        <CButton
                            className="btn-search-global"
                            variant="outline"
                            // onClick={}
                        >
                            Buscar
                        </CButton>
                    </div>
                </CInputGroup>
                <CRow className="ps-2">
                    <CCol
                        className={opened ? 'nav-opened-active' : 'nav-opened'}
                        onClick={choiceOpened}
                    >
                        <label>Em aberto</label>
                    </CCol>
                    <CCol
                        className={
                            historic ? 'nav-historic-active' : 'nav-historic'
                        }
                        onClick={choiceHistoric}
                    >
                        <label>Histórico</label>
                    </CCol>
                    <CCol
                        className={
                            serviceFlow
                                ? 'nav-service-flow-active'
                                : 'nav-service-flow'
                        }
                        onClick={choiceServiceFlow}
                    >
                        <label>Fluxo de atendimento</label>
                    </CCol>
                    <CCol></CCol>
                </CRow>
                <hr className="m-0" />
                {opened ? <FollowCall /> : null}
                {historic ? <HistoryCalls /> : null}
            </CCardBody>
        </CCard>
    );
};

export default Assistence;
