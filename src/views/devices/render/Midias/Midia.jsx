import React, { Component, useState } from 'react'
import { Button, Modal,  }  from 'react-bootstrap';
import CarrocelImg from './Carrocel'
import CIcon from '@coreui/icons-react'
import {cilShieldAlt, cilCamera, cilLoopCircular } from '@coreui/icons'

import {CButton} from '@coreui/react'
const Midia =  (propsId) => {

    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    

    // pegar imagens do usuario aqui, props id aqui 

    function verifica(data){
        const handleShow =  setShow(true);
    }

    function salvarEdicoes (){
        setShow(false);
    }
    return (
        <>
            
            <CButton  onClick={() => verifica(propsId)} className='icon-css'  color="secondary" >
                <CIcon icon={cilCamera}  size="xl" />
            </CButton>
            
            <Modal 
                show={show} 
                onHide={handleClose}
                size="xl"
                
            >
                <Modal.Header  closeButton>
                    <Modal.Title>Fotos do Veículo </Modal.Title>
                </Modal.Header>
                <Modal.Body className='container-body'>
                    <CarrocelImg midia={propsId} />
                </Modal.Body>

                    
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Sair
                    </Button>
                </Modal.Footer>
                
            </Modal>


        </>
    )
}


export default Midia