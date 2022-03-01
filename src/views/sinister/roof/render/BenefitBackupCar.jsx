import React from 'react'

import {
    CCard, 
    CTable,
    CButton ,
    CRow,
    CCol,
    CTableHead,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell
  } from '@coreui/react'
const BenefitBackupCar = () =>{

    return (
        <> 
            <div className='container-dados-ocorrencia'>
                <div className='container-conteudo'>
                    <label className='titulo-container-card'> Benefício: Carro reserva</label>
                    
                    <div className='container-beneficio-backup-car'>
                        <CRow >
                            <CCol>
                                <label className='conteudo-label-titulo'> Data/Hora da retirada do veículo </label>
                                <br />
                                <label className='conteudo-label-info'> 27/12/2021 as 09:00:00 </label>
                                <br />
                            </CCol>

                            <CCol>
                                <label className='conteudo-label-titulo'> Data/hora de devolução do veículo </label>
                                <br />
                                <label className='conteudo-label-info'> 05/01/2022 as 18:00:00 </label>
                                <br />
                            </CCol>
                        </CRow>
                    </div>
                   
                  
                   
                </div>
            </div>
        </>
    )
}

export default BenefitBackupCar