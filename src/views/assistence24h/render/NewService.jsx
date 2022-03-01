import React, { useEffect, useState, useRef } from 'react'
import axios from "axios"
import Cookies from 'js-cookie'

import { cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
    CButton, CCol, CForm, CFormInput, CFormLabel, CFormSelect, CFormTextarea, CRow, CTable,
    CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow
} from '@coreui/react'


import { Spinner } from 'react-bootstrap'
import './css/newService.css'
import MapGoogle from './google-map/MapNewFollow'
import SearchDestiny from './newService/SearchDestinyAdress'
import SearchOcorrency from './newService/SearchOcorrencyAdress'
import { BsTruckFlatbed } from 'react-icons/bs'


const teste = {}


const NewService = () => {
    const token = Cookies.get('TokenID')
    const userType = Cookies.get('userType')
    let config = {
        headers: {
          'Authorization': token, 
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
        }
    };

    const [dados, setDados] = useState([])
    const [busca2, setBusca] = useState('')
    const [dadosOri, setDadosOri] = useState([])
    const[clientSelect, setClientSelect] = useState('')
    let busca = ''
    const dados2 =[]
    const serviceOp = ['Reboque', 'Guincho', 'op3', 'op4']

    const Pegandobusca = (e) =>{
        setBusca(e.target.value)
        busca = e.target.value
        Busca()
      }
      
      const Busca = () =>{
        let auxBusca = busca.toLocaleLowerCase()
        dadosOri.map(item =>{
          // converter os dados e os dados de busca para lower case
          let auxName = item.name.toLocaleLowerCase()
         //  let auxEmail = item.email.toLocaleLowerCase()
          //if((auxName.includes(auxBusca) || ( auxEmail.includes(auxBusca)))){ // Trocar email pela placa ou adicionar mais o campo placa
            if(auxName.includes(auxBusca)){
                dados2.push(item)
                setDados(dados2)
            }
        })
      }

    useEffect( () => {
        axios 
          .get("http://dashboardbff.oonpayperuse.com.br/users", config)  // AQUI É DEVICES
          .then((response) => {
              setDados(response.data)
              setDadosOri(response.data)
          })
          .catch(r =>{ 
              console.log('error', r), alert('Login expirado'),window.location.reload()
            }) // window.location.reload();
    }, []) 


   function EscolhendoCliente (e) {
       console.log('cliente escolhido...', e.name)
       setClientSelect(e)
   }

   const [typeService, setTypeService] = useState()
   function pegandoTipe (e) {
        setTypeService(e)
   }

   const [passo, setPasso] = useState(1)
   // manipula os passos do usuário 
   function manipulaPassos (e){
      setPasso(e)
      setAdressOcorrence({lat:null, lng:null})
      setAdressDestiny({lat:null, lng:null})
      clearRoute()
   }



    const [adressOcorrence, setAdressOcorrence] = useState({lat:null, lng:null})
    const [adressDestiny, setAdressDestiny] = useState({lat:null, lng:null})

    //pegando valores via parentCallBack do ocorrency address
    const pegaLatLngOcorrency = (e) => {
        console.log('oq vem do mapa', e.lat, e.lng)
        setAdressOcorrence({lat:e.lat, lng:e.lng})
    }

    const pegaLatLngDestiny = (e) => {
        console.log('oq vem do mapa Destine', e.lat, e.lng)
        setAdressDestiny({lat:e.lat, lng:e.lng})
    }

    const [textObs, setTextObs] = useState()

   function pegandoObs(e){
        setTextObs(e)
   }
    
    function SalvarNovoChamado (){
        const infoSave = { 
            name: clientSelect.name,
            addressOcorrency: adressOcorrence,
            addressDestination: adressDestiny,
            plate: clientSelect.email,
            typeService: typeService,
            observacoes: textObs ,
            phone: clientSelect.phone,
            timeTravel: travelTime,
            distanceTravel:travelDistance
        }
        console.log('clientSelect', infoSave)

    }
    

    const MapGoogleRef = useRef(null);
    const [flag, setFlag] = useState(false)
    const [routeTraceInfos, setRouteTraceInfos] = useState()

    let config2 = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };
    const newTraceRoute =  async () => {
        MapGoogleRef.current.traceRoute(adressOcorrence, adressDestiny)
        setFlag(true)
       
    }

    function clearRoute () {
        setAdressOcorrence({lat:null, lng:null})
        setAdressDestiny({lat:null, lng:null})
        MapGoogleRef.current.removeRoute()
        setFlag(false)
    }

    const [travelTime, setTraveTime] = useState()
    const [travelDistance, setTravelDistance] = useState()

    // Pegando valores da rota
    function setInfosRoute (e) {
        setTraveTime(e.timeTravel)
        setTravelDistance(e.distance)
    }

    if(dados == ''){
        return (
            <div>
                <br />
                <h4> <Spinner animation="grow" variant="info" />  </h4> 
            </div>  
            
        )
    }else{
        
        // passo 1 seleciona o usuario 
       
            return (
                <>
                    <CRow className="align-items-start">
                        <CCol> 
                        {passo == 1 ?(
        
                                <div className='container-newService'> 
                                    <br />
                                    <CRow className="align-items-start">
                                        <CCol>
                                            <h3>Novo atendimento </h3>
                                        </CCol>
                                        <CCol> 
                                            <CFormInput type="text" onChange={Pegandobusca} value={busca2} className="me-2" placeholder="Pesquise uma placa" />  
                                        </CCol>
                                    </CRow>
                                    <hr />
                                    {busca2.length >= 2 ?
                                        (
                                            <>
                                                <CTable align="middle" className="mb-0 usersTableContainer" hover  responsive>
                                                    <CTableHead >
                                                        <CTableRow>
                                                            <CTableHeaderCell className="text-center">Placa</CTableHeaderCell>
                                                            <CTableHeaderCell className="text-center">Nome</CTableHeaderCell>
                                                            <CTableHeaderCell className="text-center">Telefone</CTableHeaderCell>
                                                            <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                                                            <CTableHeaderCell className="text-center"> Selecionar </CTableHeaderCell>
                                                        </CTableRow>
                                                    </CTableHead>
                    
                                                    <CTableBody>
                    
                                                        {dados.map((item, index) =>{
                                                            if(index < 10){
                                                                return(
                                                                <>
                                                                    <CTableRow>
                                                                        <CTableDataCell className="text-center">
                                                                            {item.plate}
                                                                        </CTableDataCell>
                                                                        <CTableDataCell className="text-center">
                                                                            {item.name}
                                                                        </CTableDataCell>
                                                                        <CTableDataCell className="text-center">
                                                                            {item.phone}
                                                                        </CTableDataCell>
                                                                        <CTableDataCell className="text-center">
                                                                            {/* {item.status} */}
                                                                            Observar status
                                                                        </CTableDataCell>
                                                                        <CTableDataCell className="text-center">
                                                                            <CButton size='sm' onClick={()=>{EscolhendoCliente(item)}}> <CIcon icon={cilPlus} size="xl"/>  </CButton>
                                                                        </CTableDataCell>
                                                                    </CTableRow>
                                                                </>
                                                            )  
                                                            }
                                                        })}

                                                    </CTableBody>
                                                </CTable>
                                                <br />
                                                <div className='container-next-step-1'>
                                                    {clientSelect == '' ?(
                                                        <>
                                                            <CButton color='dark' variant='outline' disabled size='md' > Próximo </CButton>
                                                        </> 
                                                        ) 
                                                        :(
                                                            <div>
                                                                <CButton color='dark' onClick={()=>{manipulaPassos(2)}} size='md'> Próximo </CButton>
                                                            </div> 
                                                        )
                                                    }
                                                </div>
                                            </>
                                        )
                                        :(
                                            <>
                                                <br />
                                                <h6> Há {dados.length} placas registradas.</h6>
                                            </>
                                        )
                                    }
                                </div> 
                        
                            ) 
                            : null
                        }

                        {passo == 2 ?(
                            <>
                              
                                <div className='container-header-newService'> 
                                    <br />
                                    <h4>Informações</h4>
                                    <p>Cliente selecionado: {clientSelect.name}</p>
                                   
                                    
                                    <br />
                                    <CForm>
                                        <div className="mb-3">
                                            <CFormLabel htmlFor="exampleFormControlInput1">Tipo de serviço</CFormLabel>
                                            <CFormSelect    
                                                aria-label="Default select example"
                                                options={serviceOp}
                                                onClick={()=> pegandoTipe ()}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <CFormLabel> Observações </CFormLabel>
                                            <CFormTextarea onChange={()=>{pegandoObs ()}} rows="4"></CFormTextarea>
                                        </div>
                                    </CForm>
                                    
                                    <CRow className='btn-next-previos'>
                                        <CCol className= 'container-voltar-esq'>
                                            <CButton color='dark' onClick={()=>{manipulaPassos(1)}} size='md'> Voltar </CButton>
                                        </CCol>
                                        <CCol className= 'container-voltar-dir'>
                                            <CButton color='dark' onClick={()=>{manipulaPassos(3)}} size='md'> Próximo </CButton>
                                        </CCol>
                                    </CRow>
                                    
                                    
                                </div> 
        
                            </> 
                            ) 
                            : null
                        }

                        {passo == 3 ?(
                            <>
                                
                                <div className='container-header-newService'> 
                                    <br />
                                    <h4>Informações</h4>
                                    <p>Cliente selecionado: {clientSelect.name}</p>
                                    <br />

                                    <SearchOcorrency  parentCallback={ pegaLatLngOcorrency} />
                                    <br />
                                    <SearchDestiny parentCallback2={ pegaLatLngDestiny}/>

                                    {adressOcorrence.lat != null && adressDestiny.lat != null && flag == false ? 
                                        (<CButton color="dark" onClick={newTraceRoute}  > Ver Rota </CButton> )

                                        : null
                                        
                                    }

                                    {adressOcorrence.lat != null && adressDestiny.lat != null ? 
                                        null

                                        : (<CButton color="dark"  disabled  variant='outline' > Ver Rota </CButton> )
                                        
                                    }

                                    {flag == true ? 
                                        
                                        (   
                                            <> 
                                                 <CButton color="dark" onClick={clearRoute} variant = 'ghost' > Remover Rota </CButton>
                                                 <br />
                                                 <label className="container-infos-travelTime"> {travelTime} </label>
                                                 <label className="container-infos-travelDistance"> {travelDistance} </label>
                                            </>
                                           
                                        )
                                        
                                        : null

                                    }
                                    

                                    <CRow className='btn-next-previos'>
                                        <CCol className= 'container-voltar-esq'>
                                            <CButton variant="outline" color='dark' onClick={()=>{manipulaPassos(2)}} size='md'> Voltar </CButton>
                                        </CCol>
                                        <CCol className= 'container-voltar-dir'>

                                            {flag == true ? 
                                                (<CButton color='success'  onClick={SalvarNovoChamado}  size='md'> Iniciar atendimento </CButton>)
                                                :
                                                ( <label className='container-newService-obs'> Visualize a rota antes de iniciar o atendimento. </label>)
                                            }
                                            
                                        </CCol>
                                    </CRow>
                                    
                                </div> 
                               

                            </> 
                            ) 
                            : null
                        }

                        </CCol>

                        <CCol>
                            <MapGoogle 
                                ocorrenciaLat={adressOcorrence.lat} 
                                ocorrenciaLng={adressOcorrence.lng} 
                                destinoLat={adressDestiny.lat}
                                destinoLng={adressDestiny.lng}  
                                limparRota={clearRoute}
                                ref={MapGoogleRef}
                                InfosRotas={setInfosRoute}
                            />
                       
                            
                        </CCol>
                    </CRow>
        
                </>
        
            )

       
    }
   

}

export default NewService


