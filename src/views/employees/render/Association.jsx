import React, { useState } from 'react'
import { CButton, CContainer, CForm, CFormCheck, CFormInput, CModal, CModalBody, CModalContent, CModalFooter, CModalHeader, CModalTitle, CNavbarToggler, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';

import DepartCli from './Depart';
import { BiSearchAlt2 } from 'react-icons/bi';
import { HiTrash } from 'react-icons/hi';
import Pagination from 'src/views/components/Pagination';
import { MdOutlineFilterList } from 'react-icons/md';


function Association({ dados, page, numberOfPages, previousPage, setPreviousPage, currentPage, setCurrentPage, nextPage, setNextPage }) {
    const [visible, setVisible] = useState(false)
    const [addAssociation, setAddAssociation] = useState(false)
    const [modalRemove, setModalRemove] = useState(false)


    const removeAssociation = (e) => {

    }


    return modalRemove ? (
        <CModal
            alignment="center"
            visible={modalRemove}
        >
            <CModalBody>
                <p className='text-center m-5 text-remove'>
                    Você tem certeza que deseja
                    remover esse funcionário da sua associação?
                </p>
                <div className='mb-3 d-flex justify-content-around'>
                    <CButton
                        size="lg"
                        className='btn-save-global'
                    >
                        Sim, remover
                    </CButton>
                    <CButton
                        className='btn-cancel-global'
                        size="lg"
                        variant='outline'
                        onClick={() => setModalRemove(false)}
                    >
                        Cancelar
                    </CButton>
                </div>
            </CModalBody>
        </CModal>
    ) : (
        <>
            <CButton
                variant='outline'
                className='btn-cancel-global me-2'
                onClick={() => setVisible(!visible)}
            >
                Associação
            </CButton>
            <CModal
                visible={visible}
                onClose={() => setVisible(false)}
                size="xl"
            >
                <CModalHeader>
                    <CModalTitle className="title-modal">Associados</CModalTitle>
                    <CModalTitle className="title-modal">
                        Nome - Função
                    </CModalTitle>
                </CModalHeader>

                {addAssociation ? (
                    <>
                        <CContainer fluid className='mt-3'>
                            <CForm className="d-flex justify-content-between">
                                <div className="d-flex ">
                                    <div className="container-icon-input">
                                        <i
                                            className='icon-search-global i-absolute-global'
                                        >
                                            <BiSearchAlt2 color="#6D6D6D"
                                            />
                                        </i>
                                        <CFormInput
                                            type="text"
                                            // onChange={Pegandobusca}
                                            // value={busca2}
                                            className="input-search-global"
                                            placeholder="Pesquisar"
                                        // onKeyPress={searchMail}
                                        />
                                    </div>
                                    <CButton
                                        // onClick={searchMail}
                                        className="btn-search-global"
                                        variant='outline'
                                    >
                                        Buscar
                                    </CButton>
                                </div>
                                <div>
                                    <CButton
                                        onClick={() => setAddAssociation(false)}
                                        className="btn-save-global"
                                    >
                                        Salvar
                                    </CButton>
                                </div>
                            </CForm>
                        </CContainer>
                        <CModalBody>
                            <CTable
                                align="middle"
                                className="mb-0 usersTableContainer"
                                hover
                                striped
                                responsive
                            >
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell></CTableHeaderCell>
                                        <CTableHeaderCell>
                                            Nome
                                            <CButton
                                                onClick={() => console.log("ordenar lista")}
                                                size="sm"
                                                color='link'
                                            >
                                                <MdOutlineFilterList size={20} color="black" />
                                            </CButton>
                                        </CTableHeaderCell>
                                        <CTableHeaderCell>
                                            Departamento
                                            <CButton
                                                onClick={() => console.log("ordenar lista")}
                                                size="sm"
                                                color='link'
                                            >
                                                <MdOutlineFilterList size={20} color="black" />
                                            </CButton>
                                        </CTableHeaderCell>
                                        <CTableHeaderCell>
                                            E-mail
                                            <CButton
                                                onClick={() => console.log("ordenar lista")}
                                                size="sm"
                                                color='link'
                                            >
                                                <MdOutlineFilterList size={20} color="black" />
                                            </CButton>
                                        </CTableHeaderCell>
                                        <CTableHeaderCell>
                                            Contato
                                            <CButton
                                                onClick={() => console.log("ordenar lista")}
                                                size="sm"
                                                color='link'
                                            >
                                                <MdOutlineFilterList size={20} color="black" />
                                            </CButton>
                                        </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    {/* Percorre os usuarios  */}
                                    {dados.map((item, index) => (
                                        <CTableRow key={index.toString()}>
                                            <CTableDataCell >
                                                <CFormCheck
                                                    type="checkbox"
                                                    value={index}
                                                />
                                            </CTableDataCell>
                                            <CTableDataCell >
                                                {item.firstName}
                                            </CTableDataCell>
                                            <CTableDataCell >
                                                <DepartCli departamento={item.department} />
                                            </CTableDataCell>
                                            <CTableDataCell >
                                                {item.email}
                                            </CTableDataCell>
                                            <CTableDataCell >
                                                {`(0${item.phone.slice(0, 2)}) ${item.phone.slice(2, 7)}-${item.phone.slice(7)}`}
                                            </CTableDataCell>
                                        </CTableRow>
                                    ))
                                    }
                                </CTableBody>
                            </CTable>
                        </CModalBody>
                    </>
                ) : (
                    <>
                        <CContainer fluid>
                            <CForm className="d-flex justify-content-between mt-3">
                                <div className="d-flex">
                                    <div className="container-icon-input">
                                        <i
                                            className='icon-search-global i-absolute-global'
                                        >
                                            <BiSearchAlt2 color="#6D6D6D"
                                            />
                                        </i>
                                        <CFormInput
                                            type="text"
                                            // onChange={Pegandobusca}
                                            // value={busca2}
                                            className="input-search-global"
                                            placeholder="Pesquisar"
                                        // onKeyPress={searchMail}
                                        />
                                    </div>
                                    <CButton
                                        // onClick={searchMail}
                                        className="btn-search-global"
                                        variant='outline'
                                    >
                                        Buscar
                                    </CButton>
                                </div>
                                <div>
                                    <CButton
                                        onClick={() => setAddAssociation(true)}
                                        className="btn-save-global"
                                    >
                                        Adicionar associado
                                    </CButton>
                                </div>
                            </CForm>
                        </CContainer>
                        <CModalBody>
                            <CTable
                                align="middle"
                                className="mb-0 usersTableContainer"
                                hover
                                striped
                                responsive
                            >
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell>
                                            Departamento
                                            <CButton
                                                onClick={() => console.log("ordenar lista")}
                                                size="sm"
                                                color='link'
                                            >
                                                <MdOutlineFilterList size={20} color="black" />
                                            </CButton>
                                        </CTableHeaderCell>
                                        <CTableHeaderCell>
                                            Nome
                                            <CButton
                                                onClick={() => console.log("ordenar lista")}
                                                size="sm"
                                                color='link'
                                            >
                                                <MdOutlineFilterList size={20} color="black" />
                                            </CButton>
                                        </CTableHeaderCell>
                                        <CTableHeaderCell>
                                            E-mail
                                            <CButton
                                                onClick={() => console.log("ordenar lista")}
                                                size="sm"
                                                color='link'
                                            >
                                                <MdOutlineFilterList size={20} color="black" />
                                            </CButton>
                                        </CTableHeaderCell>
                                        <CTableHeaderCell>
                                            Contato
                                            <CButton
                                                onClick={() => console.log("ordenar lista")}
                                                size="sm"
                                                color='link'
                                            >
                                                <MdOutlineFilterList size={20} color="black" />
                                            </CButton>
                                        </CTableHeaderCell>
                                        <CTableHeaderCell>
                                        </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    {dados.map((item, index) => (
                                        <CTableRow key={index.toString()}>
                                            <CTableDataCell >
                                                <DepartCli departamento={item.department} />
                                            </CTableDataCell>
                                            <CTableDataCell >
                                                {item.firstName}
                                            </CTableDataCell>
                                            <CTableDataCell >
                                                {item.email}
                                            </CTableDataCell>
                                            <CTableDataCell >
                                                {`(0${item.phone.slice(0, 2)}) ${item.phone.slice(2, 7)}-${item.phone.slice(7)}`}
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <CButton
                                                    color='link'
                                                    variant='ghost'
                                                    onClick={() => setModalRemove(true)}
                                                >
                                                    <HiTrash color="#6D6D6D" size={25} />
                                                </CButton>
                                            </CTableDataCell>
                                        </CTableRow>
                                    ))
                                    }
                                </CTableBody>
                            </CTable>
                        </CModalBody>
                    </>
                )}
                <CModalFooter>
                    <Pagination page={page} numberOfPages={numberOfPages} previousPage={previousPage} setPreviousPage={setPreviousPage} currentPage={currentPage} setCurrentPage={setCurrentPage} nextPage={nextPage} setNextPage={setNextPage} />
                </CModalFooter>

            </CModal>
        </>
    )
}

export default Association;
