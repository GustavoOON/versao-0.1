import React, {useState} from 'react'
import {
    CRow,
    CCol,
    CNavbar,
    CForm,
    CFormInput,
    CNavbarNav,
    CButton,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CFormLabel

  } from '@coreui/react'
import './css/typeService.css'
import { cilUserPlus , cilArrowThickFromRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'


const ListService = () =>{

    const listTiposServicos = [
        {cod:1, name:'borracheiro', qtdPrestadores: 19},
        {cod:2, name:'Motoboy', qtdPrestadores: 9},
        {cod:3, name:'Guincho', qtdPrestadores: 12},
        {cod:4, name:'mecânico ', qtdPrestadores: 6},
    ]

    const prestadores = [
        {nome:'zeca baleiro ' , tel:990998923 ,tipoServicoCod:1},
        {nome:'Gaucho ' ,tel:990998923 ,tipoServicoCod:2},
        {nome:'leila ' ,tel:990998923, tipoServicoCod:2},
        {nome:'luiziinho ' ,tel:990998923, tipoServicoCod:3},
        {nome:'Paulao' ,tel:990998923, tipoServicoCod:4},
        {nome:' Hiago' ,tel:990998923, tipoServicoCod:3},
        {nome:'leila silva ' ,tel:990998923, tipoServicoCod:1},
        {nome:'luiziinho despachante ' ,tel:990998923, tipoServicoCod:3},
    ]

    const [addProvider, setAddProvider] = useState()
    const [openService, setOpenService] = useState({cod:null , name:'', qtdPrestadores: null},)      

    const Providers = e =>{
        console.log(e)
    }

    const services = e => {
        console.log(e)
        setOpenService(e)
    }

    const clear = () =>{
        setOpenService({cod:null , name:'', qtdPrestadores: null},) 
    }

    const [newProviderMenu, setNewProviderMenu] = useState(false)

    function opemNewPrestadorMenu(){
        setNewProviderMenu(true)
    }

   function  CloseNewPrestadorMenu () {
    setNewProviderMenu(false)
   }

    return (
        <> 
           

 
            <CRow > 
                <CCol className='container-typeService-left'>
                    <CNavbar expand="lg"  className="menuDeviceContainer">
                        {newProviderMenu == true ? 
                            ( <h4 className='container-titulo-header'> Novo tipo prestador</h4>)
                                :
                            ( <h4 className='container-titulo-header'> Tipos de prestadores</h4>)
                        }
                       
                        <CNavbarNav className="me-auto mb-2 mb-lg-0">
                        </CNavbarNav>
                        <CForm className="d-flex">
                            {openService.cod != null ? 
                                (
                                    <CButton variant='ghost' color='dark' onClick={clear}> Limpar </CButton>
                                )
                                : null
                            }
                            
                            <CFormInput type="search" size='md' color="dark"  className="me-2" placeholder="Pesquise " />
                            <CButton  variant="ghost"  onClick = {opemNewPrestadorMenu} color="dark" >
                                <CIcon icon={cilUserPlus} size="xl"/>
                            </CButton> 
                        </CForm>
                    </CNavbar>
                    <hr />
                    {newProviderMenu == true ? 
                        (
                            <>
                                <div>
                                    <CFormLabel > Digite o tipo </CFormLabel>
                                    <CFormInput type="text" placeholder="Motoboy, Mecânico, ..."/>   
                                </div>
                                <br /> 
                                <hr />
                                <CButton    onClick = {CloseNewPrestadorMenu}  >
                                    Voltar
                                </CButton> 
                                <CButton  className='btn-listNewProvider-save'  color='success' onClick = {CloseNewPrestadorMenu}>
                                    Salvar
                                </CButton> 
                            </>
                        )
                        :null
                    }

                    {newProviderMenu == false ? 
                        (
                            <>
                             
                                <CTable >
                                    <CTableHead>
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">Tipo</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Qtd Disponível</CTableHeaderCell>
                                            {/* <CTableHeaderCell scope="col">Adicionar Prestador</CTableHeaderCell> */}
                                            <CTableHeaderCell scope="col">Ver prestadores</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>

                                        {listTiposServicos.map((item, index) => {
                                            return (
                                                <CTableRow>
                                                    <CTableDataCell>{item.name}</CTableDataCell>
                                                    <CTableDataCell>{item.qtdPrestadores}</CTableDataCell>
                                                    {/* <CTableDataCell> <CButton onClick={() =>  {addProvider(item)}}> Adicionar prestador </CButton> </CTableDataCell> */}
                                                    <CTableDataCell> <CButton size='sm' variant='outline' color='dark' onClick={ () =>{services(item)}}> Ver prestadores </CButton> </CTableDataCell>
                                                </CTableRow>
                                            )
                                        })}
                                        
                                        
                                    </CTableBody>
                                </CTable>
                            </>
                        )
                        :null
                    }

                    

                </CCol>

                <CCol className='container-typeService-right'>
                    {openService.cod != null ? 
                        ( 
                            <> 
                                <div className='container-header-service-providers'>
                                    <label className='font-header'>Prestadores {openService.name}</label>
                                    <CButton className='btn-clear-service' variant='ghost' color='dark' onClick={clear}> <CIcon icon={cilArrowThickFromRight} size="xl"/></CButton>
                                </div>
                                <hr />
                                <CTable >
                                    <CTableHead>
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Telefone</CTableHeaderCell>
                                            {/* <CTableHeaderCell scope="col">Adicionar Prestador</CTableHeaderCell> */}
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                            {prestadores.map( (item,index) => {
                                                if(item.tipoServicoCod == openService.cod){
                                                    return (
                                                        <> 
                                                           <CTableRow>
                                                                <CTableDataCell>{item.nome}</CTableDataCell>
                                                                <CTableDataCell>{item.tel}</CTableDataCell>
                                                            </CTableRow>
                                                        </>
                                                    )
                                                }
                                            })} 
                                    </CTableBody>
                                </CTable>

                               
                            </>
                        )
                            :
                            (
                                <div className='container-emptyScreem'>

                                    <h3>OON SEGUROS</h3>

                                </div>
                            )
                    }
                </CCol>
            </CRow>
        </>
    )
}


export default ListService