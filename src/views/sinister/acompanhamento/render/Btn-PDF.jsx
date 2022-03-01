import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilSave } from '@coreui/icons'

import {
    CButton ,
    CPopover,
} from '@coreui/react'

const ButtonPDF = () =>{

    const btnPDF = () =>{
        console.log('Enntrei no BTN PDF')
    }

    return (
        <> 
            <CButton variant='ghost' color='dark'  onClick={btnPDF} className='BTN-font' >
                Salvar PDF
                <CIcon  className='iconContainer' icon={cilSave}  size="lg" />
            </CButton>
           
        </>
    )
}

export default ButtonPDF