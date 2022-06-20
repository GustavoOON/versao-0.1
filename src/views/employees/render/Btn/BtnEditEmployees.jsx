import React, { useState } from 'react';
// import axios from 'axios';
// import urlDomain, { configCookies } from 'src/config';
import {
    CButton,
    CRow,
    CCol,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
} from '@coreui/react';
import BtnEdit from '../BtnEdit';
import Associate from '../associate/Associate';
import DelEmployeeLogin from '../DelEmpLogin';

import DisableEmployee from './DisableEmployee';
import DeactivateAccount from './DeactivateAccount';

import '../../css/btnEdit.css';

function BtnEditEmployees({ item, retiraFiltro, dadosOri }) {
    const [show, setShow] = useState(false);
    const [deleteEmployee, setDeleteEmployee] = useState(false);
    const [deactivateAccount, setDeactivateAccount] = useState(false);

    const [op1, setOp1] = useState(true);
    const [op2, setOp2] = useState(false);
    const [op3, setOp3] = useState(false);
    const choiceUser = () => {
        setOp1(true), setOp2(false), setOp3(false);
    };
    const choiceAddress = () => {
        setOp1(false), setOp2(true), setOp3(false);
    };
    const choiceVehicle = () => {
        setOp1(false), setOp2(false), setOp3(true);
    };

    // function openModal(data) {
    //     setShow(true);
    //     const config = configCookies()

    //     axios
    //         .get(`${urlDomain}/employees/${item.id}`, config)
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch(r => {
    //             console.log('error', r), alert('Login expirado'), window.location.reload()
    //         })
    // }
    return (
        <div>
            <CButton
                size="sm"
                onClick={() => setShow(true)}
                className="btn-cancel-global"
                variant="outline"
            >
                Editar
            </CButton>
            {deleteEmployee ? (
                <DisableEmployee
                    setDeleteEmployee={setDeleteEmployee}
                    deleteEmployee={deleteEmployee}
                />
            ) : deactivateAccount ? (
                <DeactivateAccount
                    deactivateAccount={deactivateAccount}
                    setDeactivateAccount={setDeactivateAccount}
                />
            ) : (
                <CModal visible={show} size="xl">
                    <CModalHeader closeButton={false}>
                        <CModalTitle className="modal-title">
                            Editar funcionário
                        </CModalTitle>
                    </CModalHeader>
                    {item !== '' ? (
                        <>
                            <CModalBody className="m-4">
                                <CRow>
                                    <CCol
                                        className={
                                            op1 === true
                                                ? 'nav-employees-active'
                                                : 'nav-employees'
                                        }
                                        onClick={choiceUser}
                                    >
                                        <label>Dados do funcionário</label>
                                    </CCol>
                                    <CCol
                                        className={
                                            op2 === true
                                                ? 'nav-employees-active'
                                                : 'nav-employees'
                                        }
                                        onClick={choiceAddress}
                                    >
                                        <label>Endereço</label>
                                    </CCol>
                                    <CCol></CCol>
                                </CRow>
                                <br />
                                <CRow>
                                    {op1 === true ? (
                                        <BtnEdit
                                            editar={item}
                                            setDeleteEmployee={
                                                setDeleteEmployee
                                            }
                                            setDeactivateAccount={
                                                setDeactivateAccount
                                            }
                                        />
                                    ) : null}
                                    {op2 === true ? (
                                        null
                                        // <Associate
                                        //     user={item}
                                        //     data={dadosOri}
                                        //     handleClose={handleClose}
                                        // />
                                    ) : null}
                                    {/* {op3 === true ?
                                        <DelEmployeeLogin user={item} handleClose={handleClose} /> : null
                                    } */}
                                </CRow>
                            </CModalBody>
                            <CModalFooter>
                                <CButton
                                    className="btn-cancel-global"
                                    variant="outline"
                                    onClick={() => setShow(false)}
                                >
                                    Cancelar
                                </CButton>
                                <CButton className="btn-save-global">
                                    Salvar
                                </CButton>
                            </CModalFooter>
                        </>
                    ) : (
                        <>
                            <br />
                            <br />
                            <Spinner animation="grow" variant="info" />
                            <br />
                            <br />
                        </>
                    )}
                </CModal>
            )}
        </div>
    );
}

export default BtnEditEmployees;
