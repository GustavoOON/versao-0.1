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

const Name = (props) =>{

    return (
        <>
            <p className="text-container-users"> {props.pessoa} </p>
        </>
    )
    
    
}

export default Name