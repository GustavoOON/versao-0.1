import React, { useState, useEffect, useMemo } from 'react'
import axios  from "axios"
import './css/users.css'
import Cookies from 'js-cookie'

import NameCli from './render/Name'
import IdCli from './render/Id'
import EmailCli from './render/Email'
import BtnEdit from './render/BtnEdit'
import NewUser from './render/NewUser'
import Permission from '../permissons/Permissions'
import DepartCli from './render/Depart'
import PhoneCli from './render/Phone'
import Associate from './render/associate/Associate'

import { BsSearch, BsArrowClockwise, BsChevronDoubleRight , BsChevronDoubleLeft } from 'react-icons/bs';

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
  CFormSelect ,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CCard,
  CCardBody,
  CFormInput,
  CForm,
  CPagination,
  CPaginationItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {cilLoopCircular, cilMagnifyingGlass, cilChevronRight, cilChevronLeft } from '@coreui/icons'
import { Spinner }  from 'react-bootstrap';


const Clients = () => {

  const [dados, setDados] = useState([])
  const [dadosOri, setDadosOri] = useState([])
  // const [dados2, setDados2] = useState([])
  const dados2 =[]
  const handleClose = () => setShow(false);
  const [visible, setVisible] = useState(false)  
  const [show, setShow] = useState(false);
  const verifica = ()=>setShow(true)
  const [busca2, setBusca] = useState('')
  let busca = ''

  const userType = Cookies.get('userType')
  const token = Cookies.get('TokenID')
  
  const options = [
    { label: 'Todos ', value: 'todos' },
    { label: 'Ativos ', value: 'funcAtive' },
    { label: 'Desligados', value: 'funcDisable' }
  ]
  let config = {
    headers: {
      'Authorization': token, 
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  };

  const Pegandobusca = (e) =>{
    setBusca(e.target.value)
    busca = e.target.value

    //BuscaUser()
  }
  
  const [searchValue, setSearchValue] = useState('')
  const [flagSearch, setFlagSearch] = useState(false)
  const[openSearch, setOpenSearch] = useState('')
  function searchMail(){
    //setOpenSearch('')
    //setSearchValue('')
    setFlagSearch('')
    axios 
      .get(`http://dashboardbff.oonpayperuse.com.br/employees/email/${busca2.toLocaleLowerCase()}`, config)
      .then((response) => {
        setSearchValue(response.data)
        setFlagSearch(true)
        setOpenSearch('open')
       
      })
      .catch(r =>{ 
        console.log('error', r), alert('Login expirado'),window.location.reload()
      }) // window.location.reload();
      //.catch(r =>{ console.log('erro na api....', r), setOpenSearch('err'), setFlagSearch(false)})
  }


  /* BUSCANDO NA FORMA ANTIGA
  const BuscaUser = () =>{
    let auxBusca = busca.toLocaleLowerCase()
    dadosOri.map(item =>{
      let auxName = item.firstName.toLocaleLowerCase()
      let auxEmail = item.email.toLocaleLowerCase()
      if((auxName.includes(auxBusca) || (auxEmail.includes(auxBusca)))){
        dados2.push(item)
        setDados(dados2)
      }
    })
  }
  */

  const retiraFiltro = () =>{
    clear()

    axios 
      .get("http://dashboardbff.oonpayperuse.com.br/employees?pageSize=10", config)
      .then((response) => {
        setArrayUsers(response.data.content)
        setDados(response.data.content)
        initPages(response)
        setBusca('')
        setNumberOfPages(response.data.totalPages)
        busca=''
      })
      .catch(r =>{ 
        console.log('error', r), alert('Login expirado'),window.location.reload()
      })
  }

  function clear(){
    setDados([])
    setDadosOri([])
    setSearchValue('')
    setPrevios('')
    setFlagSearch(false)
    setOpenSearch('')
  }
  
  const [numberOfPages, setNumberOfPages] = useState()
  var TotalPages
  const [arrayUsers, setArrayUsers] =  useState()

  useEffect( async () => {
    await axios 
      .get("http://dashboardbff.oonpayperuse.com.br/employees?pageSize=10", config)
      .then((response) => {
        setArrayUsers(response.data.content)
        setDados(response.data.content)
        // Paginacao 
        console.log('mostra',response.data)
        initPages(response)
        setNumberOfPages(response.data.totalPages)
      })
      .catch(r =>{ 
        console.log('error', r), alert('Login expirado'),window.location.reload()
      })
  }, []) 

  const [previousPage, setPrevios] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [nextPage, setNextPage] = useState('')

  function initPages(e){
    if(e.data.totalPages > 1 ){
      TotalPages = e.data.totalPages
      setCurrentPage(1)
      setNextPage(2)
    }
  }

  // volta pagina
  function capturePrevious(e, nPage){
    if(currentPage == 1){
      setPrevios('')
      setNextPage(2)
    }else{
      setNextPage(currentPage )
      setCurrentPage(currentPage - 1 )
      setPrevios(currentPage - 2)
    }
    let aux = e -1
    page(aux)
  }

   // Proxima pagina
   function captureNextPage(e, nPage){
    if(currentPage == 1){
      setNextPage(3)
      setCurrentPage(currentPage + 1)
      setPrevios(1)
    }else if(currentPage < nPage -1){
      setNextPage(currentPage + 2)
      setCurrentPage(currentPage + 1)
      setPrevios(currentPage )
    }else{
      setNextPage('')
      setCurrentPage(currentPage + 1)
      setPrevios(currentPage)
    }
    let aux = e -1
    page(aux)
  }

  // escolha a pagina de acesso 
   function page(e){

    setDados([])
     axios 
      .get(`http://dashboardbff.oonpayperuse.com.br/employees?pageSize=10&pageNumber=${e}`, config)
      .then((response) => {
        setArrayUsers(response.data.content)
        setDados(response.data.content)
        setNumberOfPages(response.data.totalPages)
      })
      .catch(r =>{ 
        console.log('error', r), alert('Login expirado'),window.location.reload()
      })
  }

  function userActive(e){
    var arrayDisable = []
    var arrayActive = []
    console.log('entrei em user activo', arrayUsers.length, e)
    arrayUsers.map(user =>{
      if(user.disabled == true){
        arrayDisable.push(user)
      }else{
        arrayActive.push(user)
      }
    })

    if(e == 'todos' ){
      setDados(arrayUsers)
    }else if (e == 'funcAtive'){
      setDados(arrayActive)
    }else if (e == 'funcDisable'){
      setDados(arrayDisable)
    }else{
      setDados(arrayUsers)
    }
    
  }

  const [ativos, setAtivos] = useState([])
  const [desligados, setDesligados] = useState([])
  const [menuChoice, setMenuChoice] = useState()

  function menuUsers(e){
    console.log('Escolha menu',e.target.value)
    // pega funcionarios desligados
    if(e.target.value === 'todos' ){
      setMenuChoice(e.target.value)
    }else if(e.target.value === 'funcAtive'){
      setMenuChoice(e.target.value)
    }else if(e.target.value === 'funcDisable'){
      setMenuChoice(e.target.value)
    }else{
      setMenuChoice(e.target.value)
    }
    
    userActive(e.target.value)
  }
   

  if (dados == ''){
    return ( 
      <CCard className='usersContainer'>
        <CCardBody>
          <h4> <Spinner animation="grow" variant="info" />  </h4> 
        </CCardBody>
      </CCard>
    )
  }else if (openSearch === ''){
    return (
      <div>
        <CCard className='usersContainer'>
            <CCardBody>
                <CNavbar expand="lg"  className="menuUser">
                  <CContainer fluid>
                    <CNavbarToggler
                      aria-label="Toggle navigation"
                      aria-expanded={visible}
                      onClick={() => setVisible(!visible)}
                    />
                    <CCollapse className="navbar-collapse" visible={visible}>
                      {/* <CIcon icon={cilUser } size="xl"/> */}
                      <CNavbarBrand> Funcionários </CNavbarBrand>
                      <CNavbarBrand> 
                        <CFormSelect 
                          aria-label="Default select example"
                          options={options}
                          onChange={menuUsers}
                        
                        />
                      </CNavbarBrand>
                      <CNavbarNav className="me-auto mb-2 mb-lg-0">
                      </CNavbarNav>
                          <div className='newUser'>
                            <NewUser callBack={retiraFiltro} /> 
                          </div>
                      <CForm className="d-flex">
                        {/* <CFormInput type="text" onChange={Pegandobusca} value={busca2} size ='md' className="me-2" placeholder="Pesquise" /> */}
                        <CFormInput type="text" onChange={Pegandobusca} value={busca2} size ='md' className="me-2" placeholder="Pesquise um e-mail" />
                        <CButton onClick={searchMail}   variant='ghost'  color="secondary" >
                          <BsSearch className='user-icons' />
                        </CButton>
                        <CButton onClick={retiraFiltro}   variant='ghost'  color="secondary" >
                          <BsArrowClockwise className='user-icons' />
                        </CButton>
                      </CForm>
                    </CCollapse>
                  </CContainer>
              </CNavbar>

              <CTable align="middle" className="mb-0 usersTableContainer" hover striped responsive>
                {/* Cabeca head da tabela do clientes */}
                <CTableHead >
                  <CTableRow>
                    <CTableHeaderCell className="text-center">id</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Nome</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">E-mail</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Contato</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Departamento</CTableHeaderCell>
                    {userType == 'ADMIN' ?(
                        <CTableHeaderCell className="text-center" >Ações</CTableHeaderCell>
                      ) 
                      :null
                    }
{/* 
                    {userType == 'ADMIN' ?(
                        <CTableHeaderCell className="text-center" >Permissões</CTableHeaderCell>
                      ) 
                      :null
                    } */}

                    {userType == 'ADMIN' ?(
                        <CTableHeaderCell className="text-center" >Associação</CTableHeaderCell>
                      ) 
                      :null
                    }
                  
                    
                  </CTableRow>
                </CTableHead>

                <CTableBody>
                  {/* Percorre os usuarios  */}
                  { dados.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell className="text-center">
                        <IdCli id={index+1} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <NameCli name={item.firstName} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <EmailCli email={item.email} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <PhoneCli phone={item.phone} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                          <DepartCli departamento={item.department} />
                      </CTableDataCell>

                      {userType == 'ADMIN' ?(
                        <CTableDataCell className="text-center">
                          <BtnEdit callBack={retiraFiltro} editar={item} />
                        </CTableDataCell>
                      )

                      :null
                        
                      } 
                      
                      {/* {userType =='ADMIN' ?(
                          <CTableDataCell className="text-center">
                            <Permission attPage={retiraFiltro} user={item}/>
                          </CTableDataCell>
                        )
                        :null
                      } */}

                      {userType =='ADMIN' ?(
                          <CTableDataCell className="text-center">
                            <Associate user={item} data={dadosOri} />
                          </CTableDataCell>
                        ):null
                      }

                    </CTableRow> 
                  ))}

                </CTableBody>
              </CTable>
              <br />
              <br />
              <CPagination color='dark' align="center" aria-label="Page navigation example">
                  
                {previousPage != '' ?
                  (
                    <> 
                      <CButton className='btn-user-pagination' color='dark' onClick={ () =>{capturePrevious(previousPage, numberOfPages)}} variant='outline'> <BsChevronDoubleLeft/> </CButton>
                      <CButton className='btn-user-pagination' color='dark' onClick={ () => {capturePrevious(previousPage, numberOfPages)}} variant='outline'> {previousPage} </CButton>
                    </>
                    
                  )
                  :null
                }

                {currentPage == 0 ?
                  (<CButton className='btn-user-pagination' defaultChecked color='dark' active={true}  > {currentPage+1}</CButton>)
                  :
                  (<CButton className='btn-user-pagination' defaultChecked color='dark' active={true}  > {currentPage}</CButton>)
              
                }
                
                {nextPage != '' ? 
                  (
                    <>
                      <CButton className='btn-user-pagination' color='dark' onClick={() => captureNextPage(nextPage,numberOfPages)} variant='outline' >  {nextPage} </CButton>
                      <CButton  className='btn-user-pagination' color='dark' onClick={() => captureNextPage(nextPage, numberOfPages)} variant='outline' > <BsChevronDoubleRight /> </CButton>
                    </>
                  )
                  :null
                }
                
                
              </CPagination>
            
            </CCardBody>
        </CCard>
        </div>
    )
  }else{
    return (
      <>
        <CCard >
          <CCardBody>
            <CNavbar expand="lg"  className="menuUser">
              <CContainer fluid>
                <CNavbarToggler
                  aria-label="Toggle navigation"
                  aria-expanded={visible}
                  onClick={() => setVisible(!visible)}
                />
                <CCollapse className="navbar-collapse" visible={visible}>
                  {/* <CIcon icon={cilUser } size="xl"/> */}
                  <CNavbarBrand> Funcionários </CNavbarBrand>
                  <CNavbarBrand> 
                    <CFormSelect 
                      aria-label="Default select example"
                      options={options}
                      onChange={menuUsers}
                    
                    />
                  </CNavbarBrand>
                  <CNavbarNav className="me-auto mb-2 mb-lg-0">
                  </CNavbarNav>
                      <div className='newUser'>
                        <NewUser callBack={retiraFiltro} /> 
                      </div>
                  <CForm className="d-flex">
                    {/* <CFormInput type="text" onChange={Pegandobusca} value={busca2} size ='md' className="me-2" placeholder="Pesquise" /> */}
                    <CFormInput type="text" onChange={Pegandobusca} value={busca2} size ='md' className="me-2" placeholder="Pesquise um e-mail" />
                    <CButton onClick={searchMail}   variant='ghost'  color="secondary" >
                      <BsSearch className='user-icons' />
                    </CButton>
                    <CButton onClick={retiraFiltro}   variant='ghost'  color="secondary" >
                      <BsArrowClockwise className='user-icons' />
                    </CButton>
                  </CForm>
                </CCollapse>
              </CContainer>
            </CNavbar>

            {flagSearch === true ? 
              (
                <>
                  <CTable>
                    <CTableHead >
                        <CTableRow>
                          <CTableHeaderCell className="text-center">Nome</CTableHeaderCell>
                          <CTableHeaderCell className="text-center">E-mail</CTableHeaderCell>
                          <CTableHeaderCell className="text-center">Contato</CTableHeaderCell>
                          <CTableHeaderCell className="text-center">Departamento</CTableHeaderCell>
                          {userType == 'ADMIN' ?(
                              <CTableHeaderCell className="text-center" >Ações</CTableHeaderCell>
                            ) 
                            :null
                          }

                          {userType == 'ADMIN' ?(
                              <CTableHeaderCell className="text-center" >Permissões</CTableHeaderCell>
                            ) 
                            :null
                          }

                          {userType == 'ADMIN' ?(
                              <CTableHeaderCell className="text-center" >Associação</CTableHeaderCell>
                            ) 
                            :null
                          }
                      </CTableRow>
                    </CTableHead>

                    <CTableBody>
                      <CTableRow >
                        <CTableDataCell className="text-center">
                          <label > {searchValue.firstName}</label>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <label > {searchValue.email}</label>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <label > {searchValue.phone}</label>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <label > {searchValue.department}</label>
                        </CTableDataCell>

                        {userType == 'ADMIN' ?(
                          <CTableDataCell className="text-center">
                            <BtnEdit callBack={retiraFiltro} editar={searchValue} />
                          </CTableDataCell>
                        )
                        :null
                          
                        } 
                        
                        {userType =='ADMIN' ?(
                            <CTableDataCell className="text-center">
                              <Permission user={searchValue}/>
                            </CTableDataCell>
                          )
                          :null
                        }

                        {userType =='ADMIN' ?(
                            <CTableDataCell className="text-center">
                              {/* ASSOCIATE ESTÁ quebrando quando pesquiso certo e logo apos pesquiso pessoa errada, zerar variavel, com campos definidos */}
                              {/* <Associate user={searchValue} data={searchValue} /> */}
                            </CTableDataCell>
                          ):null
                        }

                      </CTableRow> 
                    </CTableBody>

                  </CTable>
                </>
              )
                :null
            }
            
            {flagSearch === false ? 
              (
                <div className='container-users-notFind'>
                  <h3>E-mail não encontrado ...</h3>
                  <br />
                  <CButton onClick={retiraFiltro} variant='ghost'  color="dark" >
                    Voltar a lista
                  </CButton>
                </div>
              )
              :null
            }

            {flagSearch === '' ? 
              (
                <CCard className='usersContainer'>
                  <CCardBody>
                    <h4> <Spinner animation="grow" variant="info" />  </h4> 
                  </CCardBody>
                </CCard>
              )
              :null
            }

            <br />

          </ CCardBody>
        </CCard> 
      
      
      </>
    )
  }
  
}

export default Clients