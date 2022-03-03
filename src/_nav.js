import React from 'react'
import axios  from "axios"
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import {
  FaCarSide, 
  FaChartBar, 
  FaUserFriends, 
  FaMapMarkedAlt, 
  FaExclamationCircle, 
  FaMoneyBillAlt, 
  FaTasks,
  FaMoneyBillWaveAlt,
  FaPhoneAlt,
  FaExternalLinkAlt,
  FaCog
} 
  from 'react-icons/fa';

import './nav.css'
import {
  cilPeople,
  cilCarAlt,
  cilSpeedometer,
  cilLocationPin,
  cilWarning,
  cilDescription,
  cilTask,
  cilPhone,
  cilMoney,
  cilCog,
  cilExitToApp,
  cilFlagAlt,
  cilHome,

} from '@coreui/icons'



const admin = [
  
  {
    component: CNavItem,
    name: 'Home',
    to: '/home',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },


  // GRUPO SETORES 
  {
    component: CNavTitle,
    name: 'Setores',
  },
  {
    component: CNavItem,
    name: 'Veículos',
    to: '/devices',
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Rastreamento',
    to: '/rastreamento',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Rastreamento',
  //   to: '/mapbox',
  //   icon:  <CIcon icon={cilLocationPin} customClassName="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: 'Financeiro',
    to: '/financeiro',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Painel', // Dashboard
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavItem,
    name: 'Sinistro',
    to: '/sinistro',
    icon: <CIcon icon={cilWarning} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Assistência',
    to: '/assistencia',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Riscos',
    to: '/riscos',
    icon: <CIcon icon={cilFlagAlt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Funcionários',
    to: '/Users', 
   icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },


  // GRUPO SERVICÇOS
  {
    component: CNavTitle,
    name: 'Serviços',
  },
  {
    component: CNavItem,
    name: 'Planos',
    to: '/planos',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  
  {
    component: CNavItem,
    name: 'Coberturas',
    to: '/coberturas',
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
  },
  
   //GRUPO OUTROS 
   {
    component: CNavTitle,
    name: 'Outros',
  },
  
  {
    component: CNavItem,
    name: 'Chamados',
    to: '/chamados',
    icon: <CIcon icon={cilPhone} customClassName="nav-icon" />,
  },
  
  {
    component: CNavItem,
    name: 'Configurações',
    to: '/configuracoes',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
  },

  

]

const gerente = [
  
]

const usuario = [
 
]


 function _nav (){

  // const token = localStorage.getItem("TokenID");
  // pegar configs do usuario atual que está usando o sistema 
  // let axiosConfig = {
  //   headers: {
  //       'Authorization': token, 
  //       'Content-Type': 'application/json;charset=UTF-8',
  //       "Access-Control-Allow-Origin": "*",
  //   }
  // };
  // var postData = {
  //   email: user,
  //   password: password
  // };

  //   // puxar dados do usuario que logou no sistema, pegar informacao do usuario pelo tokem dele, pega tipo dele 
  //   await axios.post('http://dashboardbff.oonpayperuse.com.br/login', postData, axiosConfig)
  //   .then((res) => {
  //     verificaLogin(res)
  //     const user = res.user.type
  //   })
  //   .catch((err) => {
  //     console.log("AXIOS ERROR: ", err);
  //   })
  const user =  {userDepart:'ADMIN', userType:'ADMIN'} 

  if(user.userDepart == 'ADMIN'){
      if(user.userType == 'ADMIN'){
        return admin 
      }
  }else if (user.userDepart == 'Comercial'){
      if(user.userType == 'ADMIN'){
        return gerente
      }else if(user.userType == 'manager'){

      }else{
        // retorna support  
      }
    return gerente
  }else{
    return usuario 
  }
}


export default _nav()

