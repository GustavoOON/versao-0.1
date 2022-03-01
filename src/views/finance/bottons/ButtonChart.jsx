import React, {useState} from 'react'
import { Button, Modal,  Form  }  from 'react-bootstrap';

import {
    CButton,
  } from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {cilOptions } from '@coreui/icons'

const ButtonChart = () =>{
    const handleClose = () => setShow(false);
    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const verifica = ()=>setShow(true)


    return (
        <>
            <CButton variant='white' onClick={() => verifica()} >
                <CIcon icon={cilOptions}  size="md" />
            </CButton>

            <Modal 
                show={show} 
                onHide={handleClose}
                size="sm"
                
            >
                    
               
                <Modal.Body className='container-body'>
                    <CButton color="primary" size='sm' variant="ghost">Alterar mês</CButton>
                    <br />
                    <CButton color="primary" size='sm' variant="ghost">Gerar Relatório</CButton>
                    <br />
                    <CButton color="primary" size='sm' variant="ghost">Editar Grafico </CButton>
                    <br />
                    <CButton color="primary" size='sm' variant="ghost">Mais ferramentas</CButton>
                </Modal.Body>

                    
                
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Sair
                    </Button>
                    <Button variant="primary" >
                        Salvar Alterações
                    </Button>
                </Modal.Footer> */}
                
            </Modal>
        </>
    )
}

export default ButtonChart