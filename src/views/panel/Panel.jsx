import React, { lazy } from "react";
import { CRow, CCol } from "@coreui/react";

import Usuarios from "./render/Users";
import Ranking from "./render/Ranking";
import CorporateGraph from "./render/CorporateGraph";

import "./css/panel.css";

const WidgetsDropdown = lazy(() => import("./widgets/WidgetsDropdown.jsx"));

const Panel = () => {

    return (
        <>
            <WidgetsDropdown />
            <CorporateGraph />
            <br />
            <CRow>
                <CCol>
                    <Usuarios />
                </CCol>
                <CCol>
                    <Ranking />
                </CCol>
            </CRow>
        </>
    );
};

export default Panel;
