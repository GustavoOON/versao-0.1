import React, {useState} from 'react'

import { Form , Modal }  from 'react-bootstrap';
import { CButton, CRow, CCol } from '@coreui/react'


const RecoverPassword = () =>{
    // propriedades do modal
    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [email, setEmail] = useState('')
    const changeEmail = (e)=>{ setEmail(e.target.value)} //  pegando valores do email
    const [respEndpoint, setRespEndpoint]=useState(true) // apos o envio do email, pegar resposta
    function verifica(data){ 
        const handleShow =  setShow(true);
    }

    function salvarEdicoes (){
        
        let mySubString
        // caso usuario nao envie nada no email, verificar o campo.console.log('teste', mySubString)
        console.log('teste', email)
        if(email.length > 1){
             mySubString = email.substring(
                email.lastIndexOf("@") + 1, 
                email.lastIndexOf(".")
            );  
        }else{
            // Solucao temporaria
            mySubString = 'errado'
        }
        

        // permitir o envio do email somente se tiver dominio oonpayperuse, oonseguros
        if((mySubString === 'oonpayperuse') ||(mySubString ==='oonseguros')){
            verificaMail()
            alert('Dominio Certo')
        }else{
            alert('Dominio Errado')
        }

        setShow(false); // fechar modal
    }

    function verificaMail (){
        // envia o email para o endpoint, Firebase faz tudo já
        // so chamar api do firebase
        console.log('email enviado', email) 
    }

    return (
<>
            <CButton color="link" variant='ghost' onClick={verifica} className="btn-forgot-password">Esqueci minha senha</CButton>


            <Modal 
                show={show} 
                onHide={handleClose}
                size="lg"
            >
                    
                <Modal.Header  closeButton>
                    <Modal.Title>Recuperação de senha</Modal.Title>
                </Modal.Header>
                <Modal.Body className='container-body'>
                    <CRow>
                        <CCol>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Digite um e-mail cadastrado</Form.Label>
                                    <Form.Control type="email"  onChange={changeEmail} value={email} placeholder="Digite seu e-mail" />
                                </Form.Group>
                            </Form> 
                            <br />
                            <CButton onClick={salvarEdicoes} color="dark" className="btns-login">
                                Enviar
                            </CButton>
                        </CCol>
                    </CRow>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default RecoverPassword;
