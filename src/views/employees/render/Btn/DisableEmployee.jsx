import React, { useEffect, useState } from 'react';
import { CButton, CModal, CModalBody } from '@coreui/react'

function DisableEmployee({ setDeleteEmployee, deleteEmployee }) {
    return (
        <CModal
            alignment="center"
            visible={deleteEmployee}
        >
            <CModalBody>
                <p className='text-center m-5 text-remove'>
                    Você tem certeza que deseja
                    deletar esse funcionário?
                </p>
                <div className='mb-3 d-flex justify-content-around'>
                    <CButton
                        size="lg"
                        className='btn-save-global'
                    >
                        Sim, remover
                    </CButton>
                    <CButton
                        className='btn-cancel-global'
                        size="lg"
                        variant='outline'
                        onClick={() => setDeleteEmployee(false)}
                    >
                        Cancelar
                    </CButton>
                </div>
            </CModalBody>
        </CModal>
    )
}

export default DisableEmployee;
