import react, {useState, useEffect} from 'react'
import {
    CCard,
    CCardBody,
    CTableBody,
    CTableRow,
    CTableHeaderCell,
    CTableDataCell,
    CTable
   
  } from '@coreui/react'

const Id = (props) =>{

    return (
        <>
            <p className="text-container-users"> {props.id} </p>
        </>
    )
    
    
}

export default Id