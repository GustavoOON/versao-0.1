import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Route } from 'react-router-dom';
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CInputGroup, CRow } from '@coreui/react';
import Cookies from 'js-cookie';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// var CryptoJS = require("crypto-js");
import Criptacao from '../../security/cripto';
import UrlDomain from '../../config';
import logoOon from '../../assets/images/oon-seguros-logo.svg';
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
	const [newAccountBtn, setNewAccountBtn] = useState(true)
	const [forgotMyPass, setForgotMyPass] = useState(true)

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

	const login = () => {
		const axiosConfig = {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				"Access-Control-Allow-Origin": "*",
			}
		};

		const postData = {
			email: user,
			password: password
		};

		axios
			.post(`${UrlDomain}/accounts/login`, postData, axiosConfig)
			.then((res) => {
				console.log(res)
				verificaLogin(res)
			})
			.catch(r => {
				console.log('error', r), alert('Senha errada')
			})
	}

	function verificaLogin(response) {
		// var usT = Cookies.get('userType')
		console.log(response, 'response verif')
		// resposta 200 permiti o login
		if (response.status == 200) {
			var ini = Criptacao(response)
			criptar(response)

		}
	}

	function criptar(response) {
		// var aux = response.data.tokenType + ' ' + response.data.token
		console.log('token');
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
		return forgotMyPass ?  (
			<div className="bg-light min-vh-100 d-flex flex-row align-items-center fundo-body">
				<CRow>
					<CCol className='login-esq'>
						<p className='title-login-esq'>Bem vindo de volta</p>
						<p className='subtitle-login-esq'>Sentimos sua falta!</p>
					</CCol>
					{
						newAccountBtn ? (
							<CCol className='login-dir'>
								<img className="img-oon" src={logoOon} alt="logo oon seguros" />
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
												className='radius-border'
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
											<div className="input-icons d-flex flex-row-reverse w-100">
												<CFormInput
													className='radius-border'
													id="senha"
													type={!showPassword ? 'password' : 'text'}
													onChange={userPassword}
													value={password}
													placeholder="Digite sua senha"
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
										onClick={() => login()}
										color="primary"
										className="btns-login"
									>
										Entrar
									</CButton>
									<CButton
										color="link"
										variant='ghost'
										onClick={() => setForgotMyPass(false)}
										className="btn-forgot-password"
									>
										Esqueci minha senha
									</CButton>
									<p className='pt-5 text-center new-account-text'>Não tem uma conta ainda? Crie já!</p>
									<CButton
										onClick={() => setNewAccountBtn(false)}
										style={{
											color: '#216CFF',
											backgroundColor: '#FFFFFF',
											border: '1px solid #216CFF',
											borderRadius: '12px',
											width: '100%'
										}}
									>
										Criar uma nova conta
									</CButton>
								</div>
							</CCol>) : (
							<CCol className='login-dir'>
								<NewAccount
									showPassword={showPassword}
									setShowPassword={setShowPassword}
									setNewAccountBtn={setNewAccountBtn}
								/>
							</CCol>
						)
					}
				</CRow>
			</div>
		) : (
			<div className="bg-light min-vh-100 d-flex flex-row align-items-center fundo-body"><CCol className='login-dir'>
			<img className="img-oon" src={logoOon} alt="logo oon seguros" />
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
							className='radius-border'
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
						<div className="input-icons d-flex flex-row-reverse w-100">
							<CFormInput
								className='radius-border'
								id="senha"
								type={!showPassword ? 'password' : 'text'}
								onChange={userPassword}
								value={password}
								placeholder="Digite sua senha"
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
					onClick={() => login()}
					color="primary"
					className="btns-login"
				>
					Entrar
				</CButton>
				<CButton
					color="link"
					variant='ghost'
					onClick={() => setForgotMyPass(false)}
					className="btn-forgot-password"
				>
					Esqueci minha senha
				</CButton>
				<p className='pt-5 text-center new-account-text'>Não tem uma conta ainda? Crie já!</p>
				<CButton
					onClick={() => setNewAccountBtn(false)}
					style={{
						color: '#216CFF',
						backgroundColor: '#FFFFFF',
						border: '1px solid #216CFF',
						borderRadius: '12px',
						width: '100%'
					}}
				>
					Criar uma nova conta
				</CButton>
			</div>
		</CCol></div>
		)
	}
}

export default Login;
