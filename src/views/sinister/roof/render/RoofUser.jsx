import React from 'react'

import {
    CCard, 
    CTable,
    CButton ,
    CRow,
    CTableRow,
    CTableHead,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell
  } from '@coreui/react'


const RoofUser = (props) =>{

    const data = [
        {cobertura:'Compreensiva 01', verba:'LMI Casco',         limiteMax:'32.478,57', franquia:'32.478,57', fatorAjuste:'0' } ,
        {cobertura:'CR ou Desc. FQR', verba:'07 D BAS/DESC FRQ', limiteMax:'48,89',     franquia:'48,89',     fatorAjuste:'0'},
        {cobertura:'Carro Reserva',   verba:'15 dias basico',    limiteMax:'47,90',     franquia:'47,90',     fatorAjuste:'0'},
        {cobertura:'Assistencia',     verba:'Completo PL3',      limiteMax:'238,90',    franquia:'238,90',    fatorAjuste:'0'},
        {cobertura:'RCF-V',           verba:'RCFV-DM',           limiteMax:'12.989,90', franquia:'12.989,90', fatorAjuste:'0'},
        {cobertura:'RCF-3',           verba:'RCFV-DC',           limiteMax:'11.578,90', franquia:'11.578,90', fatorAjuste:'0'},
        {cobertura:'Danos morais',    verba:'Danos Mortais-TAB', limiteMax:'2.567,89',  franquia:'2.567,89',  fatorAjuste:'0'},
    ]
    return (
        <> 
            <div className='container-dados-ocorrencia'>
                <div className='container-conteudo'>
                    <label className='titulo-container-card'> Coberturas </label>
               
                    <CTable >
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell className='conteudo-label-titulo' scope="col">Cobertura</CTableHeaderCell>
                                <CTableHeaderCell className='conteudo-label-titulo' scope="col">Verba</CTableHeaderCell>
                                <CTableHeaderCell className='conteudo-label-titulo' scope="col">Lim Máx. Indenização</CTableHeaderCell>
                                <CTableHeaderCell className='conteudo-label-titulo' scope="col">Franquia</CTableHeaderCell>
                                <CTableHeaderCell className='conteudo-label-titulo' scope="col">Fator de ajuste</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>

                        <CTableBody>
                            
                                {data.map(item =>{
                                    return(
                                        
                                        <CTableRow>
                                            <CTableDataCell className='conteudo-label-info'> {item.cobertura}   </CTableDataCell>
                                            <CTableDataCell className='conteudo-label-info'> {item.verba}       </CTableDataCell>
                                            <CTableDataCell className='conteudo-label-info'> {item.limiteMax}   </CTableDataCell>
                                            <CTableDataCell className='conteudo-label-info'> {item.franquia}    </CTableDataCell>
                                            <CTableDataCell className='conteudo-label-info'> {item.fatorAjuste} </CTableDataCell>
                                        </CTableRow>
                                        
                                    )
                                })}
                            
                        </CTableBody>

                    </CTable>

                   
                </div>
            </div>
        </>
    )
}

export default RoofUser