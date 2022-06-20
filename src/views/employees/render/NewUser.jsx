import React, { useState } from 'react'
import { CForm, CFormSelect, CFormLabel, CCol, CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CFormInput } from '@coreui/react'
import axios from "axios"

import Permissions from './../permissons/NewUserPermissons'
import UrlDomain from './../../../config'

import './../css/newUser.css'

const NewUser = (props) => {
    const [visible, setVisible] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')
    const [district, setDistrict] = useState('')
    const [number, setNumber] = useState('')
    const [city, setCity] = useState('')
    const [typeUser, setTypeUser] = useState('')
    const [cep, setCep] = useState('')
    const [road, setRoad] = useState('')
    const [complement, setComplement] = useState('')
    const [state, setState] = useState('')


    const [departs, setDeparts] = useState([
        'Selecionar departamentos',
        { label: 'COMERCIAL', value: 'COMERCIAL' },
        { label: 'MARKETING', value: 'MARKETING' },
        { label: 'OPERACIONAL', value: 'OPERATIONAL' },
        { label: 'FINANCEIRO', value: 'FINANCIAL' },
        { label: 'RECURSOS HUMANOS', value: 'HUMAN_RESOURCES' },
        { label: 'ADMINISTRAÇÃO', value: 'ADMINISTRATION' }
    ])

    // faz requisicao para api 
    const CreateUser = () => {

        // let newUser = { firstName: firstName, fullName: fullName, phone: phone, email: email, department: depart, employeeRole: typeUser }
        // // Configuracoes para envio de mensagem 

        // const config = configCookies()

        // axios
        //     .post(`${UrlDomain}/employees`, newUser, config)
        //     .then((response) => {
        //         props.callBack()

        //     })
        //     .catch(r => {
        //         console.log('erro na api createUser', r)
        //         alert('Ops... houve algum erro 🤕 \n - Tente um novo e-mail.\n - Se persistir o erro, realize um novo login.')
        //     })

    }

    // PEGAR o TIPO DE USUARIO QUE IRÁ INERIR o USUARIO
    const user = 'ADMIN'
    if (user == 'ADMIN') {
        return (
            <>
                <CButton
                    className='btn-save-global '
                    onClick={() => setVisible(!visible)}
                >
                    Adicionar
                </CButton>
                <CModal
                    visible={visible}
                    onClose={() => setVisible(false)}
                    size="lg"
                >
                    <CModalHeader>
                        <CModalTitle className="title-modal">Adicionar funcionário</CModalTitle>
                    </CModalHeader>
                    <CModalBody className='container-body'>
                        <CForm className='row g-3'>
                            <CCol md={6}>
                                <CFormLabel>Nome</CFormLabel>
                                <CFormInput
                                    type="text"
                                    onChange={({ target }) => setFirstName(target.value)}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel>Sobrenome</CFormLabel>
                                <CFormInput
                                    type="text"
                                    onChange={({ target }) => setLastName(target.value)}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel>Departamentos</CFormLabel>
                                <CFormSelect
                                    options={departs}
                                    onChange={({ target }) => setDepartment(target.value)}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel>Tipo de usuário</CFormLabel>
                                <CFormSelect
                                    options={departs}
                                    onChange={({ target }) => setTypeUser(target.value)}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel>E-mail</CFormLabel>
                                <CFormInput
                                    type="text"
                                    onChange={({ target }) => setEmail(target.value)}
                                />
                            </CCol>
                            <CCol md={3}>
                                <CFormLabel>Contato</CFormLabel>
                                <CFormInput
                                    type="text"
                                    onChange={({ target }) => setPhone(target.value)}
                                />
                            </CCol>
                            <CCol md={3}>
                                <CFormLabel>CEP</CFormLabel>
                                <CFormInput
                                    type="text"
                                    onChange={({ target }) => setCep(target.value)}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel>Bairro</CFormLabel>
                                <CFormInput
                                    type="text"
                                    onChange={({ target }) => setDistrict(target.value)}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel>Rua</CFormLabel>
                                <CFormInput
                                    type="text"
                                    onChange={({ target }) => setRoad(target.value)}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel>Número</CFormLabel>
                                <CFormInput
                                    type="text"
                                    onChange={({ target }) => setNumber(target.value)}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel>Complemento</CFormLabel>
                                <CFormInput
                                    type="text"
                                    onChange={({ target }) => setComplement(target.value)}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel>Cidade</CFormLabel>
                                <CFormSelect
                                    options={departs}
                                    onChange={({ target }) => setCity(target.value)}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel>Estado</CFormLabel>
                                <CFormSelect
                                    options={departs}
                                    onChange={({ target }) => setState(target.value)}
                                />
                            </CCol>
                        </CForm>
                    </CModalBody>

                    <CModalFooter>
                        <CButton
                            variant="outline"
                            className='btn-cancel-global'
                            onClick={() => setVisible(false)}>
                            Cancelar
                        </CButton>
                        <CButton
                            className='btn-save-global'
                        >
                            Adicionar
                        </CButton>
                    </CModalFooter>

                </CModal>
            </ >
        )
    } else {
        return (<> </>)
    }

}


export default NewUser