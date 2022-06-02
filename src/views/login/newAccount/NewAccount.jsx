import React, {useState} from 'react'
import axios from 'axios'
import { CButton, CRow, CCol, CImage } from '@coreui/react'
import { Form , Modal, Button }  from 'react-bootstrap';
import { BsCircleFill  } from 'react-icons/bs';

import UrlDomain from '../../../config'
import imgOON from '../../../assets/images/oon-icon.svg'

import '../css/newAccount.css';

const NewAccount = () => {
    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false), setFlagEmail(true) };
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const changeEmail = (e)=>{ setEmail(e.target.value)} //  pegando valores do email
    const [respEndpoint, setRespEndpoint]=useState(true) // apos o envio do email, pegar resposta

    function openModal(data){ 
        const handleShow =  setShow(true);
        setFlagPasswordErr(false)
    }

    const userEmail = (e) => {setEmail(e.target.value)}
    const userPassword = (e) => {setPassword(e.target.value)}

    const resposta = true
    let alfabeto = ['a','b','c','d','e','f','g','h','i','j', 'k', 'l','m', 'n','o','p','q','r','s','t','u','v','w','x','y','z']
    let numbers = [1,2,3,4,5,6,7,8,9,0]

     let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
    
    const [flagPasswordErr, setFlagPasswordErr] = useState(false)
    const [flagPassword, setFlagPassword] = useState(false) // verifica  se possui 6 caracteres
    const [flagPasswordNum, setFlagPasswordNum] = useState(false) // verifica se ha numero
    const [flagPasswordWord, setFlagPasswordWord] = useState(false) // verifica se ha numero

    const [flagEmail, setFlagEmail] = useState(true)

    const verifyValues = () =>{

   
        setFlagPassword(false)
        setFlagPasswordErr(false)

        
        if(password.length < 6){
            setFlagPasswordErr(true)
            setFlagPassword(false)
        }else{
            setFlagPasswordErr(false)
            setFlagPassword(true)
            newUser()
        }
            
    }


    const newUser =  () => {
        var postData = {
            email: email,
            password: password
        };
        setFlagEmail(true)
        axios
            .post(`${UrlDomain}/accounts`, postData, axiosConfig)
            .then((res) => {
                console.log(res)
                setFlagEmail(true)
                setShow(false)
            })
            .catch(r =>{ 
                console.log('error', r)
                setFlagEmail(false)
            })
  }

    return ( 
        <>
            <CButton  onClick={openModal} color='secondary' className="btns-login">Criar uma nova conta</CButton>

            <Modal 
                show={show} 
                onHide={handleClose}
                size="xl"
            >
                    
                <Modal.Header  closeButton>
                    <Modal.Title>Criar nova conta</Modal.Title>
                </Modal.Header>
                <Modal.Body className='container-body'>
                    <CRow>
                        <CCol className='container-newAccount-back'></CCol>

                        <CCol xs={8} className='container-newAccount-mid'>

                            <div className="clearfix">
                                <CImage align="center" rounded src={imgOON} width={200} height={200} />
                            </div>

                            <div>
                                <label> <b> Obs: </b> A criação de uma nova conta está condicionada ao usuário estar pré cadastrado no sistema</label>
                                <br />
                                <br />
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Inserir um e-mail OON</Form.Label>
                                        <Form.Control type="email" onChange={userEmail} placeholder="E-mail" />
                                        <br />
                                        <Form.Label>Inserir uma senha</Form.Label>
                                        <Form.Control type="password" onChange={userPassword}  placeholder="Senha" />
                                        <br />
                                        {flagPasswordErr === true ? 
                                            (
                                                <div className='container-msg-error'> 
                                                    <label className='circle-newAccount'> <BsCircleFill className= {flagPassword == true ? 'circle-font-ok' : 'circle-font-err'}  /> </label>
                                                    <label > Senha deve possuir no mínimo 6 caracteres</label>
                                                    {/* <br />
                                                    <label className='circle-newAccount'> <BsCircleFill className= {flagPasswordNum == true ? 'circle-font-ok' : 'circle-font-err'} /> </label>
                                                    <label > Senha deve conter pelo menos um número</label>
                                                    <br />
                                                    <label className='circle-newAccount'> <BsCircleFill className= {flagPasswordWord == true ? 'circle-font-ok' : 'circle-font-err'} /> </label>
                                                    <label > Senha deve conter pelo menos uma letra</label> */}
                                                </div>
                                            ) 
                                                :null
                                        }
                                    </Form.Group>
                                </Form>
                            </div>
                            <br />
                            <CButton color='dark' onClick={verifyValues} className='btn-salvar'>Criar conta</CButton>
                            <br /> <br /> 
                            {flagEmail == false ? (<div className="container-err"> <label className='label-newAccount-error'> Empregado não encontrado ou já cadastrado. </label> </div>) :null}
                            <br /> <br />

                        </CCol>
                        <CCol className='container-newAccount-back' > 
                        {/* <label > OON - Seguros </label> */}
                        </CCol>
                    </CRow>
                </Modal.Body>
            </Modal>
        </> 

    )
}


export default NewAccount