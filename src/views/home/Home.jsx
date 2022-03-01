import React, {useState} from 'react'
import './home.css'
import Cookies from 'js-cookie'

import BtnModalNewNotice from './render/NewNews'

import {
    CCard,
    CCardBody,
    CRow,
    CContainer,
    CCol,
    CImage,
    CButton
  } from '@coreui/react'

  import img1 from '../../assets/images/mustang2.png'
  const LimNews = 6
  
const Home = () =>{

    const token = Cookies.get('TokenID')
    const userType = Cookies.get('userType')

    const [news, setNews] = useState([ 
        {titulo:'Função nova adicionada a plataforma', descricao: 'Agora é possível verificar o comportamento do cliente'},
        {titulo:'Novo Serviço adicionado ', descricao: 'O novo serviço possibilita atender os clientes em todo território nacional'},
        {titulo:'Alterações no plano ouro', descricao: 'O valor do plano ouro teve uma alteração de 5% no valor base.'},
        {titulo:'Alterações no plano prata', descricao: 'O valor do plano prata abaixo em 2% do valor base'},
        {titulo:'Alterações no plano bronze', descricao: 'O valor do plano prata abaixo em 2% do valor base'},
        {titulo:'Alterações no plano diamante', descricao: 'O valor do plano prata abaixo em 2% do valor base'},
        {titulo:'Alterações no plano diamante', descricao: 'O valor do plano prata abaixo em 2% do valor base'}
    ])

    return (
        <> 
            <div className='container-home'>
                <div className='container-home-header'>
                    <label className='font-home-titulo'> OON SEGUROS </label>
                    { userType === 'ADMIN'? 
                        (
                            <div className='container-home-newNews'> 
                                    <BtnModalNewNotice />
                            </div>
                        )
                        :null
                    }
                </div>
                
                
                <CRow className='container-home-body'>
                    <CCol className='container-home-esq'>
                        <h3>Notícias</h3> 
                        <br />
                        <div className='container-news-oon'> 
                            {news.map((item, index) =>{
                                if(index < LimNews){
                                    return (
                                        <div key={index}>
                                            <h6 > <b> {item.titulo} </b> </h6>
                                            <label > {item.descricao}</label>
                                            <hr />
                                        </div>
                                    )
                                }else if(index == LimNews){
                                    return(
                                        <>
                                            <CButton className='btn-moreNews' size="md" key={index} color='link'> Mais notícias </CButton>
                                        </>
                                    )
                                }
                            })}
                        </div>
                    </CCol>
                    <CCol >
                        <div className='container-home-dir' >
                            <CImage fluid src={img1} />
                        </div>
                    </CCol>
                </CRow>
            </div>
            
            <br />
        </>
    )
}

export default Home