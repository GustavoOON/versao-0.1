
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';
import React from 'react'

import '../../css/users.css'

function DropdownFilter() {
    return (
    <>
       <CDropdown>
            <CDropdownToggle 
            color="link"
            className='drop-toggle-filter-users'
            >
                Filtrar
            </CDropdownToggle>
            <CDropdownMenu >
                <span className="filter-text">
                    FILTRAR POR
                </span> 
                <CDropdownItem 
                onClick={() => console.log('deu')}
                className="drop-item-filter-users"
                >
                    Data de filiação: mais recente
                    </CDropdownItem>
                <CDropdownItem 
                onClick={() => console.log('deu')}
                className="drop-item-filter-users"
                >
                    Data de filiação: mais antiga
                    </CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    </>
    )
}
    
export default  DropdownFilter;
