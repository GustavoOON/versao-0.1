import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard')) // painel
// const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Usuarios = React.lazy(() => import('./views/employees/Users'))
const Device = React.lazy(() => import('./views/devices/Devices'))
const Permissoes = React.lazy(() => import('./views/permissons/Permissions'))
const Rastreamento = React.lazy(() => import('./views/Tracking/Tracking'))
const Financeiro = React.lazy(() => import('./views/finance/Finance'))
const mapBox = React.lazy(() => import('./views/mapBox/Map'))
const Plano = React.lazy(() => import('./views/plans/Plans'))
const Cobertura = React.lazy(() => import('./views/coverages/Services'))
const Chamados = React.lazy(() => import('./views/calls/Call'))
const Configuracoes  = React.lazy(() => import('./views/settings/Setting'))
const Sinistro  = React.lazy(() => import('./views/sinister/Sinister'))
const Riscos = React.lazy(() => import('./views/scratchs/Scratch'))
const Home = React.lazy(() => import('./views/home/Home'))
const Assistencia = React.lazy(() => import('./views/assistence24h/Assistence'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/Users', name: 'Usuarios', component: Usuarios },
  { path: '/devices', name: 'Veículos', component: Device },
  { path: '/rastreamento', name: 'Rastreamento', component: Rastreamento },
  { path: '/mapbox', name: 'Rastreamento', component: mapBox },
  {path: '/financeiro', name:'Financeiro', component: Financeiro},
  {path: '/planos', name:'Planos', component: Plano},
  {path: '/coberturas', name:'Coberturas', component: Cobertura},
  {path: '/chamados', name:'Chamados', component: Chamados},
  {path: '/configuracoes', name:'Configurações', component: Configuracoes},
  {path: '/sinistro', name:'Sinistro', component: Sinistro},
  {path: '/riscos', name:'Riscos', component: Riscos},
  {path: '/home', name:'Home2', component: Home},
  {path: '/assistencia', name:'Assistencia', component: Assistencia},
  
]

export default routes
