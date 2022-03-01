import React, {useState} from 'react'
import './status.css'
import {
    CButton,
    CFormSelect
  
  } from '@coreui/react'

import { Modal  }  from 'react-bootstrap';
import { BsArrowDownUp  } from 'react-icons/bs';
const Status= (propsStatus) => {

    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const openModal = () => setShow(true);


    const [choice, setChoice] = useState()

    const options =[
        'Selecione',
        { label: 'Aguardando pagamento', value: '1' },
        { label: 'Em análise', value: '2' },
        { label: 'Aprovado', value: '3'},
        { label: 'Pagamento aprovado', value: '4'},
        { label: 'Bloqueado', value: '5'},
        { label: 'Sicronizado', value: '6'},
    ]

    const updateStatus = (e) => {
        setChoice(e.target.value)
    }

    const salvarEdicoes = () =>{
        console.log(choice)
    }


    return(
        (
            <>
                {propsStatus.status == 'WAITING_PAYMENT' ? 
                    (
                        <div className='conteiner-aguardando'> 
                            <label className='texto'>Aguardando pagamento.</label>
                            <CButton size='sm' onClick={openModal} color="dark" > 
                                <b><BsArrowDownUp className='icon-format' /></b>
                             </CButton> 
                        </div>
                    )
                    :null
                }

                {propsStatus.status == 'IN_ANALYSE' ? 
                    (
                        <div className='conteiner-analyse'> 
                            <p className='texto'>Em análise.</p>
                        </div>
                    )
                    :null
                }

                {propsStatus.status == 'APPROVED' ? 
                    (
                        <div className='conteiner-aprovado'> 
                            <p className='texto'>Pagamento aprovado.</p>
                        </div>
                    )
                    :null
                }

                {propsStatus.status == 'BLOCKED' ? 
                    (
                        <div className='conteiner-bloqueado'> 
                            <p className='texto'>Bloqueado.</p>
                        </div>
                    )
                    :null
                }

                 {propsStatus.status == 'SUSPENDED' ? 
                    (
                        <div className='conteiner-suspenso'> 
                            <p className='texto'>Suspenso.</p>
                        </div>
                    )
                    :null
                }
                {propsStatus.status == 'DISABLED' ? 
                    (
                        <div className='conteiner-desativado'> 
                            <p className='texto'>Disabilitado.</p>
                        </div>
                    )
                    :null
                }

                {propsStatus.status == 'SENT' ? 
                    (
                        <div className='conteiner-enviado'> 
                            <p className='texto'>Enviado.</p>
                        </div>
                    )
                    :null
                }

                {propsStatus.status == 'SYNCHRONIZED' ? 
                    (
                        <div className='conteiner-sicronizado'> 
                            <p className='texto'>Sicronizado.</p>
                        </div>
                    )
                    :null
                }
                
                <Modal 
                    show={show} 
                    onHide={handleClose}
                    size="sm"
                >
                    
                <Modal.Body className='container-body'>
                    <h4>Alterar status </h4>
                    <br />
                    <label> {propsStatus.email}</label>
                    <br />
                    <br />
                    <CFormSelect 
                        aria-label="Default select example"
                        options={options}
                        value={choice}
                        onChange={updateStatus}
                    />
                    <br />
                    <br />
                    
                    <CButton color="dark" onClick={salvarEdicoes} size='sm' >
                        Salvar Alterações
                    </CButton>

                </Modal.Body>
                
            </Modal>
            </>
        )
    )
 
    
}

export default Status
