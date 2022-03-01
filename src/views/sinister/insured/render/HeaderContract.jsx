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



const HeaderContract = (props) => {


    //  PEGAR VALORES NOS END-POINTS


    useEffect(()=>{
        console.log('props no header', props.protocolo);
    },[])

    return(
        <div className='container-header-contract'>
            <CRow>
                <CCol>
                    <label className='titulo-contract'> Nº do Contrato</label>
                    <h1>{props. protocolo } 332</h1> 
                </CCol>

                <CCol>
                    <div className='container-contract-item'>
                        <label className='titulo-contract'> Item </label>
                        <br />
                        <label className='titulo-infos'> 2 </label>
                        <br />
                    </div>
                </CCol>

                <CCol>
                    <label className='titulo-contract'> Filial </label>
                    <br />
                    <label className='titulo-infos'> Av. Barão Homen de Melo - BH</label>
                    <br />
                </CCol>

                <CCol>

                    <label className='titulo-contract'> Produto </label>
                    <br />
                    <label className='titulo-infos'> Plano Gold</label>
                    <br />
                   

                </CCol>

                <CCol>
                    <label className='titulo-contract'> Vigência </label>
                    <br />
                    <label className='titulo-infos'> 21/03/2022 a </label>
                    <br />
                    <label className='titulo-infos'> 23/03/2022</label>
                    <br />
                </CCol>

                <CCol>
                    <div >
                        <label className='titulo-contract'> Canal </label>
                        <br />
                        <label className='titulo-infos'> AFFNITY </label>
                    </div>
                </CCol>

                <CCol>
                    <div >
                        <label className='titulo-contract'> Projeto </label>
                        <br />
                        <label className='titulo-infos'> Lada Vest Sport </label>
                    </div>
                </CCol>
            </CRow>
        
        
        </div> 
    )
}

export default HeaderContract