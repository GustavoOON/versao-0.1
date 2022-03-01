import React, { useState } from 'react'
import './setting.css'

import {
    CCard, 
    CCardBody,
    CButton ,
    CRow,
    CCol,
    CNavItem,
    CFormInput,
  } from '@coreui/react'

import ContSetting from './render/CountSetting'
import Profile from './render/Profile'
import Notificacao from './render/Notify'
import Privacidade from './render/Privacy'
import Help from './render/Help'

const Setting = () =>{

    const [escolha, setEscolha] = useState('conta') // conta, notificacoes, privacidade, ajuda
    const [op1, setOp1] = useState(true)
    const [op2, setOp2] = useState(false)
    const [op3, setOp3] = useState(false)
    const [op4, setOp4] = useState(false)

    

    const escolhaMenu = (e) =>{

        setEscolha(e)// pega escolha pro menu

        if(e == 'conta'){
            setOp1(true)
            setOp2(false)
            setOp3(false)
            setOp4(false)
        }else if(e == 'notificacoes'){
            setOp1(false)
            setOp2(true)
            setOp3(false)
            setOp4(false)

        }else if(e == 'privacidade'){
            setOp1(false)
            setOp2(false)
            setOp3(true)
            setOp4(false)
        }else{
            setOp1(false)
            setOp2(false)
            setOp3(false)
            setOp4(true)
        }
    }

    return (
        <> 
            <CCard className="w-100 cardSetting">
                <CCardBody>
                <CRow>

                    <CCol xs={2} className='cardEsq'> 

                        <div className='containerSiderBar'>
                            <CButton 
                                color="dark" 
                                className='btn-help-sideBar' 
                                active={op1} size='md' 
                                variant='ghost' 
                                onClick={() => escolhaMenu('conta')} 
                            >
                                <label className='font-btn-setting'> Perfil </label>    
                            </CButton>
                   
                            <br />
                            <CButton 
                                color="dark" 
                                className='btn-help-sideBar' 
                                active={op3} size='md' 
                                variant='ghost' 
                                onClick={() => escolhaMenu('privacidade')}
                            > 
                                <label className='font-btn-setting'>  Privacidade  </label> 
                            </CButton>
                            <br />

                            <CButton 
                                color="dark" 
                                className='btn-help-sideBar'
                                active={op4} 
                                size='md' 
                                variant='ghost' 
                                onClick={() => escolhaMenu('ajuda')}
                            >
                                <label className='font-btn-setting'>  Ajuda  </label> 
                            </CButton>

                        </div>
                        
                    </CCol>

                    <CCol xs={10} className='cardDir' >

                        {escolha == 'conta' ? (
                            <> 
                                <Profile />
                            </>
                        )
                            : null
                        }

                        {escolha == 'notificacoes' ? (
                            <> 
                                <Notificacao />
                            </>
                        )
                            : null
                        }

                        {escolha == 'privacidade' ? (
                            <> 
                               <Privacidade/>
                            </>
                        )
                            : null
                        }

                        {escolha == 'ajuda' ? (
                            <> 
                                <Help/>
                            </>
                        )
                            : null
                        }

                    </CCol>

                </CRow>
                </CCardBody>
            </CCard>
        </>
    )
 
}


export default Setting 