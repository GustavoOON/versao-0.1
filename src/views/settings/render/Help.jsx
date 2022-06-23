import React, { useState } from 'react';
import { CCol, CButton, CRow } from '@coreui/react';

const Help = () => {
    return (
        <CRow>
            <h4 className="container-profile-title">Ajuda</h4>
            <CCol>
                <br />
                <h6 className="container-profile-sub-title">
                    Dúvidas frequentes
                </h6>
                <CButton
                    type="submit"
                    variant="ghost"
                    className="container-profile-text"
                >
                    Gerenciar as configurações de segurança dos usuários
                </CButton>
                <br />
                <CButton
                    type="submit"
                    variant="ghost"
                    className="container-profile-text"
                >
                    Mudar ou redefinir a senha de acesso
                </CButton>
                <br />
                <CButton
                    type="submit"
                    variant="ghost"
                    className="container-profile-text"
                >
                    Salvar ou baixar relatórios dos meses anteriores
                </CButton>
                <br />
                <CButton
                    type="submit"
                    variant="ghost"
                    className="container-profile-text"
                >
                    Enviar mensagem para outro funcionário
                </CButton>
                <br />
                <CButton
                    type="submit"
                    variant="ghost"
                    className="container-profile-text"
                >
                    Entrar em contato com o usuário
                </CButton>
                <br />
                <CButton
                    type="submit"
                    color="link"
                    variant="ghost"
                    className="container-profile-sub-title"
                >
                    Ver mais
                </CButton>
                <br />
                <br />
                <h4 className="container-profile-sub-title">
                    Primeiros passos
                </h4>
                <CButton
                    type="submit"
                    variant="ghost"
                    className="container-profile-text"
                >
                    Como utilizar a plataforma
                </CButton>
                <br />
                <CButton
                    type="submit"
                    variant="ghost"
                    className="container-profile-text"
                >
                    Fazendo login
                </CButton>
                <br />
                <br />
                <h4 className="container-profile-sub-title">Conectar</h4>
                <CButton
                    type="submit"
                    variant="ghost"
                    className="container-profile-text pb-3"
                >
                    Como interagir com outras pessoas
                </CButton>
            </CCol>
        </CRow>
    );
};

export default Help;
