import React, {useState} from 'react'
import { Button, Modal,  Form, Container, Row, Col    }  from 'react-bootstrap';
import {
    CContainer,
    CRow,
    CButton,
    CCol,
    CFormSelect,
    CFormInput
  } from '@coreui/react'

const Editar = (props) => {

    const [visible, setVisible] = useState(false)  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    // VARIAVEIS
    const [group, setGroup] = useState()
    const userGroup = (e) =>{setGroup(e.target.value), console.log( group)}
    const [phone, setPhone] = useState()
    const userPhone = (e) => {setPhone(e.target.value)}
    const [model, setModel] = useState()
    const userModel = (e) => {setModel(e.target.value)}
    const [contact, setContact] = useState()
    const userContact = (e) =>{setContact(e.target.value)}
    const [category, setCategory] = useState()
    const userCategory = (e) =>{setCategory(e.target.value)}
    const [disable, setDisable] = useState() // boolean
    const userDisable = (e) =>{setDisable(e.target.value)}
    const [value, setValue] = useState()
    const userValue = (e) =>{setUserValue(e.target.value)}
    const [brand, setBrand] = useState()
    const userBrand = (e) =>{setBrand(e.target.value)}
    const [chassis, setChassis] = useState()
    const userChassis = (e) =>{setChassis(e.target.value)}
    const [city, setCity] = useState()
    const userCity = (e) =>{setCity(e.target.value)}
    const [color, setColor] = useState()
    const userColor = (e) =>{setColor(e.target.value)}
    const [fipeCode, setFipeCode] = useState()
    const userFipeCode = (e) =>{setFipeCode(e.target.value)}
    const [fuel, setFuel] = useState()
    const userFuel = (e) =>{setFuel(e.target.value)}
    const [carModel, setCarModel] = useState()
    const userCarModel = (e) =>{setCarModel(e.target.value)}
    const [plateNumber, setPlateNumber] = useState()
    const userPlate = (e) =>{setPlateNumber(e.target.value)}
    const [zipCode, setZipeCode] = useState()
    const userZipCode = (e) =>{setZipCode(e.target.value)}
    const [state, setState] = useState()
    const userState = (e) =>{setState(e.target.value)}
    const [status, setStatus] = useState()
    const userStatus = (e) =>{setStatus(e.target.value)}


    function verifica(data){
        const handleShow =  setShow(true);
    }

    function salvarEdicoes (){
        console.log(group )
        setShow(false);
    }

    return (
        <div> 
            <CButton className='icon-css' onClick={() => verifica(props)} color="secondary" >
                Editar
            </CButton>
            <Modal 
                show={show} 
                onHide={handleClose}
                size="xl"
            >
                    
                <Modal.Header  closeButton>
                    <Modal.Title>Editar Dispositivo </Modal.Title>
                </Modal.Header>
                <Modal.Body className='container-body'>
                    <CRow>
                        <CCol>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label> Grupo </Form.Label>
                                    <Form.Control onChange={userGroup} value = {group} type="text" placeholder= {props.editar.group} />
                                    <br />
                                    <Form.Label> Número SIM</Form.Label>
                                    <Form.Control onChange={userPhone} value = {phone} type="number" placeholder= {props.editar.phone } />
                                    <br />
                                    <Form.Label> Model</Form.Label>
                                    <Form.Control onChange={userModel} value = {model} type="text" placeholder= {props.editar.model }  />
                                    <br />
                                    <Form.Label> Contato  </Form.Label>
                                    <Form.Control onChange={userContact} value = {contact} type="text" placeholder= {props.editar.contact } />
                                    <br />
                                    <Form.Label> Categoria </Form.Label>
                                    <Form.Control onChange={userContact} value = {contact} type="text" placeholder= {props.editar.contact } />
                                    <br />
                                    <Form.Label> Disativado </Form.Label>
                                    <Form.Control onChange={userDisable} value = {disable} type="text" placeholder= {props.editar.disabled } />
                                    <br />
                                    <Form.Label> valor </Form.Label>
                                    <Form.Control onChange={userContact} value = {value} type="text" placeholder= {props.editar.value } />
                                    <br />
                                    <Form.Label> Marca do veículo</Form.Label>
                                    <Form.Control onChange={userBrand} value = {brand} type="text" placeholder= {props.editar.brand }/>
                                    <br />
                                    <Form.Label>Chassi do Veículo </Form.Label>
                                    <Form.Control onChange={userChassis} value = {chassis} type="text" placeholder= {props.editar.chassis } />
                                </Form.Group>
                            </Form> 
                        </CCol>
                        <CCol>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label> Cidade do usuário </Form.Label>
                                    <Form.Control onChange={userCity} value = {city} type="text" placeholder= {props.editar.city } />
                                    <br />
                                    <Form.Label> Cor do veículo</Form.Label>
                                    <Form.Control onChange={userColor} value = {color} type="text" placeholder= {props.editar.color } />
                                    <br />
                                    <Form.Label> Fipe code </Form.Label>
                                    <Form.Control onChange={userFipeCode} value = {fipeCode} type="text" placeholder= {props.editar.fipeCode }/>
                                    <br />
                                    <Form.Label> Tipos de Gasolina </Form.Label>
                                    <Form.Control onChange={userFuel} value = {fuel} type="text" placeholder= {props.editar.fuel }/>
                                    <br />
                                    <Form.Label> Modelo do Carro </Form.Label>
                                    <Form.Control onChange={userModel} value = {model} type="text" placeholder= {props.editar.model} />
                                    <br />
                                    <Form.Label> Placa do Veículo </Form.Label>
                                    <Form.Control onChange={userPlate} value = {plateNumber} type="text" placeholder= {props.editar.plateNumber} />
                                    <br />
                                    <Form.Label> Usuário Status </Form.Label>
                                    <CFormSelect className="mb-3" aria-label="Large select example">
                                        <option>Alterar status do cliente</option>
                                        <option value="1">Aguardando Pagamento</option>
                                        <option value="2">Em Análise</option>
                                        <option value="3">Suspenso</option>
                                        <option value="4">Bloqueado</option>
                                        <option value="5">Desativado</option>
                                        <option value="6">Enviado</option>
                                        <option value="7">Sicronizado</option>
                                    </CFormSelect>
                                    <Form.Label> Zip Code</Form.Label>
                                    <Form.Control onChange={userZipCode} value = {zipCode} type="text" placeholder= {props.editar.zipCode } />
                                    <br />
                                    <Form.Label> Estado </Form.Label>
                                    <Form.Control onChange={userState} value = {state} type="text" placeholder= {props.editar.state } />
                                    <br />
                                </Form.Group>
                            </Form> 
                        </CCol>
                    </CRow>
                </Modal.Body>
                
                <Modal.Footer>  
                    <Button variant="secondary" onClick={handleClose}>
                        Sair
                    </Button>
                    <Button onClick = {salvarEdicoes} variant="primary" >
                        Salvar Alterações
                    </Button>
                </Modal.Footer>
                    
            </Modal>
            
            

        </div>
    )
}

export default Editar 