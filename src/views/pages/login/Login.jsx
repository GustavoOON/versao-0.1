import React, { useState } from 'react'
import axios  from "axios"
import { HashRouter, Route, Switch } from 'react-router-dom'



import { Form  }  from 'react-bootstrap';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CNavLink,
  CInputGroup,
  CFormCheck,
  CRow,
} from '@coreui/react'

import './login.css'

import CIcon from '@coreui/icons-react'
import RecoverPassword from './recoverPassword/RecoverPassword'

import { cilLockLocked, cilUser } from '@coreui/icons'
import Cookies from 'js-cookie'
const DefaultLayout = React.lazy(() => import('../../../layout/DefaultLayout'))

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const [flag, setFlag] = useState(false)   // AQUI A FLAG DEVE SER FALSE 

  // LEMBRAR DE MIN
  const [lembraMin, setLembraMin] = useState(false)
  const lembra = () =>{
    setLembraMin(true)
    console.log('lembra de min vale', lembraMin)
  }

  const userLogin = (e) => {
    // console.log('e vale', e.target.value)
    setUser(e.target.value)
  }

  const userPassword = (e) => {
    // console.log('e senha', e.target.value)
    setPassword(e.target.value)
  }

  let config = {
    headers: {'Content-Type': 'application/json'}
  };

  let dado
  const login =  () => {
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
    var postData = {
      email: user,
      password: password
    };

      axios.post('http://dashboardbff.oonpayperuse.com.br/login', postData, axiosConfig)
      .then((res) => {
        verificaLogin(res)
      })
      .catch(r =>{ 
        console.log('error', r), alert('Senha errada')
      })
  }
  const token = Cookies.get('TokenID')
  function verificaLogin(response){

    // resposta 200 permiti o login
    if(response.status == 200){

      // encriptar valores sensiveis
      criptar(response)
     
    }
  }

  function criptar(response){
    setFlag(true)

    // console.log('antes da encriptografi',response.data.usertype )

    

    // const encrypted = ncrypt.encrypt('This is my secret message', 'Secret key');
    // console.log(encrypted);
    // const decrypted = ncrypt.decrypt(encrypted);
    // console.log(decrypted);










    Cookies.set('TokenID', '')
    Cookies.set('TokenID', response.data.token)
    Cookies.set('userType', response.data.usertype)
  }


  if(flag === true){
      return (
        <Route  path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
      )
  }else{
    return (
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center fundoBody">
        <CRow>
          <CCol className='loginEsq'>
           <p className='tituloLogin'> Bem vindo de volta </p>
           <p  className='subLogin'> Sentimos sua falta!  </p>
          </CCol>
          <CCol  className='loginDir'>
            <h2>OON PAYPER USE</h2>
            <h6>Faça login na sua conta</h6>
            <div className='inputsContainer'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email"  onChange={userLogin} value={user} placeholder="Digite seu e-mail" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password"  onChange={userPassword} value={password}  placeholder="Digite sua senha" />
              </Form.Group>
              <CFormCheck id="flexCheckDefault" onClick={lembra} label="Lembrar de min"/>
            </Form>
            
            <br />

          
            <CButton onClick={login} color="dark" className="btnLogin">
              Entrar
            </CButton>
            <RecoverPassword />
          </div>
          </CCol>
        </CRow>
        
      </div>
    
    )
  }

  
}

export default Login
