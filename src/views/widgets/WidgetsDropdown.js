import React, {useState} from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
  CCard,
  CCardText,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CButton,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'
import './widget.css'
const WidgetsDropdown = () => {

  // WIDGET 1 (Acumulado Mensal)-- Ainda falta colocar dados, labels ex: mes 1,2,3,4 ...
  const [acumuladoMensal, setAcumuladoMensal] = useState({valor:9999.99, porcentagem: -12, title:'Acumulado Mensal' }) // valores mes 
  // valor semana
  // valor dia
  // vamos ter que setar o mes, mes será usado de inicio, podendo ser dia ou semana, Uma variavel será usada para definir os campos 
  const [widget1, setWidget1] =  useState(acumuladoMensal)

  // WIDGET 2 (Abertura de Sinistro)
  const [sinistroMes, setSinistroMes] = useState({qtdAbertos:23, porcentagem: 10, title:'Sinistro abertos no mês'})
  // Semana
  // DIA
  // Variavel definidora
  const [widgetSinistro, setWidgetSinistro] = useState(sinistroMes)


  // widget 3 - valores de planos
  const [planosData, setPlanosData ] = useState({planAnalise:20, planAtivo:35, planDesativado:40})

  return (
    <> 
      <CRow>
        <CCol xs={4} >
          <CWidgetStatsA
            className="mb-4 widget1Container"
            
            value={
              <>
                R${' '}{widget1.valor}{' '}
                <span className="fs-6 fw-normal">
                  ( {widget1.porcentagem} % <CIcon icon={cilArrowBottom} />)
                </span>
              </>
            }
            title={widget1.title}
            action={
              <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={false} className="p-0">
                  <CIcon icon={cilOptions}  />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>
                      Alterar mês
                  </CDropdownItem>
                  <CDropdownItem>Gerar relátorio</CDropdownItem>
                  <CDropdownItem>Gerar gráfico </CDropdownItem>
                  <CDropdownItem disabled>Buscar...</CDropdownItem>
                  <CDropdownItem disabled>Mais Ferramentas</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartLine
                className="mt-3 mx-3 "
                style={{ height: '70px' }}
                data={{
                  labels: ['Januaryss', 'FebruarySSS', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'warning',
                      borderColor: 'rgba(29,27,31,0.5)',
                      pointBackgroundColor: 'rgba(35,235,58, 0.8)',
                      data: [65, 59, 84, 84, 51, 55, 40, 65, 59, 84, 84, 51, 55, 40],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawBorder: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      min: 30,
                      max: 89,
                      display: false,
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                      tension: 0.4,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />

        </CCol>


        <CCol xs={4}>
          <CWidgetStatsA
            className="mb-4 widget2Container"
          
            value={
              <>
                {widgetSinistro.qtdAbertos}{' '}
                <span className="fs-6 fw-normal">
                  ({widgetSinistro.porcentagem}% <CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
            title={widgetSinistro.title}
            action={
              <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={false} className="p-0">
                  <CIcon icon={cilOptions}  />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>
                      Alterar mês
                  </CDropdownItem>
                  <CDropdownItem>Gerar relátorio</CDropdownItem>
                  <CDropdownItem>Gerar gráfico </CDropdownItem>
                  <CDropdownItem disabled>Buscar...</CDropdownItem>
                  <CDropdownItem disabled>Mais Ferramentas</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartLine
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: ['Januaryi', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My First dataset  ORIGIM',
                      backgroundColor: 'info',
                      borderColor: 'rgba(29,27,31,0.5)',
                      pointBackgroundColor: 'rgba(235,0,38, 0.8)',
                      data: [1, 18, 9, 17, 34, 22, 11],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawBorder: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      min: -9,
                      max: 39,
                      display: false,
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>


        <CCol xs={4}>
          <CCard className='card1'>
            <CCardBody>
              <CCardText>
                <CRow>
                  <CCol xs={1} className='leftSimbol' sm="auto">
                    <p className='textFontSimbol' > <div className='simbolo1'> </div> </p>
                    <p className='textFontSimbol' > <div className='simbolo2'> </div></p>
                    <p className='textFontSimbol' > <div className='simbolo3'> </div></p>
                  </CCol>
                  <CCol xs={9} >
                    <p className='textFont' > {planosData.planAnalise} Planos em análise </p>
                    <p className='textFont' > {planosData.planAtivo} Planos ativos</p>
                    <p className='textFont' > {planosData.planDesativado}  Planos desativados</p>
                  </CCol>
                  <CCol xs={1} >
                    <CDropdown className='btn-widget3'>
                      <CDropdownToggle color="transparent" caret={false} className="p-0">
                        <CIcon icon={cilOptions}  />
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem>
                            Alterar mês
                        </CDropdownItem>
                        <CDropdownItem>Gerar relátorio</CDropdownItem>
                        <CDropdownItem>Gerar gráfico </CDropdownItem>
                        <CDropdownItem disabled>Buscar...</CDropdownItem>
                        <CDropdownItem disabled>Mais Ferramentas</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CCol>
                </CRow>
                
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )

  
}

export default WidgetsDropdown
