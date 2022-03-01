import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilEnvelopeClosed } from '@coreui/icons'

import {
    CButton ,
    CPopover,
} from '@coreui/react'

const ButtonSentEmail = () =>{
    
    const buttonEmail = () =>{
        console.log('Button enviar email')
    }

    return (
        <> 
            <CButton variant='ghost' color='dark' onClick={buttonEmail} className='BTN-font' >
                Enviar por e-mail
               <CIcon className='iconContainer' icon={cilEnvelopeClosed}  size="lg" />
            </CButton>
        </>
    )
}

export default ButtonSentEmail