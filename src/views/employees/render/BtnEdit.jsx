import React, {useState} from 'react'
import { Button, Modal,  Form  }  from 'react-bootstrap';
import axios from 'axios'
import {
    CButton,
    CFormSelect,
    CRow,
    CCol,
  } from '@coreui/react'
import Cookies from 'js-cookie'
import EditPermission from './../permissons/EditPermission'

const Editar = (props) => {
    const handleClose = () => setShow(false);
    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const verifica = ()=>setShow(true)

    // variaveis
   // Variaveis de nome 
   const [firstName, setFirstName] = useState(props.editar.firstName)
   const firstNameUser = (e) =>{setFirstName(e.target.value)} 

   const [fullName, setFullName] = useState(props.editar.fullName)
   const fullNameUser = (e) =>{setFullName(e.target.value)} 

   const [phone, setPhone] = useState(props.editar.phone)
   const phoneUser = (e) =>{setPhone(e.target.value)}

   const [email, setEmail] = useState(props.editar.email)
   const emailUser = (e) =>{setEmail(e.target.value)}

   const [password, setPassword] = useState()
   const passwordUser = (e) =>{setPassword(e.target.value)}

   const [passwordConfirm, setPasswordConfirm] = useState()
   const PasswordConfirmUser = (e) =>{setPasswordConfirm(e.target.value)}

   const [depart, setDepart] = useState(props.editar.department)
   const departUser = (e) =>{setDepart(e.target.value)}

   const [typeUser, setTypeUser] = useState(props.editar.employeeRole)
   const typeUsers = (e) => {setTypeUser(e.target.value)}

   const [flagSenha, setFlagSenha] = useState()
   const [flagEmail, setFlagEmail] = useState()

   const [disableEmployeer, setDisableEmployeer] = useState(false)

   const statusUser = (e) => {
        console.log(e)
        setDisableEmployeer(e)
   }
   
    // Configuracoes para envio de mensagem 
    const token = Cookies.get('TokenID')
    let config = {
        headers: {
            'Authorization': token, 
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PATCH"
        }
    };


    function disableEmp(){
        var body = {}
         axios 
            .patch(`http://dashboardbff.oonpayperuse.com.br/employees/${props.editar.id}/disable`, body, config )
            .then((response) => {
                setShow(false);
                props.callBack()
                console.log(response)
            })
            .catch(r =>{ 
                console.log('error', r), alert('Login expirado'),window.location.reload()
            }) // window.location.reload();
   }
   
    function salvarInfos(){

        let updateUser =  { firstName:firstName, fullName:fullName ,phone:phone, email:email, department:depart, employeeRole: typeUser}
        console.log('mostra update', updateUser)
        axios 
            .patch(`http://dashboardbff.oonpayperuse.com.br/employees/${props.editar.id}`,  updateUser, config )
            .then((response) => {
                setShow(false);
                props.callBack()
            })
            .catch(r =>{ 
                console.log('error', r), alert('Login expirado'),window.location.reload()
            }) // window.location.reload();

    }

    // o Cara q entrar nessa tela, já vai ser o responsavel por editar essas informacoes 

        return (
            <div> 
                <Button variant="secondary" size='sm' onClick={() => verifica(props)}>
                    Editar
                </Button>
    
                
                <Modal 
                    show={show} 
                    onHide={handleClose}
                    size="xl"
                >
                    
                    <Modal.Body >
                        <CRow>
                            <CCol xs={3}> 
                                <label className='newUserTil'>Editar empregado</label>
                                <br />  <br />
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label> Alterar nome  </Form.Label>
                                        <Form.Control onChange={firstNameUser} value = {firstName} type="text" placeholder= {props.editar.firstName} />
                                        <br />
                                        <Form.Label> Alterar sobrenome  </Form.Label>
                                        <Form.Control onChange={fullNameUser} value = {fullName} type="text" placeholder= {props.editar.firstName} />
                                        <br />
                                        <Form.Label> Alterar Email</Form.Label>
                                        <Form.Control onChange={emailUser} value = {email} type="email" placeholder= {props.editar.email} />
                                        <br />  
                                        <Form.Label> Alterar Telefone</Form.Label>
                                        <Form.Control onChange={phoneUser} value = {phone} type="text" placeholder= {props.editar.phone} />
                                        <br />
                                        {/* <Form.Label> Alterar Senha - ñ aplicar agora</Form.Label>
                                        <Form.Control  onChange={userPassword} value = {password} type="text" placeholder= {"1234"} />
                                        <br /> */}
                                        {/* <Form.Label> O usuário {props.editar.name} é {props.editar.type.toLowerCase()} </Form.Label> */}
                                        <Form.Label> O usuário {props.editar.name} é <b>{props.editar.employeeRole} </b> </Form.Label>
                                        <CFormSelect className="mb-3"  onChange={typeUsers}  aria-label="Large select example">
                                            <option> Tipo do usuário  </option>
                                            <option value="SUPPORT">Suporte</option>
                                            <option value="MANAGER">Manager</option>
                                            <option value="ADMIN">Admin</option>
                                        </CFormSelect>
                                        <Form.Label> Seu departamento é <b>{props.editar.department} </b>  </Form.Label>
                                        <CFormSelect className="mb-3" onChange={departUser} aria-label="Large select example">
                                            <option>  Departamento  </option>
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
                                        
                                    </Form.Group>
                                </Form>  
                            </CCol>

                            <CCol xs={9}> 
                                <EditPermission />
                            </CCol>
                        </CRow>
                        
                    </Modal.Body>
    
                        
                    <Modal.Footer>
                        <CButton  onClick={handleClose}>
                            Sair
                        </CButton>
                        <CButton onClick = {salvarInfos}  >
                            Salvar Alterações
                        </CButton>
                    </Modal.Footer>
                    
                </Modal>
    
            </div>
        )
   
    
}

export default Editar 