import React, { useEffect, useState } from 'react';
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react';
import FormatDate from 'src/views/tracking/components/FormatDate';

function Reports({ report, setReport, name, saveReport }) {
    const [valueReportCity, setValueReportCity] = useState('');
    const [valueReportType, setValueReportType] = useState('');
    const [valueReportStartDate, setValueReportStartDate] = useState('');
    const [valueReportFinalDate, setValueReportFinalDate] = useState('');
    const [modalReport, setModalReport] = useState(false);
    const [city, setCity] = useState('');
    const [period, setPeriod] = useState('');
    const [typeUsers, setTypeUsers] = useState('');


    useEffect(() => {
        return () => {
            setValueReportCity('')
            setValueReportType('')
            setValueReportStartDate('')
            setValueReportFinalDate('')
        }
    }, [])

    const downloadReports = (valueReportCity, valueReportType, valueReportStartDate, valueReportFinalDate) => {
        const init = valueReportStartDate.split('-').splice(1).reverse().join('/');
        const final = valueReportFinalDate.split('-').reverse().join('/');

        setCity(valueReportCity);
        setTypeUsers(valueReportType)
        setPeriod(`Período: ${init} - ${final}`)
    }

    return modalReport ? (
        <CModal
            visible={report}
            onClose={() => setModalReport(false)}
            size="lg"
            alignment="center"
        >
            <CModalHeader
                className='d-block'
                closeButton={false}
            >
                <CModalTitle className="title-modal">{`Relatório - Gráfico ${name}`}</CModalTitle>
                <CModalTitle className="title-modal">
                    <span className='fs-6 color-text me-5'>{period}</span>
                    <FormatDate />
                </CModalTitle>
            </CModalHeader>
            <CModalBody>
            <label>{typeUsers}</label>
            </CModalBody>
            <CModalFooter>
                <CButton
                    className='btn-cancel-global'
                    variant='outline'
                    onClick={() => setReport(false)}
                >
                    Cancelar
                </CButton>
                <CButton
                    className='btn-save-global'
                    onClick={() => {
                        saveReport(valueReportCity, valueReportType, valueReportStartDate, valueReportFinalDate)

                    }
                    }
                >
                    Baixar relatório
                </CButton>
            </CModalFooter>
        </CModal>
    ) : (
        <CModal
            visible={report}
            onClose={() => setReport(false)}
            size="lg"
            alignment="center"
        >
            <CModalHeader>
                <CModalTitle className="title-modal">Relatório</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CRow className="mb-4">
                    <div className="title-filter">
                        Escolha os filtros
                    </div>
                    <CCol xs={4}>
                        <h6>Cidade dos usuários</h6>
                        <CFormSelect
                            onChange={({ target }) => setValueReportCity(target.value)}
                            options={[
                                'Cidade',
                                { label: 'Belo Horizonte', value: 'Belo Horizonte' },
                                { label: 'São Paulo', value: 'São Paulo' },
                                { label: 'Rio de Janeiro', value: 'Rio de Janeiro' }
                            ]}
                        />
                    </CCol>
                    <CCol xs={4}>
                        <h6>Tipo dos usuários</h6>
                        <CFormSelect
                            onChange={({ target }) => setValueReportType(target.value)}
                            options={[
                                'Tipos',
                                { label: 'Todos usuários', value: 'Todos usuários' },
                                { label: 'Usuários novos', value: 'Usuários novos' },
                                { label: 'Usuários recorrentes', value: 'Usuários recorrentes' }
                            ]}
                        />
                    </CCol>
                </CRow>
                <CRow>
                    <div className="title-filter">
                        Escolha o intervalo de tempo
                    </div>
                    <CCol xs={3}>
                        <h6>Data de início</h6>
                        <div className="d-flex">
                            <CFormInput
                                onChange={({ target }) => setValueReportStartDate(target.value)}
                                className="me-2"
                                type="date"
                            />
                        </div>
                    </CCol>
                    <CCol xs={3}>
                        <h6>Data de fim</h6>
                        <div className="d-flex">
                            <CFormInput
                                onChange={({ target }) => setValueReportFinalDate(target.value)}
                                className="me-2"
                                type="date"
                            />
                        </div>
                    </CCol>
                </CRow>
            </CModalBody>
            <CModalFooter>
                <CButton
                    className='btn-cancel-global'
                    variant='outline'
                    onClick={() => setReport(false)}
                >
                    Cancelar
                </CButton>
                <CButton
                    className='btn-save-global'
                    onClick={() => {
                        setModalReport(true)
                        downloadReports(valueReportCity, valueReportType, valueReportStartDate, valueReportFinalDate)
                    }}
                >
                    Salvar
                </CButton>
            </CModalFooter>
        </CModal>
    )
}

export default Reports