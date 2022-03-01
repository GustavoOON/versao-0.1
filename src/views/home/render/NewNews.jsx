import React, {useState} from 'react'

import { Button, Modal, Spinner } from 'react-bootstrap';

import {
    CForm,
    CButton,
    CFormLabel,
    CFormInput,
    CFormTextarea
  } from '@coreui/react'

const NewNews = () =>{

    const handleClose = () => setShow(false);
    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const AbreModal = ()=>setShow(true)

    return(
        <> 
            <CButton color='dark' onClick={AbreModal} variant='ghost'> Novo fato </CButton>

            <Modal 
              show={show} 
              onHide={handleClose}
              size="xl"
              className='container-btn-risc'
            >   
                <Modal.Header>
                    <h4>Inserir novo fato</h4>
                </Modal.Header>
              <Modal.Body>
                <CForm>
                    <div className="mb-3">
                        <CFormLabel >Título do novo fato</CFormLabel>
                        <CFormInput type="text" />
                    </div>
                    <div className="mb-3">
                        <CFormLabel>Dígite uma breve descrição</CFormLabel>
                        <CFormTextarea rows="3"></CFormTextarea>
                    </div>
                </CForm>
                      
              </Modal.Body>
                    
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Sair
                </Button>
                <Button variant="success" onClick={handleClose}>
                    Salvar
                </Button>
              </Modal.Footer>
                    
            </Modal>
        </>
    )
}

export default NewNews