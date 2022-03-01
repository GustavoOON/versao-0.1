import { cilChevronLeft, cilExpandRight, cilXCircle } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
    CButton, CCol, CFormSelect, CRow, CTable,
    CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow
} from '@coreui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import './css/followCall.css'
import MapFollow from './google-map/MapFollowCall'

import Cookies from 'js-cookie'
import MapOff from './MapOff'

const FollowCall = () =>{
    const [dados, setDados] = useState([])
    const token = Cookies.get('TokenID')
    const userType = Cookies.get('userType')
    let config = {
        headers: {
          'Authorization': token, 
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
        }
    };

    useEffect( () => {
        axios 
          .get("http://dashboardbff.oonpayperuse.com.br/users", config)  // AQUI É DEVICES
          .then((response) => {
              setDados(response.data)
          })
          .catch(r =>{ console.log('erro na api....', r), window.location.reload()}) // window.location.reload();
    }, []) 

    const [flag, setFlag] = useState(true)
    const [op, setOp] = useState([
        { label: 'Iniciado', value: '1' },
        { label: 'A caminho', value: '2' },

    ])

    const [client, setClient] = useState( {status:'', name:'', tipo:'', placa:'', obs:'', adressOcorrency: {lat:null, lng: null}, adressDestino: {lat:null, lng:null}, namePrestador:null, addressPrestador:{lat:null, lng: null} },)

    // clientes em acompnahmento 
    // Possui dois status em acompanhamento , iniciado e prestador a caminho 
    const clientes = [
        {status:'Iniciado', name:'Fulano ferreira', tipo:'Reboque', placa:'XYZ-1234', timeDest:14 , obs:'Motor sem óleo', distance: null, adressOcorrency: {lat:-19.967788, lng: -43.9607583}, adressDestino: {lat:-19.9159613, lng:-43.9075169}, namePrestador:null, tempo:null ,addressPrestador:{lat: null, lng:null} },
        {status:'Iniciado', name:'Whinderson Nunes', tipo:'Borracheiro', placa:'ABC - 1234', timeDest:5 , obs:'Dois pneus furados', distance:null,  adressOcorrency: {lat:-19.965425, lng: -43.8719556}, adressDestino: {lat:-19.9607086, lng:-43.9214618}, tempo:null, namePrestador:null, addressPrestador:{lat: null, lng:null} },
        {status:'Prestador a caminho', name:'Popo freitas', tipo:'Guincho', placa:'CDE 4545',timeDest:29, obs:'Batida de carro', adressOcorrency: {lat: -19.9285546,  lng:-43.9248353}, adressDestino: {lat:-19.9043105, lng: -44.0172453}, tempo:10,  namePrestador:'Borracharia mao na roda 3', distance:8,  addressPrestador:{lat:-19.8799211 , lng:-43.8904928} },
    ]

    
    const [listPrestadores, setListPrestadores] = useState(
        [
            {name:'Leo do Guincho', distance:'4km', time:'23 min', status:'online', enderecoPrestador:'Av Barao Homen de melo 3315', posicao: {lat:-19.9036664 , lng:-43.9791041}}, 
            {name:'Luizinho Guincho', distance:'6km', time:'28 min', status:'online',  enderecoPrestador:'Av Raja 4567', posicao: {lat:-19.9036664 , lng:-43.9654505}}, 
            {name:'Borracharia mao na roda 3', distance:'8km', time:'32 min',enderecoPrestador:'Av Sete de setembro 5789', status:'online', posicao: {lat:-19.8799211 , lng:-43.8904928}}, 
        ]
    )
    const [prestadorSelecionado, setPrestadorSelecionado] = useState({name:'', distance:'', time:'', status:'',enderecoPrestador:'' , posicao: {lat:null , lng:null}})
    const pegaCliente = (e) =>{
       setFlag(false)
       setClient(e)
       console.log('Pga', e)
    //    console.log('oq vem ', e)
   }
   const removeCli = () =>{
       setFlag(true)
       setClient({status:'', name:'', tipo:'', placa:'', obs:'', adressOcorrency: {lat:null, lng: null}, adressDestino: {lat:null, lng:null}, namePrestador:null, addressPrestador:null })
       setPrestadorSelecionado({name:'', distance:'', time:'',enderecoPrestador:'', status:'', posicao: {lat:null , lng:null}})
       setFlagMap(false)
        
   }

   const selectPrestador = (e) =>{
    setPrestadorSelecionado(e)
    setFlagMap(true)
    
   }

   const removePrestador = () =>{
        setPrestadorSelecionado({name:'', distance:'', time:'', status:'', enderecoPrestador:'', posicao: {lat:null , lng:null}})
   }

   const [infoPrestador, setInfoPrestador] = useState({
        addressPrestador:'',
        distanceProviderOcorrency:null,
        timeProviderOcorrency: null,
        addressOcorrency:'',
        distanceOcorrencyDestiny:null,
        timeOcorrencyDestiny:null,
        addressDestiny:''
    })


    let aux = []
   const pegainfos = (e) =>{

    // Pegando infos e tratando, o parametro é um array tem que tratar as informacoes
    
    aux = e
    console.log(aux.length, e[0], 'seapASDSADS', e[0].start_address,   e[0].distance.text, e[0].duration.text, e[0].end_address)
    if(aux.length == 1){
        setInfoPrestador({
            addressPrestador: '',
            distanceProviderOcorrency: null,
            timeProviderOcorrency: null,
            addressOcorrency:e[0].start_address,
            distanceOcorrencyDestiny: e[0].distance.text,
            timeOcorrencyDestiny:e[0].duration.text,
            addressDestiny:e[0].end_address
        })
    }else if (e.length == 2){
        console.log('entrei em dois ...')
        setInfoPrestador({
            addressPrestador:e[0].start_address,
            distanceProviderOcorrency:e[0].distance.text,
            timeProviderOcorrency: e[0].duration.text,
            addressOcorrency:e[0].end_address,
            distanceOcorrencyDestiny:e[1].distance.text,
            timeOcorrencyDestiny:e[1].duration.text,
            addressDestiny:e[1].end_address
        })
    } 
   }
   // preciso passar 
   const [showMap, setShowMap] = useState(false)
   const openMap = () =>{
       setShowMap(true)
   }

   const [flag2, setFlag2] = useState(false)

   // aqui troca de status quando é selecionado um prestador, será redirecionado para verificacao dos valores, e alterar status do atendimento
   const verificarInfos = () =>{
        setFlag2(true)
   }

   // salva os valores selecionados
   const concluir = () =>{
    setFlag2(false)
    setFlag(true)

    // Montar objeto com todos os valores e atualizar o status do acompanhamento
    setClient({status:'', name:'', tipo:'', placa:'', obs:'', adressOcorrency: {lat:null, lng: null}, adressDestino: {lat:null, lng:null}, namePrestador:null, addressPrestador:null })
    setPrestadorSelecionado({name:'', distance:'', time:'', status:'', posicao: {lat:null , lng:null}})
   }

   const backPrestador = () =>{
       setFlag2(false)
       // setFlag(true)
   }

   const routeUser = () =>{
       setFlagMap(true)
   }

   const [flagMap, setFlagMap] = useState(false)

    if(dados == ''){
        return (
            <div>
                <br />
                <h4> <Spinner animation="grow" variant="info" />  </h4> 
            </div>  
            
        )
    }else{
        return (
            <> 
                
                <CRow className="align-items-start">
                    {flag == true  && flag2==false ? 
                        (
                            <CCol> 
                                <br />
                                <h3>Acompanhar</h3>
                                <CRow>
                                    <CCol className="container-header-followCall">
                                        <CFormSelect 
                                            aria-label="Selecione"
                                            options={op}
                                        />
                                    </CCol>
                                    <CCol className="container-header-restart">
                                        <CButton className='container-btn-restart' size='md' variant='ghost' color="dark"> 
                                            <CIcon icon={cilXCircle} size="xl"/>
                                        </CButton>
                                    </CCol>
                                </CRow>
        
                                <div className='container-body-followCall'>
                                    <CTable>
                                        <CTableHead>
                                            <CTableRow>
                                                <CTableHeaderCell ></CTableHeaderCell>
                                                <CTableHeaderCell scope="col"></CTableHeaderCell>
                                            </CTableRow>
                                        </CTableHead>
                                        <CTableBody>
                                            <CTableRow>
                                              
                                                <CTableDataCell>

                                                    {clientes.map( (cliente, index) =>{
                                                        return(
                                                            <>
                                                                
                                                                {/* className='container-infos-follow' */}
                                                                <hr />
                                                                <CRow className='container-infos-follow'>
                                                                    <CCol xs={1}>
                                                                        <label> {index}  </label>
                                                                    </CCol>
                                                                    <CCol xs={3}>   
                                                                        <label> {cliente.placa}  </label>
                                                                    </CCol>
                                                                    <CCol xs={3}>
                                                                        <label>{ cliente.name}  </label>
                                                                    </CCol>
                                                                    <CCol>
                                                                        <CButton onClick={()=>{pegaCliente(cliente)}} className='container-btn-follow' size='sm' variant='outline' color="dark">
                                                                            <CIcon icon={cilExpandRight} size="md"/>
                                                                        </CButton>
                                                                    </CCol>
                                                                </CRow>
            
                                                                <div className='container-infos'>
                                                                    <label className='container-infos-type'  > {cliente.tipo} </label>
                                                                    <label className='container-infos-status' > {cliente.status} </label> 
                                                                    <label className='container-infos-status' > {cliente.timeDest} min do destino  </label> 
                                                                    {cliente.status == 'Prestador a caminho' ? 
                                                                        (   
                                                                            <> 
                                                                                <label className='container-infos-time'>  Guincho a {cliente.tempo} min da ocorrência </label>
                                                                                <label className='container-infos-employer'> {cliente.namePrestador} </label>
                                                                            </>
                                                                           
                                                                        )
                                                                        : null
                                                                    }
                                                                    
                                                                </div>
                                                            </> 
                                                        )
                                                    })}
                                                        
                                                        
                                                </CTableDataCell>
                                            </CTableRow>
                                        </CTableBody>
                                    </CTable>
        
                                </div>
        
                            </CCol>

                        )
                            : null
                        
                    }
                    
                    {flag == false  && flag2==false ? 
                        (
                            <CCol>
                                <br />
                                <h3>Acompanhar</h3>
                                <CRow>
                                    <CCol className="container-header-followCall">
                                        <div className='container-header-client'>
                                            <label className='font-follow-titulo'>{client.name}</label>
                                            <br />
                                            <label className='font-follow-sub'> XYZ 1415</label>
                                            <br />
                                            <div className='container-informacoes'>
                                                <label className='container-infos-type2'  > Tipo </label>
                                                <label className='container-infos-status2' > Iniciado </label> 
                                                <label className='container-infos-time2'> Tempo </label>
                                                <label className='container-infos-employer2'> Nome Prestador </label>
                                            </div>
                                        </div>
                                    </CCol>
                                    <CCol className="container-header-client-restart">
                                        <CButton onClick={removeCli} className='container-btn-follow' size='md' variant='outline' color="dark">
                                            <CIcon icon={cilChevronLeft} size="lg"/>
                                        </CButton>
                                    </CCol>
                                </CRow>

                                <hr />

                                {/* VERIFICA o status da chamada */}
                                <div className='container-body-clientInfo'>
                                    {client.status == "Prestador a caminho" ? 
                                        (   
                                            <> 
                                                <div className='container-body-values1'>
                                                    <h3> { client.namePrestador }</h3>
                                                    <label className='font-assistence-titulo'>Local iniciado pelo prestador</label>
                                                    <br />
                                                    <label  > {client.namePrestador}</label>
                                                    <br />
                                                    <label className='container-info-km'  > asdas  </label>
                                                    <label className='container-infos-km-time' > Iniciado </label> 
                                                </div>
                                                <hr />
                                                
                                                <label className='font-assistence-titulo'>Rota selecionada</label>
                                                <div className='container-prestador-select'>
                                                    <label className='font-assistence-sub'>{client.namePrestador}</label>
                                                    <br />
                                                    <label className='label-listPrestadores'  > {client.status} </label>
                                                    <label className='label-listPrestadores'  > {client.distance} KM </label>
                                                    <label className='label-listPrestadores'  > {client.tempo} Min </label>
                                                </div>
                                                <br /> <br />
                                                <CButton className='btn-backList' onClick={removePrestador} color='secondary'>Voltar para lista</CButton>
                                                <CButton className='btn-select'  color='success'> Selecionar {prestadorSelecionado.name}</CButton>   
                                            </>
                                           
                                            
                                        )
                                            :
                                        (   
                                            <>  
                                                {infoPrestador.addressPrestador !=  '' ?
                                                    (
                                                        <div className='container-body-values'>
                                                            <label className='font-assistence-titulo'>Origem Prestador</label>
                                                            <br />
                                                            <label className='font-assistence-sub'>   {infoPrestador.addressPrestador} </label>
                                                            <br />
                                                            <label className='label-listPrestadores'  > {infoPrestador.distanceProviderOcorrency} </label>
                                                            <label className='label-listPrestadores'  > {infoPrestador.timeProviderOcorrency} </label>
                                                            <CButton onClick={verificarInfos}>Selecionar prestador </CButton>
                                                       </div>
                                                     )
                                                : null    
                                                }
                                                
            
                                                <div className='container-body-values'>
                                                    <label className='font-assistence-titulo'>Ocorrência</label>
                                                    <br />
                                                    <label className='font-assistence-sub'> Av XXX  -- pegar valor do end point </label>
                                                </div>
           
                                                <div className='container-body-values'>
                                                    <label className='font-assistence-titulo'>Destino</label>
                                                    <br />
                                                    <label className='font-assistence-sub'> Av XXX  -- pegar valor do end point </label>
                                                </div>
                                                {/* <CButton onClick={routeUser} > Ver no Mapa  </CButton>  */}
                                           


                                                <hr />
                                                <div> 
                                                <label className='font-assistence-titulo'>Lista de prestadores</label>
                                                {listPrestadores.map(item => {
                                                    return(
                                                        <>
                                                            <CRow className='container-render-listPrestadores'>
                                                                <CCol className='container-listPrestadores'>
                                                                    <label className='font-assistence-sub'>{item.name}</label>
                                                                    <br />
                                                                    <label className='label-listPrestadores'  > {item.status} </label>
                                                                    {/*<label className='label-listPrestadores'  > {infoPrestador.distanceProviderOcorrency} </label>
                                                                    <label className='label-listPrestadores'  > {infoPrestador.timeProviderOcorrency} </label> */}
                                                                </CCol>
                                                                <CCol className='container-listPrestadores' >
                                                                    <br />
                                                                    <CButton className='btn-selectRoute' onClick={()=>{selectPrestador(item)}} color='dark'>Ver Rota</CButton>
                                                                </CCol>
                                                            </CRow>
                                                            <hr />
                                                        </> 
                                                    )
                                                })}
                                            </div> 
                                            </>
                                        )
                                    
                                    }
                                
                                   
                                </div> 

                             
                               
                            </CCol>
                        )
                        :null
                    }

                    {flag2 == true ?
                        (   
                            <CCol>
                                <div className='container-followCall-confirmValues'>
                                    <h2>Confirmar valores</h2>
                                    <hr />
                                    <div className='container-values'>
                                        <label className='font-assistence-titulo'> Nome do cliente</label>
                                        <br />
                                        <label className='font-assistence-sub'> { client.name} </label>
                                    </div>
                                  
                                    <div className='container-values'>
                                        <label className='font-assistence-titulo'> Placa</label>
                                        <br />
                                        <label className='font-assistence-sub'> { client.placa} </label>
                                    </div>

                                    <div className='container-values'>
                                        <label className='font-assistence-titulo'> Nome Prestador </label>
                                        <br />
                                        <label className='font-assistence-sub'>   {prestadorSelecionado.name} </label>
                                        <br />
                                        <label className='font-assistence-titulo'> Origem Prestador</label>
                                        <br />
                                        <label className='font-assistence-sub'>   {infoPrestador.addressPrestador} </label>
                                        <br />
                                        <label className='font-assistence-titulo'>Telefone:</label>
                                        <label className='font-assistence-sub'>   35 998383921 </label>
                                        <br />
                                        <label className='label-listPrestadores'  > {infoPrestador.distanceProviderOcorrency} </label>
                                        <label className='label-listPrestadores'  > {infoPrestador.timeProviderOcorrency} </label>
                                    </div>

                                    <div className='container-values'>
                                        <label className='font-assistence-titulo'> Ocorrência</label>
                                        <br />
                                        <label className='font-assistence-sub'>{infoPrestador.addressOcorrency} </label>
                                    </div>

                                    <div className='container-values'>
                                        <label className='font-assistence-titulo'> Destino</label>
                                        <br />
                                        <label className='font-assistence-sub'> {infoPrestador.addressDestiny} </label>
                                    </div>
                                    
                                    <br />
                                    <CButton className="btn-back-confirm" variant='outline' color='dark' onClick={backPrestador}> Voltar </CButton>
                                    <CButton className="btn-start-confirm" color='success' onClick={concluir}> Iniciar Prestador </CButton>
                                    
                                </div>
                                
                            </CCol>
                           
                        )

                        :null
                    
                    }

                    {/* Veririficar informações e iniciar atendimento  */}
                    
                    <CCol> 
                        <MapFollow  cliente={client} providerInfos={pegainfos} prestador={prestadorSelecionado} />
                        {/* {flagMap == true ?  
                            (
                                <> 
                                    <MapFollow  cliente={client} providerInfos={pegainfos} prestador={prestadorSelecionado} />
                                    <h2> ssd {client.name}</h2>
                                    <h2> sds{prestadorSelecionado.name}</h2>
                                </>)
                            : (<> <MapOff />  </> )
                        }
                           */}
                       
                    </CCol>
                </CRow>
            </>
        )
    }

    
}


export default FollowCall