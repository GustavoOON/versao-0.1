import React, { useState } from 'react'
import Calendar from "react-calendar"

import ProtocoloAtt from './RenderCalendario/Protocolo'
import DataAtt from './RenderCalendario/Data'
import HoraAtt from './RenderCalendario/Hora'
import StatusAtt from './RenderCalendario/Status'

import 'react-calendar/dist/Calendar.css';

  import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableRow,
    CCard,
    CCardBody,
    CTableHead,
    CTableHeaderCell,
    CCardTitle,
    CButton,
    CButtonGroup,
    CNavbarBrand ,
   
  } from '@coreui/react'

  import ButtonRelatory from '../btns/ButtonCall'

  import { CDatePicker } from '@coreui/react-lab'
const Calendario = () =>{
    const [value, onChange] = useState(new Date())

    const [pessoas, setPessoas] = useState(22) // caso fizer alguma requisicao, utilizar aqui até carregar

    const [atualizacoes, setAtualizacoes] = useState(
            [
                {protocolo:'23232', status:'Aberto', data:'12/01/2022', hora:'12:20'},
                {protocolo:'23562', status:'Encerrado', data:'12/01/2022', hora:'12:30'},
                {protocolo:'89032', status:'Aberto', data:'12/01/2022', hora:'12:50'}
            ]
        )


    return (
        <>
             <CCard className='cardDireita'>
                <CCardBody>
                    <CCardTitle> <h3> Comparativo </h3> </CCardTitle>
                    <label > Dezembro 2021</label>
                    <CButtonGroup size="sm" role="group" className='btn1Chamados' aria-label="Basic outlined example">
                        <CButton color="primary" variant="outline" color="dark">
                            Dia
                        </CButton>
                        <CButton color="primary" variant="outline" color="dark">
                            Semana
                        </CButton>
                        <CButton color="primary"  variant="outline" color="dark">
                            Mês
                        </CButton>
                    </CButtonGroup>
                    <ButtonRelatory   />
                    <div className='calendarioCss2'>
                        <Calendar
                            onChange={onChange}
                            value={value}
                            className='calendarioCss2'
                        />
                        {/* <CDatePicker /> */}
                    </div>

                    <hr />

                    <CTable striped hover>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">Protocolo</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Data</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Hora</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {atualizacoes.map(item => (
                                <CTableRow>
                                    <CTableDataCell>
                                       <ProtocoloAtt protocolo={item.protocolo} />
                                    </CTableDataCell>
                                        
                                    <CTableDataCell>
                                       <StatusAtt status={item.status} />
                                    </CTableDataCell>

                                    <CTableDataCell>
                                        <DataAtt data={item.data} />
                                    </CTableDataCell>
                                        
                                    <CTableDataCell>
                                        <HoraAtt hora={item.hora} />
                                    </CTableDataCell>

                                </CTableRow>
                            ))}
                        </CTableBody>
                    </CTable>


                </CCardBody>
            </CCard>
        </>
    )
}

export default Calendario 