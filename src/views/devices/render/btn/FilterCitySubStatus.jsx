import React, { useState } from 'react';
import {
    CAccordion,
    CAccordionBody,
    CAccordionHeader,
    CAccordionItem,
    CBadge,
    CButton,
    CFormCheck,
    CFormInput,
    CFormLabel,
    CModal,
    CModalBody,
    CModalHeader,
    CModalTitle,
} from '@coreui/react';
import { BiSearchAlt2 } from 'react-icons/bi';

import '../../css/filterCitySubStatus.css';

function FilterCitySubStatus() {
    const [visible, setVisible] = useState(false);
    const [viewMost, setViewMost] = useState(false);
    const [checked, setChecked] = useState([]);
    const [search, setSearch] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [selected, setDelected] = useState(true);

    const funcChecked = ({ target }) => {
        target.checked
            ? setChecked([...checked, target.id])
            : setChecked(checked.filter((name) => name !== target.id));
    };

    const ChangeSearch = ({ target }) => {
        setSearch(target.value);
    };

    const funcDateSearch = ({ target }) => {
        setSearchDate(target.id);
    };

    const funcSave = () => {
        setVisible(!visible);
        setDelected(false);
    };

    const funcCleanAll = () => {
        setSearch('');
        setSearchDate('');
        setChecked([]);
        setViewMost(false);
        setDelected(true);
    };

    return (
        <>
            <CButton
                color="link"
                className="btn-link-global me-3 ps-2 pt-0"
                variant="outline"
                onClick={() => setVisible(!visible)}
            >
                <CBadge
                    hidden={selected}
                    className="border border-light p-1"
                    color="danger"
                    position="top-start"
                    shape="rounded-circle"
                >
                    <span className="visually-hidden">Search</span>
                </CBadge>
                Outros filtros
            </CButton>
            <CModal
                visible={visible}
                onClose={() => {
                    setVisible(false);
                }}
            >
                <CModalHeader closeButton={false}>
                    <CModalTitle className="title-modal fs-6">
                        FILTRAR
                    </CModalTitle>
                    <CModalTitle>
                        <CButton
                            onClick={funcCleanAll}
                            color="link"
                            variant="outline"
                            className="btn-link-global"
                            size="sm"
                        >
                            Limpar tudo
                        </CButton>
                    </CModalTitle>
                    <CModalTitle>
                        <CButton
                            onClick={funcSave}
                            size="sm"
                            className="btn-save-global"
                        >
                            Salvar
                        </CButton>
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CFormLabel className="text-color-blue">
                        Pesquise uma cidade
                    </CFormLabel>
                    <div className="container-icon-input">
                        <i className="icon-search-global i-absolute-global">
                            <BiSearchAlt2 color="#6D6D6D" />
                        </i>
                        <CFormInput
                            className="input-search-global"
                            placeholder="Pesquise"
                            onChange={ChangeSearch}
                            value={search}
                        />
                    </div>
                    <hr />
                    <CAccordion alwaysOpen={true} flush>
                        <CAccordionItem itemKey={1}>
                            <CAccordionHeader>
                                <span className="text-color-blue">
                                    Sub-status
                                </span>
                            </CAccordionHeader>
                            <CAccordionBody>
                                <CFormCheck
                                    className="mb-3"
                                    id="Aguardando análise"
                                    label="Aguardando análise"
                                    onChange={funcChecked}
                                />
                                <CFormCheck
                                    className="mb-3"
                                    id="Análise dos documentos"
                                    label="Análise dos documentos"
                                    onChange={funcChecked}
                                />
                                <CFormCheck
                                    className="mb-3"
                                    id="Análise das fotos do veículo"
                                    label="Análise das fotos do veículo"
                                    onChange={funcChecked}
                                />
                                <CFormCheck
                                    className="mb-3"
                                    id="Veículo já assegurado"
                                    label="Veículo já assegurado"
                                    onChange={funcChecked}
                                />
                                <CFormCheck
                                    className="mb-3"
                                    id="Erro de documentos"
                                    label="Erro de documentos"
                                    onChange={funcChecked}
                                />
                                <CButton
                                    hidden={viewMost}
                                    color="link"
                                    className="btn-link-global"
                                    onClick={() => setViewMost(!viewMost)}
                                    variant="outline"
                                >
                                    Ver mais
                                </CButton>
                                {viewMost ? (
                                    <>
                                        <CFormCheck
                                            className="mb-3"
                                            id="Erro nas fotos do veículo"
                                            label="Erro nas fotos do veículo"
                                            onChange={funcChecked}
                                        />
                                        <CFormCheck
                                            className="mb-3"
                                            id="Suspeita de fraude"
                                            label="Suspeita de fraude"
                                            onChange={funcChecked}
                                        />
                                        <CFormCheck
                                            className="mb-3"
                                            id="Aguardando reanálise"
                                            label="Aguardando reanálise"
                                            onChange={funcChecked}
                                        />
                                        <CFormCheck
                                            className="mb-3"
                                            id="Reanálise"
                                            label="Reanálise"
                                            onChange={funcChecked}
                                        />
                                        <CFormCheck
                                            className="mb-3"
                                            id="Não aprovado"
                                            label="Não aprovado"
                                            onChange={funcChecked}
                                        />
                                    </>
                                ) : null}
                            </CAccordionBody>
                        </CAccordionItem>
                        <CAccordionItem itemKey={2}>
                            <CAccordionHeader>
                                <span className="text-color-blue">Data</span>{' '}
                            </CAccordionHeader>
                            <CAccordionBody>
                                <CFormCheck
                                    type="radio"
                                    className="mb-3"
                                    id="Há mais de 03 dias"
                                    name="dataSearch"
                                    label="Há mais de 03 dias"
                                    onChange={funcDateSearch}
                                />
                                <CFormCheck
                                    type="radio"
                                    className="mb-3"
                                    id="Até 48 horas"
                                    name="dataSearch"
                                    label="Até 48 horas"
                                    onChange={funcDateSearch}
                                />
                                <CFormCheck
                                    type="radio"
                                    className="mb-3"
                                    id="Últimas 24 horas"
                                    name="dataSearch"
                                    label="Últimas 24 horas"
                                    onChange={funcDateSearch}
                                />
                            </CAccordionBody>
                        </CAccordionItem>
                    </CAccordion>
                </CModalBody>
            </CModal>
        </>
    );
}

export default FilterCitySubStatus;
