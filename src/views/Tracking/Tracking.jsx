import React, {useState} from 'react'
import './tracking.css'
import { Spinner, Modal }  from 'react-bootstrap';
import { CImage, CButton, CContainer, CRow, CCol } from '@coreui/react'

import online from './../../assets/images/car_ativo.png'
import offline from './../../assets/images/car_desativo.png'

import {  GoogleMap, Marker,  useJsApiLoader} from '@react-google-maps/api';

import InfoWindowPopup from './render/InfoWindow'
import Report from './render/Report'
import InfoCar from './render/InfosCars'

import { BsFillBarChartLineFill, BsCurrencyDollar  } from 'react-icons/bs';

const Tracking = () => {

  const [response, setResponse] = useState("");

  const containerStyle = {
    width: '100%' ,
    height: '80vh'
  };

  const center = {
    lat: -19.9190991,
    lng: -43.9385985
  };

  const options = {
    // styles: mapSyles,
    disableDefaultUI: true,
    zoomControl:true,
    fullscreenControl: true,
    streetViewControl: true,
  }

  const libraries = ["places"];

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAHKaVOonbL8-sJ5BM_StSZhM2pAw2CK9A",  // trocar o token aqui, TOKEN PESSOAL 
    libraries,
  })

  const [statusCarro, setStatusCarro] = useState(false)
  const [map, setMap] = React.useState(null)
  const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
  }, [])

    
  const pos = [
    {   
        id:1,
        name:'Celta',
        lat: -19.9191912,
        lng: -43.9387852,
        status:0, 
        title: "Uluru (Ayers Rock)"
    },
    {   
        id:2,
        name:'Gol bola',
        lat: -19.8127 ,
        lng: -43.9512,
        status:1, 
        title: "Uluru (Ayers Rock)"
    },
    {   
        id:3,
        name:'pegeout 207',
        lat: -19.813,
        lng: -43.9238,
        status:1, 
        title: "Uluru (Ayers Rock)222"
    },
    {   
        id:4,
        name:'Camaro',
        lat: -19.8132,
        lng: -43.9238,
        status:1, 
        title: "Uluru (Ayers Rock)222"
    },
    {   
        id:5,
        name:'Mustang',
        lat: -19.964512,
        lng: -43.962461,
        status:0,  
        title: "Uluru (Ayers Rock)22"
    },
  ]

  const [show, setShow] = useState(false);
  const [flagBTN, setFlagBTN] = useState(true)

  // Modal 1 de relatorio
  function openModal(){
      const handleShow =  setShow(true);
      setFlagBTN(false)
      setFlagBTN2(false)
  }

  const closePopup = () =>{
    setSelecionado('')
  }

  const closeModal = () =>{
    setFlagBTN(true)
    setFlagBTN2(true)
    setShow(false)
  }

  const [show2, setShow2] = useState(false);
  const [flagBTN2, setFlagBTN2] = useState(true)

  // Modal 2 de informações dos carros 
  function openModal2(){
    const handleShow2 =  setShow2(true);
    setFlagBTN2(false)
    setFlagBTN(false)
  } 

  const closeModal2 = () =>{
    setFlagBTN2(true)
    setFlagBTN(true)
    setShow2(false)
  }

  const [selecionado, setSelecionado] = useState('')
  // escolhe o carro no map
  const selected = (e) =>{
    setSelecionado(e)
  }

    if(isLoaded){
      return (
        <> 
          <div className='porBaixo'>
            <div className='porCima'> 
              {flagBTN === true ? 
                (   <CButton className='button-css' onClick={openModal} color="dark" >
                      <BsFillBarChartLineFill />
                    </CButton>)
                :null
              }
              <div className='modalPorCima'>
                <Modal 
                  show={show} 
                  onHide={closeModal}
                  size="xl"
                >
                  <Modal.Header  closeButton>
                      <Modal.Title>Relatórios</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className='container-body'>
                      <Report /> 
                  </Modal.Body>
                  <Modal.Footer>  
                      <CButton  onClick={closeModal}>
                          Sair
                      </CButton>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>


            <div className='porCima2'> 
              {flagBTN2 === true ? 
                (   <CButton className='button-css' onClick={openModal2} color="warning" >
                      <BsCurrencyDollar />
                    </CButton>)
                :null
              }
           
              <div className='modalPorCima2'>
                <Modal 
                  show={show2} 
                  onHide={closeModal2}
                  size="xl"
                >
                  {/* <Modal.Header  closeButton>
                      <Modal.Title>Dispositivos</Modal.Title>
                  </Modal.Header> */}
                  <Modal.Body className='container-body'>
                      <InfoCar /> 
                  </Modal.Body>
                  <Modal.Footer>  
                      <CButton  onClick={closeModal2}>
                          Sair
                      </CButton>
                  
                  </Modal.Footer>
                </Modal>
              </div>
            </div>

            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onUnmount={onUnmount}
              options={options} // muda a estilizacao do mapa
            >
             
              {pos.map(item =>{
                if(item.status == 1){
                  return (
                    <>
                    {/* ONLINE */}
                      <Marker
                        key={item.id}
                        position={{lat:item.lat, lng:item.lng} }
                        icon={{
                          url: online,
                          scaledSize: new window.google.maps.Size(32,32),
                          origin: new window.google.maps.Point(0,0),
                          anchor: new window.google.maps.Point(15,15),
                        }} 
                        
                        onClick={() => {selected(item)}}
                      /> 
                      {selecionado != '' ? 
                        (
                          <InfoWindowPopup closePop={closePopup} device={selecionado} />
                        )
                          :null
                      }
                    </>
                  )
                }else{
                  return (
                    <>
                      {/* OFFLINE */}
                      <Marker
                        key={item.id}
                        position={{lat:item.lat, lng:item.lng} }
                        icon={{
                          url: offline,
                          scaledSize: new window.google.maps.Size(30,30),
                          origin: new window.google.maps.Point(0,0),
                          anchor: new window.google.maps.Point(15,15),
                        }} 
                        onClick={() => {selected(item)}}
                      />

                      {selecionado != '' ? 
                        (
                          <InfoWindowPopup closePop={closePopup} device={selecionado}/>
                        )
                          :null
                      }
                    </>
                  )
                }
              })}

            </GoogleMap>
          </div>
          
        </>
    )
    }else{
      return(
        <>
          <h4> <Spinner animation="grow" variant="info" />  </h4> 
        </>
      )
    }
  
  
  }

export default Tracking