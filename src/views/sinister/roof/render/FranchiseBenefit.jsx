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


const FranchiseBenefit = (props) =>{
    const data = [
        {tipoDesc:'Tabelo de benefício', DescConcedido:'Segurado', valor:'123,90' } ,
        {tipoDesc:'Desconto Contratado', DescConcedido:'Segurado', valor:'24.424,90'},
    ]

    return (
        <> 
            <div className='container-dados-ocorrencia'>
                <div className='container-conteudo'>
                    <label className='titulo-container-card'> Benefício: desconto na franquia </label>
               
                    <CTable >
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell className='conteudo-label-titulo' scope="col"> Tipo de desconto na franquia</CTableHeaderCell>
                                <CTableHeaderCell className='conteudo-label-titulo' scope="col"> Desconto concedido por</CTableHeaderCell>
                                <CTableHeaderCell className='conteudo-label-titulo' scope="col"> Valor</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>

                        <CTableBody>
                            
                                {data.map(item =>{
                                    return(
                                        
                                        <CTableRow>
                                            <CTableDataCell className='conteudo-label-info'> {item.tipoDesc}   </CTableDataCell>
                                            <CTableDataCell className='conteudo-label-info'> {item.DescConcedido}       </CTableDataCell>
                                            <CTableDataCell className='conteudo-label-info'> {item.valor}   </CTableDataCell>
                                        </CTableRow>
                                        
                                    )
                                })}
                            
                        </CTableBody>
                        
                    </CTable>
                    <div className='container-franquia-pagar'>
                        <p className='font-franquia-total'> Franquia a pagar: R$ 23.890,99 </p>
                    </div>
                  
                   
                </div>
            </div>
        </>
    )
}

export default FranchiseBenefit