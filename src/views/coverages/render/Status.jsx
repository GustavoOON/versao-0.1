import React from 'react';
import { CForm, CFormSwitch } from '@coreui/react';

const Status = (props) => {
    if (props.status == true) {
        return (
            <CForm className="d-flex justify-content-center">
                <CFormSwitch defaultChecked />
            </CForm>
        );
    } else {
        return (
            <CForm className="d-flex justify-content-center">
                <CFormSwitch valid={true} defaultChecked />
            </CForm>
        );
    }
};

export default Status;
