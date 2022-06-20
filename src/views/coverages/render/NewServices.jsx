import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {
    CButton,
    CFormInput,
    CFormLabel,
    CRow,
    CCol,
    CFormSelect,
    CFormTextarea,
    CForm,
    CModal,
    CModalTitle,
    CModalBody,
    CModalHeader,
    CModalFooter,
} from '@coreui/react';

import UrlDomain, { configCookies } from './../../../config';

const BtnNewService = (props) => {
    const [visible, setVisible] = useState(false);
    const [describe, setDescribe] = useState();
    const [nameService, setNameService] = useState([
        'Roubo e furto',
        'Chaveiro',
        'Capotamento',
    ]);
    const [valuePerKm, setValuePerKm] = useState();

    function captureDescribe(e) {
        setDescribe(e.target.value);
    }

    function captureName(e) {
        setNameService(e.target.value);
    }

    function captureValue(e) {
        setValuePerKm(e.target.value);
    }

    function salvarEdicoes() {
        // let save = [
        //     {
        //         description: nameService,
        //         valuePerKm: parseFloat(valuePerKm)
        //     }
        // ]
        // const config = configCookies()
        // axios
        //     .post(`${UrlDomain}/coverages`, save, config)
        //     .then((response) => {
        //         setVisible(false);
        //         props.attPage()
        //     })
        //     .catch(r => {
        //         console.log('error', r), alert('Login expirado'), window.location.reload()
        //     }) // window.location.reload();
    }

    return (
        <>
            <CButton
                className="btn-save-global"
                onClick={() => setVisible(!visible)}
            >
                Adicionar cobertura
            </CButton>

            <CModal
                visible={visible}
                onClose={() => setVisible(false)}
                size="xl"
            >
                <CModalHeader>
                    <CModalTitle className="title-modal">Adicionar</CModalTitle>
                </CModalHeader>
                <CModalBody className="container-body">
                    <CRow>
                        <CCol>
                            <CForm>
                                <CFormLabel>Nome do Serviço</CFormLabel>
                                <CFormSelect
                                    onChange={captureName}
                                    options={nameService.map(
                                        (label, value) => ({ label, value })
                                    )}
                                />
                                <br />
                                <CFormLabel>Descrição</CFormLabel>
                                <CFormTextarea rows="5"></CFormTextarea>
                            </CForm>
                        </CCol>
                        <CCol>
                            <CForm>
                                <CFormLabel>Tipo de serviço</CFormLabel>
                                <CFormSelect
                                    // onChange={}
                                    options={[
                                        {
                                            label: 'Sinistro',
                                            value: 0,
                                        },
                                        {
                                            label: 'Assistência',
                                            value: 0,
                                        },
                                    ]}
                                />
                                <br />
                                <CFormLabel>Valor por km (R$)</CFormLabel>
                                <div className="container-icon-input">
                                    <label className="icon-search-global  i-absolute-global">
                                        R$
                                    </label>
                                    <CFormInput
                                        className="input-km"
                                        type="number"
                                        required
                                        min="0.00"
                                        step=".01"
                                        placeholder="0,00"
                                    />
                                </div>
                                <br />
                                <CFormLabel>Fluxo de assistência</CFormLabel>
                                <CFormSelect
                                    // onChange={}
                                    options={[
                                        {
                                            label: 'Fluxo de Roubo e Furto',
                                            value: 0,
                                        },
                                    ]}
                                />
                            </CForm>
                        </CCol>
                    </CRow>
                </CModalBody>

                <CModalFooter>
                    <CButton
                        className="btn-cancel-global"
                        variant="outline"
                        onClick={() => setVisible(false)}
                    >
                        Cancelar
                    </CButton>
                    <CButton
                        className="btn-save-global"
                        onClick={salvarEdicoes}
                    >
                        Salvar
                    </CButton>
                </CModalFooter>
            </CModal>
        </>
    );
};

export default BtnNewService;
