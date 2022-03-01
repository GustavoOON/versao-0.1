import React, {useState} from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

import Cookies from 'js-cookie'
import './appHeader.css'

import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilExitToApp,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/2.jpg'
import { Link } from 'react-router-dom'

const AppHeaderDropdown = () => {

  const sairTela = () =>{
    // localStorage.removeItem("TokenID") // exclui o token
    Cookies.remove('TokenID', { path: '' })
    window.location.reload()
  }

  const [configRoute, setConfigRoute] =  useState(false)
  const configScreen = () =>{
    setConfigRoute(true)
  }

    return (
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
          <CAvatar src={avatar8} size="md" />
        </CDropdownToggle>
        
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-light fw-semibold py-2">Configurações</CDropdownHeader>
          
          <CDropdownItem >
            <Link to='/configuracoes' className='btn-config-screen' >
              <CIcon icon={cilSettings} className="me-2" />
              Perfil
            </Link>
          </CDropdownItem>

          <CDropdownItem >
            <Link to='/configuracoes' className='btn-config-screen' >
              <CIcon icon={cilUser} className="me-2" />
              Configurações
            </Link>
          </CDropdownItem>
          {/* <CDropdownItem >
            <CIcon icon={cilUser} className="me-2 btn-config-screen" />
             <label className='btn-config-screen' > Configurações </label> 
          </CDropdownItem> */}
       
          <CDropdownDivider />

        
          <CDropdownItem onClick={sairTela}>
            <CIcon icon={cilExitToApp} className="me-2 btn-config-screen"  />
              <label className='btn-config-screen' > Sair </label> 
          </CDropdownItem>
        </CDropdownMenu>

      </CDropdown>
    )
  
}

export default AppHeaderDropdown
