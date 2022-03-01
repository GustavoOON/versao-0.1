import React, { useState, Component } from 'react'
import {CFormSelect, CContainer, CRow, CCol, CButton, CInputGroupText, CFormInput} from '@coreui/react'
import { Button, Modal,  Form  }  from 'react-bootstrap';
import axios from "axios"
import CIcon from '@coreui/icons-react'
import {cilLoopCircular, cilPlus } from '@coreui/icons'
import Cookies from 'js-cookie'
import './../css/newUser.css'

import Permissions from './../permissons/NewUserPermissons'

const NewUser = (props) => {

    const handleClose = () => setShow(false);
    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const verifica = ()=>{setShow(true)}
    
    // Variaveis de nome 
    const [firstName, setFirstName] = useState()
    const firstNameUser = (e) =>{setFirstName(e.target.value)} 

    const [fullName, setFullName] = useState()
    const fullNameUser = (e) =>{setFullName(e.target.value)} 

    const [phone, setPhone] = useState('')    
    const phoneUser = (e) =>{setPhone(e.target.value)}

    const [email, setEmail] = useState()
    const emailUser = (e) =>{setEmail(e.target.value)}

    const [password, setPassword] = useState()
    const passwordUser = (e) =>{setPassword(e.target.value)}

    const [passwordConfirm, setPasswordConfirm] = useState()
    const PasswordConfirmUser = (e) =>{setPasswordConfirm(e.target.value)}

    const [depart, setDepart] = useState()
    const departUser = (e) =>{setDepart(e.target.value)}

    const [typeUser, setTypeUser] = useState()
    const typeUsers = (e) => {setTypeUser(e.target.value)}

    const [flagSenha, setFlagSenha] = useState()
    const [flagEmail, setFlagEmail] = useState()

    const [status, setStatus] = useState('')

    const [departs, setDeparts] = useState([
        'Selecionar departamentos',
        { label: 'COMERCIAL', value: 'COMERCIAL' },
        { label: 'MARKETING', value: 'MARKETING' },
        { label: 'OPERACIONAL', value: 'OPERATIONAL' },
        { label: 'FINANCEIRO', value: 'FINANCIAL' },
        { label: 'RECURSOS HUMANOS', value: 'HUMAN_RESOURCES' },
        { label: 'ADMINISTRAÇÃO', value: 'ADMINISTRATION' }
    ])

    const salvarInfos = () => {
        
        let mySubString
            if(email.length > 1){
                mySubString = email.substring(
                   email.lastIndexOf("@") + 1, 
                   email.lastIndexOf(".")
               );  
           }else{
               // Solucao temporaria
               mySubString = 'errado'
           }
        

        // Confere as senhas
        if(password == passwordConfirm){
            setFlagSenha(0)
            // confere se o email possui dominio oon
            if((mySubString === 'oonpayperuse') || (mySubString ==='oonseguros')){
                setFlagEmail(0)
                verififyNumberOfTelephone()

            }else{
                setFlagEmail(1)
            }
        }else{
            setFlagSenha(1)
        }
    }

    function verififyNumberOfTelephone () {

        if(phone.length < 11){
            setStatus('Número errado')
        }else if (phone.length == 11){
            
            if(parseInt(phone[2]) === 9){
                CreateUser()
                setStatus('')
            }else{
                setStatus('Número errado')
            }
            
        }else{
            setStatus('Número errado')
        }
    }

    const [arrayPermission, setArrayPermission] = useState()
    let array
    const gettingPermissions = (e) =>{
        array = e
        // setArrayPermission(e)
    }

    // faz requisicao para api 
    const CreateUser = () =>{
        
        let newUser =  {firstName:firstName, fullName:fullName, phone:phone, email:email, department:depart, employeeRole:typeUser}
        // Configuracoes para envio de mensagem 
        const token = Cookies.get('TokenID')

        console.log('mostra valores que serao salvos ', array, newUser)

        let config = {
            headers: {
            'Authorization': token, 
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            }
        };
        axios 
            .post("http://dashboardbff.oonpayperuse.com.br/employees",  newUser, config )
            .then((response) => {
                props.callBack()
                setShow(false);
                
            })
            .catch(r =>{ console.log('erro na api createUser', r)})

    }
 
    // PEGAR o TIPO DE USUARIO QUE IRÁ INERIR o USUARIO
    const user = 'ADMIN'
    if(user == 'ADMIN'){
        return (
            <div> 
            
                <CButton  color="secondary" className='icon-css' onClick={verifica}> 
                    <CIcon icon={cilPlus} /> Adicionar 
                </CButton>
                <Modal 
                    show={show} 
                    onHide={handleClose}
                    size="xl"
                >
                    {/* <Modal.Header  closeButton>
                        <Modal.Title>Inserir Ususário </Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body className='container-body'>
                        
                        <CRow>
                            
                            <CCol xs={3}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <label className='newUserTil'>Dados</label>
                                        <br />
                                        <br />
                                        <Form.Label> Primeiro Nome </Form.Label>
                                        <Form.Control type="text" onChange={firstNameUser} placeholder= 'Digite primeiro Nome' />
                                        <br />
                                        <Form.Label> Sobrenome </Form.Label>
                                        <Form.Control type="text" onChange={fullNameUser} placeholder= 'Digite o sobrenome' />
                                        <br />
                                        <Form.Label> E-mail </Form.Label>
                                        <Form.Control type="email" onChange={emailUser} placeholder= 'Digite o E-mail' />
                                        {
                                            flagEmail == 1 ? (
                                                <div> 
                                                    <label className='newUser-input-IncorrectEmail' > E-mail incorreto</label>
                                                </div>
                                            )
                                            : null
                                        }

                                        {/* <br />
                                        <Form.Label> Senha </Form.Label>
                                        <Form.Control type="password" onChange={passwordUser} placeholder= 'Minímo 6 caracteres' />
                                        <br />
                                        <Form.Label> Confirme a Senha </Form.Label>
                                        <Form.Control type="password" onChange={PasswordConfirmUser} placeholder= 'Digite novamente' />
                                        {
                                            flagSenha == 1 ? (
                                                <div> 
                                                    <label> Senha incorreta</label>
                                                </div>
                                            )
                                            : null
                                        } */}

                                        <br />
                                       
                                        
                                        <Form.Label> Telefone </Form.Label>
                                        <Form.Control type="text" onChange={phoneUser} placeholder= 'Digite o Telefone' />
                                        {
                                            status != '' ?
                                                (<>  <label className='newUser-input-IncorrectEmail' > Telefone incorreto</label> </>)
                                            :null
                                        }

                                        <br />
                                        <Form.Label> Departamentos </Form.Label>
                                        <CFormSelect 
                                            aria-label="Default select example"
                                            options={departs}
                                            onChange={departUser}
                                        />

                                        <br />
                                        <Form.Label> Tipo de usuário </Form.Label>
                                        <CFormSelect className="mb-3" onChange={typeUsers} aria-label="Large select example">
                                            <option> Categoria do usuário  </option>
                                            <option value="SUPPORT">Suporte</option>
                                            <option value="MANAGER">Manager</option>
                                            <option value="ADMIN">Admin</option>
                                        </CFormSelect>
                                    </Form.Group>
                                </Form> 
                            </CCol>
                            <CCol className='container-newUser-permission'> 
                                <Permissions choices = {gettingPermissions} /> 
                            </CCol>
                            
                        </CRow>
                    </Modal.Body>
    
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Sair
                        </Button>
                        <Button onClick = {salvarInfos} variant="primary" >
                            Salvar Alterações
                        </Button>
                    </Modal.Footer>
    
                </Modal>
    
            </div>
        )
        
    }else{
        return (<> </>)
    }

}


export default NewUser