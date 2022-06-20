import React from 'react';
import { CCol, CRow } from '@coreui/react';

import '../css/widgetsRegistered.css';

const WidgetsRegistered = (props) => {
    const {
        open1,
        open2,
        open3,
        open4,
        open5,
        op1,
        op2,
        op3,
        op4,
        op5,
        qtdElements,
    } = props;

    return (
        <CRow className="cotainer-widgets-registered">
            <CCol
                sm="auto"
                onClick={open1}
                className={
                    op1 === false
                        ? 'container-registered-widget-black'
                        : 'container-registered-widget-black-active'
                }
            >
                <div>
                    <label className="container-registered-widget-content-title">
                        Todos os veículos:
                    </label>
                    <br />
                    <label className="container-registered-widget-content">
                        {qtdElements}
                    </label>
                </div>
            </CCol>
            <CCol
                className={
                    op2 === false
                        ? 'container-registered-widget-orange'
                        : 'container-registered-widget-orange-active'
                }
                onClick={open2}
                sm="auto"
            >
                <div>
                    <label className="container-registered-widget-content-title">
                        Aguardando endereço:
                    </label>
                    <br />
                    <label className="container-registered-widget-content">
                        18
                    </label>
                </div>
            </CCol>
            <CCol
                sm="auto"
                onClick={open3}
                className={
                    op3 === false
                        ? 'container-registered-widget-blue'
                        : 'container-registered-widget-blue-active'
                }
            >
                <div>
                    <label className="container-registered-widget-content-title">
                        OBD em trânsito:
                    </label>
                    <br />
                    <label className="container-registered-widget-content">
                        22
                    </label>
                </div>
            </CCol>
            <CCol
                sm="auto"
                onClick={open4}
                className={
                    op4 === false
                        ? 'container-registered-widget-red'
                        : 'container-registered-widget-red-active'
                }
            >
                <div>
                    <label className="container-registered-widget-content-title">
                        Reprovado:
                    </label>
                    <br />
                    <label className="container-registered-widget-content">
                        37
                    </label>
                </div>
            </CCol>
            <CCol
                sm="auto"
                onClick={open5}
                className={
                    op5 === false
                        ? 'container-registered-widget-green'
                        : 'container-registered-widget-green-active'
                }
            >
                <div>
                    <label className="container-registered-widget-content-title">
                        Sincronizados:
                    </label>
                    <br />
                    <label className="container-registered-widget-content">
                        25
                    </label>
                </div>
            </CCol>
        </CRow>
    );
};

export default WidgetsRegistered;
