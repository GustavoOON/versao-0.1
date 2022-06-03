import React, { useState } from 'react'
import axios from 'axios'
import { CButton, CPopover, CForm, CFormLabel, CInputGroup, CFormInput } from '@coreui/react'

import logoOon from '../../../assets/images/oon-seguros-logo.svg';
import { configCookies } from '../../../config'
import UrlDomain from '../../../config'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdOutlineHelpOutline, MdCheckCircleOutline } from 'react-icons/md';

import '../css/newAccount.css';

const NewAccount = ({ showPassword, setShowPassword, setNewAccountBtn }) => {
    const [visible, setVisible] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false), setFlagEmail(true) };
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const changeEmail = (e) => { setEmail(e.target.value) } //  pegando valores do email
    const [respEndpoint, setRespEndpoint] = useState(true) // apos o envio do email, pegar resposta
    const [msgEmailIncorret, setMsgEmailIncorret] = useState(true)
    const [msgPasswordIncorret, setMsgPasswordIncorret] = useState(true)

    const userEmail = (e) => { setEmail(e.target.value) }
    const userPassword = (e) => { setPassword(e.target.value) }


    const [flagPasswordErr, setFlagPasswordErr] = useState(false)
    const [flagPassword, setFlagPassword] = useState(false) // verifica  se possui 6 caracteres
    const [flagPasswordNum, setFlagPasswordNum] = useState(false) // verifica se ha numero
    const [flagPasswordWord, setFlagPasswordWord] = useState(false) // verifica se ha numero

    const [flagEmail, setFlagEmail] = useState(true)

    const verifyValues = () => {
        setFlagPassword(false)
        setFlagPasswordErr(false)

        if (password.length < 6) {
            setFlagPasswordErr(true)
            setFlagPassword(false)
        } else {
            setFlagPasswordErr(false)
            setFlagPassword(true)
            newUser()
        }
    }

    const newUser = () => {
        var postData = {
            email: email,
            password: password
        };
        const config = configCookies()

        setFlagEmail(true)
        axios
            .post(`${UrlDomain}/accounts`, postData, config)
            .then((res) => {
                console.log(res)
                setFlagEmail(true)
                setShow(false)
            })
            .catch(r => {
                console.log('error', r)
                setFlagEmail(false)
            })
    }


    const handleSubmit = () => {
        email != '' ? setMsgEmailIncorret(true) : setMsgEmailIncorret(false)

        password.length >= 6 ? setMsgPasswordIncorret(true) : setMsgPasswordIncorret(false)
    }

    return (
        <>
            <img className="img-oon" src={logoOon} alt="logo oon seguros" />
            <p className="subtitle-login-dir">Criar nova conta</p>
            <p className="text-new-account">Para a criação de uma nova conta, é necessário que o usuário esteja pré-cadastrado no sistema</p>
            <div className='inputs-container'>
                <CForm>
                    <CFormLabel
                        htmlFor="email"
                        className="mb-1 email-password-form"
                    >
                        E-mail (cadastrado no sistema)
                    </CFormLabel>
                    <CInputGroup
                        className="mb-3 d-flex-wrap"
                    >
                        <CFormInput
                            className='radius-border'
                            id="email"
                            type="email"
                            onChange={userEmail}
                            placeholder="Digite um e-mail pré-cadastrado"
                        />
                        <label className='error-text' hidden={msgEmailIncorret}>Não foi possível encontrar esse e-mail no sistema</label>
                    </CInputGroup>
                    <CFormLabel
                        htmlFor="senha"
                        className="mb-1 email-password-form"
                    >
                        Senha
                        <CPopover
                            content={
                                <div className='d-flex align-items-center p-0' >
                                    <MdCheckCircleOutline
                                        className='me-2'
                                        size={20}
                                        color='#216CFF'
                                    />
                                    <label style={{
                                        color: '#216CFF'
                                    }}>A senha deve conter ao menos 6 caracteres</label>
                                </div>
                            }
                            placement="bottom"
                        >
                            <i
                                className='ms-1'
                            >
                                <MdOutlineHelpOutline />
                            </i>
                        </CPopover>
                    </CFormLabel>
                    <CInputGroup
                        className="mb-3"
                    >
                        <div className="input-icons d-flex flex-row-reverse w-100">
                            <CFormInput
                                className='radius-border'
                                id="senha"
                                type={!showPassword ? 'password' : 'text'}
                                onChange={userPassword}
                                value={password}
                                placeholder="Crie uma senha de acesso"
                                aria-describedby="eye-password"
                            />
                            <i
                                id="eye-password"
                                className='icon-login i-absolute'
                                onClick={() => !showPassword ? setShowPassword(true) : setShowPassword(false)}
                            >
                                {!showPassword ? <FaEye /> : <FaEyeSlash />}
                            </i>
                        </div>
                        <label className='error-text' hidden={msgPasswordIncorret}>A senha deve conter pelo menos 6 caracteres.</label>
                    </CInputGroup>
                </CForm>
                <br />
                <CButton
                    onClick={handleSubmit}
                    color="primary"
                    className="btns-login"
                >
                    Criar conta
                </CButton>
                <p className='pt-5 text-center new-account-text'>Já tem uma contra? Faça login!</p>
                <CButton
                    onClick={() => setNewAccountBtn(true)}
                    style={{
                        color: '#216CFF',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #216CFF',
                        borderRadius: '12px',
                        width: '100%'
                    }}
                >
                    Faça login
                </CButton>
            </div>
            {/* <Modal 
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
                                                    <label > Senha deve conter pelo menos uma letra</label> *
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
                        {/* <label > OON - Seguros </label> *
                        </CCol>
                    </CRow>
                </Modal.Body>

                
            </Modal> */}

        </>

    )
}


export default NewAccount