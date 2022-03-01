import React, {useState} from 'react'

import {
    CForm, 
    CCol,
    CButton ,
    CFormLabel,
    CFormInput,
    CFormSelect,
    CFormCheck,
    CAvatar,
  } from '@coreui/react'

  import avatar4 from 'src/assets/images/avatars/4.jpg'

  const useType="admin"
const InfoProfile = () =>{
    
    
    // Pegar o token do usuario e baixar suas informacoes 
    const [dados, setDados] = useState(
        {
            nome:'Gustavo',
            sobrenome:'Alcantara',
            cargo:'Admin',
            email:'gustavo.alcantara@oonpayperuse.com.br',
            senha: '123456',
            pais:'Brasil',
            idioma:'Portugues',
        }
    )

    return (
        <> 
            <p className='container-profile-tit'> Perfil </p>
            <CForm className="row g-3">
                <CCol md={1}>
                    <CAvatar size="xl" src={avatar4} />
                </CCol>
                <CCol md={5}>
                    <label className='container-profile-subTit'> Nome </label>
                    <br />
                    <label className='container-profile-text'> {dados.nome} {dados.sobrenome} </label>
                </CCol>
                <CCol md={6}>
                    <label className='container-profile-subTit'> Cargo </label>
                    <br />
                    <label className='container-profile-text'> Administrador Ti </label>
                </CCol>
                <hr />
                <label className='container-profile-tit'> Conta </label>
                <CCol xs={6}>
                    <label className='container-profile-subTit'> E-mail </label>
                    <br />
                    <label className='container-profile-text'> gustavo@oonpayperuse.com.br </label>
                </CCol>
                <CCol xs={6}>
                    <label className='container-profile-subTit'> Telefone </label>
                    <br />
                    <label className='container-profile-text'> 35 9 99909-2312 </label>
                </CCol>
                <CCol xs={6}>
                    <label className='container-profile-subTit'> Cidade </label>
                    <br />
                    <label className='container-profile-text'> Belo Horizonte MG </label>
                </CCol>
                <CCol xs={6}>
                    <label className='container-profile-subTit'> Endereço </label>
                    <br />
                    <label className='container-profile-text'> Av Professor Mario Werneck - 730 </label>
                </CCol>
                <br />
                <CCol xs={6}>
                    <label className='container-profile-subTit'> Idioma </label>
                    <br />
                    <label className='container-profile-text'> Português SA </label>
                </CCol>
                <CCol xs={6}>
                    <label className='container-profile-subTit'> País </label>
                    <br />
                    <label className='container-profile-text'> Brasil SA </label>
                </CCol>
                <hr />
            </CForm>
        </>
    )
}

export default InfoProfile