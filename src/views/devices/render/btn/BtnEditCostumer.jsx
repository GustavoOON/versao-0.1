import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUserEdit } from 'react-icons/fa';
import { Spinner } from 'react-bootstrap';
import {
    CRow,
    CButton,
    CCol,
    CFormInput,
    CFormTextarea,
    CModal,
    CModalBody,
    CModalHeader,
    CModalTitle,
} from '@coreui/react';
// import { MdCameraAlt } from 'react-icons/md';
// import { BsFillFileEarmarkTextFill } from 'react-icons/bs';

import UrlDomain, { configCookies } from '../../../../config';

import '../../css/btnEditCostumer.css';

const BtnEditCostumer = (props) => {
    const { data, callBack } = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [dataCostumer, setDataCostumer] = useState('');
    const [update, setUpdate] = useState(data.updatedAt);

    // INFORMAÇOES do cliente
    const [fullNameUser, setFullNameUser] = useState();
    const [birthDateUser, setBirthDateUser] = useState();
    const [emailUser, setEmailUser] = useState();
    const [CEPUser, setCEPUser] = useState();
    const [cityUser, setCityUser] = useState();
    const [numberUser, setNumberUser] = useState();
    const [CNHUser, setCNHUser] = useState();
    const [CPFUser, setCPFUser] = useState();
    const [RGUser, setRGUser] = useState();
    const [phoneUser, setPhoneUser] = useState();
    const [stateUser, setStateUser] = useState();
    const [addressUser, setAddressUser] = useState();
    const [complementUser, setComplementUser] = useState();
    const [documentVehicleUser, setDocumentVehicleUser] = useState();

    const userFullName = ({ target }) => {
        setFullNameUser(target.value);
    };
    const userEmail = ({ target }) => {
        setEmailUser(target.value);
    };
    const userBirthDate = ({ target }) => {
        setBirthDateUser(target.value);
    };
    const userCEP = ({ target }) => {
        setCEPUser(target.value);
    };
    const userCity = ({ target }) => {
        setCityUser(target.value);
    };
    const userNumber = ({ target }) => {
        setNumberUser(target.value);
    };
    const userCNH = ({ target }) => {
        setCNHUser(target.value);
    };
    const userCPF = ({ target }) => {
        setCPFUser(target.value);
    };
    const userRG = ({ target }) => {
        setRGUser(target.value);
    };
    const userPhone = ({ target }) => {
        setPhoneUser(target.value);
    };
    const userState = ({ target }) => {
        setStateUser(target.value);
    };
    const userAddress = ({ target }) => {
        setAddressUser(target.value);
    };
    const userComplement = ({ target }) => {
        setComplementUser(target.value);
    };
    const userDocumentVehicle = ({ target }) => {
        setDocumentVehicleUser(target.value);
    };

    // informacoes do veículo
    const [plateNumberVehicle, setPlateNumberVehicle] = useState(
        data.vehicle.plateNumber
    );
    const [brandVehicle, setBrandVehicle] = useState(data.vehicle.brand);
    const [fipeValueVehicle, setFipeValueVehicle] = useState(
        data.vehicle.fipeValue
    );
    const [chassisVehicle, setChassisVehicle] = useState(data.vehicle.chassis);
    const [modelVehicle, setModelVehicle] = useState(data.vehicle.model);
    const [yearVehicle, setYearVehicle] = useState(data.vehicle.year);

    const vehiclePlateNumber = ({ target }) => {
        setPlateNumberVehicle(target.value);
    };
    const vehicleBrand = ({ target }) => {
        setBrandVehicle(target.value);
    };
    const vehicleFipeValue = ({ target }) => {
        setFipeValueVehicle(target.value);
    };
    const vehicleChassis = ({ target }) => {
        setChassisVehicle(target.value);
    };
    const vehicleModel = ({ target }) => {
        setModelVehicle(target.value);
    };
    const vehicleYear = ({ target }) => {
        setYearVehicle(target.value);
    };

    //informacoes do plano
    const [policyPlan, setPolicyPlan] = useState();
    const [baseValuePlan, setBaseValuePlan] = useState();
    const [descriptionPlan, setDescriptionPlan] = useState();
    const [expirationPlan, setExpirationPlan] = useState();
    const [valuePerKmPlan, setValuePerKmPlan] = useState();

    const planPolicy = ({ target }) => {
        setPolicyPlan(target.value);
    };
    const planBaseValue = ({ target }) => {
        setBaseValuePlan(target.value);
    };
    const planDescription = ({ target }) => {
        setDescriptionPlan(target.value);
    };
    const planExpiration = ({ target }) => {
        setExpirationPlan(target.value);
    };
    const planValuePerKm = ({ target }) => {
        setValuePerKmPlan(target.value);
    };

    useEffect(() => {
        setFullNameUser(data.customer.fullName);
        setBirthDateUser();
        setEmailUser(data.customer.email);
        setCEPUser();
        setCityUser();
        setNumberUser();
        setCNHUser();
        setCPFUser();
        setRGUser();
        setPhoneUser(data.customer.phone);
        setStateUser();
        setAddressUser();
        setComplementUser();
        setDocumentVehicleUser();
        setPolicyPlan();
        setBaseValuePlan(data.plan.baseValue);
        setDescriptionPlan(data.plan.description);
        setExpirationPlan(data.plan.expiration);
        setValuePerKmPlan(data.plan.valuePerKm);
    }, [show]);

    const [op1, setOp1] = useState(true);
    const [op2, setOp2] = useState(false);
    const [op3, setOp3] = useState(false);
    const choicePlans = () => {
        setOp1(true), setOp2(false), setOp3(false);
    };
    const choiceVehicle = () => {
        setOp1(false), setOp2(true), setOp3(false);
    };
    const choiceUser = () => {
        setOp1(false), setOp2(false), setOp3(true);
    };

    const [flag, setFlag] = useState(0);
    function openModal(d) {
        setShow(true);
        const config = configCookies();

        axios
            .get(`${UrlDomain}/customers/${d.customer.id}`, config)
            .then((response) => {
                setAddressUser(response.data.addresses[0].address);
                setDataCostumer(response);
            })
            .catch((r) => {
                console.log('error', r),
                    alert('Login expirado'),
                    window.location.reload();
            });
    }

    // function verify() {
    //     setFlag(0);
    //     if (phoneUser.length == 11 && phoneUser[2] === '9') {
    //         saveCustomer();
    //     } else {
    //         setFlag(1);
    //     }
    // }

    function saveCustomer() {
        // let upStatus = {
        //     firstNameUser,
        //     fullNameUser,
        //     document,
        //     emailUser,
        //     phoneUser,
        // };
        // axios
        //     .patch(
        //         `${UrlDomain}/customers/${dataCostumer.customer.id}`,
        //         upStatus,
        //         config
        //     )
        //     .then(() => {
        //         callBack();
        //         setShow(false);
        //     })
        //     .catch((r) => {
        //         console.log('error', r),
        //             alert('Login expirado'),
        //             window.location.reload();
        //     });
        handleClose();
    }

    function saveVehicle() {
        // let upStatus = {
        //     brand: brand,
        //     chassis: chassis,
        //     city: cityVehicle,
        //     color: colorVehicle,
        //     fipeCode: fipeCode,
        //     fipeValue: fipeValue,
        //     fuel: fuel,
        //     model: model,
        //     plateNumber: plateNumber,
        //     reference: reference,
        //     state: state,
        //     vehicleStatus: status,
        //     year: yearVehicle,
        // };
        // axios
        //     .patch(
        //         `${UrlDomain}/customers/${data.customer.id}`,
        //         upStatus,
        //         config
        //     )
        //     .then((response) => {
        //         callBack();
        //         setShow(false);
        //     })
        //     .catch((r) => {
        //         console.log('error', r),
        //             alert('Login expirado'),
        //             window.location.reload();
        //     });
        handleClose();
    }

    function savePlan() {
        // const save = {
        //     policyPlan,
        //     baseValuePlan,
        //     descriptionPlan,
        //     expirationPlan,
        //     valuePerKmPlan,
        // };
        //     axios
        //         .patch(`${UrlDomain}/addresses/${idAddress}`, save, config)
        //         .then(() => {
        //             callBack();
        //             setShow(false);
        //         })
        //         .catch((r) => {
        //             console.log('error', r),
        //                 alert('Login expirado'),
        //                 window.location.reload();
        //         });
        handleClose();
    }

    return (
        <div>
            <CButton size="sm" onClick={() => openModal(data)} color="white">
                <FaUserEdit name="user-edit" size={24} color="black" />
            </CButton>

            <CModal visible={show} onClose={handleClose} size="xl">
                <CModalHeader>
                    <CModalTitle className="title-modal">
                        Editar informações do cliente
                    </CModalTitle>
                </CModalHeader>
                {data !== '' ? (
                    <CModalBody>
                        <CRow>
                            <CCol
                                className={
                                    op1 === true
                                        ? 'nav-address-active'
                                        : 'nav-address'
                                }
                                onClick={choicePlans}
                            >
                                <label> Dados do plano </label>
                            </CCol>
                            <CCol
                                className={
                                    op2 === true
                                        ? 'nav-vehicle-active'
                                        : 'nav-vehicle'
                                }
                                onClick={choiceVehicle}
                            >
                                <label> Dados do veículo </label>
                            </CCol>
                            <CCol
                                className={
                                    op3 === true
                                        ? 'nav-costumer-active'
                                        : 'nav-costumer'
                                }
                                onClick={choiceUser}
                            >
                                <label> Dados do cliente </label>
                            </CCol>
                            <CCol></CCol>
                        </CRow>
                        <br />
                        <CRow>
                            {op1 === true ? (
                                <>
                                    {/* {flagChoiceAddres === false ? (
                                        <div className="container-choice-address">
                                            <h5>
                                                Escolha um endereço para edição
                                            </h5>
                                            <hr />

                                            {address.map((item) => {
                                                return (
                                                    <div key={item}>
                                                        <CRow>
                                                            <CCol>
                                                                <label className="label-customer-input">
                                                                    Endereço
                                                                </label>
                                                                <br />
                                                                <label>
                                                                    -
                                                                    {
                                                                        item.address
                                                                    }
                                                                </label>
                                                            </CCol>
                                                            <CCol>
                                                                <CButton
                                                                    color="dark"
                                                                    variant="outline"
                                                                    onClick={() => {
                                                                        getValueAddress(
                                                                            item
                                                                        );
                                                                    }}
                                                                >
                                                                    Selecionar
                                                                </CButton>
                                                            </CCol>
                                                        </CRow>
                                                        <br />
                                                        <br />
                                                        <hr />
                                                        <div className="container-customer-footer">
                                                            <Button
                                                                className="btn-cancel-global float-right me-2"
                                                                variant="secondary"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                            >
                                                                Sair
                                                            </Button>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : ( */}
                                    <CRow>
                                        <CCol md={6}>
                                            <label className="label-customer-input">
                                                Apólice
                                            </label>

                                            <CFormInput
                                                className=""
                                                type="text"
                                                placeholder="Não disponivel"
                                                defaultValue={policyPlan}
                                                onChange={planPolicy}
                                            />
                                            <br />
                                        </CCol>
                                        <CCol md={6}>
                                            <label className="label-customer-input">
                                                Expiração do plano
                                            </label>
                                            <CFormInput
                                                className=""
                                                type="text"
                                                placeholder="Não disponivel"
                                                defaultValue={expirationPlan}
                                                onChange={planExpiration}
                                            />
                                            <br />
                                        </CCol>
                                        <CCol md={6}>
                                            <label className="label-customer-input">
                                                Valor base do usuário
                                            </label>
                                            <div className="container-icon-input">
                                                <label className="icon-input-right i-absolute-global">
                                                    R$
                                                </label>
                                                <CFormInput
                                                    style={{
                                                        paddingLeft: '2.5em',
                                                    }}
                                                    type="text"
                                                    placeholder="Não disponivel"
                                                    defaultValue={baseValuePlan}
                                                    onChange={planBaseValue}
                                                />
                                            </div>
                                            <br />
                                        </CCol>
                                        <CCol md={6}>
                                            {/* <CButton
                                                className="btn-back-address"
                                                color="dark"
                                                onClick={backAddress}
                                            >
                                                Voltar aos endereços
                                            </CButton> */}
                                            <label className="label-customer-input">
                                                Valor por km do plano
                                            </label>
                                            <div className="container-icon-input">
                                                <label className="icon-input-right i-absolute-global">
                                                    R$
                                                </label>
                                                <CFormInput
                                                    style={{
                                                        paddingLeft: '2.5em',
                                                    }}
                                                    type="text"
                                                    placeholder="Não disponivel"
                                                    defaultValue={
                                                        valuePerKmPlan
                                                    }
                                                    onChange={planValuePerKm}
                                                />
                                            </div>
                                            <br />
                                        </CCol>
                                        <CCol md={12}>
                                            <label className="label-customer-input">
                                                Descrição do plano
                                            </label>
                                            <CFormTextarea
                                                className="w-100"
                                                type="text"
                                                rows="5"
                                                placeholder="Não disponivel"
                                                defaultValue={descriptionPlan}
                                                onChange={planDescription}
                                            />
                                            <br />
                                        </CCol>
                                        <div className="d-flex align-items-end justify-content-between">
                                            <label>
                                                <span className="footer-text">
                                                    Última edição:
                                                </span>
                                                <span>{update}; </span>
                                                <span className="footer-text">
                                                    funcionário:
                                                </span>
                                                <span>{fullNameUser}</span>
                                            </label>
                                            <div>
                                                <CButton
                                                    onClick={savePlan}
                                                    className="btn-save-global float-right"
                                                >
                                                    Salvar
                                                </CButton>
                                                <CButton
                                                    className="btn-cancel-global float-right me-2"
                                                    variant="outline"
                                                    onClick={handleClose}
                                                >
                                                    Cancelar
                                                </CButton>
                                            </div>
                                        </div>
                                    </CRow>
                                </>
                            ) : null}

                            {op2 === true ? (
                                <CRow>
                                    <CCol>
                                        <label className="label-customer-input">
                                            Placa do veículo
                                        </label>
                                        {/* <div className="d-flex flex-row-reverse w-100"> */}
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={plateNumberVehicle}
                                            disabled
                                            onChange={vehiclePlateNumber}
                                        />
                                        {/* <i
                                                className="icon-input-right i-absolute-global"
                                                // onClick={() => }
                                            >
                                                <MdCameraAlt />
                                            </i> */}
                                        {/* </div> */}
                                        <br />
                                        <label className="label-customer-input">
                                            Marca do veículo
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            disabled
                                            defaultValue={brandVehicle}
                                            onChange={vehicleBrand}
                                        />
                                        <br />
                                        <label className="label-customer-input">
                                            Valor da FIPE
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={fipeValueVehicle}
                                            disabled
                                            onChange={vehicleFipeValue}
                                        />
                                        <br />
                                    </CCol>
                                    <CCol>
                                        <label className="label-customer-input">
                                            Chassi do veículo
                                        </label>
                                        {/* <div className="d-flex flex-row-reverse w-100"> */}
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            disabled
                                            defaultValue={chassisVehicle}
                                            onChange={vehicleChassis}
                                        />
                                        {/* <i
                                                className="icon-input-right i-absolute-global"
                                                // onClick={() => }
                                            >
                                                <MdCameraAlt />
                                            </i> */}
                                        {/* </div> */}
                                        <br />
                                        <label className="label-customer-input">
                                            Modelo do veículo
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            disabled
                                            defaultValue={modelVehicle}
                                            onChange={vehicleModel}
                                        />
                                        <br />

                                        <label className="label-customer-input">
                                            Ano do veículo
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={yearVehicle}
                                            disabled
                                            onChange={vehicleYear}
                                        />
                                        <br />
                                    </CCol>
                                    <div className="d-flex align-items-end justify-content-between">
                                        <label>
                                            <span className="footer-text">
                                                Última edição:
                                            </span>
                                            <span>{update}; </span>
                                            <span className="footer-text">
                                                Funcionário:
                                            </span>
                                            <span>{fullNameUser}</span>
                                        </label>
                                        <div>
                                            <CButton
                                                onClick={saveVehicle}
                                                className="btn-save-global float-right"
                                            >
                                                Salvar
                                            </CButton>
                                            <CButton
                                                className="btn-cancel-global float-right me-2"
                                                variant="outline"
                                                onClick={handleClose}
                                            >
                                                Cancelar
                                            </CButton>
                                        </div>
                                    </div>
                                </CRow>
                            ) : null}
                            {op3 === true ? (
                                <CRow>
                                    <CCol>
                                        <label className="label-customer-input">
                                            Nome
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={fullNameUser}
                                            onChange={userFullName}
                                        />
                                        <br />
                                        <label className="label-customer-input">
                                            Data de nascimento
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={birthDateUser}
                                            onChange={userBirthDate}
                                        />
                                        <br />
                                        <label className="label-customer-input">
                                            E-mail
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={emailUser}
                                            onChange={userEmail}
                                        />
                                        <br />
                                        <label className="label-customer-input">
                                            CEP
                                        </label>
                                        {/* <div className="d-flex flex-row-reverse w-100"> */}
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={CEPUser}
                                            onChange={userCEP}
                                        />
                                        {/* <i
                                                className="icon-input-right i-absolute-global"
                                                // onClick={() => }
                                            >
                                                <MdCameraAlt />
                                            </i> */}
                                        {/* </div> */}
                                        <br />
                                        <label className="label-customer-input">
                                            Cidade
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={cityUser}
                                            onChange={userCity}
                                        />
                                        <br />
                                        <label className="label-customer-input">
                                            Número
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={numberUser}
                                            onChange={userNumber}
                                        />
                                        <br />
                                        <label className="label-customer-input">
                                            CNH
                                        </label>
                                        {/* <div className="d-flex flex-row-reverse w-100"> */}
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={CNHUser}
                                            onChange={userCNH}
                                        />
                                        {/* <i
                                                className="icon-input-right i-absolute-global"
                                                // onClick={() => }
                                            >
                                                <MdCameraAlt />
                                            </i> */}
                                        {/* </div> */}
                                        <br />
                                    </CCol>
                                    <CCol>
                                        <label className="label-customer-input">
                                            CPF
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={CPFUser}
                                            onChange={userCPF}
                                        />
                                        <br />
                                        <label className="label-customer-input">
                                            RG
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={RGUser}
                                            onChange={userRG}
                                        />
                                        <br />
                                        <label className="label-customer-input">
                                            Telefone para contato
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={phoneUser}
                                            onChange={userPhone}
                                        />
                                        <br />
                                        <label className="label-customer-input">
                                            Estado
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={stateUser}
                                            onChange={userState}
                                        />
                                        <br />
                                        <label className="label-customer-input">
                                            Endereço
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={addressUser}
                                            onChange={userAddress}
                                        />
                                        <br />
                                        <label className="label-customer-input">
                                            Complemento
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={complementUser}
                                            onChange={userComplement}
                                        />
                                        <br />
                                        <label className="label-customer-input">
                                            Documento do veículo
                                        </label>
                                        <CFormInput
                                            className=""
                                            type="text"
                                            placeholder="Não disponivel"
                                            defaultValue={documentVehicleUser}
                                            onChange={userDocumentVehicle}
                                        />
                                        <br />
                                    </CCol>

                                    <div className="d-flex align-items-end justify-content-between">
                                        <label>
                                            <span className="footer-text">
                                                Última edição:
                                            </span>
                                            <span>{update}; </span>
                                            <span className="footer-text">
                                                Funcionário:
                                            </span>
                                            <span>{fullNameUser}</span>
                                        </label>
                                        <div>
                                            <CButton
                                                onClick={saveCustomer}
                                                className="btn-save-global float-right"
                                            >
                                                Salvar
                                            </CButton>
                                            <CButton
                                                className="btn-cancel-global float-right me-2"
                                                variant="outline"
                                                onClick={handleClose}
                                            >
                                                Cancelar
                                            </CButton>
                                        </div>
                                    </div>
                                </CRow>
                            ) : null}
                        </CRow>
                    </CModalBody>
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
        </div>
    );
};

export default BtnEditCostumer;
