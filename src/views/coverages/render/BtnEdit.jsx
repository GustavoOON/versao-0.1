import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
// import UrlDomain, { configCookies } from './../../config'

var CryptoJS = require('crypto-js');

import {
    CButton,
    CFormInput,
    CFormLabel,
    CRow,
    CCol,
    CModal,
    CModalHeader,
    CModalBody,
    CForm,
    CFormSelect,
    CFormTextarea,
    CModalFooter,
    CModalTitle,
} from '@coreui/react';

const BtnEdit = (props) => {
    const [nameService, setNameService] = useState([
        'Roubo e furto',
        'Chaveiro',
        'Capotamento',
    ]);
    var usT = Cookies.get('userType');
    var msg = CryptoJS.AES.decrypt(usT, 'OnnSeguros');

    // const config = configCookies()

    const [visible, setVisible] = useState(false);
    const [deleteCoverage, setDeleteCoverage] = useState(false);

    const [servico, setServico] = useState(props.item.description);
    const servicoNome = (e) => {
        setServico(e.target.value);
    };

    const [descricao, setDescricao] = useState('Campo ainda não aplicado....');
    const serviceDescricao = (e) => {
        setDescricao(e.target.value);
    };

    const [valueKm, setValueKm] = useState(parseFloat(props.item.valuePerKm));
    const newValueKm = (e) => {
        setValueKm(e.target.value);
    };

    const [status, setStatus] = useState(false);
    const getStatus = (e) => {
        setStatus(e);
    };

    async function salvarEdicoes() {
        // setVisible(false);
        // let save = { id: props.item.id, description: servico, disabled: status, valuePerKm: valueKm }
        // await axios
        //     .patch(`${UrlDomain}/coverages`, save, config)
        //     .then((response) => {
        //         setVisible(false);
        //         props.parentCallback()
        //     })
        //     .catch(r => {
        //         console.log('error', r), alert('Login expirado') //,window.location.reload()
        //     }) // window.location.reload();
    }

    return deleteCoverage ? (
        <CModal alignment="center" visible={deleteCoverage}>
            <CModalBody>
                <p className="text-center m-5 text-delete">
                    Você tem certeza que deseja deletar esse serviço?
                </p>
                <div className="mb-3 d-flex justify-content-around">
                    <CButton className="btn-save-global" size="lg">
                        Sim, deletar
                    </CButton>
                    <CButton
                        size="lg"
                        className="btn-cancel-global"
                        variant="outline"
                        onClick={() => setDeleteCoverage(false)}
                    >
                        Cancelar
                    </CButton>
                </div>
            </CModalBody>
        </CModal>
    ) : (
        <>
            <CButton
                className="btn-cancel-global"
                variant="outline"
                onClick={() => setVisible(true)}
            >
                Editar
            </CButton>

            <CModal
                visible={visible}
                onClose={() => setVisible(false)}
                size="xl"
            >
                <CModalHeader>
                    <CModalTitle className="title-modal">Editar</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CRow>
                        <CCol>
                            <CForm>
                                <CFormLabel>Nome do Serviço</CFormLabel>
                                <CFormSelect
                                    value={servico}
                                    onChange={servicoNome}
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
                                        value={valueKm}
                                        type="number"
                                        required
                                        min="0.00"
                                        step=".01"
                                        onChange={newValueKm}
                                    />
                                </div>
                                <br />
                                <CFormLabel>Fluxo de assistência</CFormLabel>
                                <CFormSelect
                                    // onChange={}
                                    options={[
                                        {
                                            label: 'Fluxo de Alagamentos',
                                            value: 0,
                                        },
                                    ]}
                                />
                            </CForm>
                            <br />
                        </CCol>
                    </CRow>
                </CModalBody>

                <CModalFooter>
                    <div className="flex-grow-1">
                        <CButton
                            className="btn-cancel-global"
                            variant="outline"
                            onClick={() => setDeleteCoverage(true)}
                        >
                            Deletar serviço
                        </CButton>
                    </div>

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

export default BtnEdit;
