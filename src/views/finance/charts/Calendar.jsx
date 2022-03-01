import React, {useState,  useEffect} from "react"
import Calendar from "react-calendar"
    

import 'react-calendar/dist/Calendar.css';

import {
    CCard,
    CCardBody,
    CTableRow,
    CTableDataCell,
    CTable,
    CTableHeaderCell,
    CTableHead,
    CTableBody,
   
  } from '@coreui/react'
  import UserRanking from '../ranking/UserRanking'

const Calendar2 = () =>{
    
    const [value, onChange] = useState(new Date())

    const [pessoas, setPessoas] = useState(22) // caso fizer alguma requisicao, utilizar aqui até carregar

  
    if(pessoas == ''){
        return(
            <> 
                <h5>Loading ... </h5>
            </>
        )
    }else{
        return (
            <>
                <CCard className=" cardsFinance3">
                    <CCardBody>
                        
                        <div className='calendarioCss'>
                            <Calendar
                                onChange={onChange}
                                value={value}
                                className='calendarioCss'
                            />
                        </div>
                        <hr />
                        <UserRanking />
                    </CCardBody>
                </CCard>
            </>
        )
    }
}

export default Calendar2