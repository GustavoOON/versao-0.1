import React, {useState, useEffect} from 'react'
import { BsSearch  } from 'react-icons/bs';

import {
    CButton,
    CTable,
    CNavbar,
    CCollapse,
    CFormSelect ,
    CNavbarBrand,
    CNavbarNav,
    CNavbarToggler,
    CFormInput,
    CForm,
    CTableHead,
    CTableHeaderCell,
    CTableDataCell,
    CTableRow,
    CTableBody  
  } from '@coreui/react'

const infoCars = () =>{
    const [visible, setVisible] = useState(false)  

   // obter informaçoes via end-point assinaturas
   const devices = [
       {name: "Joao" ,placa:"xxx-1234"  , distancia:39 },
       {name: "Maria" ,placa:"xyz-4321"  , distancia:19 },
       {name: "Betania" ,placa:"yyy-2222"  , distancia:9 },
       {name: "Paulo" ,placa:"ppp-1234"  , distancia:109 },
   ]

    return (
        <div > 
            <div className='container-info-cars'>
                <CNavbar expand="lg"  >
                    <CNavbarToggler
                      aria-label="Toggle navigation"
                      aria-expanded={visible}
                     
                    />
                    <CCollapse className="navbar-collapse" visible={visible}>
                      {/* <CIcon icon={cilUser } size="xl"/> */}
                      <CNavbarBrand> Dispositivos  </CNavbarBrand>
                      <CNavbarBrand> 
                        {/* <CFormSelect 
                          aria-label="Default select example"
                          options={options}
                          onChange={menuUsers}
                        
                        /> */}
                      </CNavbarBrand>
                      <CNavbarNav className="me-auto mb-2 mb-lg-0">
                      </CNavbarNav>
                      <CForm className="d-flex">
                        {/* <CFormInput type="text" onChange={Pegandobusca} value={busca2} size ='md' className="me-2" placeholder="Pesquise" /> */}
                        <CFormInput type="text"  size ='md' className="me-2" placeholder="Pesquise uma placa" />
                        <CButton   variant='ghost'  color="secondary" >
                          <BsSearch className='user-icons' />
                        </CButton>
                        {/* <CButton onClick={retiraFiltro}   variant='ghost'  color="secondary" >
                          <BsArrowClockwise className='user-icons' />
                        </CButton> */}
                      </CForm>
                    </CCollapse>
                </CNavbar>
            </div>
            <hr />
            <div className="container-infoCars-table">
                <CTable striped>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Placa</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Quilometragem</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>

                        {devices.map((device, index) => {
                            return (
                              <>
                                <CTableRow>
                                  <CTableHeaderCell scope="row"> {index}</CTableHeaderCell>
                                  <CTableDataCell>{device.name}</CTableDataCell>
                                  <CTableDataCell>{device.placa}</CTableDataCell>
                                  <CTableDataCell>{device.distancia}</CTableDataCell>
                                </CTableRow>
                              </>
                            )
                        })}


                        
                    </CTableBody>
                </CTable>

            </div>


        </div>

    )
}

export default infoCars