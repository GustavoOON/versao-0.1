import react, {useEffect} from 'react'
import './follow.css'
import {
    CCard, 
    CCardBody,
    CButton ,
    CRow,
    CCol,
    CNavItem,
    CFormInput,
    CProgress,
    CProgressBar
  } from '@coreui/react'



// status
import Abertura from './status/Abertura'
import Vistoria from './status/Vistoria'
import EmAndamento from './status/Andamento'
import Concluido from './status/Concluido'
import FollowHeader from './render/FollowHeader'

const Follow = (props) =>{

    // ver como vai ser feita a requisicao da api, os dados podem vir da home via props OU sera pego o numero do protocolo
    // e aqui fazer uma requisicao para pegar os dados do devido protocolo
    useEffect(()=>{
        console.log('N protocolo: ', props.protocolo)
    },[])

    // props deve ter o status do protocolo  -- concluido, atual, fechado (ainda nao chegou a ves) e falha
    const status = {abertura:'concluido', vistoria:'atual', emAndamento:'fechado', concluido:'falha'}
    const msgs = [
        'Sinistro está vendo tratado com o analista responsável',
        'O carro foi vistoriado na quinta-feira, dia 23 de dezembro às 18h23',
        'Abertura de aviso: quinta-feira, dia 23 de dezembro às 17h23',
    ]
    return (
        <> 

             <CCard className="cardFollow">
                <CCardBody>

                    <FollowHeader protocolo={props.protocolo} />
 
                    <CRow>
                        <CCol>
                            <Abertura status={status} />
                        </CCol>

                        <CCol>
                            <Vistoria status={status} />
                        </CCol>

                        <CCol>
                            <EmAndamento status={status} />
                        </CCol>

                        <CCol>
                            <Concluido status={status} />
                        </CCol>
                    </CRow>

                    <div className='container-logs'>
                        {msgs.map((msg,index) =>{
                            
                            if(index == 0 ){
                                return (
                                    <div className='container-msg-atual'>
                                        <p> {msg} </p>
                                    </div>
                                )
                            }else{
                                return (
                                    <div className='container-msg'>
                                        <p> {msg} </p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </CCardBody>
            </CCard>
            
            
        </>
    )
}

export default Follow