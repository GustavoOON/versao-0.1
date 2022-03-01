import React, {useState} from 'react'
import './sinister.css'


import {
    CCard, 
    CCardBody,
    CFormInput ,
    CRow,
    CCol,
    CNavItem,
    CButton ,
  } from '@coreui/react'

import Home from './home/Home'
import Follow from './acompanhamento/Follow'

import CIcon from '@coreui/icons-react'
import {cilSearch } from '@coreui/icons'

import SinisterChart from './home/render/SinisterChart'
import EventsChart from './home/render/EventsChart'
import CalendarOcorrencias from './home/render/Calendar'
import Segurado from './insured/Insured'
import Ocorrence from './ocorrence/Ocorrence'
import RoofUser from './roof/Roof'
import Oficina from './oficina/Workshop'


const Sinistro = () =>{
    const [qtd_total_sinistro, setQtd_total_sinistro] = useState(34)

    const [escolha, setEscolha] = useState('home') // conta, notificacoes, privacidade, ajuda
    const [op1, setOp1] = useState(true)
    const [op2, setOp2] = useState(false)
    const [op3, setOp3] = useState(false)
    const [op4, setOp4] = useState(false)
    const [op5, setOp5] = useState(false)
    const [op6, setOp6] = useState(false)

    const [protocolo, setProtocolo] = useState() // protocolo que sera pesquisa
    let value
    const teste = [ 111, 222, 333, 444, 555, 666, 777] // protocolos que estão no sistema
    const [busca2, setBusca] = useState('')

    const pegando = (e) =>{
        value = e.target.value
    }

    const escolhaProtocolo = () =>{

        var i
        for( i =0 ; i<teste.length; i++){
            if(value == teste[i]){
                setProtocolo(teste[i])
                setOp1(false)
                setOp2(true)
                setEscolha('acompanhamento')
                break
            }else{
                console.log('error protocol')
            }
        }
    }

    const escolhaMenu = (e) =>{
        console.log('mostra e', e)

        if(e == 'home'){
            setOp1(true)
            setOp2(false)
            setOp3(false)
            setOp4(false)
            setOp5(false)
            setOp6(false)
        }else if(e == 'acompanhamento'){
            setOp1(false)
            setOp2(true)
            setOp3(false)
            setOp4(false)
            setOp5(false)
            setOp6(false)

        }else if(e == 'segurado'){
            setOp1(false)
            setOp2(false)
            setOp3(true)
            setOp4(false)
            setOp5(false)
            setOp6(false)

        }else if(e == 'ocorrencia'){
            setOp1(false)
            setOp2(false)
            setOp3(false)
            setOp4(true)
            setOp5(false)
            setOp6(false)

        }else if(e == 'cobertura'){
            setOp1(false)
            setOp2(false)
            setOp3(false)
            setOp4(false)
            setOp5(true)
            setOp6(false)

        }else if(e == 'oficina'){
            setOp1(false)
            setOp2(false)
            setOp3(false)
            setOp4(false)
            setOp5(false)
            setOp6(true)
        }
        setEscolha(e)
        
        // falta fazer os if dos OPs
    }

    return (
        <>
            <div className=" cardSetting">
                    
                <CRow>

                    <CCol xs={2} className='cardEsq'> 

                        {protocolo == null ? (
                            <> 
                               <div className='containerSiderBar'>
                                    <CButton color="dark" className='btn-sidebar-sinistro' active={op1} variant='ghost' onClick={() => escolhaMenu('home')} >Home</CButton>
                                    <hr />
                                    <CButton color="dark" className='btn-sidebar-sinistro' disabled active={op2} variant='ghost' onClick={() => escolhaMenu('acompanhamento')} >Acompanhamento</CButton>
                                    <br />
                                    <CButton color="dark" className='btn-sidebar-sinistro' disabled active={op3} variant='ghost' onClick={() => escolhaMenu('segurado')} >Segurado e analista</CButton>
                                    <br />
                                    <CButton color="dark" className='btn-sidebar-sinistro' disabled active={op4} variant='ghost' onClick={() => escolhaMenu('ocorrencia')} >Ocorrência e veículo</CButton>
                                    <br />
                                    <CButton color="dark" className='btn-sidebar-sinistro' disabled active={op5} variant='ghost' onClick={() => escolhaMenu('cobertura')} >Cobertura e franquias</CButton>
                                    <br />
                                    <CButton color="dark" className='btn-sidebar-sinistro' disabled active={op6} variant='ghost' onClick={() => escolhaMenu('oficina')} >Oficina</CButton>
                                </div>
                            </>
                        )
                            : (
                                <div className='containerSiderBar'>
                                    <CButton color="dark" className='btn-sidebar-sinistro' active={op1} variant='ghost' onClick={() => escolhaMenu('home')} >Home</CButton>
                                    <hr />
                                    <CButton color="dark" className='btn-sidebar-sinistro' active={op2} variant='ghost' onClick={() => escolhaMenu('acompanhamento')} >Acompanhamento</CButton>
                                    <br />
                                    <CButton color="dark" className='btn-sidebar-sinistro' active={op3} variant='ghost' onClick={() => escolhaMenu('segurado')} >Segurado e analista</CButton>
                                    <br />
                                    <CButton color="dark" className='btn-sidebar-sinistro' active={op4} variant='ghost' onClick={() => escolhaMenu('ocorrencia')} >Ocorrência e veículo</CButton>
                                    <br />
                                    <CButton color="dark" className='btn-sidebar-sinistro' active={op5} variant='ghost' onClick={() => escolhaMenu('cobertura')} >Cobertura e franquias</CButton>
                                    <br />
                                    <CButton color="dark" className='btn-sidebar-sinistro' active={op6} variant='ghost' onClick={() => escolhaMenu('oficina')} >Oficina</CButton>
                                </div>
                            )
                        }
                        
                    </CCol>

                    <CCol xs={10} className='cardDir' >

                        {escolha == 'home' ? (
                            <> 
                                <br />
                                <CRow>
                                    <CCol xs={8}>
                                        <CCard className='card1'>
                                            <CCardBody>
                                                <label className='text-titulo'> Pesquise o número da ocorrência</label>
                                                <CRow>
                                                    <CCol xs={10}>
                                                        
                                                        <CFormInput type="search" onChange={pegando} value={value} className="me-2" placeholder="Pesquisar" />
                                                     </CCol>
                                                     <CCol xs={2}>
                                                        <CButton color='light' onClick={escolhaProtocolo} > 
                                                            <CIcon icon={cilSearch}  size='lg' /> 
                                                        </CButton>
                                                     </CCol>
                                                </CRow>
                                            </CCardBody>
                                        </CCard>
                                    </CCol>

                                    <CCol xs={4}>
                                        <CCard className='card1'>
                                            <CCardBody>
                                                <div className='card2'>
                                                    <h4>Total de sinistro já abertos</h4>
                                                    <h2>{qtd_total_sinistro}</h2>
                                                </div>
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                </CRow>

                                <br />

                                <CRow>
                                    <CCol xs={8}>
                                        <CCard className='cardEsqSinistro'>
                                            <CCardBody>
                                                <SinisterChart />
                                            </CCardBody>
                                        </CCard>
                                        <br />
                                        <CCard className='cardEsquerda'>
                                            <CCardBody>
                                                <EventsChart />
                                            </CCardBody>
                                        </CCard>
                                    </CCol>

                                    <CCol xs={4}>
                                        <CCard className='card-Dir'>
                                            <CCardBody>
                                                <CalendarOcorrencias /> 
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                </CRow>
                                <br />
                            </>
                        )
                            : null
                        }

                        {escolha == 'acompanhamento' ? (
                            <> 
                                <Follow  protocolo={protocolo}/>
                            </>
                        )
                            : null
                        }

                        {escolha == 'segurado' ? (
                            <> 
                              <Segurado protocolo={protocolo} />
                            </>
                        )
                            : null
                        }

                        {escolha == 'ocorrencia' ? (
                            <> 
                                <Ocorrence protocolo={protocolo} />
                            </>
                        )
                            : null
                        }

                        {escolha == 'cobertura' ? (
                            <> 
                                <RoofUser protocolo={protocolo} />
                            </>
                        )
                            : null
                        }

                        {escolha == 'oficina' ? (
                            <> 
                                <Oficina protocolo={protocolo} />
                            </>
                        )
                            : null
                        }

                    </CCol>

                </CRow>
            </div>
            <br />
        </>
    )
}

export default Sinistro