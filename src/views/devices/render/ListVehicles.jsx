import React, { useEffect, useState } from 'react';
import {
    CButton,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react';
import { MdDescription, MdOutlineFilterList } from 'react-icons/md';
import { Spinner } from 'react-bootstrap';

import DateCreated from './components/DateCreated';
import Status from './components/Status';
import BtnEditCostumer from './btn/BtnEditCostumer';
import BtnMidia from './btn/BtnMidia';
import BtnInfos from './btn/BtnInfos';

import '../css/listVehicles.css';

const ListVehicles = (props) => {
    const { dados, userType, refreshPage } = props;

    const [dadosVehicle, setDadosVehicle] = useState([]);

    useEffect(() => {
        setDadosVehicle(dados);
    }, [dados]);

    if (!dadosVehicle) {
        return (
            <>
                <Spinner animation="grow" variant="info" />
            </>
        );
    } else {
        return (
            <CTable striped>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell>Placa Veículo</CTableHeaderCell>
                        <CTableHeaderCell>Cidade</CTableHeaderCell>
                        <CTableHeaderCell>Status</CTableHeaderCell>
                        <CTableHeaderCell style={{ paddingLeft: '6%' }}>
                            Sub-status
                        </CTableHeaderCell>
                        <CTableHeaderCell>
                            Data
                            <CButton
                                onClick={() => console.log('ordenar lista')}
                                size="sm"
                                className="icon-listVehicle-css"
                                color="link"
                            >
                                <MdOutlineFilterList size={22} color="black" />
                            </CButton>
                        </CTableHeaderCell>
                        <CTableHeaderCell className="text-center">
                            Fotos
                        </CTableHeaderCell>
                        <CTableHeaderCell>
                            <div className="container-device-listVehicles-actions">
                                Informações
                            </div>
                        </CTableHeaderCell>
                    </CTableRow>
                </CTableHead>

                <CTableBody>
                    {dadosVehicle.map((item, index) => (
                        <CTableRow key={index}>
                            <CTableDataCell>
                                <label className="font-table-listVehicles">
                                    {item.vehicle.plateNumber}
                                </label>
                            </CTableDataCell>

                            <CTableDataCell style={{ paddingRight: 0 }}>
                                <label className="font-table-listVehicles">
                                    {item.vehicle.city}
                                </label>
                            </CTableDataCell>

                            <CTableDataCell>
                                <label className="font-table-listVehicles">
                                    Em processo
                                </label>
                            </CTableDataCell>

                            <CTableDataCell>
                                <Status status={item} callBack={refreshPage} />
                            </CTableDataCell>

                            <CTableDataCell>
                                <DateCreated
                                    date={item.createdAt}
                                    status={item.status}
                                />
                            </CTableDataCell>

                            <CTableDataCell>
                                <BtnMidia midia={item.vehicle.id} />
                            </CTableDataCell>

                            <CTableDataCell className="collun-actions">
                                <div className="container-device-listVehicles-actions">
                                    {userType === 'ADMIN' ? (
                                        <>
                                            <BtnEditCostumer
                                                data={item}
                                                callBack={refreshPage}
                                            />
                                        </>
                                    ) : null}
                                    <BtnInfos
                                        infos={item}
                                        idCustomer={item.customer.id}
                                        icon={
                                            <MdDescription
                                                size={24}
                                                color="black"
                                            />
                                        }
                                    />
                                </div>
                            </CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
        );
    }
};

export default ListVehicles;
