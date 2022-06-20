import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'
import {
    CButton,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CPopover,
} from '@coreui/react'

function ButtonRanking() {
    const month = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'MAio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];

    return (

        <CDropdown alignment="end">
            <CDropdownToggle
                color="transparent"
                caret={false}
                className="p-0"
            >
                <CIcon icon={cilOptions} />
            </CDropdownToggle>
            <CDropdownMenu>
                <CPopover
                    content={
                        <>
                            {
                                month.map((name, index) => (
                                    <div key={index}>
                                        <CButton
                                            color="link"
                                            variant="outline"
                                            onClick={() => console.log("Funcionouuuuuuu")}>
                                            {name}
                                        </CButton>
                                        <br />
                                    </div>
                                ))
                            }
                        </>
                    }
                    placement="left"
                >
                    <CDropdownItem
                        color="link">
                        Alterar mês
                    </CDropdownItem>
                </CPopover>
                <CDropdownItem
                // onClick={() => setVisibleReport(true)}
                >
                    Gerar relátorio
                </CDropdownItem>
                <CDropdownItem
                // onClick={() => setVisibleGraphic(true)}
                >
                    Mostrar lista completa...
                </CDropdownItem>
                <CDropdownItem disabled>
                    Mais Ferramentas
                </CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    )
}

export default ButtonRanking