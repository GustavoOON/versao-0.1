import React, {useState, useEffect} from 'react'
import {  GoogleMap, InfoWindow, Marker,  useJsApiLoader, DirectionsRenderer } from '@react-google-maps/api';

import pontoFinal from '../../../../assets/images/blackPoint.png'
import ponto from '../../../../assets/images/greenPoint.png'


const FollowMap = (props) =>{
    const containerStyle = {
        width: '100%' ,
        height: '100%'
      };
      
      const center = {
        lat: -19.9190991,
        lng: -43.9385985
      };
      const options = {
        // styles: mapSyles,
        disableDefaultUI: false,
        zoomControl:false,
        fullscreenControl: false
      }

      // options do render directions 
      const options2 ={
        suppressInfoWindows: false,
        suppressMarkers: false
      }

      const [map, setMap] = React.useState(null)
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
      const libraries = ["places"];

      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAHKaVOonbL8-sJ5BM_StSZhM2pAw2CK9A",  // trocar o token aqui, TOKEN PESSOAL 
        libraries,
      })

      const [prestadorPos, setPrestadorPos] = useState({lat:null, lng:null})

      const [direcoes, setDirecoes] = useState()
      const [infosRoute, setInfosRoute] = useState({startAndress:'', timeTravel: null, distance:null, EndAdress:'' })
      // carrega a rota do usuariol
      function CarregaRota(){
        console.log(props)
        if((props.cliente.adressOcorrency.lng !=null) && (props.cliente.addressPrestador.lat == null)){
          const directionsService = new google.maps.DirectionsService();
          let request = {
            origin: {lat:props.cliente.adressOcorrency.lat, lng:props.cliente.adressOcorrency.lng} ,
            destination: {lat:props.cliente.adressDestino.lat, lng:props.cliente.adressDestino.lng},
            travelMode: "DRIVING" // dirigindo carro  
          };
          directionsService.route(request, function(result, status) {
            if (status == "OK") {
              setDirecoes(result)
              setInfosRoute(result.routes[0].legs[0]) // INFORMACAO DA ROTA
              props.providerInfos(result.routes[0].legs)
            }
          });
        }else if ((props.cliente.adressOcorrency.lng !=null) && (props.cliente.addressPrestador.lat != null)){
          const directionsService = new google.maps.DirectionsService();
          let request = {
            origin: {lat:props.cliente.addressPrestador.lat , lng:props.cliente.addressPrestador.lng },
            destination: {lat:props.cliente.adressDestino.lat, lng:props.cliente.adressDestino.lng},
            waypoints: [{location:{lat:props.cliente.adressOcorrency.lat, lng:props.cliente.adressOcorrency.lng} , stopover:true}], //an array of waypoints
            optimizeWaypoints: true,
            travelMode: "DRIVING" // dirigindo carro  
          };
          directionsService.route(request, function(result, status) {
            if (status == "OK") {
              setDirecoes(result)
              setPrestadorPos({lat:props.cliente.addressPrestador.lat , lng:props.cliente.addressPrestador.lng })
              setInfosRoute(result.routes[0].legs[0]) // INFORMACAO DA ROTA
              props.providerInfos(result.routes[0].legs)
            }
          });

        }else{
          setDirecoes()
        }
      }
      
      const [infosRouteProvider, setInfosRouteProvider] = useState({timeTravel: null, distance:null})
      // carrega a rota do prestador ao usuario
     function CarregaRotaPrestador () {
        const directionsService = new google.maps.DirectionsService();
        let request = {
          origin: {lat: props.prestador.posicao.lat, lng: props.prestador.posicao.lng},
          destination: {lat:props.cliente.adressDestino.lat, lng:props.cliente.adressDestino.lng},
          waypoints: [{location: {lat:props.cliente.adressOcorrency.lat, lng:props.cliente.adressOcorrency.lng}, stopover:true}], //an array of waypoints{lat:props.cliente.adressOcorrency.lat, lng:props.cliente.adressOcorrency.lng}
          optimizeWaypoints: true,
          travelMode: "DRIVING" // dirigindo carro  
        };
        directionsService.route(request, function(result, status) {
          if (status == "OK") {
            setDirecoes() // zera as direcoes para pegar uma nova direcao
            setDirecoes(result)
            setPrestadorPos({lat: props.prestador.posicao.lat, lng: props.prestador.posicao.lng})
            setInfosRouteProvider(result.routes[0].legs[0]) // INFORMACAO DA ROTA
            console.log(result.routes[0].legs)
            props.providerInfos(result.routes[0].legs)
          }
        });

     }
    
      useEffect(()=>{
        // se vem valor do prestador carrega o prestador
        if((props.prestador.posicao.lat == null)){
          CarregaRota()
          setPrestadorPos({lat:null, lng:null})
        }else{
          CarregaRotaPrestador()
          setPrestadorPos({lat:null, lng:null})
        }
       
      }, [props.cliente, props.prestador])

    return isLoaded ? (
     
        <>  
          <div  className='container-map-follow'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onUnmount={onUnmount}
                options={options} // muda a estilizacao do mapa
              >
                { props == null ? 
                    null
                  :

                  (
                    // Caso vem algo no props mudar aqui 
                    <>
                      {direcoes ?
                        ( 

                          <> 
                            <DirectionsRenderer
                              directions={direcoes}
                              options={options2}
                            />

                            <Marker
                                key={props.posicao}
                                position={{lat: prestadorPos.lat, lng: prestadorPos.lng} }
                                icon={{
                                    url:ponto,
                                    scaledSize: new window.google.maps.Size(25,25),
                                    origin: new window.google.maps.Point(0,0),
                                    anchor: new window.google.maps.Point(15,15),
                                }} 
                            />

                            <Marker
                              key={props.posicao}
                              position={{lat:props.cliente.adressOcorrency.lat, lng:props.cliente.adressOcorrency.lng} }
                              icon={{
                                  url:pontoFinal,
                                  scaledSize: new window.google.maps.Size(25,25),
                                  origin: new window.google.maps.Point(0,0),
                                  anchor: new window.google.maps.Point(15,15),
                              }} 
                            />

                            <Marker
                              key={props.prestador.posicao.lat}
                              position={{lat:props.cliente.adressDestino.lat, lng:props.cliente.adressDestino.lng} }
                              icon={{
                                  url:pontoFinal,
                                  scaledSize: new window.google.maps.Size(25,25),
                                  origin: new window.google.maps.Point(0,0),
                                  anchor: new window.google.maps.Point(15,15),
                              }} 
                            />

                          </>
                          
                        )
                        : null
                      }
                    

                    </>
                  )

                  }
              
              </GoogleMap>
          </div>
           
        </>
    )
    : null
 }


export default FollowMap
