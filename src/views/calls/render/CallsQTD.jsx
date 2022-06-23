import React from 'react';
import { CCol, CCard, CCallout, CRow } from '@coreui/react';

import ButtonCalls from '../btns/ButtonCalls';

const CallsQTD = () => {
    return (
        <>
            <CCard className="card-atend">
                <CCallout className="callout-call" color="primary">
                    <CRow>
                        <div className="btn-filter-call">
                            <ButtonCalls />
                        </div>
                        <CCol className="text-center">
                            <h2>55</h2>
                            <label className="call-sub-title">
                                Atendimentos em Aberto
                            </label>
                        </CCol>
                    </CRow>
                </CCallout>
            </CCard>
            <br />
            <CCard className="text-center card-atend">
                <CCallout className="callout-call" color="info">
                    <CRow>
                        <div className="btn-filter-call">
                            <ButtonCalls />
                        </div>
                        <CCol className="text-center">
                            <h2>25</h2>
                            <label className="call-sub-title">
                                Atendimentos encerrados na última hora
                            </label>
                        </CCol>
                    </CRow>
                </CCallout>
            </CCard>
        </>
    );
};

export default CallsQTD;
