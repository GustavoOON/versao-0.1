import React from 'react'
import {  GoogleMap, InfoWindow, Marker,  useJsApiLoader, DirectionsRenderer } from '@react-google-maps/api';
import {
    CButton,
    CRow,
    CFormInput,
    CCol,
  } from '@coreui/react'

  import pontoFinal from '../../../../assets/images/car_desativo.png'
const ConfigMap = (props) =>{
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
        disableDefaultUI: false,
        zoomControl:false,
        fullscreenControl: false
      }
    const libraries = ["places"];

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAHKaVOonbL8-sJ5BM_StSZhM2pAw2CK9A",  // trocar o token aqui, TOKEN PESSOAL 
        libraries,
    })
    const [map, setMap] = React.useState(null)
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <>  
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onUnmount={onUnmount}
              options={options} // muda a estilizacao do mapa
            >

            {props.provider.posicao.lat != null && props.newProvider.lat == null ? 
                ( 
                    <Marker
                        key={props.provider}
                        position={{lat:props.provider.posicao.lat, lng:props.provider.posicao.lng} }
                        icon={{
                        // url:pontoFinal,
                            scaledSize: new window.google.maps.Size(35,35),
                            origin: new window.google.maps.Point(0,0),
                            anchor: new window.google.maps.Point(15,15),
                        }} 
                        /*
                        onClick={() =>{
                        setSelected({lat:props.ocorrenciaLat, lng:props.ocorrenciaLng});
                        }} */
                    /> 
                )
                : null
            }
            
            {props.newProvider.lat != null ? 
                ( <Marker
                    key={props.newProvider}
                    position={{lat:props.newProvider.lat, lng:props.newProvider.lng} }
                    icon={{
                       // url:pontoFinal,
                        scaledSize: new window.google.maps.Size(35,35),
                        origin: new window.google.maps.Point(0,0),
                        anchor: new window.google.maps.Point(15,15),
                    }} 
                    /*
                    onClick={() =>{
                    setSelected({lat:props.ocorrenciaLat, lng:props.ocorrenciaLng});
                    }} */
                />)
                : null
            }



            </GoogleMap>
        </>
    )
}

export default ConfigMap