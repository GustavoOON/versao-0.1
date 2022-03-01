import React, { useState } from 'react'

// importando Render
import Protocolo from './RenderAtendimentos/Protocolo'
import Cliente from './RenderAtendimentos/Cliente'
import DataProtocolo from './RenderAtendimentos/Data'
import Funcionario from './RenderAtendimentos/Funcionario'
import Status from './RenderAtendimentos/Status'

import ButtonRelatory from '../btns/ButtonCall'

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
   
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
  import {cilMagnifyingGlass } from '@coreui/icons'


const AtendimentosRealizados = () =>{

    const [atendimentos, setAtendimentos] =   useState(
        [
            {protocolo:123456, data:"12/12/2012", status:'Encerrado', funcionario:'Paulo Jorge', cliente:'sim ' },
            {protocolo:454654, data:"22/02/2022", status:'Em Aberto', funcionario:'Paula Leticia', cliente:'Não ' },
            {protocolo:4798947, data:"28/10/2022", status:'Em Aberto', funcionario:'Afranio Alcantara', cliente:'Não ' },
        ]
    )    
    let busca
    const [dados, setDados] = useState(atendimentos)
    const [busca2, setBusca] = useState('')
    const dados2 =[]

    const pegandoBusca = (e) =>{
        setBusca(e.target.value)
        busca = e.target.value
        BuscaUser()
    }

    const BuscaUser = () => {
        let auxBusca = busca.toLocaleLowerCase()

        atendimentos.map(item =>{
      
            let auxStatus = item.status.toLocaleLowerCase()     // ALTERAR AQUI DE ACORDO COM OS CAMPOS DA API
            let auxFunc = item.funcionario.toLocaleLowerCase()   // ALTERAR AQUI DE ACORDO COM OS CAMPOS DA API
            if((auxStatus.includes(auxBusca) || (auxFunc.includes(auxBusca)))){
              dados2.push(item)
              setDados(dados2)
            }
        })
    }

    return (
        <> 
            <CCard className="cardProtocolo">
                <CCardBody>
                    <CNavbar >
                        <CNavbarBrand href="#"></CNavbarBrand>
                        <CForm className="d-flex">
                            <CFormInput type="search" className="me-2" onChange={pegandoBusca} value={busca2} placeholder="Pesquisar" />
                            {/* <CButton type="submit" color='secondary' className='buttonCss' >
                                <CIcon icon={cilMagnifyingGlass}  size="md" /> 
                               
                            </CButton> */}
                            <ButtonRelatory   />
                        </CForm>
                    </CNavbar>
                    <CTable striped hover>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">Protocolo</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Data</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Funcionário</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Cliente</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {dados.map(item => (
                                <CTableRow>
                                    <CTableDataCell>
                                        <Protocolo protocolo={item.protocolo} />
                                    </CTableDataCell>
                                        
                                    <CTableDataCell>
                                        <DataProtocolo data={item.data} />
                                    </CTableDataCell>

                                    <CTableDataCell>
                                        <Status status={item.status} />
                                    </CTableDataCell>
                                        
                                    <CTableDataCell>
                                        <Funcionario funcionario={item.funcionario} />
                                    </CTableDataCell>

                                    <CTableDataCell>
                                        <Cliente cliente={item.cliente} />
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

export default AtendimentosRealizados