import React from 'react'
import logoOonSeguros from '../../assets/images/logo-oon-seguros.svg'

import './home.css'

const Home = () => {
    return (
        <div className='container-home'>
            <label className='font-home-titulo'>OON Seguros</label>
            <hr />
            <img src={logoOonSeguros} alt="logo-oon-seguros" />
        </div>
    )
}

export default Home;
