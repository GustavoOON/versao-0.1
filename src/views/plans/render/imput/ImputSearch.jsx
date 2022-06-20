import { CButton, CCol, CForm, CFormInput, CFormLabel } from '@coreui/react'
import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

import BtnAddPlan from '../btn/BtnAddPlan'

function ImputSearch({ savePlan }) {
    return (
        <CForm className="justify-content-end d-flex">
            <CCol xs="auto" className='d-flex'>
                <div className="container-icon-input">
                    <i
                        className='icon-search-global  i-absolute-global'
                    >
                        <BiSearchAlt2 color="#6D6D6D" />
                    </i>
                    <CFormInput
                        className="input-search-global"
                        type="text"
                        placeholder="Pesquisar"
                    />
                </div>
                <CButton
                    type="button"
                    variant='outline'
                    className="btn-search-global me-4"
                >
                    Buscar
                </CButton>
            </CCol>
            <CCol xs="auto">
                <BtnAddPlan />
            </CCol>
        </CForm>
    )
}

export default ImputSearch