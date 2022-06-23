import React, { useState } from 'react';
import {
    CButton,
    CCol,
    CForm,
    CFormLabel,
    CInputGroup,
    CFormInput,
} from '@coreui/react';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import logoOon from '../../../assets/images/oon-seguros-logo.svg';

const RecoverPassword = ({ setForgotMyPass }) => {
    const [email, setEmail] = useState('');
    const recoverLogin = (e) => {
        setEmail(e.target.value);
    }; //  pegando valores do email
    const [recoverPasswordEmail, setRecoverPasswordEmail] = useState(true);

    // const [respEndpoint, setRespEndpoint] = useState(true) // apos o envio do email, pegar resposta
    // function verifica(data) {
    //     const handleShow = setShow(true);
    // }

    // function salvarEdicoes() {

    //     let mySubString
    //     // caso usuario nao envie nada no email, verificar o campo.console.log('teste', mySubString)
    //     if (email.length > 1) {
    //         mySubString = email.substring(
    //             email.lastIndexOf("@") + 1,
    //             email.lastIndexOf(".")
    //         );
    //     } else {
    //         // Solucao temporaria
    //         mySubString = 'errado'
    //     }

    //     // permitir o envio do email somente se tiver dominio oonpayperuse, oonseguros
    //     if ((mySubString === 'oonpayperuse') || (mySubString === 'oonseguros')) {
    //         verificaMail()
    //         alert('Dominio Certo')
    //     } else {
    //         alert('Dominio Errado')
    //     }

    //     setShow(false); // fechar modal
    // }

    // function verificaMail() {
    //     // envia o email para o endpoint, Firebase faz tudo já
    //     // so chamar api do firebase
    //     console.log('email enviado', email)
    // }

    const recoverPassword = () => {
        (email != '') & email.includes('@')
            ? setRecoverPasswordEmail(false)
            : null;
    };

    return recoverPasswordEmail ? (
        <div className="fundo-body-forgot-password min-vh-100 align-items-center d-flex">
            <CCol className="forgot-password-container">
                <img
                    className="img-oon-forgot-password"
                    src={logoOon}
                    alt="logo oon seguros"
                    height={120}
                />
                <p className="subtitle-login-dir">Esqueceu sua senha?</p>
                <p className="text-new-account">
                    Não se preocupe, enviaremos a você as instruções de
                    recuperação.
                </p>
                <div>
                    <CForm>
                        <CFormLabel
                            htmlFor="email"
                            className="mb-1 email-password-form"
                        >
                            E-mail
                        </CFormLabel>
                        <CInputGroup className="mb-3">
                            <CFormInput
                                className="radius-border"
                                id="email"
                                type="email"
                                onChange={recoverLogin}
                                placeholder="Digite seu e-mail"
                            />
                        </CInputGroup>
                    </CForm>
                    <br />
                    <CButton
                        onClick={recoverPassword}
                        className="btns-login btn-save-global"
                    >
                        Recuperar senha
                    </CButton>
                    <CButton
                        color="link"
                        variant="ghost"
                        onClick={() => setForgotMyPass(true)}
                        className="btn-forgot-password mt-1"
                    >
                        <AiOutlineArrowLeft className="m-1" />
                        Voltar para o log in
                    </CButton>
                </div>
            </CCol>
        </div>
    ) : (
        <div className="fundo-body-forgot-password min-vh-100 align-items-center d-flex">
            <CCol className="forgot-password-container">
                <img
                    className="img-oon-forgot-password"
                    src={logoOon}
                    alt="logo oon seguros"
                    height={120}
                />
                <p className="subtitle-login-dir">
                    Confira sua caixa de e-mail!
                </p>
                <p className="text-new-account">
                    Nós enviamos o link de recuperação da sua senha para o
                    e-mail {<br />}
                    <b>{email}</b>
                </p>
                <div>
                    <CButton
                        onClick={() => setForgotMyPass(true)}
                        className="btns-login btn-save-global"
                        style={{
                            backgroundColor: '#216CFF',
                            borderColor: '#216CFF',
                        }}
                    >
                        Voltar para o log in
                    </CButton>
                    <div className="btn-forgot-password mt-3 d-flex align-items-center">
                        <label> Não recebeu o e-mail? </label>
                        <CButton
                            color="link"
                            variant="ghost"
                            onClick={recoverPassword}
                            className="p-0 ps-1 btn-link-global"
                        >
                            Enviar novamente.
                        </CButton>
                    </div>
                </div>
            </CCol>
        </div>
    );
};

export default RecoverPassword;
