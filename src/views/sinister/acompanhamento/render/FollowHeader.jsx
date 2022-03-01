import React, {useEffect} from 'react'
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

import BtnPDF from './Btn-PDF'
import SentEmail from './Btn-SentEmail'
import BtnRelatos from './Btn-Relatos'

const HeaderFollow = (props) => {
    let aux
    useEffect(()=>{
        console.log('props no header', props.protocolo);
    },[])
    return(
        <>
            <CRow>
                <CCol>
                    <label> Nº da Ocorrência</label>
                    <h2>{props. protocolo}</h2> 
                </CCol>

                <CCol>
                    <label className='text-titulo-follow'   > Portal de origem</label>
                    <br />
                    <label className='text-conteudo-follow' > PET</label>
                    <br />
                    <label className='text-titulo-follow'   > Nome Analista</label>
                    <br />
                    <label className='text-conteudo-follow' > Lucas de Castro</label>
                    <br />
                </CCol>

                <CCol>
                    <label className='text-titulo-follow'   > Nome do atendente</label>
                    <br />
                    <label className='text-conteudo-follow2' > Gustavo Antonio Candido de Alcantara</label>
                    <br />
                    <label className='text-titulo-follow'   > Número do informe </label>
                    <br />
                    <label className='text-conteudo-follow2' > 58686 </label>
                    <br />
                </CCol>

                <CCol>
                    <label className='text-titulo-follow'   > Data/Hora do Aviso</label>
                    <br />
                    <label className='text-conteudo-follow' > 23/12/2021 17:23:02</label>
                    <br />
                    <label className='text-titulo-follow'   > Data/Hora da Ocorrência </label>
                    <br />
                    <label className='text-conteudo-follow' > 23/12/2021 17:23:02 </label>
                    <br />
                </CCol>

                <CCol>
                    <div className='container-pdf'>
                        {/* SENT DATA via PROPS */}
                        <BtnPDF />  
                        <br />
                        <SentEmail />
                        <br />
                        <BtnRelatos />
                        <br />
                    </div>
                </CCol>
            </CRow>
        
            <CProgress  className="mb-3">
                <CProgressBar  color='warning' value={50}/>
            </CProgress>
        </> 
    )
}

export default HeaderFollow