import React, { useState } from 'react'

import './users.css'

// componentes
import Contrato from './render/Contract'
import Funcionario from './render/Employer'
import Data from './render/Data'
import Valor from './render/Valor'
import Pagamento from './render/Pagamento'
import Comprovante from './render/Comprovante'

import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableRow,
    CCard,
    CCardBody,
    CTableHead,
    CTableHeaderCell,
    CNavbar,
    CForm,
    CFormInput,
    CButton,
    CNavbarBrand ,
    CRow,
    CCol,
   
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
  import {cilMagnifyingGlass } from '@coreui/icons'

const Users = () =>{

    const [dados, setDados] = useState([
        {nContrato:1, funcionario:'GUstavo Alcantara', data:'12/12/2022', valor:22.20, pagamento:2233, comprovante:'aprovado'},
        {nContrato:2, funcionario:'Pedro da', data:'12/02/2002', valor:12.20, pagamento:4433, comprovante:'analise'},
        {nContrato:3, funcionario:'Gislene a', data:'12/10/2012', valor:122.20, pagamento:2633, comprovante:'aprovado'},
        {nContrato:4, funcionario:'Yuri Almeida', data:'20/8/2020', valor:20.20, pagamento:8293, comprovante:'Não aprovado'},
        {nContrato:5, funcionario:'GUstavo Alcantara', data:'12/12/2022', valor:22.20, pagamento:2233, comprovante:'aprovado'},
        {nContrato:6, funcionario:'Pedro d', data:'12/02/2002', valor:12.20, pagamento:4433, comprovante:'analise'},
        {nContrato:7, funcionario:'Gislene w', data:'12/10/2012', valor:122.20, pagamento:2633, comprovante:'aprovado'},
        {nContrato:8, funcionario:'Yuri Almeida', data:'20/8/2020', valor:20.20, pagamento:8293, comprovante:'Não aprovado'},
        {nContrato:9, funcionario:'GUstavo a', data:'12/12/2022', valor:22.20, pagamento:2233, comprovante:'aprovado'},
        {nContrato:10, funcionario:'Pedro a', data:'12/02/2002', valor:12.20, pagamento:4433, comprovante:'analise'},

    ])

    return (
        <>
            
            <CCard className="cardsFinance2">
                <CCardBody>
                    <CRow className='container-linha-top-card'>
                        <CCol  className = 'esq23'>
                            <label className="fincTitulo">Funcionários</label>
                            <br />
                            <label  className="fincSub"> Dez 2021</label>
                        </CCol>
                        
                        <CCol className='dir23'>
                                <CForm className="d-flex">
                                    <CFormInput type="search" className="me-2" placeholder="Pesquisar" />
                                    <CButton type="submit" color='secondary' className='buttonCss' >
                                        <CIcon icon={cilMagnifyingGlass}  size="md" /> 
                                    </CButton>
                                    <CButton type="submit" color="secondary" className='buttonCss' >
                                        Filtrar
                                    </CButton>
                                    <CButton  disabled type="submit" color="secondary" >
                                        Adicionar
                                    </CButton>
                                </CForm>
                        </CCol>
                    </CRow>            
                    
                    <CTable striped hover>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">N° Contrato</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Funcionário</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Data</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Valor (R$)</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Pagamento</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Comprovante</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {dados.map(i => (
                                <CTableRow>
                                    <CTableDataCell>
                                        <Contrato contrato={i.nContrato}/>
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <Funcionario funcionario={i.funcionario}/>
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <Data data={i.data}/>
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <Valor valor={i.valor}/>
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <Pagamento pagamento ={i.pagamento}/>
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <Comprovante comprovante={i.comprovante} />
                                    </CTableDataCell>
                                </CTableRow>
                            ))}
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </>
    )
}


export default Users