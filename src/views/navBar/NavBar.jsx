import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilPeople, cilCarAlt, cilWarning, cilDescription, cilPhone, cilCog, cilHome, cilMap, cilCreditCard, cilBarChart, cilList } from '@coreui/icons';
import Cookies from 'js-cookie';
import { CNavItem, CNavTitle } from '@coreui/react';
var CryptoJS = require("crypto-js");

const navAll = [
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
        icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
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
        name: 'Chamados',
        to: '/chamados',
        icon: <CIcon icon={cilPhone} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Financeiro',
        to: '/financeiro',
        icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Painel',
        to: '/panel',
        icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
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
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    },

    //GRUPO OUTROS 
    {
        component: CNavTitle,
        name: 'Outros',
    },
    {
        component: CNavItem,
        name: 'Funcionários',
        to: '/Users',
        icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Configurações',
        to: '/configuracoes',
        icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
    },


    // {
    //   component: CNavItem,
    //   name: 'Riscos',
    //   to: '/riscos',
    //   icon: <CIcon icon={cilFlagAlt} disabled customClassName="nav-icon" />,
    // },
]



// const admin = [

//   {
//     component: CNavItem,
//     name: 'Home',
//     to: '/home',
//     icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
//   },


//   // GRUPO SETORES 
//   {
//     component: CNavTitle,
//     name: 'Setores',
//   },
//   {
//     component: CNavItem,
//     name: 'Veículos',
//     to: '/devices',
//     icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
//   },
//   // {
//   //   component: CNavItem,
//   //   name: 'webSocket',
//   //   to: '/websocket',
//   //   icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
//   // },
//   {
//     component: CNavItem,
//     name: 'Rastreamento',
//     to: '/rastreamento',
//     icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
//   },
//   // {
//   //   component: CNavItem,
//   //   name: 'Rastreamento',
//   //   to: '/mapbox',
//   //   icon:  <CIcon icon={cilLocationPin} customClassName="nav-icon" />,
//   // },
//   {
//     component: CNavItem,
//     name: 'Financeiro',
//     to: '/financeiro',
//     icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Painel', // Dashboard
//     to: '/dashboard',
//     icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
//     // badge: {
//     //   color: 'info',
//     //   text: 'NEW',
//     // },
//   },
//   {
//     component: CNavItem,
//     name: 'Sinistro',
//     to: '/sinistro',
//     icon: <CIcon icon={cilWarning} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Assistência',
//     to: '/assistencia',
//     icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Riscos',
//     to: '/riscos',
//     icon: <CIcon icon={cilFlagAlt} disabled customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Funcionários',
//     to: '/Users',
//     icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
//   },


//   // GRUPO SERVICÇOS
//   {
//     component: CNavTitle,
//     name: 'Serviços',
//   },
//   {
//     component: CNavItem,
//     name: 'Planos',
//     to: '/planos',
//     icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
//   },

//   {
//     component: CNavItem,
//     name: 'Coberturas',
//     to: '/coberturas',
//     icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
//   },

//   //GRUPO OUTROS 
//   {
//     component: CNavTitle,
//     name: 'Outros',
//   },

//   {
//     component: CNavItem,
//     name: 'Chamados',
//     to: '/chamados',
//     icon: <CIcon icon={cilPhone} customClassName="nav-icon" />,
//   },

//   {
//     component: CNavItem,
//     name: 'Configurações',
//     to: '/configuracoes',
//     icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
//   },


// ]

// const gerente = [
//   {
//     component: CNavItem,
//     name: 'Home',
//     to: '/home',
//     icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavTitle,
//     name: 'Setores',
//   },
//   {
//     component: CNavItem,
//     name: 'Sinistro',
//     to: '/sinistro',
//     icon: <CIcon icon={cilWarning} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Assistência',
//     to: '/assistencia',
//     icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Riscos',
//     to: '/riscos',
//     icon: <CIcon icon={cilFlagAlt} disabled customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Funcionários',
//     to: '/Users',
//     icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavTitle,
//     name: 'Serviços',
//   },
//   {
//     component: CNavItem,
//     name: 'Planos',
//     to: '/planos',
//     icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
//   },

//   {
//     component: CNavItem,
//     name: 'Coberturas',
//     to: '/coberturas',
//     icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Chamados',
//     to: '/chamados',
//     icon: <CIcon icon={cilPhone} customClassName="nav-icon" />,
//   },

//   {
//     component: CNavTitle,
//     name: 'Outros',
//   },
//   {
//     component: CNavItem,
//     name: 'Configurações',
//     to: '/configuracoes',
//     icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
//   },


// ]

// const usuario = [
//   {
//     component: CNavItem,
//     name: 'Home',
//     to: '/home',
//     icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
//   },

//   // GRUPO SETORES 
//   {
//     component: CNavTitle,
//     name: 'Setores',
//   },
//   {
//     component: CNavItem,
//     name: 'Veículos',
//     to: '/devices',
//     icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Sinistro',
//     to: '/sinistro',
//     icon: <CIcon icon={cilWarning} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Assistência',
//     to: '/assistencia',
//     icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Riscos',
//     to: '/riscos',
//     icon: <CIcon icon={cilFlagAlt} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Funcionários',
//     to: '/Users',
//     icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavTitle,
//     name: 'Outros',
//   },
//   {
//     component: CNavItem,
//     name: 'Configurações',
//     to: '/configuracoes',
//     icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
//   },
// ]


function NavBar() {

    var usT = Cookies.get('userType')
    var msg = CryptoJS.AES.decrypt(usT, 'OnnSeguros');
    var msgOri = msg.toString(CryptoJS.enc.Utf8);

    const userType = msgOri
    const user = { userDepart: 'ADMIN', userType: userType } //userType} 

    if (user.userType === 'ADMIN') {
        return navAll
    } else if (userType === 'MANAGER') {
        return gerente
    } else {
        return usuario
    }

}


export default NavBar;
