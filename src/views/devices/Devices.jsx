import React, { useState, useEffect } from 'react'
import axios  from "axios"
import './css/device.css'
import Cookies from 'js-cookie'

import PlateNumber from './render/PlateNumber'
import IdCli from './render/Id'
import EmailCli from './render/Email'
import ZipCode from './render/ZipCode'
import BtnEdit from './render/BtnEdit'
import Status from './render/Status'
import BtnMidia from './render/Midias/Midia'

import { MdOutlinePublishedWithChanges} from 'react-icons/bs';

import { Button, Modal,  Form, Container, Row, Col, Spinner    }  from 'react-bootstrap';
import {
  CButton,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CContainer,
  CTableRow,
  CNavbar,
  CCollapse,
  CNavbarBrand,
  CCard,
  CNavbarNav,
  CNavbarToggler,
  CCardBody,
  CFormSelect,
  CFormInput,
  CForm,
  CPagination,
  CPaginationItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilLoopCircular, cilMagnifyingGlass, cilChevronRight, cilChevronLeft } from '@coreui/icons'


const Devices = () => {
  const userType = Cookies.get('userType')
  const token = Cookies.get('TokenID') 
  let config = {
    headers: {
      'Authorization': token, 
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  };

  const [dados, setDados] = useState([])
  const [dadosOri, setDadosOri] = useState([])
  const [busca2, setBusca] = useState('')
  let busca
  const [visible, setVisible] = useState(false)  
  const [show, setShow] = useState(false);
  const dados2 =[]
 
  useEffect( ()=>{
      axios 
        .get("http://dashboardbff.oonpayperuse.com.br/users", config)
        .then((response) => {
            setDados(response.data)
            setDadosOri(response.data)
            setArray(response.data)
        })
        .catch(r =>{ 
          console.log('error', r), alert('Login expirado'),window.location.reload()
        }) // window.location.reload();
  }, []) 

  // pega valores
  const Pegandobusca = (e) =>{
    setBusca(e.target.value)
    busca = e.target.value
    BuscaUser()
  }

  const options = [
    { label: 'Geral ', value: 'true' },
    { label: 'Em análise', value: 'false' }
  ]

  const BuscaUser = () =>{
    let auxBusca = busca.toLocaleLowerCase()

    dadosOri.map(item =>{
      let auxName = item.name.toLocaleLowerCase()     // ALTERAR AQUI DE ACORDO COM OS CAMPOS DA API
      let auxEmail = item.email.toLocaleLowerCase()   // ALTERAR AQUI DE ACORDO COM OS CAMPOS DA API
      if((auxName.includes(auxBusca) || (auxEmail.includes(auxBusca)))){
        dados2.push(item)
        setDados(dados2)
      }
    })
  }

  const [flag, setFlag] = useState(false)
  const [array, setArray] = useState([])
  const selectOptonsMenu = (e) =>{
  
    if(e.target.value == 'false'){
      setFlag(true)
      getInAnalyze()
    }else if (e.target.value == 'true'){
      setFlag(false)
      setArray(dadosOri)
    }
  }

  // pegando valores em analises
  function getInAnalyze () {

    let arrayAux = []
    // percorrer dados
    dadosOri.map((i, index) =>{
       if(index % 2 == 0){    // Verificar pedidos em analise
        arrayAux.push(index)
      }
    })

    setArray(arrayAux)
  }

  const retiraFiltro = async () =>{
   
   await axios 
    .get("http://dashboardbff.oonpayperuse.com.br/users", config)
    .then((response) => {
        setDados(response.data)
        setBusca('')
        busca=''
      
    })
    .catch(r =>{ 
      console.log('error', r), alert('Login expirado'),window.location.reload()
    }) // window.location.reload();
  }

 

  if(dados == ''){
    return (<> <Spinner animation="grow" variant="info" /> </>)
  }else{
   
      return (
        <>
          <CCard className='deviceContainer'>
            <CCardBody>
              <CNavbar expand="lg"  className="menuDeviceContainer">
                <CContainer fluid>
                  <CNavbarToggler
                    aria-label="Toggle navigation"
                    aria-expanded={visible}
                    onClick={() => setVisible(!visible)}
                  />
                  <CCollapse className="navbar-collapse" visible={visible}>
                    <CNavbarBrand> Dispositivos  </CNavbarBrand>
                    <CNavbarBrand> 
                      <CFormSelect 
                        aria-label="Default select example"
                        options={options}
                        onChange={selectOptonsMenu}
                      />
                    </CNavbarBrand>
                    
                    <CNavbarNav className="me-auto mb-2 mb-lg-0">
                    </CNavbarNav>
                    <CForm className="d-flex">
                      <CFormInput type="search" onChange={Pegandobusca} value={busca2} color="dark" className="me-2" placeholder="Pesquise " />
                      <CButton type="submit" onClick={retiraFiltro}  color="secondary"  variant='ghost'  >
                        <CIcon icon={cilLoopCircular} />
                      </CButton>
                    </CForm>
                  </CCollapse>
                </CContainer>
              </CNavbar>

              <CTable  className="deviceTableContainer" striped  >
                <CTableHead >
                  <CTableRow>
                    <CTableHeaderCell >Placa Veículo</CTableHeaderCell>
                    <CTableHeaderCell >email</CTableHeaderCell>
                    <CTableHeaderCell>Cep</CTableHeaderCell>
                    <CTableHeaderCell >Status</CTableHeaderCell>
                    <CTableHeaderCell >Ações</CTableHeaderCell>
                    <CTableHeaderCell >Imagens</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>

                <CTableBody>
                  {/* Percorre os usuarios  */}
                  {array.map((item, index) => (
                    <CTableRow key={index}>

                      <CTableDataCell >
                        <PlateNumber plate={item.plateNumber} />
                      </CTableDataCell>

                      <CTableDataCell >
                        <EmailCli email={item.email} />
                      </CTableDataCell>

                      <CTableDataCell >
                        <ZipCode zipCode='37177-000' />
                      </CTableDataCell>

                      <CTableDataCell >
                        <Status status= 'WAITING_PAYMENT' email={item.email} />
                      </CTableDataCell>

                      <CTableDataCell >
                        <BtnEdit  editar={item} />
                      </CTableDataCell> 

                      <CTableDataCell >
                        <BtnMidia midia={item} />
                      </CTableDataCell> 

                    </CTableRow>
                    
                  ))}

                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </>
      )
    }
}
export default Devices
