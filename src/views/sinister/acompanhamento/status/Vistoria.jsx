import React from 'react'

import './status.css'

import CIcon from '@coreui/icons-react'
import {cilCheckAlt, cilLocationPin, cilX } from '@coreui/icons'

const vistoria = (props) =>{

    console.log('Prosp vem ', props)

    // Está aqui 
    if (props.status.vistoria == 'atual'){
        return(
            <>  
                <div className='container-status'>
                    <div className='container-atual'>
                        <CIcon icon={cilLocationPin}  size="3xl" />
                    </div>
                    <label> Vistoria </label>
                </div>
            </>
        )
    }else if (props.status.vistoria == 'concluido'){
        return(
            <>  
                <div className='container-status'>
                    <div className='container-concluido'>
                        <CIcon icon={cilCheckAlt}  size="3xl" />
                    </div>
                    <label> Vistoria </label>
                </div>
            </>
        )

    }else if(props.status.vistoria == 'falha'){
        return(
            <>
                <div className='container-status'>
                    <div className='container-falha'>
                        <CIcon icon={cilX}  size="3xl" />
                    </div>
                    <label> Vistoria </label>
                </div>
            </>
        )
        
    }else{
        // SERIA FECHADO
        return(
            <>
               <div className='container-status'>
                    <div className='container-fechado'>
                        <CIcon icon={cilCheckAlt}  size="3xl" />
                    </div>
                    <label> Vistoria </label>
                </div>
            </>
        )
    }
    

}

export default vistoria