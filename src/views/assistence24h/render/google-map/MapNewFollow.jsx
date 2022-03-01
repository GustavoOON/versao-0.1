import React, {useState, useEffect, useRef,  forwardRef, useImperativeHandle } from 'react'
import {  GoogleMap, InfoWindow, Marker,  useJsApiLoader, DirectionsRenderer } from '@react-google-maps/api';
import './mapGoogle.css'

import {
  CButton,
  CRow,
  CFormInput,
  CCol,
} from '@coreui/react'

/* global google */

import { formatRelative } from 'date-fns';
import ponto from '../../../../assets/images/car_ativo.png'
import pontoFinal from '../../../../assets/images/car_desativo.png'

// using auto complete adress
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete"

// search input, list andress
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"
// import "./@reach/combobox/style.css"


const Map = forwardRef((props, ref) =>{
    const containerStyle = {
      width: '100%' ,
      height: '80vh'
    };
    
    const center = {
      lat: -19.9190991,
      lng: -43.9385985
    };

    const libraries = ["places"];

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAHKaVOonbL8-sJ5BM_StSZhM2pAw2CK9A",  // trocar o token aqui, TOKEN PESSOAL 
        libraries,
      })
    
      const [map, setMap] = React.useState(null)
      const [selected, setSelected] = useState(null)  // info window de cada marker do map 
  

      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

      // muda a estilizacao do map
      const options = {
        // styles: mapSyles,
        disableDefaultUI: false,
        zoomControl:false,
        fullscreenControl: false
      }

    const [markers, setMarkers] = useState([{
      lat: -19.9190991,
      lng: -43.9385985
    }])
    
    // seleciona a cidade no campo pesquisa
    const panTo = React.useCallback(({lat, lng}) =>{
      mapRef.current.panTo({lat, lng})
      mapRef.current.setZoom(10)
      mapRef.current.Marker({lat, lng})
    }, [])
 
    // isso aqui é para marcar no mapa clicando, quando utilizar isso, implementar o marker com array 
    const onMapClick = React.useCallback((event)=>{
      setMarkers(current =>[...current, 
        {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time: new Date(),
        }
      ])
    })

    const mapRef = React.useRef();
    // Serve para atualizar o map apos o campo de busca inserido
    const onMapLoad = React.useCallback((map) =>{
       mapRef.current = map
    }, [])


    // TRACAR ROTA AQUI 
    const pointA = { lat: -19.8467906, lng: -43.9708183 }; // papulha
    const pointB = { lat: -19.9643469, lng: -43.965138 };   // moove
    const [flag, setFlag] = useState(true)

    const [origin, setOrigin] = useState()
    const [destination, setDestinatio] = useState()
    
    const [direcoes, setDirecoes] = useState()
   
    
    useImperativeHandle(ref, () => ({traceRoute, removeRoute}), [ ])
    
 
    const traceRoute = (ocorrency, destino) =>{
      const directionsService = new google.maps.DirectionsService();
      let request = {
        origin: ocorrency,
        destination: destino,
        travelMode: "DRIVING" // dirigindo carro  
      };

      directionsService.route(request, function(result, status) {
        if (status == "OK") {
          setDirecoes(result)
          setFlag(false)
          props.InfosRotas({timeTravel: result.routes[0].legs[0].duration.text, distance: result.routes[0].legs[0].distance.text })
        }
      });
    }
    
    function removeRoute () {
      setFlag(true)
      setDirecoes(null)
    }


    return isLoaded ? (
        <div className='container-map'> 
          {/* <h6> Origem  <span role="ïmg" aria-label='tent'> 🌎 🗺 </span>  {props.ocorrenciaLat}  {props.ocorrenciaLng} </h6>
          <h6> Destino  <span role="ïmg" aria-label='tent'> 🌎 🗺 </span>  {props.destinoLat}  {props.destinoLng} </h6> */}

          {/* <Search panTo={panTo} /> */}
   
            
          
          <div className='container-body-map'> 
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onUnmount={onUnmount}
              options={options} // muda a estilizacao do mapa
              onClick={onMapClick}
              onLoad={onMapLoad}
            >
              {/* Local da ocorrencia ,   */}
              {flag == true ? 
                (
                  <>
                     <Marker
                      key={props.ocorrenciaLat}
                      position={{lat:props.ocorrenciaLat, lng:props.ocorrenciaLng} }
                      icon={{
                        url:pontoFinal,
                        scaledSize: new window.google.maps.Size(35,35),
                        origin: new window.google.maps.Point(0,0),
                        anchor: new window.google.maps.Point(15,15),
                      }} 
                      onClick={() =>{
                        setSelected({lat:props.ocorrenciaLat, lng:props.ocorrenciaLng});
                      }}
                    />

                    {/* Destino */}
                    <Marker
                      key={props.destinoLat}
                      position={{lat:props.destinoLat, lng:props.destinoLng}}
                      icon={{
                        url:ponto,
                        scaledSize: new window.google.maps.Size(35, 35),
                        origin: new window.google.maps.Point(0,0),
                        anchor: new window.google.maps.Point(15,15),
                      }} 
                      onClick={() =>{
                        setSelected({lat:props.destinoLat, lng:props.destinoLng});
                      }}
                    />
                  </>

                )
                  :
                (
                  <DirectionsRenderer
                    directions={direcoes}
                  />
                )
            
              }
              
                
              {selected ? (
                  <InfoWindow position={{lat: selected.lat , lng: selected.lng}} onCloseClick={()=>{setSelected(null)}} > 
                      <div>
                        <h4> Testando janela</h4>
                        <p>Informacoes do veículo </p>
                      </div>
                  </InfoWindow>) 
              : null}
            </GoogleMap>
          </div>

           

         {/* <Search /> */}
        </div>
       
    ) : <> <h6> ...  </h6> </>
})


export default Map



// Busca Campo no mapa 
function Search ( {panTo} ){
  const {ready, value, suggestions:{status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
    requestOptions:{
      location:{lat: () => -19.9190991, lng: () => -43.9385985},
      radius: 100 * 1000,
    }
  })

  return (
      <Combobox onSelect={ async (address)=>{

          setValue(address, false)
          clearSuggestions();
        
          try {
            // pegar endereco\

            const results = await getGeocode({address})  // pega o endereço digitado 
            const {lat, lng} = await getLatLng(results[0]) // observar esse 0 na aplicaçao 
            console.log(lat, lng)
            panTo({lat, lng})

          } catch (error){
              console.log("error ao pesquisar endereço.." , error)
          }
        }

      }> 
     
        <ComboboxInput 
          value={value} 
          onChange={ (e)=> {setValue(e.target.value)}}
          disabled={!ready}
          placeholder="Insire uma cidade"
          className='input-comboBox2'
        />
        
        <ComboboxPopover >
        {/* RECEBE AS SUGESTOES INSERIDADS */}
        {status === "OK" && data.map(({id, description}) => (<ComboboxOption key={id} value={description} />) )}
        </ComboboxPopover>

      </Combobox>
    )

}