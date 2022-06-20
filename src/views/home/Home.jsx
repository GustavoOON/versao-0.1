import { CCard, CCardBody, CCardHeader, CCardTitle } from '@coreui/react'
import React from 'react'
import logoOonSeguros from '../../assets/images/oon-seguros-logo.svg'

import './home.css'

const Home = () => {
    return (
        <CCard className='container-home min-vh-100'>
            <CCardTitle className="font-home-titulo" component="h1">OON Seguros</CCardTitle>
            <hr />
            <CCardBody className='d-flex justify-content-center'>
                <img
                    src={logoOonSeguros}
                    alt="logo-oon-seguros"
                    width={500}
                />
            </CCardBody>
        </CCard>
    )
}

export default Home;
