import React from 'react';
import { CCol, CRow } from '@coreui/react';

import '../css/widgetsInProcess.css';

const WidgetsInProcess = (props) => {
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
        <CRow className="cotainer-widgets-in-process">
            <CCol
                sm="auto"
                onClick={open1}
                className={
                    op1 === false
                        ? 'container-in-process-widget-black'
                        : 'container-in-process-widget-black-active'
                }
            >
                <div>
                    <label className="container-in-process-widget-content-title">
                        Todos os veículos:
                    </label>
                    <br />
                    <label className="container-in-process-widget-content">
                        {qtdElements}
                    </label>
                </div>
            </CCol>
            <CCol
                id="Pré registro"
                className={
                    op2 === false
                        ? 'container-in-process-widget-orange'
                        : 'container-in-process-widget-orange-active'
                }
                onClick={open2}
                sm="auto"
            >
                <div>
                    <label className="container-in-process-widget-content-title">
                        Pré registro:
                    </label>
                    <br />
                    <label className="container-in-process-widget-content">
                        18
                    </label>
                </div>
            </CCol>
            <CCol
                id="Aguardando fotos"
                sm="auto"
                onClick={open3}
                className={
                    op3 === false
                        ? 'container-in-process-widget-orange'
                        : 'container-in-process-widget-orange-active'
                }
            >
                <div>
                    <label className="container-in-process-widget-content-title">
                        Aguardando fotos:
                    </label>
                    <br />
                    <label className="container-in-process-widget-content">
                        22
                    </label>
                </div>
            </CCol>
            <CCol
                id="Em análise"
                sm="auto"
                onClick={open4}
                className={
                    op4 === false
                        ? 'container-in-process-widget-orange'
                        : 'container-in-process-widget-orange-active'
                }
            >
                <div>
                    <label className="container-in-process-widget-content-title">
                        Em análise:
                    </label>
                    <br />
                    <label className="container-in-process-widget-content">
                        37
                    </label>
                </div>
            </CCol>
            <CCol
                id="Reprovado"
                sm="auto"
                onClick={open5}
                className={
                    op5 === false
                        ? 'container-in-process-widget-red'
                        : 'container-in-process-widget-red-active'
                }
            >
                <div>
                    <label className="container-in-process-widget-content-title">
                        Reprovado:
                    </label>
                    <br />
                    <label className="container-in-process-widget-content">
                        25
                    </label>
                </div>
            </CCol>
        </CRow>
    );
};

export default WidgetsInProcess;
