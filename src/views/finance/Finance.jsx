import React from "react";
// importando css
import './finance.css'
import GraphPlans from './charts/ChartPlans'
import GraphUsers from './charts/ChartUsers'
import Calendar from './charts/Calendar'
import Users from './users/Users'
import UserRanking from './ranking/UserRanking'

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CCardText,
    CRow,
    CCardTitle,
    CContainer,
    CButtonGroup, 
   
  } from '@coreui/react'


const Finance = () =>{
/*
    return(
        <> 
             <CRow>
                <CCol sm={4}>
                    <GraphPlans/>
                    <br />
                </CCol>
                <CCol sm={4}>
                    <GraphUsers />
                    <br />
                </CCol>
                <CCol sm={4} >
                    <Calendar />
                    <br />
                </CCol>

                <br /> 
                <CCol sm={8} >
                    <Users />
                    <br />
                </CCol>
                <CCol sm={4} >
                    <UserRanking />
                    <br />
                </CCol>
            </CRow> 
                
        </>
    )

    
}
*/

    return(
        <> 
            <CRow>
                <CCol sm={8}>
                    <CRow>
                        <CCol sm={6}>
                            <GraphPlans/>
                            <br />
                        </CCol>
                        <CCol sm={6}>
                            <GraphUsers />
                            <br />
                        </CCol>
                        <CCol sm={12} >
                            <Users />
                            <br />
                        </CCol>
                    </CRow>
                </CCol>
                <CCol sm={4}>
                    <Calendar />
                </CCol>
                

            </CRow> 
                <br />
        </>
    )
}
export default Finance 