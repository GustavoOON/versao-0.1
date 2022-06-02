import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Route } from 'react-router-dom';
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CInputGroup, CRow } from '@coreui/react';
import Cookies from 'js-cookie';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// var CryptoJS = require("crypto-js");
import Criptacao from '../../security/cripto';
import UrlDomain from '../../config';
import oon from '../../assets/images/oon.svg';
import RecoverPassword from './recoverPassword/RecoverPassword';
import NewAccount from './newAccount/NewAccount';
const DefaultLayout = React.lazy(() => import('../../layout/DefaultLayout'));

import './css/login.css';

const Login = () => {
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')
	const [flag, setFlag] = useState(false)   // AQUI A FLAG DEVE SER FALSE
	const [showPassword, setShowPassword] = useState(false)
	const [checked, setChecked] = useState(false)

	// LEMBRAR DE MIN
	const lembra = ({ target }) => {
		// console.log(
		// 	target.checked, 'aa'
		// );

		// if (target.checked) {
		// localStorage.setItem('user', JSON.stringify({ user, password, checked: target.checked }))
		// 		setChecked(true)
		// 	} else {
		// 		localStorage.removeItem('user')
		// 		setChecked(false)
		// 	}
	}

	useEffect(() => {
		// const localStor = JSON.parse(localStorage.getItem('user'));
		// if(localStor){
		// 	setChecked(true)
		// 	login({
		// 		email: localStor.user,
		// 		password: localStor.password
		// 	})
		// 	setFlag(true)
		// }
	}, [])


	const userLogin = (e) => {
		setUser(e.target.value)
	}

	const userPassword = (e) => {
		setPassword(e.target.value)
	}

	const login = (postData) => {
		const axiosConfig = {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				"Access-Control-Allow-Origin": "*",
			}
		};
		// const postData = {
		// 	email: user,
		// 	password: password
		// };

		axios
			.post(`${UrlDomain}/accounts/login`, postData, axiosConfig)
			.then((res) => {
				verificaLogin(res)
			})
			.catch(r => {
				console.log('error', r), alert('Senha errada')
			})
	}

	function verificaLogin(response) {
		// var usT = Cookies.get('userType')

		// resposta 200 permiti o login
		if (response.status == 200) {
			var ini = Criptacao(response)
			criptar(response)

		}
	}

	function criptar(response) {
		// var aux = response.data.tokenType + ' ' + response.data.token

		Cookies.set('typeToken', response.data.tokenType)
		Cookies.set('TokenID', response.data.token)
		//Cookies.set('userType', response.data.role)
		//Cookies.set('permissions', response.data.permissions)
		setFlag(true)
	}

	if (flag === true) {
		return (
			<Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
		)
	} else {
		return (
			<div className="bg-light min-vh-100 d-flex flex-row align-items-center fundo-body">
				<CRow>
					<CCol className='login-esq'>
						<p className='title-login-esq'>Bem vindo de volta</p>
						<p className='subtitle-login-esq'>Sentimos sua falta!</p>
					</CCol>
					<CCol className='login-dir'>
						<img className="img-oon" src={oon} alt="oon" />
						<p className="subtitle-login-dir">Faça login na sua conta</p>
						<div className='inputs-container'>
							<CForm>
								<CFormLabel
									htmlFor="email"
									className="mb-1 email-password-form"
								>
									E-mail
								</CFormLabel>
								<CInputGroup
									className="mb-3"
								>
									<CFormInput
										id="email"
										type="email"
										onChange={userLogin}
										value={user}
										placeholder="Digite seu e-mail"
									/>
								</CInputGroup>
								<CFormLabel
									htmlFor="senha"
									className="mb-1 email-password-form"
								>
									Senha
								</CFormLabel>
								<CInputGroup
									className="mb-3"
								>
									<CInputGroup>
										<CFormInput
											id="senha"
											type={!showPassword ? 'password' : 'text'}
											onChange={userPassword}
											value={password}
											placeholder="Digite sua senha"
											aria-describedby="eye-password"
										/>
										<CButton
											type="button"
											color="secondary"
											variant="outline"
											id="eye-password"
											className='btn-eye'
											onClick={() => !showPassword ? setShowPassword(true) : setShowPassword(false)}
										>
											{!showPassword ? <FaEye /> : <FaEyeSlash />}
										</CButton>
									</CInputGroup>
								</CInputGroup>
								<CFormCheck
									className="email-password-form"
									id="Lembrar de min"
									onChange={lembra}
									label="Lembrar de mim"
								// checked={checked}
								/>
							</CForm>
							<br />
							<CButton
								onClick={() => login({ email: user, password })}
								color="secondary"
								className="btns-login"
							>
								Entrar
							</CButton>
							<NewAccount />
							<RecoverPassword />
						</div>
					</CCol>
				</CRow>
			</div>
		)
	}
}

export default Login;
