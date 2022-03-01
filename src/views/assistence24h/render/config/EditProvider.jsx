import React from 'react'

import { cilXCircle, cilPenAlt, cilColorBorder, cilUserPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete"
// search input, list andress
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"
import "@reach/combobox/styles.css";
import {
    CButton,
    CFormLabel,
    CFormInput,
    CFormSelect,
  } from '@coreui/react'
import { useState } from 'react'


const EditProvider = (props) =>{

    const {ready, value, suggestions:{status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions:{
          location:{lat: () => -19.9190991, lng: () => -43.9385985},
          radius: 200 * 1000,
        }
      })
    
    const opcoesProviders = 
    [
        'Selecione',
        { label: 'Guincho', value: '1' },
        { label: 'Borracharia', value: '2' },
        { label: 'Mecanico', value: '3' }
    ]

    const [flagMap, setFlagMap] = useState(false)
    const openMap = () =>{
        props.btnMap(true)
        setFlagMap(true)
    }

    return (

        <> 
            <h3>Editar prestador</h3>
            <hr />
            <div className='container-body-newProvider'>
                <div className="mb-3">
                    <CFormLabel >Nome do prestador</CFormLabel>
                    <CFormInput type="text"  placeholder={props.provider.name} />
                </div>
                <div className="mb-3">
                    <CFormLabel > E-mail</CFormLabel>
                    <CFormInput type="text" placeholder={props.provider.email}/>
                </div>
                <div className="mb-3">
                    <CFormLabel > Selecione o tipo de serviço </CFormLabel>
                    <CFormSelect 
                        aria-label="Default select example"
                        options={opcoesProviders}
                    />
                </div>
                <div className="mb-3">
                    <CFormLabel> Endereço do prestador</CFormLabel>
                    <Combobox onSelect={ async (address)=>{
                            try {
                                const results = await getGeocode({address})  // pega o endereço digitado 
                                const {lat, lng} = await getLatLng(results[0]) // observar esse 0 na aplicaçao 
                                props.parentCallback({lat:lat, lng:lng})
                                
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
                            className='input-comboBox-config'
                        />
                        
                        <ComboboxPopover >
                        {/* RECEBE AS SUGESTOES INSERIDADS */}
                        {status === "OK" && data.map(({id, description}) => (<ComboboxOption key={id} value={description} />) )}
                        </ComboboxPopover>
                
                    </Combobox>
                </div>
                <div className="mb-3">
                    <CButton className="btn-openMap" color='dark'   onClick={openMap}>Ver no  Mapa</CButton>
                </div>
                <div className="mb-3">
                    <CFormLabel > Digite um Telefone</CFormLabel>
                    <CFormInput type="text" placeholder="N° de telefone"/>
                </div>

                <div className="mb-3">
                    <CButton className='btn-config-saveNewAndEdit' color="success" >
                        Salvar
                    </CButton>
                </div>

                    {/* <AddressOcorrencia /> */}
                    
                
            </div>
        </>
    )
}

export default EditProvider