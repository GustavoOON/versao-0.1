import React, { useState } from 'react';
import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableRow,
    CCard,
    CCardBody,
    CTableHead,
    CTableHeaderCell,
    CNavbar,
    CFormInput,
    CNavbarBrand,
} from '@coreui/react';

import { BiSearchAlt2 } from 'react-icons/bi';

const CallsPerformance = () => {
    const [atendimentos, setAtendimentos] = useState([
        {
            protocolo: 123456,
            data: '12/12/2012',
            status: 'Encerrado',
            funcionario: 'Paulo Jorge',
            cliente: 'sim ',
        },
        {
            protocolo: 454654,
            data: '22/02/2022',
            status: 'Em Aberto',
            funcionario: 'Paula Leticia',
            cliente: 'Não ',
        },
        {
            protocolo: 4798947,
            data: '28/10/2022',
            status: 'Em Aberto',
            funcionario: 'Afranio Alcantara',
            cliente: 'Não ',
        },
    ]);
    const [dados, setDados] = useState(atendimentos);
    const [busca2, setBusca] = useState('');

    // const dados2 = [];
    // let busca;

    const pegandoBusca = (e) => {
        setBusca(e.target.value);
    };

    // const BuscaUser = () => {
    //     let auxBusca = busca.toLocaleLowerCase();
    //     atendimentos.map((item) => {
    //         let auxStatus = item.status.toLocaleLowerCase(); // ALTERAR AQUI DE ACORDO COM OS CAMPOS DA API
    //         let auxFunc = item.funcionario.toLocaleLowerCase(); // ALTERAR AQUI DE ACORDO COM OS CAMPOS DA API
    //         if (auxStatus.includes(auxBusca) || auxFunc.includes(auxBusca)) {
    //             dados2.push(item);
    //             setDados(dados2);
    //         }
    //     });
    // };

    return (
        <CCard className="card-protocolo-call">
            <CCardBody>
                <CNavbar>
                    <CNavbarBrand href="#"></CNavbarBrand>
                    <div>
                        <div className="container-icon-input float-end mb-3">
                            <i className="icon-search-global i-absolute-global">
                                <BiSearchAlt2 color="#6D6D6D" />
                            </i>
                            <CFormInput
                                type="search"
                                className="input-search-global"
                                onChange={pegandoBusca}
                                placeholder="Pesquisar"
                            />
                        </div>
                    </div>
                </CNavbar>
                <CTable striped hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">
                                Protocolo
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                Data
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                Status
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                Funcionário
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                Cliente
                            </CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {dados.map((item, index) => (
                            <CTableRow key={index.toString()}>
                                <CTableDataCell>
                                    {item.protocolo}
                                </CTableDataCell>
                                <CTableDataCell>{item.data}</CTableDataCell>
                                <CTableDataCell>{item.status}</CTableDataCell>
                                <CTableDataCell>
                                    {item.funcionario}
                                </CTableDataCell>
                                <CTableDataCell>{item.cliente}</CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
    );
};

export default CallsPerformance;
