import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

import { Modal } from 'react-bootstrap';

const Resume = () =>{

    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [fullscreen, setFullscreen] = useState(true);
    
    function verifica(breakpoint){
        setFullscreen(breakpoint);
        const handleShow =  setShow(true);
        
    }
    return (
        <> 
            <CButton onClick={verifica} > Gerar relatório </CButton>
            <CModal 
                visible={show} 
                onClose={handleClose}
                fullscreen={fullscreen}
                // size="xl"
            >
                    
                <CModalHeader closeButton>
                    <CModalTitle className="title-modal">Resumo da operação </CModalTitle>
                </CModalHeader>
                <CModalBody className='container-body'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat suscipit consequatur dignissimos veritatis! Dolores, voluptates iure quasi laboriosam aperiam, tempore praesentium est rerum itaque commodi, quos dignissimos magnam excepturi?</p>
                </CModalBody>
                <CModalFooter>  
                    <CButton onClick={handleClose}>
                        Sair
                    </CButton>
                    
                </CModalFooter>
                    
            </CModal>
        </>
    )   
}

export default  Resume