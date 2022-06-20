import React, { useState } from 'react'
import { CCol, CButton, CRow } from '@coreui/react'

const Help = () => {
    // const [pesquisa, setPesquisa] = useState('')
    // const pegandoHelp = (e) => {
    //     console.log('help vem ', e.target.value)
    //     setPesquisa(e.target.value)
    // }
    return (
        <CRow>
            <h4 className='container-profile-title'>Ajuda</h4>
            {/* <CRow>
                {/* <CCol xs={8}> 
                    <h2 className='container-help-search' >Como podemos ajudar?</h2>
                    <CFormInput type="search" onChange={pegandoHelp} className="me-2" placeholder="Procurar" />
                    {/* <CButton type="submit" color='secondary' className='buttonCss' >
                        <CIcon icon={cilMagnifyingGlass}  size="md" /> 
                    </CButton> *
                </CCol> *

                <CCol xs={2}> </CCol>
            </CRow> */}
            {/* {pesquisa.length >= 3 ?(
                   <h2>Campo pesquisa {pesquisa}</h2>
               ) : ( */}
            <CCol>
                <br />
                <h6 className='container-profile-sub-title'>Dúvidas frequentes</h6>
                <CButton type="submit" color='dark' variant='ghost' className='container-profile-text'>
                    Gerenciar as configurações de segurança dos usuários
                </CButton>
                <br />
                <CButton type="submit" color='dark' variant='ghost' className='container-profile-text'>
                    Mudar ou redefinir a senha de acesso
                </CButton>
                <br />
                <CButton type="submit" color='dark' variant='ghost' className='container-profile-text'>
                    Salvar ou baixar relatórios dos meses anteriores
                </CButton>
                <br />
                <CButton type="submit" color='dark' variant='ghost' className='container-profile-text'>
                    Enviar mensagem para outro funcionário
                </CButton>
                <br />
                <CButton type="submit" color='dark' variant='ghost' className='container-profile-text'>
                    Entrar em contato com o usuário
                </CButton>
                <br />
                <CButton type="submit" color='link' variant='' className='container-profile-sub-title'>
                    Ver mais
                </CButton>
                <br />
                <br />
                <h4 className='container-profile-sub-title'>Primeiros passos</h4>
                <CButton type="submit" color='dark' variant='ghost' className='container-profile-text'>
                    Como utilizar a plataforma
                </CButton>
                <br />
                <CButton type="submit" color='dark' variant='ghost' className='container-profile-text'>
                    Fazendo login
                </CButton>
                <br />
                <br />
                <h4 className='container-profile-sub-title'>Conectar</h4>
                <CButton type="submit" color='dark' variant='ghost' className='container-profile-text pb-3'>
                    Como interagir com outras pessoas
                </CButton>
            </CCol>
            {/* )} */}
        </CRow>
    )
}

export default Help