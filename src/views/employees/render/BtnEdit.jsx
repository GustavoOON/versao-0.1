import React, { useState } from 'react'
import axios from 'axios'
import {
    CButton,
    CFormSelect,
    CCol,
    CForm,
    CFormLabel,
    CFormInput,
    CModalBody,
    CModal,
} from '@coreui/react'
import { BsFillPencilFill } from 'react-icons/bs';

import UrlDomain, { configCookies } from './../../../config'
import EditPermission from './../permissons/EditPermission'
import DeactivateAccount from './Btn/DeactivateAccount';
import DisableEmployee from './Btn/DisableEmployee';

const Editar = (props) => {
    const [show, setShow] = useState(false);

    const [firstName, setFirstName] = useState(props.editar.firstName)
    const [lastName, setLastName] = useState(props.editar.fullName)
    const [phone, setPhone] = useState(`(0${props.editar.phone.slice(0, 2)}) ${props.editar.phone.slice(2, 7)}-${props.editar.phone.slice(7)}`)
    const [email, setEmail] = useState(props.editar.email)
    const [department, setDepartment] = useState(props.editar.department)
    const [typeUser, setTypeUser] = useState(props.editar.employeeRole)
    const [modalDelete, setModalDelete] = useState(false)

    // const config = configCookies()

    const deleteEmployees = () => {

    }

    // function disableEmp() {
    //     var body = {}
    //     console.log(props.editar.id);
    //     axios
    //         .patch(`${UrlDomain}/employees/${props.editar.id}/disable`, body, config)
    //         .then((response) => {
    //             setShow(false);
    //             props.callBack()
    //         })
    //         .catch(r => {
    //             console.log('error', r), alert('Login expirado'), window.location.reload()
    //         }) // window.location.reload();
    // }

    // function salvarInfos() {

    //     let updateUser = { firstName: firstName, fullName: fullName, phone: phone, email: email, department: depart, employeeRole: typeUser }
    //     axios
    //         .patch(`${UrlDomain}/employees/${props.editar.id}`, updateUser, config)
    //         .then((response) => {
    //             setShow(false);
    //             props.callBack()
    //         })
    //         .catch(r => {
    //             console.log('error', r), alert('Login expirado'), window.location.reload()
    //         }) // window.location.reload();

    // }

    return (
        <>
            {/* <CRow> */}
            {/* <CCol>  */}
            {/* <label className='newUserTil'>Editar empregado</label>
                        <br />  <br /> */}


            <CForm className="row g-3">
                <CCol md={6}>
                    <CFormLabel>Nome</CFormLabel>
                    <CFormInput
                        value={firstName}
                        type="text"
                        onChange={({ target }) => setFirstName(target.value)}
                    />
                </CCol>
                <CCol md={6}>
                    <CFormLabel>Sobrenome</CFormLabel>
                    <CFormInput
                        value={lastName}
                        type="text"
                        onChange={({ target }) => setLastName(target.value)}
                    />
                </CCol>
                <CCol md={6}>
                    <CFormLabel>Departamento</CFormLabel>
                    <CFormSelect
                        value={department}
                        options={[{}]}
                        onChange={({ target }) => setDepartment(target.value)}
                    />
                </CCol>
                <CCol md={6}>
                    <CFormLabel>Tipo de usuário</CFormLabel>
                    <CFormSelect
                        value={typeUser}
                        options={[{}]}
                        onChange={({ target }) => setTypeUser(target.value)}
                    />
                </CCol>
                <CCol md={6}>
                    <CFormLabel>E-mail</CFormLabel>
                    <CFormInput
                        value={email}
                        type="text"
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </CCol>
                <CCol md={6}>
                    <CFormLabel>Contato</CFormLabel>
                    <CFormInput
                        value={phone}
                        type="text"
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </CCol>
                <CCol md={2}>
                    <CButton
                        className='btn-cancel-global mt-4 w-100'
                        variant='outline'
                        onClick={() => props.setDeactivateAccount(true)}
                    >
                        Desativar conta
                    </CButton>
                    <br />
                    <CButton
                        color="danger"
                        className='btn-delete-employee mt-4 w-100'
                        onClick={() => props.setDeleteEmployee(true)}
                    >
                        Deletar funcionário
                    </CButton>
                </CCol>

            </CForm>







            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                <CFormLabel>Nome</CFormLabel>
                                <Form.Control onChange={firstNameUser} value = {firstName} type="text" placeholder= {props.editar.firstName} />
                                <br />
                                {/* <Form.Label> Alterar sobrenome  </Form.Label>
                                <Form.Control onChange={fullNameUser} value = {fullName} type="text" placeholder= {props.editar.firstName} />
                                <br /> *
                                <Form.Label>Contato</Form.Label>
                                <Form.Control onChange={phoneUser} value = {phone} type="text" placeholder= {props.editar.phone} />
                                <br />
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={emailUser} value = {email} type="email" placeholder= {props.editar.email} />
                                <br />  
                                {/* <Form.Label> Alterar Senha - ñ aplicar agora</Form.Label>
                                <Form.Control  onChange={userPassword} value = {password} type="text" placeholder= {"1234"} />
                                <br /> *
                                {/* <Form.Label> O usuário {props.editar.name} é {props.editar.type.toLowerCase()} </Form.Label> *
                                <Form.Label>Funcionário</Form.Label>
                                <CFormSelect defaultValue={props.editar.employeeRole} className="mb-3"  onChange={typeUsers}  aria-label="Large select example">
                                    <option value="SUPPORT">Suporte</option>
                                    <option value="MANAGER">Manager</option>
                                    <option value="ADMIN">Admin</option>
                                </CFormSelect>
                                <Form.Label>Departamento</Form.Label>
                                <CFormSelect defaultValue={props.editar.department} className="mb-3" onChange={departUser} aria-label="Large select example">
                                    <option value="COMERCIAL">Comercial</option>
                                    <option value="OPERATIONAL">Operacional</option>
                                    <option value="FINANCIAL">Financeiro</option>
                                    <option value="HUMAN_RESOURCES">Recursos Humanos</option>
                                    <option value="ADMINISTRATION">Administração</option>
                                </CFormSelect>
                                
                                {
                                    props.editar.disabled === true ?
                                    (   
                                            <>
                                                <Form.Label> Ativar Funcionário ? </Form.Label>
                                                <br />
                                                <CButton color="danger" onClick={disableEmp}>
                                                    Ativar
                                                </CButton>  
                                            </>
                                            
                                            )
                                            :
                                            (   
                                                <>
                                                <Form.Label> Desativar Funcionário ? </Form.Label>
                                                <br />
                                                <CButton color="danger" onClick={disableEmp}> 
                                                    Desligar
                                                </CButton>
                                            </>
                                            
                                            )   
                                        }
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <CButton  onClick={props.handleClose}>
                                                Sair
                                            </CButton>
                                            <CButton onClick = {salvarInfos}  >
                                                Salvar Alterações
                                            </CButton>
                                        </div>
                            </Form.Group> */}
            {/* </CForm>   */}
            {/* </CCol> */}

            {/* <CCol xs={9}> 
                        <EditPermission />
                    </CCol> */}
            {/* </CRow> */}
        </>
    )


}

export default Editar 