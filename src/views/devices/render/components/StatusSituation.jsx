import React from 'react'
import { CButton, CCol, CRow } from '@coreui/react'
import { MdOutlineSync } from 'react-icons/md'

function StatusSituation(props) {
    const { title, color, style, openModal } = props;

    return (
        <CRow>
            <CCol md={8}>
                <div className={`mt-1 container-status-${color}`}>
                    <label style={style ? style : null}>{title}</label>
                </div>
            </CCol>
            <CCol>
                <CButton
                    variant='ghost'
                    className='ms-1'
                    size='sm'
                    onClick={openModal}
                    color="link"
                >
                    <MdOutlineSync size={23} color="black" />
                </CButton>
            </CCol>
        </CRow>
    )
}

export default StatusSituation;
