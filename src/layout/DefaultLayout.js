import React from "react";

import { AppContent, AppSidebar, AppFooter, AppHeader } from "../components/index";

import './css/defaultLayout.css'

const DefaultLayout = () => {
    return (
        <>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader />
                <br />
                <div className="flex-grow-1 px-1">
                    <AppContent />
                </div>
                <br />
            </div>
            <AppFooter />
        </>
    );
};

export default DefaultLayout;
