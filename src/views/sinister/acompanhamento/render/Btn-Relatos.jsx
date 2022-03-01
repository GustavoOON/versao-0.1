import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilClipboard } from '@coreui/icons'

import {
    CButton ,
    CPopover,
} from '@coreui/react'

const ButtonRelatos= () =>{

    const relatosBTN = () =>{
        console.log('entrei em relatos')
    }
    return (
        <> 
            <CButton variant='ghost' color='dark' onClick={relatosBTN} className='BTN-font' >
                Relatos
               <CIcon className='iconContainer' icon={cilClipboard}  size="lg" />
            </CButton>
        </>
    )
}

export default ButtonRelatos