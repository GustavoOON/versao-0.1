import React from 'react'

import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete"
// search input, list andress
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"
import "@reach/combobox/styles.css";
import {
    CFormLabel,
  } from '@coreui/react'

const SearchOcorrency = (props) =>{
   
    const {ready, value, suggestions:{status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions:{
          location:{lat: () => -19.9190991, lng: () => -43.9385985},
          radius: 200 * 1000,
        }
      })


    return (
        <> 
            <div className="mb-3">
                <CFormLabel> Endereço da Destino</CFormLabel>
                <Combobox onSelect={ async (address)=>{
                        try {
                            const results = await getGeocode({address})  // pega o endereço digitado 
                            const {lat, lng} = await getLatLng(results[0]) // observar esse 0 na aplicaçao 
                            props.parentCallback2({lat:lat, lng:lng})
                            
                        } catch (error){
                            console.log("error ao pesquisar endereço.." , error)
                        }
                    }
            
                    }> 
                    <ComboboxInput 
                        value={value} 
                        onChange={ (e)=> {setValue(e.target.value)}}
                        disabled={!ready}
                        placeholder="Digite o destino"
                        className='input-comboBox'
                    />
                    
                    <ComboboxPopover >
                    {/* RECEBE AS SUGESTOES INSERIDADS */}
                    {status === "OK" && data.map(({id, description}) => (<ComboboxOption key={id} value={description} />) )}
                    </ComboboxPopover>
            
                </Combobox>

                {/* <AddressOcorrencia /> */}
                
            </div>
        </>

    )
}

export default SearchOcorrency