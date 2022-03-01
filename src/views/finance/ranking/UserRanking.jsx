import React, { useState } from 'react'
import Name from './Name'
import Placa from './Plate'
import Km from './Distance'
import Id from './id'

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


const UserRank = ()=>{

    const [value, onChange] = useState(new Date())

    const [pessoas, setPessoas] = useState([
        {name:'Gustavo', placa:'xxx-777', Km:'12'},
        {name:'Ana 1', placa:'yyyy-777', Km:'10'},
        {name:'Livia 2', placa:'dddd-777', Km:'16'},
        {name:'Gustavo', placa:'xxx-777', Km:'12'},
    
     
    ])


    return (
        <> 
            <div className='container-user-ranking'>
                <h4>Atualizações</h4>
                <br />
                {/* Ranking das pessoas percorrendo elas */}
                <CTable align="middle"  hover responsive>

                    <CTableBody>
                        {pessoas.map((i, index) => (
                            <CTableRow>
                                <CTableDataCell >
                                    <Id  id={index}/>
                                </CTableDataCell>
                                <CTableDataCell >
                                    <Name pessoa={i.name}/>
                                </CTableDataCell>
                                <CTableDataCell >
                                    <Placa placa={i.placa}/>
                                </CTableDataCell>
                                <CTableDataCell >
                                    <Km distancia={i.Km}/>
                                </CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>
            </div>
           
        </>
    )
}

export default UserRank