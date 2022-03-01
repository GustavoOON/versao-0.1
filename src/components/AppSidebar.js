import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler, CImage } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { ciOnnIcon} from '@coreui/icons'
import { AppSidebarNav } from './AppSidebarNav'

import logoOON from  './../assets/images/oon.png'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      className='sideBarContainer'
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex logoContainer" to="/">
        {/* <CIcon className="sidebar-brand-full" icon={ciOnnIcon} height={35} /> */}
        {/* <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> */}
        <CImage fluid src = {logoOON} width={180} height={180}  />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar className='fontItemNav'>
          <AppSidebarNav items={navigation}  />
          <CSidebarToggler
            className="d-none d-lg-flex controlerSideBar"
            onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
          />
        </SimpleBar>
      </CSidebarNav>
      
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
