import React, {useState} from 'react'
import { cilXCircle, cilPenAlt, cilColorBorder, cilUserPlus, cilArrowThickToLeft } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import './css/config.css'
import {
  CRow,
  CCol,
  CNavbar,
  CForm,
  CContainer,
  CNavbarBrand,
  CFormInput,
  CNavbarNav,
  CButton,
  CTable,
  CTableHeaderCell,
  CTableHead,
  CTableRow,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

import NewProvider from './config/NewProvider'

import ConfigMap from "./google-map/ConfigMap"
import EditProvider from './config/EditProvider'
import MapOff from './MapOff'

const ConfigPrestador = () => {

  const [prestador, setPrestador] = useState([
    {name:'Zequinha Guincho',phone:32998909090,  email:'zequinha@gmail.com', endereco:'Av Professor mario werneck 730' ,posicao:{lat:-19.967788, lng: -43.9607583}, tipoServico: 'Guincho'},
    {name:'Luizinho Borracheiro',phone:32998909090,  email:'luizinho@gmail.com', endereco:'av Brasil' ,posicao:{lat:-19.965425, lng: -43.8719556}, tipoServico:'borracheiro'},
    {name:'Reboque 3 irmao', phone:32998909090, email:'3irmao@gmail.com', endereco:'av Raja' ,posicao:{lat: -19.9285546,  lng:-43.9248353}, tipoServico:'reboque'}
  ])
  const [dadosOri, setDadosOri] = useState([
    {name:'Zequinha Guincho',phone:32998909090,  email:'zequinha@gmail.com', endereco:'Av Professor mario werneck 730' ,posicao:{lat:-19.967788, lng: -43.9607583}, tipoServico: 'Guincho'},
    {name:'Luizinho Borracheiro',phone:32998909090,  email:'luizinho@gmail.com', endereco:'av Brasil' ,posicao:{lat:-19.965425, lng: -43.8719556}, tipoServico:'borracheiro'},
    {name:'Reboque 3 irmao', phone:32998909090, email:'3irmao@gmail.com', endereco:'av Raja' ,posicao:{lat: -19.9285546,  lng:-43.9248353}, tipoServico:'reboque'}
  ])

  const [inputPesquisa, setInputPesquisa] = useState('')
  const [busca2, setBusca] = useState('')
  const [selectProvider, setSelectProvider] = useState({name:'',phone:null,  email:'', endereco:'' ,posicao:{lat:null , lng:null }, tipoServico: ''})
  const [posNewProvider,setPosNewProvider] = useState({lat:null , lng:null })

  const dados2 =[]
  let busca = ''
  const pegandoPesquise = (e) =>{
    setBusca(e.target.value)
    busca = e.target.value
    BuscaUser()
  }

  const BuscaUser = () =>{
    let auxBusca = busca.toLocaleLowerCase()
    dadosOri.map(item =>{
      let auxName = item.name.toLocaleLowerCase()
      let auxTipo = item.tipoServico.toLocaleLowerCase()
      if((auxName.includes(auxBusca)) || (auxTipo.includes(auxBusca))){
        dados2.push(item)
        setPrestador(dados2)
      }
    })
  }
  const [flagMap, setFlagMap] = useState(false)
  const SelectRota = (e)=>{
    setSelectProvider(e)
    setFlagMap(true)
    console.log(e)
  }

  const SelectRotaNewProvider = (e) =>{
    setPosNewProvider(e)
  }

  const [pageEdit, setPageEdit] = useState(false)
  const pageEditSelect = (e) =>{
    console.log('entrei em page edit')
    setPageEdit(true)
    setSelectProvider(e)
  }
  
  const [page, setPage] = useState(false)
  const newProviderPage = () =>{
    setPage(true)
    setSelectProvider({name:'',phone:null,  email:'', endereco:'' ,posicao:{lat:null , lng:null }, tipoServico: ''})
    setPosNewProvider({lat:null , lng:null })
  }

  const [providerEdit, setProviderEdit]= useState({lat:null , lng:null })
  const editProviderEnd = (e) =>{
    setProviderEdit(e)
  }

  const openMap = (e) =>{
    setFlagMap(e)
  }


  const backProviderPage = () =>{
    
    setSelectProvider({name:'',phone:null,  email:'', endereco:'' ,posicao:{lat:null , lng:null }, tipoServico: ''})
    setPosNewProvider({lat:null , lng:null })
    setPageEdit(false)
    setPage(false)
    setProviderEdit({lat:null , lng:null })
  }

  const userType = 'admin'
  return (
    <>  
       <CRow className='container-config'>
         <CCol>
           <div className='container-body-config'>
             <CNavbar expand="lg"  className="menuDeviceContainer">
                {page == false && pageEdit == false  ? 
                  (
                    <>
                      <h4 className='container-titulo-header'> Lista de prestadores </h4>
                      <CNavbarNav className="me-auto mb-2 mb-lg-0">
                      </CNavbarNav>
                      <CForm className="d-flex">
                        <CFormInput type="search" size='md' color="dark" onChange={pegandoPesquise} value={busca2} className="me-2" placeholder="Pesquise " />
                        <CButton  variant="ghost" onClick={newProviderPage}  color="dark" >
                          <CIcon icon={cilUserPlus} size="xl"/>
                        </CButton> 
                      </CForm>
                    </>
                  )
                    :null
              }
                  
            </CNavbar>
           </div>

          {page == false && pageEdit == false  ?
            (

              <div className='container-config-body'> 
                <CTable align="middle" className="mb-0 deviceTableContainer" hover responsive>
                    <CTableHead >
                      <CTableRow>
                        <CTableHeaderCell >Nome</CTableHeaderCell>
                        <CTableHeaderCell >Telefone</CTableHeaderCell>
                        <CTableHeaderCell >tipo Servico</CTableHeaderCell>
                        <CTableHeaderCell >Endereco</CTableHeaderCell>
                        {userType == 'admin' ? 
                          (
                            <>
                              <CTableHeaderCell >Editar</CTableHeaderCell>
                              <CTableHeaderCell >Deletar</CTableHeaderCell>
                            </>
                          )
                          :null

                        }
                        
                      </CTableRow>
                    </CTableHead>

                    <CTableBody>
                      {/* Percorre os usuarios  */}
                      {prestador.map((item, index) => {
                        if(index < 10){
                          return(
                            <CTableRow>
                              <CTableDataCell >
                                <label className='text-font-config'> {item.name}</label>
                              </CTableDataCell>
                              <CTableDataCell >
                                <label className='text-font-config'> {item.phone}</label>
                              </CTableDataCell>
                              <CTableDataCell >
                                <label className='text-font-config'> {item.tipoServico}</label>
                              </CTableDataCell>
                              <CTableDataCell >
                                <CButton size="sm"  onClick={()=> {SelectRota(item)}} variant='outline' color='dark'> Ver local</CButton>
                              </CTableDataCell>
                              {userType == 'admin' ?
                                (
                                  <>
                                    <CTableDataCell >
                                      <CButton size="sm" variant='ghost' onClick={()=>pageEditSelect(item)} color='dark'> <CIcon icon={cilColorBorder} size="xl"/></CButton>
                                    </CTableDataCell>
                                    <CTableDataCell >
                                      <CButton size="sm" variant='ghost' color='danger'> <CIcon icon={cilXCircle} size="xl"/> </CButton>
                                    </CTableDataCell>
                                  </>
                                )
                                :null
                                
                              }
                            
                            </CTableRow>
                          )

                          }else if(index == 11){
                            let cont = prestador.length - index
                            return(
                              <> <label> ainda falta {cont} </label></>
                            )
                          }
                        
                      })}

                    </CTableBody>
                  </CTable>
              </div>

            )
               :
            ( 
              <> 
                { pageEdit == true ? 
                  (
                    <>
                      <EditProvider  parentCallback={SelectRotaNewProvider} provider={selectProvider} btnMap={openMap}/> 
                    </>
                  )
                    :
                    (<NewProvider parentCallback2={SelectRotaNewProvider} btnMap={openMap} /> )
                }
                
                <br />
                <CButton  variant="ghost" onClick={backProviderPage}  color="dark" >
                  <CIcon icon={cilArrowThickToLeft} size="xl"/>
                </CButton>
              </>
            )
            
          }
       
         </CCol>

         <CCol>
            {flagMap == true ? 
              (<> <ConfigMap provider={selectProvider} newProvider={posNewProvider}/> </>)
                :(<MapOff/>)
            
            }
            
         </CCol>
       </CRow>
    </>
  )
}

export default ConfigPrestador