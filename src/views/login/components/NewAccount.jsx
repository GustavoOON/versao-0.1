import React, { useState } from 'react';
import axios from 'axios';
import {
    CButton,
    CPopover,
    CForm,
    CFormLabel,
    CInputGroup,
    CFormInput,
} from '@coreui/react';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdOutlineHelpOutline, MdCheckCircleOutline } from 'react-icons/md';
import { Spinner } from 'react-bootstrap';

import UrlDomain, { configCookies } from '../../../config';
import logoOon from '../../../assets/images/oon-seguros-logo.svg';

import '../css/newAccount.css';

const NewAccount = ({ showPassword, setShowPassword, setNewAccountBtn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msgEmailIncorret, setMsgEmailIncorret] = useState(true);
    const [msgPasswordIncorret, setMsgPasswordIncorret] = useState(true);
    const [createAcc, setCreateAcc] = useState(false);

    const userEmail = (e) => {
        setEmail(e.target.value);
    };
    const userPassword = (e) => {
        setPassword(e.target.value);
    };

    const newUser = () => {
        // setCreateAcc(true);
        // const postData = {
        //     email
        //     password
        // };
        // const config = configCookies();
        // setFlagEmail(true)
        // axios
        //     .post(`${UrlDomain}/accounts`, postData, config)
        //     .then((res) => {
        //         console.log(res);
        //         setNewAccountBtn(true);
        //         setInterval(() => {
        //             setCreateAcc(false);
        //         }, 2000);
        //         // setFlagEmail(true)
        //         // setShow(false)
        //     })
        //     .catch((r) => {
        //         console.log('error', r);
        //         // setFlagEmail(false)
        //     });
    };

    const handleSubmit = () => {
        email.includes('@') && password.length >= 6 ? newUser() : null;

        setMsgEmailIncorret(email.includes('@'));

        password.length >= 6
            ? setMsgPasswordIncorret(true)
            : setMsgPasswordIncorret(false);
    };

    return createAcc ? (
        <>
            <img className="img-oon" src={logoOon} alt="logo oon seguros" />
            <p className="subtitle-login-dir">Conta criada com sucesso!!</p>
            <div className="inputs-container w-50">
                <CButton
                    onClick={() => setNewAccountBtn(true)}
                    className="btn-login-white"
                >
                    Faça login
                </CButton>
            </div>
        </>
    ) : (
        <>
            <img className="img-oon" src={logoOon} alt="logo oon seguros" />
            <p className="subtitle-login-dir">Criar nova conta</p>
            <p className="text-new-account">
                Para a criação de uma nova conta, é necessário que o usuário
                esteja pré-cadastrado no sistema
            </p>
            <div className="inputs-container">
                <CForm>
                    <CFormLabel
                        htmlFor="email"
                        className="mb-1 email-password-form"
                    >
                        E-mail (cadastrado no sistema)
                    </CFormLabel>
                    <CInputGroup className="mb-3 d-flex-wrap">
                        <div className="w-100">
                            <CFormInput
                                className="radius-border"
                                id="email"
                                type="email"
                                onChange={userEmail}
                                placeholder="Digite um e-mail pré-cadastrado"
                            />
                        </div>
                        <label className="error-text" hidden={msgEmailIncorret}>
                            Não foi possível encontrar esse e-mail no sistema
                        </label>
                    </CInputGroup>
                    <CFormLabel
                        htmlFor="senha"
                        className="mb-1 email-password-form"
                    >
                        Senha
                        <CPopover
                            content={
                                <div className="d-flex align-items-center p-0">
                                    <MdCheckCircleOutline
                                        className="me-2"
                                        size={20}
                                        color="#216CFF"
                                    />
                                    <label
                                        style={{
                                            color: '#216CFF',
                                        }}
                                    >
                                        A senha deve conter ao menos 6
                                        caracteres
                                    </label>
                                </div>
                            }
                            placement="bottom"
                        >
                            <i className="ms-1">
                                <MdOutlineHelpOutline />
                            </i>
                        </CPopover>
                    </CFormLabel>
                    <CInputGroup className="mb-3">
                        <div className="input-icons d-flex flex-row-reverse w-100">
                            <CFormInput
                                className="radius-border"
                                id="senha"
                                type={!showPassword ? 'password' : 'text'}
                                onChange={userPassword}
                                value={password}
                                placeholder="Crie uma senha de acesso"
                                aria-describedby="eye-password"
                            />
                            <i
                                id="eye-password"
                                className="icon-login i-absolute"
                                onClick={() =>
                                    !showPassword
                                        ? setShowPassword(true)
                                        : setShowPassword(false)
                                }
                            >
                                {!showPassword ? <FaEye /> : <FaEyeSlash />}
                            </i>
                        </div>
                        <label
                            className="error-text"
                            hidden={msgPasswordIncorret}
                        >
                            A senha deve conter pelo menos 6 caracteres.
                        </label>
                    </CInputGroup>
                </CForm>
                <br />
                <CButton
                    onClick={handleSubmit}
                    className="btns-login btn-save-global"
                >
                    Criar conta
                </CButton>
                <p className="pt-5 text-center new-account-text">
                    Já tem uma contra? Faça login!
                </p>
                <CButton
                    onClick={() => setNewAccountBtn(true)}
                    className="btn-login-white"
                >
                    Faça login
                </CButton>
            </div>
        </>
    );
};

export default NewAccount;
