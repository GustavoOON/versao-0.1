import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilOptions } from '@coreui/icons'
import Cookies  from 'js-cookie'
// importando buttons 
 import BtnEditPlan from './../configRender/BtnEditarPlan'
// import BtnConfig from './bottonsOp/Config'
// import BtnGenerateChart from './bottonsOp/GenerateChart'
// import BtnGenerateReport from './bottonsOp/GenerateReport'

import {
    CButton ,
    CPopover,
  } from '@coreui/react'

const ButtonOp = (props) => {   
    const token = Cookies.get('TokenID')
    const userType = Cookies.get('userType')

    const pageAtt = () =>{
        props.attComp()
    }

    return (

        <>
             
            <CPopover
                content={
                    <div> 
                        {userType == "ADMIN" ? 
                            ( <BtnEditPlan data={props} att={pageAtt}/>)
                            :null
                        }
                        <br />
                    </div>
                }
                close
                placement="bottom"
            >
                <CButton variant='white' className='buttonOps' >
                    <CIcon icon={cilOptions}  size="md" />
                </CButton>
            </CPopover>
            <br />
        </>
    )
}

export default ButtonOp